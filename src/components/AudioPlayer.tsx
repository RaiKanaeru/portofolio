"use client";

import { useRef, useState, useCallback, useEffect } from "react";

type WindowWithWebkitAudio = Window & typeof globalThis & {
  webkitAudioContext?: typeof AudioContext;
};

function setupDeepSpaceDrone(ctx: AudioContext) {
  const master = ctx.createGain();
  const cleanupTasks: Array<() => void> = [];
  master.gain.value = 0.15; // Soft volume

  // Lowpass filter for deep space muffle
  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 500;
  
  // Very slow LFO sweeping the filter (creates a breathing/ocean of space feel)
  const filterLfo = ctx.createOscillator();
  filterLfo.type = "sine";
  filterLfo.frequency.value = 0.015; // Extremely slow (66s cycle)
  const filterGain = ctx.createGain();
  filterGain.gain.value = 350;
  filterLfo.connect(filterGain);
  filterGain.connect(filter.frequency);
  filterLfo.start();

  master.connect(filter);
  filter.connect(ctx.destination);

  // E Minor 9 Chord - Mysterious, beautiful, vast space feel
  // E2, E3, G3, B3, D4, F#4
  const freqs = [
    { f: 82.41,  type: "square", gain: 0.15 },  // E2 Deep sub bass
    { f: 164.81, type: "sawtooth", gain: 0.1 }, // E3 Warm mid
    { f: 196.00, type: "sine", gain: 0.2 },     // G3
    { f: 246.94, type: "sine", gain: 0.15 },    // B3
    { f: 293.66, type: "sine", gain: 0.15 },    // D4
    { f: 369.99, type: "sine", gain: 0.1 },     // F#4 Ethereal top
  ];
  
  freqs.forEach((note) => {
    // 3 oscillators per note for massive analog chorus effect (Blade Runner style)
    [-0.8, 0, 0.8].forEach(detune => {
      const osc = ctx.createOscillator();
      osc.type = note.type as OscillatorType;
      osc.frequency.value = note.f + detune;
      
      const oscGain = ctx.createGain();
      oscGain.gain.value = note.gain / 3;
      
      // Random slow swell for each oscillator
      const lfo = ctx.createOscillator();
      lfo.type = "sine";
      lfo.frequency.value = 0.02 + Math.random() * 0.03;
      const lfoGain = ctx.createGain();
      lfoGain.gain.value = note.gain / 4; 
      lfo.connect(lfoGain);
      lfoGain.connect(oscGain.gain);
      lfo.start();

      // Add a slight lowpass to soften square/saw waves
      const subFilter = ctx.createBiquadFilter();
      subFilter.type = "lowpass";
      subFilter.frequency.value = 800;

      osc.connect(subFilter);
      subFilter.connect(oscGain);
      oscGain.connect(master);
      osc.start();
    });
  });

  // Soft random sonar/chime ping for sci-fi atmosphere
  const sonarInterval = window.setInterval(() => {
    if (ctx.state !== "running") return;
    const osc = ctx.createOscillator();
    osc.type = "sine";
    // Ping either E5 (659.25) or B5 (987.77)
    osc.frequency.value = Math.random() > 0.5 ? 659.25 : 987.77;
    
    const noteGain = ctx.createGain();
    noteGain.gain.setValueAtTime(0.02, ctx.currentTime);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 3.0); // Long echo
    
    osc.connect(noteGain);
    noteGain.connect(filter);
    
    osc.start(ctx.currentTime);
    osc.stop(ctx.currentTime + 3.0);
  }, 4000); // Ping every 4 seconds
  cleanupTasks.push(() => window.clearInterval(sonarInterval));

  return () => {
    cleanupTasks.forEach((cleanup) => cleanup());
    master.disconnect();
    filter.disconnect();
  };
}

export default function AudioPlayer() {
  const [playing, setPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const cleanupAudioRef = useRef<(() => void) | null>(null);

  const toggle = useCallback(() => {
    if (!audioCtxRef.current) {
      const AudioContextConstructor = window.AudioContext || (window as WindowWithWebkitAudio).webkitAudioContext;
      if (!AudioContextConstructor) return;
      const ctx = new AudioContextConstructor();
      audioCtxRef.current = ctx;
      cleanupAudioRef.current = setupDeepSpaceDrone(ctx);
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === "running") {
      ctx.suspend().then(() => setPlaying(false));
    } else {
      ctx.resume().then(() => setPlaying(true));
    }
  }, []);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      cleanupAudioRef.current?.();
      cleanupAudioRef.current = null;
      if (audioCtxRef.current && audioCtxRef.current.state !== "closed") {
        audioCtxRef.current.close();
      }
    };
  }, []);

  return (
    <div className="audio-player-wrap">
      <button onClick={toggle} className="audio-btn" aria-label="Toggle galaxy ambient">
        {playing ? (
          /* Pause icon */
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="3" y="2" width="3" height="10" fill="currentColor" />
            <rect x="8" y="2" width="3" height="10" fill="currentColor" />
          </svg>
        ) : (
          /* Play icon */
          <div
            style={{
              width: 0,
              height: 0,
              borderTop: "6px solid transparent",
              borderLeft: "10px solid currentColor",
              borderBottom: "6px solid transparent",
              marginLeft: "2px",
            }}
          />
        )}
      </button>
      <div className="audio-label">
        <span>GALAXY_AMBIENT: {playing ? "ONLINE" : "OFFLINE"}</span>
      </div>
    </div>
  );
}


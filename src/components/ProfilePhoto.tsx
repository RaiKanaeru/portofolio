import Image from "next/image";

// ponytail: drop public/raihan.jpg dan foto langsung tampil di semua pemakaian.
// Upgrade path: tambah blurDataURL / lazy wrapper saat foto final sudah ada.
export default function ProfilePhoto({ alt = "Foto Raihan Ariansyah" }: { alt?: string }) {
  return (
    <div className="relative w-fit border border-[var(--line)] bg-[var(--canvas)] p-2">
      <div className="relative h-[320px] w-[280px] overflow-hidden">
        <Image
          src="/raihan.jpg"
          alt={alt}
          fill
          sizes="280px"
          className="object-cover transition-transform duration-300 hover:scale-[1.03]"
          priority={false}
        />
      </div>
      <span className="mt-2 block text-center text-[11px] font-bold uppercase tracking-[0.4em] text-[var(--dim)]">
        SUBJECT_PROFILE
      </span>
    </div>
  );
}

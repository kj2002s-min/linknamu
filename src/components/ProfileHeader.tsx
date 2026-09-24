import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({
  name,
  bio,
  imageSrc,
}: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover object-top shadow-[0_12px_32px_-8px_var(--color-shadow)] ring-4 ring-card-border"
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-[15px] leading-relaxed text-balance break-keep text-muted">
        {bio}
      </p>
    </header>
  );
}

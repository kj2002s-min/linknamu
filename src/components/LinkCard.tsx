type LinkCardProps = {
  title: string;
  href: string;
};

export default function LinkCard({ title, href }: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-black/15 px-5 font-medium transition-colors hover:bg-black/[.04] dark:border-white/20 dark:hover:bg-white/[.08]"
    >
      {title}
    </a>
  );
}

type LinkCardProps = {
  id: string;
  title: string;
  href: string;
  clickCount: number;
  onLinkClick: (id: string) => void;
};

export default function LinkCard({
  id,
  title,
  href,
  clickCount,
  onLinkClick,
}: LinkCardProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => onLinkClick(id)}
      className="flex h-14 w-full items-center justify-between rounded-2xl border border-card-border bg-card px-5 text-[15px] font-semibold shadow-[0_4px_20px_-6px_var(--color-shadow)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-card-hover hover:shadow-[0_8px_28px_-8px_var(--color-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      <span>{title}</span>
      <span className="text-xs font-normal text-muted">{clickCount}회</span>
    </a>
  );
}

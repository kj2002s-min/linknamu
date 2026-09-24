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
      className="flex h-14 w-full items-center justify-center rounded-2xl border border-card-border bg-card px-5 text-[15px] font-semibold shadow-[0_4px_20px_-6px_var(--color-shadow)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-card-hover hover:shadow-[0_8px_28px_-8px_var(--color-shadow)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-foreground/40 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
    >
      {title}
    </a>
  );
}

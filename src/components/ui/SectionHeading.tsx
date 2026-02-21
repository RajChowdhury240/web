import { cn } from "@/lib/utils";

export default function SectionHeading({
  label,
  title,
  subtitle,
  className = "",
}: {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}) {
  return (
    <div className={cn("mb-12", className)}>
      <p className="font-mono text-xs uppercase tracking-[0.12em] text-accent-green-text mb-3">
        <span className="text-accent-green">~/</span>
        {label}
        <span className="text-accent-green">$</span>
      </p>
      <h2 className="font-display text-3xl md:text-4xl font-bold text-text-primary mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-muted text-lg max-w-2xl">{subtitle}</p>
      )}
      <div className="mt-4 h-0.5 w-12 bg-accent-green shadow-glow-green-sm" />
    </div>
  );
}

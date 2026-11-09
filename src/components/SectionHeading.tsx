export default function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="max-w-2xl">
      <span className={`text-xs font-semibold uppercase tracking-[0.14em] ${light ? "text-gold-300" : "text-brand-500"}`}>
        {eyebrow}
      </span>
      <h2 className={`mt-2 font-serif text-3xl font-bold leading-tight sm:text-4xl ${light ? "text-white" : "text-brand-700"}`}>
        {title}
      </h2>
      {intro && <p className={`mt-4 ${light ? "text-white/90" : "text-[#35503b]"}`}>{intro}</p>}
    </div>
  );
}

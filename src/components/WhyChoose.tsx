import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const reasons = [
  { t: "Sustainable irrigation", d: "Controlled irrigation keeps our beds producing steadily." },
  { t: "Produced in Minna", d: "Grown locally, so produce travels a short distance." },
  { t: "Year-round approach", d: "We plan production to reduce dry-season scarcity." },
  { t: "Direct engagement", d: "You speak straight to the farm team." },
  { t: "Fewer middlemen", d: "Selling directly cuts out extra handling." },
  { t: "Farm-to-market freshness", d: "Short supply routes mean fresher vegetables." },
  { t: "Less post-harvest loss", d: "Shorter handling chains mean less waste." },
];

export default function WhyChoose() {
  return (
    <section className="bg-brand-50 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="Why Choose Us" title="Why Green Essence Farms?" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((r, i) => (
            <Reveal key={r.t} delay={(i % 3) * 0.08}>
              <div className="h-full rounded-r-2xl border-l-4 border-brand-500 bg-white p-6">
                <h3 className="font-serif text-lg font-bold text-brand-700">{r.t}</h3>
                <p className="mt-1 text-[#35503b]">{r.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

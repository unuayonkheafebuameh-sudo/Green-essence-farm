import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const pillars = ["Sustainable irrigation", "Year-round production", "Direct farm-to-customer supply"];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 md:grid-cols-2">
        <Reveal>
          <div
            role="img"
            aria-label="Vegetable beds at Green Essence Farms in Minna"
            className="min-h-[340px] rounded-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('/images/about/vegetable-beds-minna.jpg'), linear-gradient(160deg, #3a8a3a, #14532d)",
            }}
          />
        </Reveal>
        <Reveal delay={0.1}>
          <SectionHeading eyebrow="About Us" title="Vegetables all year, not just in the rains" />
          <div className="mt-5 space-y-4 text-[#35503b]">
            <p>
              Green Essence Farms Ltd applies green irrigation and localized year-round production to solve dry-season
              vegetable scarcity in Minna. Instead of relying on rain-fed farming, we use controlled irrigation to
              maintain steady output and stable supply.
            </p>
            <p>
              We also sell directly to customers, reducing middlemen and post-harvest losses common in Nigeria’s
              vegetable value chain.
            </p>
            <p>
              By combining sustainable farming practices, participatory team leadership, and short farm-to-market
              delivery, we provide fresher vegetables with less waste while proving that small-scale farms can operate
              efficiently and sustainably all year round.
            </p>
          </div>
          <ul className="mt-6 flex flex-wrap gap-3">
            {pillars.map((p) => (
              <li key={p} className="rounded-full border border-brand-100 bg-brand-50 px-4 py-1.5 text-sm font-medium text-brand-700">
                {p}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

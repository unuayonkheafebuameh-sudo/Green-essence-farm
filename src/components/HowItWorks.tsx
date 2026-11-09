import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";

const steps = [
  { icon: "\uD83D\uDD0D", title: "EXPLORE", text: "Browse our available leafy vegetables and agricultural products." },
  { icon: "\u2705", title: "SELECT", text: "Choose the products you need." },
  { icon: "\uD83D\uDCAC", title: "ENQUIRE", text: "Contact us directly through WhatsApp to confirm availability and quantities." },
  { icon: "\uD83E\uDD1D", title: "CONNECT", text: "Arrange collection or delivery details directly with our team (to be confirmed)." },
];

export default function HowItWorks() {
  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading eyebrow="How It Works" title="Four simple steps" />
        <ol className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.title}>
              <Reveal delay={i * 0.08} className="h-full rounded-2xl border border-brand-100 bg-white p-7">
                <div className="mb-4 grid h-14 w-14 place-items-center rounded-full bg-brand-700 text-2xl" aria-hidden="true">
                  {s.icon}
                </div>
                <h3 className="font-serif text-lg font-bold tracking-wide text-brand-700">
                  {i + 1}. {s.title}
                </h3>
                <p className="mt-2 text-[#35503b]">{s.text}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

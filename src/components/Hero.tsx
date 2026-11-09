import { siteConfig } from "@/config/site";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative flex min-h-[100svh] items-center overflow-hidden text-white">
      {/* CSS floating leaves: light fallback used on all devices. The 3D scene arrives in Part 3. */}
      <div aria-hidden="true" className="pointer-events-none absolute right-[4%] top-[22%] hidden aspect-square w-[min(34vw,340px)] md:block">
        <i className="absolute inset-0 animate-float rounded-[0_80%_0_80%] bg-gradient-to-br from-[#9be15d] to-[#1f7a34] shadow-2xl" />
        <i className="absolute inset-[18%_10%_10%_30%] animate-float rounded-[0_80%_0_80%] bg-gradient-to-br from-[#c7ee7a] to-[#3c9a3f] [animation-delay:-2s]" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-20 pt-32">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={siteConfig.logo}
          alt="Green Essence Farms logo"
          width={146}
          height={74}
          className="mb-6 h-[74px] w-auto rounded-xl bg-black"
        />
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-gold-300 sm:text-sm">
          {siteConfig.tagline}
        </p>
        <h1 className="max-w-[12em] font-serif text-4xl font-bold leading-[1.1] sm:text-6xl lg:text-7xl">
          Fresh leafy vegetables, grown right here in Minna
        </h1>
        <p className="mt-5 max-w-xl text-lg text-white/90">
          Green Essence Farms Limited grows vegetables with controlled irrigation and sells directly to you, so your
          Ugu, waterleaf and scent leaf reach you fresher.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <WhatsAppButton label="Chat Us on WhatsApp" />
          <CallButton label="Call Us" />
        </div>
      </div>
    </section>
  );
}

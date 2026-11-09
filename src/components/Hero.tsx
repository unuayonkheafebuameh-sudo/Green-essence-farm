import { siteConfig } from "@/config/site";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";
import HeroVisual from "./three/HeroVisual";

export default function Hero() {
  return (
    <section id="home" className="hero-bg relative flex min-h-[100svh] items-center overflow-hidden text-white">
      <HeroVisual />

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

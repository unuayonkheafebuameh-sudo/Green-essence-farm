import { siteConfig } from "@/config/site";
import SectionHeading from "./SectionHeading";
import WhatsAppButton from "./WhatsAppButton";
import CallButton from "./CallButton";

export default function Contact() {
  return (
    <section id="contact" className="bg-brand-50 py-16 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 md:grid-cols-2">
        <div>
          <SectionHeading eyebrow="Contact Us" title={siteConfig.name} />
          <ul className="mt-6 space-y-3 text-[#35503b]">
            <li>
              <strong>Address:</strong> {siteConfig.address.line}.
            </li>
            <li>
              <strong>Phone:</strong>{" "}
              <a href={`tel:${siteConfig.phone}`} className="underline">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <strong>WhatsApp:</strong> {siteConfig.phoneDisplay}
            </li>
          </ul>
          <div className="mt-6 flex flex-wrap gap-4">
            <WhatsAppButton label="WhatsApp Us" />
            <CallButton label="Call Us" variant="dark" />
          </div>
        </div>

        <div className="grid min-h-[300px] place-items-center overflow-hidden rounded-2xl border border-brand-100 bg-white p-4 text-center text-[#35503b]">
          {siteConfig.mapQuery ? (
            <iframe
              title="Map showing Green Essence Farms location"
              loading="lazy"
              className="h-full min-h-[300px] w-full border-0"
              src={`https://maps.google.com/maps?q=${encodeURIComponent(siteConfig.mapQuery)}&output=embed`}
            />
          ) : (
            <p>{siteConfig.address.line}</p>
          )}
        </div>
      </div>
    </section>
  );
}

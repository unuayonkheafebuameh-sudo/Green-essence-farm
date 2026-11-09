import WhatsAppButton from "./WhatsAppButton";
import { whatsappMessages } from "@/lib/whatsapp";
import Reveal from "./Reveal";

export default function BulkQuote() {
  return (
    <section id="quotation" className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="rounded-[28px] bg-gradient-to-br from-brand-900 via-brand-700 to-[#4c8a35] px-6 py-14 text-center text-white sm:px-12">
          <h2 className="font-serif text-3xl font-bold sm:text-4xl">Need Vegetables in Larger Quantities?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-white/90">
            Running a restaurant, hotel, catering business or food stall, or buying for the market? Tell us what you
            need and how often, and we will respond with a quotation.
          </p>
          <div className="mt-8">
            <WhatsAppButton message={whatsappMessages.bulk} label="Request a Bulk Quotation" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

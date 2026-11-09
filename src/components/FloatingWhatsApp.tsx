import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  return (
    <a
      href={whatsappLink(whatsappMessages.general)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Green Essence Farms on WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-14 w-14 place-items-center rounded-full bg-[#25d366] text-white shadow-xl transition hover:scale-105"
    >
      <svg viewBox="0 0 32 32" width="30" height="30" fill="currentColor" aria-hidden="true">
        <path d="M16 3C9 3 3.4 8.6 3.4 15.5c0 2.4.7 4.6 1.9 6.5L3.2 29l7.2-2.1c1.8 1 3.8 1.500 5.600 1.500 7 0 12.600-5.600 12.600-12.500S23 3 16 3zm0 22.800c-1.800 0-3.500-.5-5-1.400l-.4-.2-4.200 1.200 1.200-4.100-.3-.4a10 10 0 0 1-1.600-5.400C5.700 9.900 10.300 5.400 16 5.400s10.300 4.500 10.300 10.100S21.700 25.800 16 25.800zm5.700-7.500c-.3-.2-1.800-.9-2.100-1s-.5-.2-.7.200-.8 1-1 1.200-.4.200-.7.100a8.300 8.300 0 0 1-4.100-3.600c-.3-.5.300-.5.900-1.600.1-.2 0-.4 0-.5l-1-2.300c-.2-.6-.5-.5-.7-.5h-.6a1.200 1.200 0 0 0-.9.400 3.800 3.800 0 0 0-1.200 2.800c0 1.600 1.200 3.200 1.400 3.400s2.300 3.600 5.600 4.900c2 .8 2.800.9 3.800.7.600-.1 1.800-.7 2-1.500s.3-1.300.2-1.500-.3-.2-.6-.4z" />
      </svg>
    </a>
  );
}

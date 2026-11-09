import { whatsappLink, whatsappMessages } from "@/lib/whatsapp";

type Variant = "solid" | "outline" | "dark";

interface Props {
  message?: string;
  label?: string;
  variant?: Variant;
  className?: string;
}

const styles: Record<Variant, string> = {
  solid: "bg-brand-500 text-white hover:bg-brand-600 border-transparent",
  outline: "bg-transparent text-white border-white hover:bg-white/15",
  dark: "bg-brand-700 text-white hover:bg-brand-900 border-transparent",
};

export default function WhatsAppButton({
  message = whatsappMessages.general,
  label = "Chat Us on WhatsApp",
  variant = "solid",
  className = "",
}: Props) {
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full border-2 px-7 text-base font-semibold no-underline transition hover:-translate-y-0.5 ${styles[variant]} ${className}`}
    >
      {label}
    </a>
  );
}

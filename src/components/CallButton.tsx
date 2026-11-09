import { telLink } from "@/lib/whatsapp";

interface Props {
  label?: string;
  variant?: "outline" | "dark";
  className?: string;
}

export default function CallButton({ label = "Call Us", variant = "outline", className = "" }: Props) {
  const style =
    variant === "outline"
      ? "bg-transparent text-white border-white hover:bg-white/15"
      : "bg-brand-700 text-white border-transparent hover:bg-brand-900";
  return (
    <a
      href={telLink}
      className={`inline-flex min-h-[48px] items-center justify-center rounded-full border-2 px-7 text-base font-semibold no-underline transition hover:-translate-y-0.5 ${style} ${className}`}
    >
      {label}
    </a>
  );
}

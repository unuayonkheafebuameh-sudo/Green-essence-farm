"use client";
import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";

const LeafScene = dynamic(() => import("./LeafScene"), { ssr: false });

function CssLeaves() {
  return (
    <>
      <i className="absolute inset-0 animate-float rounded-[0_80%_0_80%] bg-gradient-to-br from-[#9be15d] to-[#1f7a34] shadow-2xl" />
      <i className="absolute inset-[18%_10%_10%_30%] animate-float rounded-[0_80%_0_80%] bg-gradient-to-br from-[#c7ee7a] to-[#3c9a3f] [animation-delay:-2s]" />
    </>
  );
}

function hasWebGL(): boolean {
  try {
    const c = document.createElement("canvas");
    return !!(c.getContext("webgl2") || c.getContext("webgl"));
  } catch {
    return false;
  }
}

export default function HeroVisual() {
  const box = useRef<HTMLDivElement>(null);
  const [use3d, setUse3d] = useState(false);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const wide = window.matchMedia("(min-width: 768px)").matches;
    setUse3d(!reduce && wide && hasWebGL());
  }, []);

  useEffect(() => {
    if (!box.current) return;
    const io = new IntersectionObserver(([e]) => setVisible(e.isIntersecting), { threshold: 0.05 });
    io.observe(box.current);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={box}
      aria-hidden="true"
      className="pointer-events-none absolute right-[4%] top-[22%] hidden aspect-square w-[min(34vw,340px)] md:block"
    >
      {use3d ? <LeafScene active={visible} /> : <CssLeaves />}
    </div>
  );
}

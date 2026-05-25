import Image from "next/image";

import { IconCard } from "@/components/icon-card";
import { advantageCards } from "@/lib/home-data";

/**
 * Figma "Section - The Unlabelled Advantage: Staggered Layout"
 * Heading: Space Grotesk 56/62, ls 10.71%, "THE UNLABELLED" Light + "ADVANTAGE" Bold.
 * Layout: 3 cards. Col1 (Margins) lowered. Col2 has top description card + lower Curations card.
 * Col3 (Loyalty) lowered. All cards: vertical 2px left border accent + 0.04 white surface.
 */
export function AdvantageSection() {
  const [margins, curations, loyalty] = advantageCards;
  const descriptionLines = [
    "In an era where guests can price-check any bottle on",
    "their phone, traditional wine labels often create a",
    '"margin ceiling" for your business. We are offering a',
    "strategic pivot that replaces third-party brands with",
    "high-quality, exclusive private labels, reclaiming both",
    "your profit and your brand narrative.",
  ];

  return (
    <section className="section-shell section-pattern relative overflow-hidden isolate pt-16 pb-16 sm:pt-20 sm:pb-20 lg:pt-24 lg:pb-24">
        <div className="mx-auto max-w-[1200px] px-6">
        {/* Heading + glow divider */}
        <div className="mx-auto flex max-w-3xl flex-col items-center text-center">
          {/* <Image
            src="/icon/divider-glow.svg"
            alt=""
            width={2}
            height={113}
            unoptimized
            className="h-[96px] w-[2px] lg:h-[113px] lg:w-[2px]"
          /> */}
          <h2 className="mt-6 font-display text-[36px] font-light uppercase tracking-[0.107em] leading-[1.1] text-white/60 sm:text-[44px] lg:text-[56px] lg:leading-[62px]">
            <span className="block font-extralight">The Unlabelled</span>
            <span className="block font-bold text-white">Advantage</span>
          </h2>
        </div>

        {/* 3-column staggered grid */}
        <div className="mt-14 grid gap-6 lg:grid-cols-[380px_380px_380px] lg:items-center lg:justify-center lg:gap-6">
          {/* Col 1 - Margins (centered vertically vs. center column) */}
          <div>
            <IconCard {...margins} />
          </div>

          {/* Col 2 - description + Curations stacked */}
          <div className="flex flex-col gap-6">
            <p className="border bg-white/[0.02] p-6 text-[13px] font-extralight leading-[18px] text-white lg:w-fit lg:px-7 lg:py-8">
              {descriptionLines.map((line, i) => (
                <span key={line} className="lg:block text-white lg:whitespace-nowrap">
                  {line}
                  {i < descriptionLines.length - 1 ? " " : ""}
                </span>
              ))}
            </p>
            <IconCard {...curations} />
          </div>

          {/* Col 3 - Loyalty (centered vertically vs. center column) */}
          <div>
            <IconCard {...loyalty} />
          </div>
        </div>
      </div>
    </section>
  );
}

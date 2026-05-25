import Image from "next/image";

import { ClosingCtaV2 } from "@/components/closing-cta-v2";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";

const moranImages = {
  pattern: "/images/moran/pattern.png",
  heroBackground: "/images/moran/Group 1.png",
  hero: "/images/moran/Frame 2085665953.webp",
  philosophy: "/images/moran/image 40.webp",
  terroir: "/images/moran/Frame2.webp",
};

const heroCopyLines = [
  "Dr. Martin Moran is an Argentinian-born winemaker and research scientist based in",
  "Hahndorf in the Adelaide Hills and has been making wines since 2010. Moran studied",
  "winemaking and viticulture in Argentina, worked vintages in the United States, then",
  "moved to Australia where he completed a PhD in viticulture and oenology at the",
  "University of Adelaide.",
];

const philosophyQuoteLines = [
  "“All our wines have low sulphite additions given the",
  "extended time on lees”",
];

const philosophyCopyLines = [
  "The range spans blanc de blancs sparkling wine, chardonnay, pinot noir, syrah, barbera,",
  "tempranillo, cabernet sauvignon and rosé, all from Adelaide Hills fruit and all defined by one",
  "overriding philosophy: extended time on lees. Where most producers move wines to bottle as",
  "quickly as commercially viable, Moran waits - sometimes years - believing that the complexity,",
  "texture and natural antioxidant protection that comes from lees contact is irreplaceable.",
];

const terroirParagraphOneLines = [
  "The chardonnay and pinot noir are both sourced from the ex-Lenswood Research",
  "Station - a vineyard planted in randomised experimental blocks with three clones across",
  "three different rootstocks, originally designed for scientific trials.",
];

const terroirParagraphTwoLines = [
  "The vineyard maintains excellent canopy balance with minimal irrigation and permanent",
  "green cover - conditions that produce naturally well-balanced fruit without requiring",
  "heavy intervention. The chardonnay averages 15 months on lees before release; the",
  "pinot noir between 14 and 24 months, depending on the vintage.",
];
const name = "Dr. Martin Moran";
export default function AboutDrMoranPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#151515] text-white">
      <Navbar />
      <main className="relative z-10 pt-[105px]">
        <ScrollReveal stagger>
          <HeroSection />
        </ScrollReveal>
        <ScrollReveal delay={40} stagger>
          <KeyPhilosophySection />
        </ScrollReveal>
        <ScrollReveal delay={60} stagger>
          <TerroirSection />
        </ScrollReveal>
        <ScrollReveal variant="fade">
          <ClosingCtaV2 />
        </ScrollReveal>
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden px-6 pb-20 pt-10 sm:px-10 lg:px-[78px] lg:pb-[116px] lg:pt-[34px]">
      <PatternBackground opacity="opacity-[0.030]" />
      <Image
        src={moranImages.heroBackground}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center opacity-[0.93]"
      />

      <div className="mx-auto flex max-w-[1296px] flex-col-reverse gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="max-w-[560px] pt-2 lg:max-w-[720px] lg:pt-0 sm:mx-auto">
          <p className="font-display font-[350] text-center sm:text-center lg:text-left text-[24px] uppercase leading-[0.95] tracking-[-0.04em] text-[#747474] sm:text-[32px] lg:text-[48px]">
            About
          </p>
          <h1 className="mt-1 font-noyh text-[32px] text-center sm:text-center lg:text-left font-black uppercase leading-[0.98] text-white sm:text-[44px] lg:whitespace-nowrap lg:text-[56px]">
            Dr. Martin Moran
          </h1>
          <p className="mt-6 max-w-[520px] text-center sm:text-center lg:text-left font-display text-[20px] leading-[1.48] tracking-[-0.04em] text-white/70 lg:hidden">
            Dr. Martin Moran is an Argentinian-born winemaker and research scientist based in
            Hahndorf in the Adelaide Hills. He has been making wine since 2010, and studied
            winemaking and viticulture in Argentina before moving to the United States, then to
            Australia, where he completed a PhD in viticulture and oenology at the University of
            Adelaide.
          </p>
          <div className="mt-6 font-light hidden font-display text-[20px] leading-[1.48] tracking-[-0.04em] text-white/70 lg:block lg:w-fit">
            {heroCopyLines.map((line, i) => (
              <span key={i} className="block whitespace-nowrap text-white/60">
                {line.split(name).map((part, j) => (
                  <span key={j}>
                    {j > 0 && (
                      <b className="text-[#ffffffd9]">
                        {name}
                      </b>
                    )}
                    {part}
                  </span>
                ))}
              </span>
            ))}
          </div>
        </div>

        <OffsetImage
          src={moranImages.hero}
          alt="Dr. Martin Moran standing in the vineyard"
          imageClassName="object-contain object-center"
          className="max-w-[461px]"
        />
      </div>
    </section>
  );
}

function KeyPhilosophySection() {
  return (
    <section className="px-6 py-20 sm:px-10 lg:px-[78px] lg:py-[110px]">
      <div className="pointer-events-none absolute top-2/3 right-[-400px]
         z-0 h-[420px] w-[520px]
         -translate-y-1/2 rounded-full
         bg-white/20 blur-[220px]"></div>
      <div className="mx-auto flex max-w-[1102px] flex-col items-center">
        <div className="text-center">
          <p className="font-display text-[26px] font-[350] uppercase leading-[0.95] tracking-[-0.04em] text-[#747474] sm:text-[34px] lg:text-[44px]">
            Dr. Moran&apos;s
          </p>
          <h2 className="mt-1 font-display text-[32px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[56px]">
            Key Philosophy
          </h2>
        </div>

        <div className="relative mt-7 aspect-[1102/369] w-full overflow-hidden sm:mt-9">
          <Image
            src={moranImages.philosophy}
            alt="Dr. Martin Moran opening sparkling wine outdoors"
            fill
            sizes="(max-width: 1200px) 92vw, 1102px"
            className="object-cover object-center"
          />
        </div>

        <blockquote className="mt-7 max-w-[580px] text-center font-display text-[20px] font-medium leading-[1.25] tracking-[-0.04em] text-white sm:text-[24px] lg:hidden">
          “All our wines have low sulphite additions given the extended time on lees”
        </blockquote>
        <div className="mt-7 hidden max-w-[580px] text-center font-display text-[31px] font-medium leading-[1.25] tracking-[-0.04em] text-white lg:block">
          {philosophyQuoteLines.map((line) => (
            <span key={line} className="block whitespace-nowrap font-light">
              {line}
            </span>
          ))}
        </div>

        <p className="mt-3 font-light max-w-[1000px] text-center font-display text-[20px] leading-[1.15] text-white/70 lg:block">
          The range spans blanc de blancs sparkling wine, chardonnay, pinot noir, syrah, barbera,<span className="hidden sm:inline"><br/></span>
          tempranillo, cabernet sauvignon and rosé, all from Adelaide Hills fruit and all defined by one<span className="hidden sm:inline"><br/></span>
          overriding philosophy: extended time on lees. Where most producers move wines to bottle as<span className="hidden sm:inline"><br/></span>
          quickly as commercially viable, Moran waits - sometimes years - believing that the complexity,<span className="hidden sm:inline"><br/></span>
          texture and natural antioxidant protection that comes from lees contact is irreplaceable.
        </p>
       {/* <div className="mt-6 font-light hidden max-w-[700px] text-center font-display text-[22px] leading-[1.5] tracking-[-0.04em] text-white/62 lg:block">
          {philosophyCopyLines.map((line) => (
            <span key={line} className="block whitespace-nowrap">
              {line}
            </span>
          ))}
        </div> */}
      </div>
    </section>
  );
}

function TerroirSection() {
  return (
    <section className="relative isolate overflow-hidden py-20 lg:py-[112px]">
      <div className="pointer-events-none absolute top-2/3 left-[-400px]
         z-0 h-[420px] w-[520px]
         -translate-y-1/2 rounded-full
         bg-white/20 blur-[220px]"></div>
      <PatternBackground opacity="opacity-[0.03]" />
      <Image
        src={moranImages.heroBackground}
        alt=""
        fill
        sizes="100vw"
        className="-z-10 object-cover object-center opacity-[0.28]"
      />

      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-5 sm:px-10 lg:grid-cols-[1fr_461px] lg:items-center lg:gap-[112px] lg:pl-[88px] lg:pr-20">
        <div className="max-w-[560px] lg:max-w-none lg:min-w-0">
          <p className="font-display font-[350] text-[24px] uppercase leading-[0.95] tracking-[-0.04em] text-[#747474] sm:text-[32px] lg:text-[48px]">
            The Terroir:
          </p>
          <h2 className="mt-1 font-display text-[32px] font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-[42px] lg:text-[54px]">
            Adelaide Hills
          </h2>

         <div className="mt-6 font-[350] space-y-5 font-display text-[20px] leading-[1.30] tracking-[-0.04em] text-white/70 lg:max-w-[470px]">
          <div className="lg:hidden">
            <p>
              The chardonnay and pinot noir are both sourced from the ex-Lenswood Research
              Station - a vineyard planted in randomised experimental blocks with three clones
              across three different rootstocks, originally designed for scientific trials.
            </p>
          </div>

          <div className="hidden lg:block">
            {terroirParagraphOneLines.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </div>

          <div className="lg:hidden">
            <p>
              The vineyard maintains excellent canopy balance with minimal irrigation and
              permanent green cover - conditions that produce naturally well-balanced fruit
              without requiring heavy intervention. The chardonnay averages 15 months on lees
              before release; the pinot noir between 14 and 24 months, depending on the
              vintage.
            </p>
          </div>

          <div className="hidden lg:block">
            {terroirParagraphTwoLines.map((line) => (
              <span key={line} className="block whitespace-nowrap">
                {line}
              </span>
            ))}
          </div>
        </div>
        </div>

        <OffsetImage
          src={moranImages.terroir}
          alt="Dr. Martin Moran hosting guests outdoors"
          imageClassName="object-contain object-center"
          className="max-w-[461px]"
        />
      </div>
    </section>
  );
}

function OffsetImage({
  src,
  alt,
  className = "",
  imageClassName = "object-contain object-center",
}: {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
}) {
  return (
    <figure className={`relative mx-auto w-full ${className}`.trim()}>
      <div className="relative aspect-[461/511] w-full overflow-hidden bg-[#141414]">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 1024px) 88vw, 461px"
          className={imageClassName}
        />
      </div>
    </figure>
  );
}

function PatternBackground({ opacity }: { opacity: string }) {
  return (
    <Image
      src={moranImages.pattern}
      alt=""
      fill
      sizes="100vw"
      className={`-z-10 object-cover ${opacity}`}
      unoptimized
    />
  );
}

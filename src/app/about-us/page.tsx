import Image from "next/image";

import { ClosingCtaV2 } from "@/components/closing-cta-v2";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ScrollReveal } from "@/components/scroll-reveal";
import { aboutStats, transformationCards } from "@/lib/about-data";

const aboutImages = {
  founder: "/images/about/container-thomas.webp",
  vineyard: "/images/about/frame-2.webp",
  sentosa: "/images/about/image-40.webp",
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen overflow-hidden bg-[#151515] text-white">
      <div className="relative isolate">
        <Navbar />
        <main className="relative z-10 pt-[105px]">
          <VintageSection />
          <ScrollReveal>
            <WorldSection />
          </ScrollReveal>
          <ScrollReveal delay={80} variant="scale">
            <SentosaSection />
          </ScrollReveal>
          <ScrollReveal>
            <TransformationSection />
          </ScrollReveal>
          <ScrollReveal variant="fade">
            <CtaSection />
          </ScrollReveal>
        </main>
        <Footer />
      </div>
    </div>
  );
}

function VintageSection() {
  return (
    <section className="relative px-6 pb-20 pt-8 sm:px-10 lg:h-[623px] lg:px-0 lg:pb-0 lg:pt-[21px]">
      <div className="relative mx-auto flex max-w-[1283px] flex-col gap-12 lg:h-[543px] lg:block">
        <div className="about-vintage-image lg:absolute lg:left-[32px] lg:top-[-15px] lg:w-[585px]">
          <FigureCard src={aboutImages.founder} name="Thomas Teo" priority />
        </div>
        <div className="about-vintage-copy sm:mx-auto max-w-[620px] lg:absolute lg:left-[579px] lg:top-[82px] lg:h-[313px] lg:w-[620px]">
          <AboutIntroHeading />
          <div className="about-vintage-body font-light mt-[22px] space-y-[20px] font-display text-[18px] leading-[1.42] tracking-[-0.04em] text-white/60 lg:text-[18px]">
            <p className="about-vintage-paragraph text-center sm:text-center lg:text-left">
              The Wine Network story began around a table shared by friends. Founded in <b className="text-[#ffffffd9]">2001</b> by our
              Chairman Emeritus, <b className="text-[#ffffffd9]">Mr. Thomas Teo</b>, we started as a humble community of enthusiasts
              bound by a singular passion for the vine.
            </p>

            <p className="about-vintage-paragraph about-vintage-paragraph-2 text-center sm:text-center lg:text-left">
              As a true pioneer of the Singapore hospitality scene, Mr. Teo saw potential where
              others saw a smattering of rug and antique shops, establishing our first wine bar in
              the then-rustic enclave of <b className="text-[#ffffffd9]">Dempsey</b>. That first pour sparked a movement, transforming a
              quiet corner of Singapore into a premier destination for epicureans.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutIntroHeading() {
  return (
    <div className="font-display tracking-[-0.04em]">
      <div className="flex flex-wrap items-baseline justify-center sm:justify-center  lg:justify-start gap-x-6 uppercase">
        <span className="text-[42px] font-light leading-none text-[#616161] lg:text-[72px]">
          Our
        </span>
        <h1 className="text-[38px] font-bold leading-none text-white lg:text-[72px]">
          Vintage
        </h1>
    </div>
      <p className="mt-[18px] text-center sm:text-center lg:text-left text-[32px] font-light leading-none text-white lg:text-[32px]">
        Where Heritage Meets Hospitality
      </p>
    </div>
  );
}

function WorldSection() {
  return (
    <section className="about-world-bg relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:h-[671px] lg:px-[78px] lg:py-[80px]">
      <div className="pointer-events-none absolute left-[-540px] top-2 h-[820px] w-[820px] -translate-y-1/2">
        <div
          className="h-full w-full rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />
      </div>
      <div className="relative z-10 mx-auto grid max-w-[1286px] gap-12 lg:grid-cols-[720px_460px] lg:items-center lg:justify-between lg:gap-12">
        <div>
          <SplitHeading muted="From" strong="Across The World" />
          <div className="mt-7 sm:mx-auto lg:mx-0 text-center sm:text-center lg:text-left font-light max-w-[560px] space-y-6 font-display text-[20px] leading-[1.45] tracking-[-0.04em] text-white/60 lg:max-w-none lg:w-fit">
            <div className="lg:hidden space-y-6">
              <p>
                Recognizing a gap in the market for both quality and accessibility, we expanded into
                the importing and distribution in 2005.
              </p>

              <p>
                Starting with the bold, sun-drenched profiles of <b className="text-[#ffffffd9]">Stellenbosch</b> wines, we later expanded
                to the prestigious hills of <b className="text-[#ffffffd9]">Piedmont</b> and riding the wave of the <b className="text-[#ffffffd9]">Super Tuscan</b> movement,
                bringing the avant-garde spirit of Italian winemaking to Singapore wine lovers.
              </p>
            </div>

            <div className="hidden lg:block space-y-6">
              <p>
                <span className="block whitespace-nowrap">Recognizing a gap in the market for both quality and accessibility, we expanded into the</span>
                <span className="block whitespace-nowrap">importing and distribution in 2005.</span>
              </p>

              <p>
                <span className="block whitespace-nowrap">Starting with the bold, sun-drenched profiles of <b className="text-[#ffffffd9]">Stellenbosch</b> wines, we later expanded</span>
                <span className="block whitespace-nowrap">to the prestigious hills of <b className="text-[#ffffffd9]">Piedmont</b> and riding the wave of the <b className="text-[#ffffffd9]">Super Tuscan</b> movement,</span>
                <span className="block whitespace-nowrap">bringing the avant-garde spirit of Italian winemaking to Singapore wine lovers.</span>
              </p>
            </div>
          </div>
          <div className="mt-12 flex flex-wrap gap-16 justify-center  sm:justify-center lg:justify-start">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="font-display uppercase">
                <p className="text-[56px] font-bold leading-none tracking-[-0.04em] text-white">
                  {stat.value}
                </p>
                <p className="mt-2 text-[18px] font-medium leading-none tracking-[-0.04em] text-white/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
          {/* <div className="relative aspect-[460/511] w-full max-w-[460px] justify-self-center lg:translate-x-[-28px]">
            <div
              aria-hidden
              className="absolute left-[-5%] top-0 h-[103%] w-[105%] border border-white/55"
            >
              <div className="absolute right-2 sm:right-5 top-[4%] overflow-hidden">
                <div className="relative w-[240px] h-[280px] sm:w-[360px] sm:h-[420px] lg:w-[484.37px] lg:h-[531px]">
                  <Image
                    src={aboutImages.vineyard}
                    alt="Wine bottles from Wine Network estates"
                    fill
                    sizes="(max-width: 640px) 240px, (max-width: 1024px) 360px, 484px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div> */}
           <figure className="relative mx-auto w-full">
              <div className="relative aspect-[461/511] w-full overflow-hidden bg-[#141414]">
                <Image
                  src={aboutImages.vineyard}
                  alt="Wine bottles from Wine Network estates"
                  fill
                  sizes="(max-width: 1024px) 88vw, 461px"
                  className="object-contain object-center"
                />
              </div>
            </figure>
      </div>
    </section>
  );
}

function SentosaSection() {
  return (
   <section className="overflow-visible bg-[#151515] px-6 py-16 text-center sm:px-10 lg:px-20 lg:py-16">
    <div className="pointer-events-none absolute top-1/2 right-[-400px]
         z-0 h-[520px] w-[520px]
         -translate-y-1/2 rounded-full
         bg-white/20 blur-[220px]"></div>
    <div className="mx-auto flex max-w-[1282px] flex-col items-center gap-10 lg:gap-12">
      <SentosaHeading />

      <Image
        src={aboutImages.sentosa}
        alt="Suburbia dining room"
        width={1102}
        height={369}
        sizes="(max-width: 1200px) 92vw, 1102px"
        className="h-auto w-full max-w-[1102px]"
        unoptimized
      />

      <div className="mx-auto font-light flex max-w-[928px] flex-col gap-7 font-display text-[20px] leading-[1.45] tracking-[-0.04em] text-white/70">
        <p>
          In 2022, we took our expertise to the shores of Sentosa with the launch of <b className="text-[#ffffffd9]">Suburbia</b>, a
          full-scale, wine-themed culinary experience. Suburbia was a masterclass in atmospheric
          dining, serving as a vibrant hub and event space. The closure of Suburbia wasn&apos;t an end, but a catalyst for evolution.</p>
      </div>
    </div>
  </section>
  );
}

function SentosaHeading() {
  return (
    <div className="flex min-h-[80px] w-full flex-col items-center justify-center font-display uppercase tracking-[-0.04em]">
      <p className="text-[42px] font-normal leading-none text-[#616161] sm:text-[56px]">The</p>
      <h2 className="text-[36px] font-bold leading-none text-white sm:text-[56px]">
        Sentosa Chapter
      </h2>
    </div>
  );
}

function TransformationSection() {
  return (
    <section className="bg-[#151515] px-6 py-12 sm:px-10 sm:py-14 lg:px-20 lg:py-16">
      <div className="pointer-events-none absolute top-1/2 left-[-400px]
         z-0 h-[520px] w-[520px]
         -translate-y-1/2 rounded-full
         bg-white/20 blur-[220px]"></div>
      <div className="mx-auto max-w-[1442px]">
        <div className="grid gap-8 lg:grid-cols-[680px_680px] lg:items-baseline lg:justify-between lg:gap-0">
          <TransformationHeading />
          <p className="font-display font-light text-center sm:text-center lg:text-left text-[20px] leading-[1.35] tracking-[-0.04em] text-white/60">
            <span className="lg:block lg:whitespace-nowrap">
              Today, the leadership reigns have been passed to our current CEO, <b className="text-[#ffffffd9]">Mr. Keith Tan</b>, who
            </span>{" "}
            <span className="lg:block lg:whitespace-nowrap">
              bring relationships from the South Australian winemaking industry. Under Keith&apos;s
            </span>{" "}
            <span className="lg:block lg:whitespace-nowrap">
              leadership, Wine Network has pivoted to empowering host restaurants through:
            </span>
          </p>
        </div>
        <div className="mt-[36px] grid gap-3 lg:grid-cols-2">
          {transformationCards.map((card) => (
            <article
              key={card.title}
              className="flex border border-white/10 bg-transparent px-6 py-7 sm:px-8 lg:min-h-[176px] lg:px-8 lg:py-7"
            >
              <div className="flex w-full flex-col gap-3">
              <Image src={card.iconSrc} alt="" width={32} height={32} className="h-7 w-7" />

              <h3 className="font-display text-[22px] font-bold uppercase leading-[1.5] tracking-[-0.04em] text-white">
                {card.title}
              </h3>

              <p className="font-display font-light text-[18px] leading-[1.35] tracking-[-0.04em] text-white/60 w-full">
                {card.description.split("|").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function TransformationHeading() {
  return (
    <div className="font-display uppercase tracking-[-0.04em]">
      <p className="text-[32px] text-center sm:text-center lg:text-left font-display font-[350] leading-[0.86] text-[#616161] sm:text-[38px] lg:text-[56px]">
        Our
      </p>
      <h2 className="mt-[10px] text-[32px] text-center sm:text-center lg:text-left font-bold leading-[0.86] text-white sm:text-[38px] lg:text-[56px]">
        Transformation
      </h2>
    </div>
  );
}

function CtaSection() {
  return <ClosingCtaV2 />;
}

function FigureCard({
  src,
  name,
  priority,
}: {
  src: string;
  name: string;
  priority?: boolean;
}) {
  return (
    <figure className="about-vintage-figure relative mx-auto aspect-[617/573] w-full max-w-[585px]">
      <Image
        src={src}
        alt={name}
        fill
        priority={priority}
        sizes="(max-width: 1024px) 90vw, 421px"
        className="object-contain"
      />
    </figure>
  );
}

function SplitHeading({
  muted,
  strong,
  centered,
}: {
  muted: string;
  strong: string;
  centered?: boolean;
}) {
  return (
    <div
      className={`font-display uppercase tracking-[-0.04em] ${
        centered ? "mx-auto text-center" : ""
      }`}
    >
      <p className="text-[36px] text-center sm:text-center lg:text-left font-normal leading-[1.02] text-[#616161] sm:text-[48px]">
        {muted}
      </p>
      <h1 className="text-[34px] text-center sm:text-center lg:text-left font-bold leading-[1.08] text-white sm:text-[42px]">{strong}</h1>
    </div>
  );
}

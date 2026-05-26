import Image from "next/image";

import { ecosystemCards } from "@/lib/home-data";

const cardBackgrounds: Record<string, string> = {
  "The Product": "/images/ecosystem/Group 6.png",
  "The Platform": "/images/ecosystem/Group 5.png",
  "The Promise": "/images/ecosystem/Group 4.png",
};

function CardBackground({ src, eager }: { src: string; eager?: boolean }) {
  const isProduct = src === cardBackgrounds["The Product"];
  const isPlatform = src === cardBackgrounds["The Platform"];

  const imageClass = isProduct
    ? "object-cover object-[48%_44%]"
    : isPlatform
      ? "object-contain object-[94%_38%]"
      : "object-contain object-[96%_82%]";

  const overlayClass = isProduct
    ? "bg-[linear-gradient(180deg,rgba(0,0,0,0.04)_0%,rgba(0,0,0,0.1)_38%,rgba(0,0,0,0.88)_84%,rgba(0,0,0,1)_100%)]"
    : "bg-[linear-gradient(180deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_46%,rgba(0,0,0,0.9)_86%,rgba(0,0,0,1)_100%)]";

  return (
    <>
      <Image
        src={src}
        alt=""
        fill
        priority={eager}
        sizes="(max-width: 1024px) 100vw, 640px"
        className={`motion-card-image ${imageClass}`}
      />
      <div className={`absolute inset-0 ${overlayClass}`} />
    </>
  );
}

function CardContent({
  iconSrc,
  iconSize = 32,
  title,
  description,
  titleSize,
}: {
  iconSrc: string;
  iconSize?: number;
  title: string;
  description: string;
  titleSize: "lg" | "md";
}) {
  return (
    <div className="relative z-10 flex h-full w-full flex-col justify-end p-5 sm:p-8">
      <div className="flex max-w-[359px] flex-col gap-1.5 sm:gap-2">
        <Image
          src={iconSrc}
          alt=""
          width={iconSize}
          height={iconSize}
          className="mb-1 h-7 w-7 sm:mb-0 sm:h-8 sm:w-8"
        />
        <h3
          className={
            titleSize === "lg"
              ? "font-display text-[20px] font-bold uppercase leading-tight tracking-[-0.04em] text-white sm:text-[24px] sm:leading-[1.5]"
              : "font-display text-[20px] font-bold uppercase leading-tight tracking-[-0.04em] text-white sm:text-[22px] sm:leading-[1.5]"
          }
        >
          {title}
        </h3>
        <p className="font-display font-light text-[13px] leading-[1.45] tracking-[-0.04em] text-white/68 sm:text-[15px] sm:leading-6 lg:text-[20px] lg:leading-[1.5]">
          {description}
        </p>
      </div>
    </div>
  );
}

export function EcosystemSection() {
  const [product, platform, promise] = ecosystemCards;

  return (
    <section id="revolution" className="section-shell relative isolate overflow-hidden">
      {/* Figma atmospheric ellipses (54:1292) — soft white-grey wash that bleeds through the dark bg */}
      <div className="pointer-events-none absolute right-[-540px] top-1/2 h-[820px] w-[820px] -translate-y-1/2">
        <div
          className="h-full w-full rounded-full opacity-80"
          style={{
            background:
              "radial-gradient(circle, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.08) 40%, transparent 70%)",
            filter: "blur(18px)",
          }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[20%] -left-[18%] h-[580px] w-[580px] max-h-[60vw] max-w-[60vw] rounded-full opacity-80"
        style={{
          background:
            "linear-gradient(247deg, rgba(12, 12, 12, 1) 0%, rgba(255, 255, 255, 0.18) 99%)",
          filter: "blur(220px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1442px] px-5 py-16 sm:px-12 sm:py-20 lg:px-20 lg:py-[80px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-stretch lg:gap-[29px]">
          <div className="flex flex-col justify-center gap-5 lg:flex-1 lg:gap-6 text-center lg:text-left">
            <p className="font-display text-[34px] font-light uppercase leading-[1.05] tracking-[-0.04em] text-[#616161] sm:text-[44px] lg:text-[56px]">
              The Revolution in
            </p>
            <h2 className="font-display text-[34px] font-bold uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-[44px] lg:text-[56px]">
              Aftermeal Marketing.
            </h2>
          </div>
          <div className="flex font-light max-w-[567px] flex-col gap-5 font-display text-[16px] leading-[1.5] tracking-[-0.04em] text-white/60 lg:w-[567px] lg:shrink-0 lg:text-[20px] lg:leading-[1.5]">
            <p className="text-center lg:text-left">
              Most hospitality groups leave their most valuable asset - the guest relationship - at
              the table. That&rsquo;s why we&rsquo;ve built the world&rsquo;s first Aftermeal
              Marketing ecosystem to capture it.
            </p>
            <p className="text-center lg:text-left">
              We help hospitality groups monetize their customer base through a revolutionary,
              end-to-end private label wine platform.
            </p>
          </div>
        </div>

        <div className="mt-9 grid gap-4 sm:gap-3 lg:mt-[56px] lg:grid-cols-2 lg:items-stretch">
          <article className="motion-image-card group relative isolate min-h-[230px] overflow-hidden rounded-[12px] sm:rounded-[17px] aspect-auto sm:aspect-[635/491]">
            <CardBackground src={cardBackgrounds[product.title]} eager />
            <CardContent
              iconSrc={product.iconSrc}
              title={product.title}
              description={product.description}
              titleSize="lg"
            />
          </article>

          <div className="grid gap-4 sm:gap-3 lg:grid-rows-2">
            {[platform, promise].map((card) => (
              <article
                key={card.title}
                className="motion-image-card group relative isolate min-h-[168px] overflow-hidden rounded-[12px] sm:rounded-[17px] aspect-auto sm:aspect-[635/240] lg:aspect-auto"
              >
                <CardBackground src={cardBackgrounds[card.title]} />
                <CardContent
                  iconSrc={card.iconSrc}
                  title={card.title}
                  description={card.description}
                  titleSize="md"
                />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

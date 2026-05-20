import Image from "next/image";

type IconCardProps = {
  title: string;
  description: string | string[];
  iconSrc: string;
  iconWidth: number;
  iconHeight: number;
};

/**
 * Figma advantage card: vertical left border 2px @ #424242,
 * background #201F1F, desktop frame 384x247, padding ~32px.
 */
export function IconCard({
  title,
  description,
  iconSrc,
  iconWidth,
  iconHeight,
}: IconCardProps) {
  const descriptionLines = Array.isArray(description) ? description : [description];

  return (
    <article className="motion-card w-full border-l-2 border-white/12 bg-[#201F1F] px-6 py-6 text-left lg:min-h-[260px] lg:w-[480px] lg:px-7 lg:py-7">
      <Image
        src={iconSrc}
        alt=""
        width={iconWidth}
        height={iconHeight}
        unoptimized
        className="mb-5 h-10 w-10 object-contain opacity-90"
      />
      <h3 className="font-display text-[22px] font-bold uppercase leading-[1.4] tracking-[-0.04em] text-white sm:text-[24px] lg:text-[24px]">
        {title}
      </h3>
      <p className="mt-3 text-[16px] font-light leading-[22px] text-white/55">
        {descriptionLines.map((line) => (
          <span key={line} className="block whitespace-nowrap">
            {line}
          </span>
        ))}
      </p>
    </article>
  );
}

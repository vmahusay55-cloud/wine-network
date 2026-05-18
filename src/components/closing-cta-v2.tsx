import Image from "next/image";

type ClosingCtaV2Props = {
  href?: string;
};

export function ClosingCtaV2({ href = "#contact" }: ClosingCtaV2Props) {
  return (
    <section className="relative isolate overflow-hidden bg-[#151515]">
      <Image
        src="/images/closing/Group 1.png"
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="-z-20 object-cover object-[center_18%]"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: `
            linear-gradient(180deg, rgba(21,21,21,0.7) 0%, rgba(21,21,21,0.7) 100%),
            radial-gradient(circle at 50% 42%, rgba(21,21,21,0.18) 0%, rgba(21,21,21,0.76) 68%, rgba(21,21,21,0.92) 100%)
          `,
        }}
        aria-hidden
      />

      <div className="mx-auto flex min-h-[220px] w-full max-w-[1440px] items-center justify-center px-6 py-8 sm:min-h-[260px] sm:px-10 sm:py-10 lg:h-[430px] lg:px-[80px] lg:py-0">
        <div className="flex w-full max-w-[760px] flex-col items-center text-center">
          <div
            className="flex flex-col items-center uppercase leading-none"
            style={{
              textShadow: "0 2px 24px rgba(0,0,0,0.45)",
            }}
          >
            <p className="font-display text-[20px] font-normal tracking-[-0.04em] text-[#616161] sm:text-[28px] lg:text-[56px]">
              The Revolution in
            </p>
            <h2 className="mt-2 whitespace-nowrap font-display text-[22px] font-bold tracking-[-0.04em] text-white sm:text-[32px] lg:text-[56px]">
              Aftermeal Marketing.
            </h2>
          </div>

          <a
            href="https://wa.me/6582003305"
            target="_blank"
            rel="noopener noreferrer"
            className="motion-button group mt-[50px] lg:mt-[60px] inline-flex items-center gap-1 rounded-full px-4 py-1.5 font-display text-[10px] font-medium uppercase tracking-[-0.04em] text-white transition hover:brightness-110 sm:px-5 sm:text-[11px] lg:px-[18px] lg:py-[7px] lg:text-[10px]"
            style={{
              background:
                "linear-gradient(#7C7C7C, #7C7C7C) padding-box, linear-gradient(166deg, rgba(255,255,255,0.1) 0%, rgba(153,153,153,0) 100%) border-box",
              border: "2px solid transparent",
            }}
          >
            <span className="text-[14px] font-light">Speak With Us</span>

            <Image
              src="/icon/closing-arrow.svg"
              alt=""
              width={12}
              height={12}
              className="h-3 w-3 transition group-hover:translate-x-0.5"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

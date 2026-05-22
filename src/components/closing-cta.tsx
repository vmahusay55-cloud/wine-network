import Image from "next/image";

type ClosingCtaProps = {
  href?: string;
};

export function ClosingCta({ href = "#contact" }: ClosingCtaProps) {
  return (
    <section className="relative isolate overflow-hidden">
      <Image
        src="/images/closing/restaurant-33e9f8.webp"
        alt=""
        fill
        sizes="100vw"
        priority={false}
        className="-z-20 object-cover object-center"
      />
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(circle at 47% -3%, rgba(21,21,21,1) 22%, rgba(21,21,21,0) 100%)",
        }}
        aria-hidden
      />

      <div className="mx-auto flex w-full max-w-[1440px] items-center justify-center px-6 py-16 sm:py-20 lg:py-[100px]">
        <div className="flex w-full max-w-[540px] flex-col items-center justify-between gap-8 text-center sm:gap-10 lg:h-[199px] lg:gap-0">
          <div className="flex flex-col items-center gap-4 sm:gap-5 lg:gap-6">
            <p className="whitespace-nowrap font-display text-[28px] font-light uppercase leading-[1.05] tracking-[-0.04em] text-[#616161] sm:text-[40px] lg:text-[56px]">
              The Revolution in
            </p>
            <h2 className="whitespace-nowrap font-display text-[28px] font-bold uppercase leading-[1.05] tracking-[-0.04em] text-white sm:text-[40px] lg:text-[56px]">
              Aftermeal Marketing.
            </h2>
          </div>

          <a
              href="https://wa.me/6582003305"
              target="_blank"
              rel="noopener noreferrer"
              className="motion-button group mt-[50px] inline-flex items-center gap-1 rounded-full px-4 py-1.5 font-display text-[10px] font-medium uppercase tracking-[-0.04em] text-white transition hover:brightness-110 sm:px-5 sm:text-[11px] lg:mt-6 lg:px-[18px] lg:py-[7px] lg:text-[10px]"
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

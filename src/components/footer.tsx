import Image from "next/image";

import { footerLinks } from "@/lib/home-data";

const footerTextClass =
  "font-display text-[16px] font-medium leading-[1.4] tracking-normal text-white transition hover:text-white/70";

export function Footer() {
  return (
    <footer
      id="contact"
      className="relative isolate min-h-[360px] overflow-hidden bg-black sm:min-h-[380px] lg:aspect-[1440/420] lg:min-h-0"
    >
      <Image
        src="/layout/footer.svg"
        alt=""
        fill
        priority={false}
        sizes="100vw"
        className="pointer-events-none absolute inset-0 -z-10 select-none object-cover object-bottom"
        unoptimized
      />

      <div className="relative z-10 mx-auto max-w-[1442px] px-6 pt-12 pb-28 sm:px-10 sm:pt-14 sm:pb-32 lg:px-[79px] lg:pt-[88px] lg:pb-[120px]">
        <div className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-[26%_27%_25%_22%] lg:items-start lg:gap-0">
          <FooterColumn label="Quick Links">
            {footerLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={footerTextClass}
              >
                {link.label}
              </a>
            ))}
          </FooterColumn>

          <FooterColumn label="Contact Us">
            <a
              href="https://wa.me/6582003305?text=Hi%20I%20would%20like%20to%20inquire"
              target="_blank"
              rel="noopener noreferrer"
              className={footerTextClass}
            >
              +6582003305
            </a>
            <a
              href="mailto:keith@winenetwork.sg"
              className={footerTextClass}
            >
              keith@axpara.com
            </a>
          </FooterColumn>

          <FooterColumn label="Address">
            <p className="font-display text-[1rem] font-medium leading-[1.4] tracking-normal text-white">
              301 Boon Keng Rd, Singapore 339779
            </p>
          </FooterColumn>

          <div className="flex flex-col items-start gap-[18px] lg:justify-self-end lg:items-end">
            <Image
              src="/logo/Wine Network 1.svg"
              alt="Wine Network"
              width={225}
              height={42}
              className="h-[34px] w-auto md:h-[38px] lg:h-[42px]"
              unoptimized
            />
            <Image
              src="/icon/social.svg"
              alt="Social links"
              width={152}
              height={32}
              className="h-8 w-auto lg:h-[32px]"
              unoptimized
            />
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-[18px]">
      <p className="font-display text-[16px] font-medium uppercase leading-none tracking-[0.08em] text-white/60">
        {label}
      </p>
      <div className="flex flex-col gap-[3px]">{children}</div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "ABOUT DR.MORAN", href: "/about-dr-moran" },
  { label: "Contact Us", href: "#contact" },
];

const logoSrc = "/logo/Wine%20Network%201.svg";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`pointer-events-none fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <div className="pointer-events-auto mx-auto grid max-w-[1440px] grid-cols-[auto_1fr] items-center px-5 py-4 sm:px-10 sm:py-5 md:grid-cols-[1fr_auto_1fr] lg:px-20">
        <Link
          href="/"
          prefetch={false}
          className="relative block h-7 w-[150px] shrink-0 justify-self-start sm:h-9 sm:w-[188px] md:h-10 md:w-[220px]"
          aria-label="Wine Network home"
        >
          <Image
            src={logoSrc}
            alt="Wine Network"
            fill
            priority
            unoptimized
            className="object-contain object-left"
            sizes="220px"
          />
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-14 justify-self-center text-[13px] font-semilight uppercase tracking-[0.08em] md:flex"
        >
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#" &&
              link.href !== "#contact" &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));

            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                className={`nav-link-motion transition hover:text-white ${
                  isActive ? "text-white" : "text-white/62"
                }`}
                style={{
                  color: isActive ? "#FFF" : "rgba(255,255,255,0.62)",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 justify-self-end sm:gap-4">
          <a
            href="#"
            aria-label="Cart"
            className="relative inline-flex h-8 w-8 items-center justify-center transition hover:opacity-90 sm:h-9 sm:w-9 md:h-auto md:w-auto"
          >
            <span
              className="absolute right-0 top-0 z-10 h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_0_2px_#131313] sm:h-2 sm:w-2 md:-right-0.5 md:-top-0.5"
              aria-hidden
            />

            <Image
              src="/icon/cart.svg"
              alt=""
              width={38}
              height={38}
              className="block h-8 w-8 sm:h-9 sm:w-9 md:h-[38px] md:w-[38px]"
              draggable={false}
              unoptimized
            />
          </a>

          <button
            type="button"
            className="mobile-menu-button inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/18 bg-transparent text-white md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span aria-hidden />
            <span aria-hidden />
            <span aria-hidden />
          </button>
        </div>
      </div>

      <div
        id="mobile-navigation"
        className={`pointer-events-auto mx-5 mb-[20px] sm:mb-[20px] lg:mb-[0px] overflow-hidden rounded-[8px] border border-white/10 bg-[#111]/92 backdrop-blur transition-all duration-300 md:hidden ${
          isMenuOpen
            ? "max-h-[400px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-2"
        }`}
        data-open={isMenuOpen ? "true" : "false"}
      >
        <nav aria-label="Mobile primary" className="flex flex-col px-4 py-3">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#" &&
              link.href !== "#contact" &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));

            return (
              <Link
                key={link.label}
                href={link.href}
                prefetch={false}
                className={`border-b border-white/8 py-3 font-display text-[12px] font-bold uppercase tracking-[0.12em] transition last:border-b-0 hover:text-white ${
                  isActive ? "text-white" : "text-white/82"
                }`}
                style={{
                  color: isActive ? "#FFF" : "rgba(255,255,255,0.82)",
                }}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
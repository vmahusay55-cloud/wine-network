"use client";

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from "react";

type ContactLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

/**
 * Renders an <a href="#contact"> that, on click, smoothly scrolls so that:
 *   1. The CTA section ("The Revolution in Aftermeal Marketing." with the
 *      "Speak With Us" button) sits just below the fixed navbar.
 *   2. The footer columns (Quick Links / Contact Us / Address / Wine Network
 *      logo + socials) follow naturally below it.
 *
 * Why not a plain hash anchor: Next.js <Link> for hash anchors uses
 * scrollIntoView with `block: "start"`, which doesn't respect scroll-padding
 * and can place the section under the fixed navbar. We bypass that here with
 * an explicit scroll target computed against the CTA section's offset.
 */
const NAVBAR_OFFSET = 96; // px of clear space above the CTA headline

export function ContactLink({ children, onClick, ...rest }: ContactLinkProps) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    onClick?.(e);
    if (e.defaultPrevented) return;
    if (e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    e.preventDefault();

    requestAnimationFrame(() => {
      const cta = document.getElementById("contact-cta");
      if (cta) {
        const rect = cta.getBoundingClientRect();
        const desiredScroll = (window.scrollY-150) + rect.top - NAVBAR_OFFSET;
        window.scrollTo({ top: desiredScroll, behavior: "smooth" });
      } else {
        // Fallback: scroll to bottom of page
        window.scrollTo({
          top: Math.max(
            document.documentElement.scrollHeight,
            document.body.scrollHeight,
          ),
          behavior: "smooth",
        });
      }
    });

    if (typeof window !== "undefined" && window.history) {
      window.history.replaceState(null, "", "#contact");
    }
  };

  return (
    <a href="#contact" onClick={handleClick} {...rest}>
      {children}
    </a>
  );
}

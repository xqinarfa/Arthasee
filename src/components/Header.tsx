"use client";

import { useEffect, useRef, useState } from "react";

const imgArthaseeLogo11 = "/assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY.current && currentScrollY > 80) {
        setIsVisible(false);
        setMenuOpen(false); // Optionally close menu when scrolling down
      } else {
        setIsVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

const navLinks = [
  { label: "BERANDA", href: "#home" },
  { label: "LAYANAN", href: "#services" },
  { label: "CERITA KAMI", href: "#about" },
  { label: "CEK HARGA", href: "#pricing" },
  { label: "HUBUNGI KAMI", href: "#contact" },
];

  return (
    <header
      className={`header-animate fixed top-0 left-0 z-50 w-full transition-all duration-300 ease-in-out ${scrolled
        ? "bg-[#111]/70 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.4)] border-b border-white/10"
        : "bg-transparent"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      data-name="header.header"
    >
      <div className="mx-auto flex items-center justify-between px-5 py-4 w-full">
        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative size-[40px] shrink-0">
            <img
              alt="Arthasee Logo"
              className="absolute inset-0 max-w-none object-cover size-full pointer-events-none"
              src={imgArthaseeLogo11}
            />
          </div>
          <span
            className="font-extrabold text-[22px] text-white tracking-[1px] leading-none"

          >
            ARTHASEE
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link text-white text-[13px] font-medium tracking-wide"

            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#"
          className="hidden lg:flex btn-press items-center bg-[#0a5b34] text-white text-[13px] font-semibold px-5 py-[10px] rounded-[5px]"

        >
          COBA GRATIS
        </a>

        {/* Hamburger */}
        <button
          className="lg:hidden flex flex-col gap-[5px] p-2 cursor-pointer"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          <span
            className="block h-[2px] w-6 bg-white rounded"
            style={{
              transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
              transition: "transform 200ms var(--ease-out)",
            }}
          />
          <span
            className="block h-[2px] w-6 bg-white rounded"
            style={{
              opacity: menuOpen ? 0 : 1,
              transition: "opacity 150ms ease",
            }}
          />
          <span
            className="block h-[2px] w-6 bg-white rounded"
            style={{
              transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
              transition: "transform 200ms var(--ease-out)",
            }}
          />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        style={{
          maxHeight: menuOpen ? "320px" : "0",
          opacity: menuOpen ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 300ms var(--ease-out), opacity 250ms ease",
        }}
        className="lg:hidden bg-[#111] border-t border-[#222]"
      >
        <nav className="flex flex-col px-5 py-4 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-white text-[14px] font-medium py-1 border-b border-[#222] last:border-0"
              onClick={() => setMenuOpen(false)}

            >
              {link.label}
            </a>
          ))}
          <a
            href="#"
            className="btn-press mt-1 bg-[#0a5b34] text-white text-[13px] font-semibold px-5 py-[10px] rounded-[5px] text-center"

          >
            GET IN TOUCH
          </a>
        </nav>
      </div>
    </header>
  );
}

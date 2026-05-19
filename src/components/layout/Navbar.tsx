"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Menu, X, PhoneCall } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Sobre Nós", href: "#sobre" },
    { name: "Serviços", href: "#servicos" },
    { name: "Agendamento", href: "#simulador" },
    { name: "Depoimentos", href: "#depoimentos" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "py-4 bg-white/90 backdrop-blur-md border-b border-border-muted shadow-sm"
          : "py-6 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20 transition-transform group-hover:scale-105">
            <Sparkles className="w-5 h-5 text-brand" />
          </div>
          <span className="font-heading text-xl font-bold tracking-widest text-foreground flex items-center gap-1">
            AURA <span className="text-brand">PET</span>
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-bold font-heading text-muted-text hover:text-brand transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <a
            href="#simulador"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full border border-brand/40 text-sm font-bold font-heading text-brand bg-brand/5 hover:bg-brand hover:text-white transition-all duration-300 shadow-sm"
          >
            <PhoneCall className="w-4 h-4" />
            Agendar Banho
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 text-foreground focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6 text-brand" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 top-[72px] bg-white/95 backdrop-blur-lg z-40 transition-all duration-300 md:hidden ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center justify-center h-full gap-8 pb-20">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-heading text-2xl font-bold text-foreground hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#simulador"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-4 inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-brand text-white font-heading font-bold hover:bg-brand-dark transition-all shadow-lg shadow-brand/20"
          >
            <PhoneCall className="w-4 h-4" />
            Agendar Banho
          </a>
        </nav>
      </div>
    </header>
  );
}

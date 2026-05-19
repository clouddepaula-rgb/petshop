"use client";

import React from "react";
import { Sparkles, MapPin, Phone, Calendar } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-white border-t border-border-muted pt-20 pb-10 overflow-hidden">
      {/* Background radial accent */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="flex flex-col gap-6">
            <a href="#" className="flex items-center gap-2 group self-start">
              <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
                <Sparkles className="w-5 h-5 text-brand" />
              </div>
              <span className="font-heading text-xl font-bold tracking-widest text-foreground">
                AURA <span className="text-brand">PET</span>
              </span>
            </a>
            <p className="text-sm text-muted-text leading-relaxed font-body">
              O Pet Shop que o seu melhor amigo ama! Produtos de qualidade, brinquedos divertidos e um banho e tosa cheio de carinho.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border-muted flex items-center justify-center text-muted-text hover:text-brand hover:border-brand/40 hover:bg-brand/10 transition-all duration-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a
                href="https://wa.me/5511999998888"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full border border-border-muted flex items-center justify-center text-muted-text hover:text-brand hover:border-brand/40 hover:bg-brand/10 transition-all duration-300"
                aria-label="WhatsApp"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.724-1.455L0 24zm6.59-4.846c1.62.963 3.4 1.47 5.232 1.472 5.541 0 10.051-4.51 10.055-10.055.002-2.685-1.043-5.212-2.944-7.115C17.028 1.551 14.501.506 11.82.506 6.283.506 1.774 5.015 1.77 10.555c-.001 1.905.508 3.76 1.474 5.395l-.965 3.523 3.606-.947-.138-.072z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Core Services */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest uppercase text-foreground mb-6">
              O Que Oferecemos
            </h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-text font-body">
              <li>
                <a href="#servicos" className="hover:text-brand transition-colors font-bold">
                  Banho e Tosa Completo
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand transition-colors font-bold">
                  Consultório Veterinário
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand transition-colors font-bold">
                  Rações e Petiscos
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand transition-colors font-bold">
                  Brinquedos e Acessórios
                </a>
              </li>
              <li>
                <a href="#servicos" className="hover:text-brand transition-colors font-bold">
                  Farmácia Pet
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest uppercase text-foreground mb-6">
              Funcionamento
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-text font-body">
              <li className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-foreground">Segunda a Sábado</span>
                  <span className="block text-xs mt-0.5">08:00h às 19:00h</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Calendar className="w-4 h-4 text-muted-text mt-0.5 shrink-0 opacity-50" />
                <div>
                  <span className="block font-bold text-muted-text opacity-70">Domingos e Feriados</span>
                  <span className="block text-xs mt-0.5 text-brand font-bold">Fechado</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Local Contact & SEO */}
          <div>
            <h3 className="font-heading text-sm font-bold tracking-widest uppercase text-foreground mb-6">
              Contato & Local
            </h3>
            <ul className="flex flex-col gap-4 text-sm text-muted-text font-body">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-foreground">Aura Pet Shop</span>
                  <span className="block text-xs mt-0.5">Av. Principal, 1500 - Centro</span>
                  <span className="block text-xs">São Paulo - SP</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-brand mt-0.5 shrink-0" />
                <div>
                  <span className="block font-bold text-foreground">Agendamentos</span>
                  <a
                    href="https://wa.me/5511999998888"
                    target="_blank"
                    rel="noreferrer"
                    className="block text-xs mt-0.5 hover:text-brand font-bold text-brand transition-colors"
                  >
                    +55 (11) 99999-8888
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-border-muted mb-10" />

        {/* Subfooter */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-muted-text font-body">
          <p>© {currentYear} Aura Pet Shop. Todos os direitos reservados.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://seu-portfolio.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-brand transition-colors font-bold"
            >
              Desenvolvido com 🧡 por Gabriel
            </a>
            <span className="text-[10px] uppercase tracking-wider text-brand font-bold border border-brand/20 px-2.5 py-1 rounded-full bg-brand/5">
              Feito com 🧡 para o seu pet
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

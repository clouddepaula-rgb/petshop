"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, ArrowRight, ShieldCheck, Heart } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 pb-16 overflow-hidden paw-bg bg-light">
      {/* Background glow animations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 friendly-gradient animate-pulse duration-[8000ms] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 friendly-gradient animate-pulse duration-[10000ms] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6 text-left reveal-hidden reveal-visible">
            {/* Friendly tag */}
            <div className="inline-flex items-center gap-2 self-start bg-brand/10 px-4 py-2 rounded-full border border-brand/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-brand" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand">
                O Seu Pet Shop Favorito
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              Tudo o que o seu melhor amigo <span className="text-brand">ama e precisa!</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-muted-text max-w-xl leading-relaxed font-body">
              Do banho quentinho à ração preferida, a Aura Pet Shop oferece cuidado completo, muito carinho e diversão garantida para cães e gatos.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-brand text-white font-heading font-bold text-base hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 group active:scale-[0.98]"
              >
                Ver Nossos Serviços
                <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contato"
                className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full border border-border-muted text-foreground font-heading font-bold text-base hover:border-brand hover:text-brand hover:bg-brand/5 transition-all duration-300 bg-white"
              >
                Fale Conosco
              </a>
            </div>

            {/* Stats badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-8 border-t border-brand/10 pt-8">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Heart className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm text-foreground">Feito com Amor</span>
                  <span className="block text-[10px] text-muted-text">Carinho em cada detalhe</span>
                </div>
              </div>
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                  <ShieldCheck className="w-5 h-5 text-accent-blue" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm text-foreground">Profissionais</span>
                  <span className="block text-[10px] text-muted-text">Veterinários qualificados</span>
                </div>
              </div>
              <div className="hidden sm:flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-full bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Sparkles className="w-5 h-5 text-brand" />
                </div>
                <div>
                  <span className="block font-heading font-bold text-sm text-foreground">Banho & Tosa</span>
                  <span className="block text-[10px] text-muted-text">Ambiente limpo e seguro</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Image Frame Column */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center reveal-hidden-right reveal-visible mt-8 lg:mt-0">
            {/* Visual background ornament circles */}
            <div className="absolute -inset-4 border border-brand/15 rounded-[40px] pointer-events-none rotate-3" />
            <div className="absolute -inset-2 border border-accent-blue/15 rounded-[40px] pointer-events-none -rotate-3" />
            
            {/* Glassmorphic backplate */}
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[36px] overflow-hidden border border-brand/20 bg-light-card shadow-2xl">
              <Image
                src="/hero_petshop.png"
                alt="Cães e gatos felizes na Aura Pet Shop"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
              
              {/* Glassmorphic floating badges */}
              <div className="absolute bottom-6 left-6 right-6 glass p-4 rounded-2xl flex items-center justify-between shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center border border-brand/20 shadow-sm text-lg">
                    🐶
                  </div>
                  <div>
                    <span className="block font-heading font-bold text-xs text-foreground uppercase tracking-widest">Banho & Tosa</span>
                    <span className="block text-[10px] text-brand font-bold mt-0.5">Agende pelo WhatsApp</span>
                  </div>
                </div>
                <div className="text-right">
                  <span className="block font-heading font-bold text-xs text-foreground">Aberto</span>
                  <span className="block text-[10px] text-muted-text">Seg a Sáb</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

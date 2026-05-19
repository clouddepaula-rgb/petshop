"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Compass, Smile, ShieldAlert } from "lucide-react";

export function Philosophy() {
  return (
    <section id="sobre" className="relative py-24 border-t border-border-muted overflow-hidden bg-light">
      {/* Background glow ambient element */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-accent-blue/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1 relative flex items-center justify-center reveal-hidden-left reveal-visible">
            <div className="absolute -inset-3 border border-brand/10 rounded-[32px] pointer-events-none -rotate-2" />
            <div className="relative w-full aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[28px] overflow-hidden border border-border-muted bg-white shadow-lg">
              <Image
                src="/philosophy_petshop.png"
                alt="Equipe feliz cuidando de um cachorro"
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-w-1024px) 100vw, 40vw"
              />
            </div>
          </div>

          {/* Right Column: Copywriting Narrative */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col gap-6 text-left reveal-hidden reveal-visible">
            <div className="inline-flex items-center gap-2 self-start bg-brand/10 px-3.5 py-1.5 rounded-full border border-brand/20">
              <Compass className="w-4 h-4 text-brand" />
              <span className="text-xs font-bold tracking-widest uppercase text-brand">Sobre Nós</span>
            </div>

            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
              Nosso maior compromisso é ver <span className="text-brand">rabinhos abanando!</span>
            </h2>

            <p className="text-sm sm:text-base text-muted-text leading-relaxed font-body">
              A Aura Pet Shop nasceu do amor incondicional pelos animais. Nosso objetivo é criar um ambiente onde seu pet se sinta em casa, sendo tratado com o mesmo carinho e respeito que você tem por ele.
            </p>

            {/* Core Values / Features */}
            <div className="flex flex-col gap-5 mt-4">
              
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20 shrink-0">
                  <Smile className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Ambiente Amigável e Seguro
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text mt-1 leading-relaxed font-body">
                    Um espaço limpo, alegre e pensado para a segurança do seu pet. Aqui, os passeios pela loja são sempre bem-vindos e a diversão é garantida.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20 shrink-0">
                  <Sparkles className="w-6 h-6 text-accent-blue" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Profissionais Apaixonados
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text mt-1 leading-relaxed font-body">
                    Nossa equipe é formada por pessoas que amam o que fazem. Do banho e tosa ao veterinário, seu pet será tratado com muita paciência e dedicação.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20 shrink-0">
                  <ShieldAlert className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-lg text-foreground">
                    Qualidade em Tudo
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-text mt-1 leading-relaxed font-body">
                    Trabalhamos apenas com as melhores marcas de ração, medicamentos confiáveis e produtos de higiene testados e aprovados para o bem-estar animal.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

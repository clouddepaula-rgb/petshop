"use client";

import React from "react";
import Image from "next/image";
import { Sparkles, Scissors, Stethoscope, ShoppingBag, Heart } from "lucide-react";

export function Services() {
  return (
    <section id="servicos" className="relative py-24 border-t border-border-muted overflow-hidden bg-white">
      {/* Background ambient light */}
      <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4 reveal-hidden reveal-visible">
          <div className="inline-flex items-center gap-2 bg-accent-blue/10 px-3.5 py-1.5 rounded-full border border-accent-blue/20">
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent-blue">Nossos Serviços</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Tudo o que seu pet precisa <span className="text-brand">em um só lugar</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-text">
            Da saúde à diversão, oferecemos um atendimento completo, seguro e cheio de amor para o seu melhor amigo!
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Big Card 1: Banho e Tosa (2 columns on md/lg, span 2) */}
          <div className="md:col-span-2 rounded-3xl border border-border-muted bg-light-card shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-8 group hover:border-brand/30 hover:shadow-md transition-all duration-300 relative overflow-hidden reveal-hidden-left reveal-visible">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center z-10">
              <div className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                  <Scissors className="w-6 h-6 text-brand" />
                </div>
                <h3 className="font-heading text-xl sm:text-2xl font-bold text-foreground group-hover:text-brand transition-colors">
                  Banho & Tosa
                </h3>
                <p className="text-sm text-muted-text leading-relaxed font-body">
                  Deixamos seu pet cheiroso, limpinho e com o pelo hidratado! Usamos shampoos de alta qualidade e toalhas esterilizadas, garantindo conforto e segurança.
                </p>
                <div className="flex items-center gap-3 mt-2 text-xs font-bold text-brand">
                  <span>🚿 Água quentinha</span>
                  <span>•</span>
                  <span>🐾 Corte de unhas</span>
                </div>
              </div>

              {/* Internal Image Frame */}
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden border border-border-muted bg-light shadow-inner">
                <Image
                  src="/grooming_petshop.png"
                  alt="Cachorro feliz tomando banho no pet shop"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-w-768px) 100vw, 30vw"
                />
              </div>
            </div>

            {/* Subtle background card pattern */}
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-brand/5 rounded-full filter blur-xl pointer-events-none" />
          </div>

          {/* Card 2: Consultório Veterinário (1 column) */}
          <div className="rounded-3xl border border-border-muted bg-light-card shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6 group hover:border-accent-blue/30 hover:shadow-md transition-all duration-300 relative overflow-hidden reveal-hidden-right reveal-visible">
            <div className="flex flex-col gap-4 z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                <Stethoscope className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-accent-blue transition-colors">
                Consultório Veterinário
              </h3>
              <p className="text-sm text-muted-text leading-relaxed font-body">
                Saúde em primeiro lugar! Realizamos consultas de rotina, vacinação completa, vermifugação e check-ups preventivos com nossa equipe de veterinários amorosos.
              </p>
            </div>
            <div className="border-t border-border-muted pt-4 flex justify-between items-center z-10 mt-4">
              <span className="text-xs font-bold text-accent-blue">Saúde Pet</span>
              <span className="text-[10px] text-accent-blue font-bold uppercase tracking-widest bg-accent-blue/10 border border-accent-blue/20 px-2 py-0.5 rounded-full">Vacinas em dia</span>
            </div>
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-accent-blue/5 rounded-full filter blur-xl pointer-events-none" />
          </div>

          {/* Card 3: Loja Completa & Rações (1 column) */}
          <div className="rounded-3xl border border-border-muted bg-light-card shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6 group hover:border-brand/30 hover:shadow-md transition-all duration-300 relative overflow-hidden reveal-hidden-left reveal-visible">
            <div className="flex flex-col gap-4 z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20">
                <ShoppingBag className="w-6 h-6 text-brand" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-brand transition-colors">
                Rações & Petiscos
              </h3>
              <p className="text-sm text-muted-text leading-relaxed font-body">
                As melhores marcas do mercado para cães, gatos, pássaros e roedores. Rações Super Premium, úmidas, petiscos saudáveis e bifinhos que eles adoram!
              </p>
            </div>
            <div className="border-t border-border-muted pt-4 flex justify-between items-center z-10 mt-4">
              <span className="text-xs font-bold text-brand">Alimentação</span>
              <span className="text-xs text-muted-text font-bold">Variedade</span>
            </div>
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand/5 rounded-full filter blur-xl pointer-events-none" />
          </div>

          {/* Card 4: Brinquedos e Acessórios (1 column) */}
          <div className="rounded-3xl border border-border-muted bg-light-card shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6 group hover:border-brand/30 hover:shadow-md transition-all duration-300 relative overflow-hidden reveal-hidden reveal-visible">
            <div className="flex flex-col gap-4 z-10">
              <div className="w-12 h-12 rounded-2xl bg-brand/10 flex items-center justify-center border border-brand/20 text-2xl">
                🎾
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-brand transition-colors">
                Brinquedos & Acessórios
              </h3>
              <p className="text-sm text-muted-text leading-relaxed font-body">
                Coleiras charmosas, caminhas super macias, arranhadores para gatos, bolinhas, pelúcias e roupas cheias de estilo para o seu pet arrasar no passeio.
              </p>
            </div>
            <div className="border-t border-border-muted pt-4 flex justify-between items-center z-10 mt-4">
              <span className="text-xs font-bold text-brand">Diversão</span>
              <span className="text-xs text-muted-text font-bold">Acessórios</span>
            </div>
            <div className="absolute -top-12 -left-12 w-32 h-32 bg-brand/5 rounded-full filter blur-xl pointer-events-none" />
          </div>

          {/* Card 5: Farmácia Pet (1 column) */}
          <div className="rounded-3xl border border-border-muted bg-light-card shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6 group hover:border-accent-blue/30 hover:shadow-md transition-all duration-300 relative overflow-hidden reveal-hidden-right reveal-visible">
            <div className="flex flex-col gap-4 z-10">
              <div className="w-12 h-12 rounded-2xl bg-accent-blue/10 flex items-center justify-center border border-accent-blue/20">
                <Heart className="w-6 h-6 text-accent-blue" />
              </div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-foreground group-hover:text-accent-blue transition-colors">
                Farmácia Pet
              </h3>
              <p className="text-sm text-muted-text leading-relaxed font-body">
                Medicamentos, antipulgas, carrapatos, vitaminas e suplementos. Tudo o que o veterinário receitou você encontra aqui, com ótimo preço e pronto atendimento.
              </p>
            </div>
            <div className="border-t border-border-muted pt-4 flex justify-between items-center z-10 mt-4">
              <span className="text-xs font-bold text-accent-blue">Medicamentos</span>
              <span className="text-xs text-muted-text font-bold">Cuidados</span>
            </div>
            <div className="absolute -bottom-12 -left-12 w-32 h-32 bg-accent-blue/5 rounded-full filter blur-xl pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}

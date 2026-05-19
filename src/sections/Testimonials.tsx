"use client";

import React from "react";
import { Sparkles, Star, Quote } from "lucide-react";

interface Testimonial {
  name: string;
  petName: string;
  petBreed: string;
  text: string;
  stars: number;
  highlight: string;
}

export function Testimonials() {
  const reviews: Testimonial[] = [
    {
      name: "Sophia L.",
      petName: "Luna",
      petBreed: "Lulu da Pomerânia",
      text: "Eu amei o carinho com a Luna! Ela sempre teve medo de banho, mas os profissionais daqui foram tão pacientes que ela saiu abanando o rabo. O cheirinho do shampoo durou dias!",
      stars: 5,
      highlight: "Carinho e paciência",
    },
    {
      name: "Henrique M.",
      petName: "Zeus",
      petBreed: "Golden Retriever",
      text: "Sempre compro as rações do Zeus aqui. A variedade é enorme e o preço é ótimo. Além disso, a consulta com o veterinário foi super atenciosa, tiraram todas as minhas dúvidas.",
      stars: 5,
      highlight: "Ótimo atendimento e preço",
    },
    {
      name: "Camila R.",
      petName: "Oliver",
      petBreed: "Gato Persa",
      text: "Comprar os brinquedos do Oliver na Aura é sempre uma festa! A loja é linda, limpinha e a equipe super prestativa. O banho a seco que indicaram para ele foi um sucesso em casa.",
      stars: 5,
      highlight: "Loja linda e completa",
    },
  ];

  return (
    <section id="depoimentos" className="relative py-24 border-t border-border-muted overflow-hidden bg-white">
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-brand/5 rounded-full filter blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4 reveal-hidden reveal-visible">
          <div className="inline-flex items-center gap-2 bg-brand/10 px-3.5 py-1.5 rounded-full border border-brand/20">
             <Quote className="w-4 h-4 text-brand" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand">Depoimentos</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            O que dizem os <span className="text-brand">nossos clientes</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-text font-body">
            Ficamos muito felizes em compartilhar as experiências de tutores que confiam em nós para cuidar de seus melhores amigos.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <div
              key={idx}
              className="rounded-3xl border border-border-muted bg-light-card shadow-sm p-6 sm:p-8 flex flex-col justify-between gap-6 group hover:border-brand/30 hover:shadow-lg hover:shadow-brand/5 transition-all duration-300 relative reveal-hidden reveal-visible"
            >
              <div className="flex flex-col gap-4">
                {/* Stars */}
                <div className="flex items-center gap-1">
                  {[...Array(r.stars)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-brand fill-brand" />
                  ))}
                </div>

                {/* Highlight title */}
                <span className="block font-heading font-bold text-lg text-foreground group-hover:text-brand transition-colors">
                  "{r.highlight}"
                </span>

                {/* Review Text */}
                <p className="text-sm sm:text-base text-muted-text font-body leading-relaxed italic">
                  "{r.text}"
                </p>
              </div>

              {/* Author Details */}
              <div className="border-t border-border-muted pt-4 flex items-center justify-between mt-2">
                <div>
                  <span className="block font-heading font-bold text-base text-foreground">{r.name}</span>
                  <span className="block text-xs text-muted-text mt-0.5 font-body">Tutor(a)</span>
                </div>
                <div className="text-right">
                  <span className="block font-heading font-bold text-sm text-brand">{r.petName}</span>
                  <span className="block text-xs text-muted-text font-body">{r.petBreed}</span>
                </div>
              </div>

              {/* Corner quote icon ornament */}
              <Quote className="absolute top-6 right-6 w-8 h-8 text-brand/5 pointer-events-none group-hover:text-brand/10 transition-colors" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

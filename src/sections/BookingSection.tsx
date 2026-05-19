"use client";

import React from "react";
import { BookingSimulator } from "@/components/ui/BookingSimulator";
import { Calendar } from "lucide-react";

export function BookingSection() {
  return (
    <section id="simulador" className="relative py-24 border-t border-border-muted overflow-hidden bg-white">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand/5 rounded-full filter blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4 reveal-hidden reveal-visible">
          <div className="inline-flex items-center gap-2 bg-brand/10 px-3.5 py-1.5 rounded-full border border-brand/20">
            <Calendar className="w-4 h-4 text-brand" />
            <span className="text-xs font-bold tracking-widest uppercase text-brand">Agendamento Online</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
            Simule o Banho e <span className="text-brand">Tosa</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-text font-body">
            Selecione a espécie, o porte do seu pet e os serviços desejados. Nosso simulador calcula o valor aproximado para você já chamar no WhatsApp!
          </p>
        </div>

        {/* Dynamic Booking Simulator */}
        <div className="reveal-hidden reveal-visible">
          <BookingSimulator />
        </div>

      </div>
    </section>
  );
}

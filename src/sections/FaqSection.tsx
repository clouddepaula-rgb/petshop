"use client";

import React from "react";
import { Accordion } from "@/components/ui/Accordion";
import { HelpCircle } from "lucide-react";

export function FaqSection() {
  const faqItems = [
    {
      question: "Vocês dão banho em gatos?",
      answer: "Sim! Temos profissionais especializados em felinos e utilizamos técnicas carinhosas e adequadas para deixá-los limpinhos sem causar estresse.",
    },
    {
      question: "É preciso agendar o banho e tosa com antecedência?",
      answer: "Recomendamos agendar com pelo menos 1 dia de antecedência para garantir o melhor horário, especialmente aos finais de semana que costumam ser mais movimentados. Mas sempre tentamos encaixar urgências!",
    },
    {
      question: "O consultório veterinário atende todos os dias?",
      answer: "Sim! Nosso médico veterinário está disponível de segunda a sábado em horário comercial para consultas de rotina, vacinas e emergências.",
    },
    {
      question: "Vocês realizam entrega de ração e produtos?",
      answer: "Com certeza! Fazemos entregas gratuitas na região em compras acima de R$100. É só chamar no WhatsApp e fazer o seu pedido.",
    },
    {
      question: "Quais as formas de pagamento?",
      answer: "Aceitamos cartões de crédito e débito, Pix e dinheiro. Também parcelamos compras de acessórios e pacotes de banho em até 3x sem juros.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 border-t border-border-muted overflow-hidden bg-light">
      {/* Background glow circle */}
      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-accent-blue/5 rounded-full filter blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 flex flex-col items-center gap-4 reveal-hidden reveal-visible">
          <div className="inline-flex items-center gap-2 bg-accent-blue/10 px-3.5 py-1.5 rounded-full border border-accent-blue/20">
            <HelpCircle className="w-4 h-4 text-accent-blue" />
            <span className="text-xs font-bold tracking-widest uppercase text-accent-blue">Dúvidas Frequentes</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-foreground">
            Perguntas & <span className="text-accent-blue">Respostas</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-text font-body">
            Separamos as principais dúvidas dos nossos clientes. Se precisar de mais alguma informação, é só nos chamar!
          </p>
        </div>

        {/* Accordion List */}
        <div className="reveal-hidden reveal-visible">
          <Accordion items={faqItems} />
        </div>

      </div>
    </section>
  );
}

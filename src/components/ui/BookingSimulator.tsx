"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, Calendar, Clock, CreditCard, Check, ArrowRight } from "lucide-react";

interface Treatment {
  id: string;
  name: string;
  description: string;
  basePrice: number;
  duration: number;
}

interface AddOn {
  id: string;
  name: string;
  price: number;
  duration: number;
}

export function BookingSimulator() {
  const [petType, setPetType] = useState<"dog" | "cat">("dog");
  const [petSize, setPetSize] = useState<"small" | "medium" | "large">("small");
  const [selectedTreatment, setSelectedTreatment] = useState<string>("treatment_1");
  const [selectedAddOns, setSelectedAddOns] = useState<string[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [totalDuration, setTotalDuration] = useState<number>(0);

  const treatments: Treatment[] = [
    {
      id: "treatment_1",
      name: "Banho Simples",
      description: "Banho quentinho com shampoo e condicionador de qualidade, limpeza de ouvidos e secagem completa.",
      basePrice: 50,
      duration: 40,
    },
    {
      id: "treatment_2",
      name: "Banho + Tosa Higiênica",
      description: "Banho completo mais a tosa nas patinhas, barriga e região íntima, ideal para a manutenção mensal.",
      basePrice: 70,
      duration: 60,
    },
    {
      id: "treatment_3",
      name: "Banho + Tosa Completa",
      description: "Banho, tosa higiênica e tosa geral do corpo (máquina ou tesoura), deixando seu pet estiloso e fresquinho.",
      basePrice: 110,
      duration: 90,
    },
  ];

  const addOns: AddOn[] = [
    { id: "addon_1", name: "Hidratação Profunda", price: 25, duration: 15 },
    { id: "addon_2", name: "Escovação de Dentes", price: 15, duration: 10 },
    { id: "addon_3", name: "Corte de Unhas", price: 15, duration: 5 },
    { id: "addon_4", name: "Desembolo / Tira Nó", price: 30, duration: 20 },
  ];

  const sizeMultipliers = {
    small: 1.0,
    medium: 1.3,
    large: 1.7,
  };

  useEffect(() => {
    const currentTreatment = treatments.find((t) => t.id === selectedTreatment);
    if (!currentTreatment) return;

    // Multiply base treatment price by size
    const multiplier = sizeMultipliers[petSize];
    const baseCalculated = currentTreatment.basePrice * multiplier;

    // Add up the add-ons
    const addOnsTotal = addOns
      .filter((addon) => selectedAddOns.includes(addon.id))
      .reduce((sum, current) => sum + current.price, 0);

    setTotalPrice(Math.round(baseCalculated + addOnsTotal));

    // Calculate total duration
    const addOnsDuration = addOns
      .filter((addon) => selectedAddOns.includes(addon.id))
      .reduce((sum, current) => sum + current.duration, 0);

    setTotalDuration(currentTreatment.duration + addOnsDuration);
  }, [petType, petSize, selectedTreatment, selectedAddOns]);

  const handleAddOnToggle = (id: string) => {
    setSelectedAddOns((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const getWhatsAppLink = () => {
    const treatmentName = treatments.find((t) => t.id === selectedTreatment)?.name;
    const activeAddOns = addOns
      .filter((addon) => selectedAddOns.includes(addon.id))
      .map((addon) => addon.name)
      .join(", ");

    const sizeLabels = {
      small: "Pequeno (até 10kg)",
      medium: "Médio (10kg a 25kg)",
      large: "Grande (acima de 25kg)",
    };

    const petTypeLabel = petType === "dog" ? "Cão" : "Gato";

    const text = `Olá Aura Pet Shop! Gostaria de agendar um serviço:\n\n` +
      `🐾 *Pet:* ${petTypeLabel}\n` +
      `📏 *Porte:* ${sizeLabels[petSize]}\n` +
      `🛁 *Serviço:* ${treatmentName}\n` +
      `➕ *Adicionais:* ${activeAddOns ? activeAddOns : "Nenhum"}\n` +
      `💰 *Valor Estimado:* R$ ${totalPrice},00\n\n` +
      `Quais os horários disponíveis?`;

    return `https://wa.me/5511999998888?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Configuration Form */}
      <div className="lg:col-span-7 flex flex-col gap-8 bg-white border border-border-muted p-6 sm:p-8 rounded-3xl shadow-sm">
        
        {/* Step 1: Pet Type */}
        <div>
          <label className="block font-heading font-bold text-sm uppercase tracking-widest text-brand mb-4">
            01. Espécie do Pet
          </label>
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={() => setPetType("dog")}
              className={`py-4 px-6 rounded-2xl font-heading font-bold text-base transition-all duration-300 border flex items-center justify-center gap-3 ${
                petType === "dog"
                  ? "border-brand text-brand bg-brand/10 shadow-sm"
                  : "border-border-muted text-muted-text hover:border-brand/30"
              }`}
            >
              🐕 Cão
            </button>
            <button
              onClick={() => setPetType("cat")}
              className={`py-4 px-6 rounded-2xl font-heading font-bold text-base transition-all duration-300 border flex items-center justify-center gap-3 ${
                petType === "cat"
                  ? "border-brand text-brand bg-brand/10 shadow-sm"
                  : "border-border-muted text-muted-text hover:border-brand/30"
              }`}
            >
              🐈 Gato
            </button>
          </div>
        </div>

        {/* Step 2: Pet Size */}
        <div>
          <label className="block font-heading font-bold text-sm uppercase tracking-widest text-brand mb-4">
            02. Porte do Pet
          </label>
          <div className="grid grid-cols-3 gap-3">
            {[
              { id: "small", label: "Pequeno", desc: "Até 10kg" },
              { id: "medium", label: "Médio", desc: "10-25kg" },
              { id: "large", label: "Grande", desc: "Acima 25kg" },
            ].map((size) => (
              <button
                key={size.id}
                onClick={() => setPetSize(size.id as any)}
                className={`py-3 px-4 rounded-2xl transition-all duration-300 border text-center ${
                  petSize === size.id
                    ? "border-brand text-brand bg-brand/10 shadow-sm"
                    : "border-border-muted text-muted-text hover:border-brand/20"
                }`}
              >
                <span className="block font-heading font-bold text-sm sm:text-base">{size.label}</span>
                <span className="block text-[10px] sm:text-xs mt-0.5 font-body opacity-80">{size.desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Step 3: Treatment Select */}
        <div>
          <label className="block font-heading font-bold text-sm uppercase tracking-widest text-brand mb-4">
            03. Serviço Principal
          </label>
          <div className="flex flex-col gap-4">
            {treatments.map((t) => {
              const multiplier = sizeMultipliers[petSize];
              const treatmentPrice = Math.round(t.basePrice * multiplier);
              const isSelected = selectedTreatment === t.id;

              return (
                <button
                  key={t.id}
                  onClick={() => setSelectedTreatment(t.id)}
                  className={`text-left p-5 rounded-2xl transition-all duration-300 border flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                    isSelected
                      ? "border-brand text-foreground bg-brand/5 shadow-md shadow-brand/10"
                      : "border-border-muted text-muted-text hover:border-brand/20"
                  }`}
                >
                  <div className="max-w-md">
                    <span className={`font-heading font-bold text-base sm:text-lg block ${isSelected ? "text-brand" : "text-foreground"}`}>
                      {t.name}
                    </span>
                    <span className="text-xs sm:text-sm mt-1.5 block leading-relaxed font-body opacity-85">{t.description}</span>
                  </div>
                  <div className="shrink-0 flex items-baseline gap-1 mt-2 sm:mt-0 text-right">
                    <span className="text-xs font-body opacity-60">R$</span>
                    <span className="text-xl sm:text-2xl font-heading font-extrabold text-foreground">{treatmentPrice}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Step 4: Add-ons Select */}
        <div>
          <label className="block font-heading font-bold text-sm uppercase tracking-widest text-brand mb-4">
            04. Adicionais
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {addOns.map((addon) => {
              const isChecked = selectedAddOns.includes(addon.id);

              return (
                <button
                  key={addon.id}
                  onClick={() => handleAddOnToggle(addon.id)}
                  className={`text-left p-4 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-4 ${
                    isChecked
                      ? "border-brand text-foreground bg-brand/5 shadow-sm"
                      : "border-border-muted text-muted-text hover:border-brand/20"
                  }`}
                >
                  <div>
                    <span className={`font-heading font-bold text-sm block ${isChecked ? "text-brand" : "text-foreground"}`}>
                      {addon.name}
                    </span>
                    <span className="text-xs opacity-70 font-body mt-1 block flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-brand/60" /> +{addon.duration} min
                    </span>
                  </div>
                  <div className="shrink-0 flex items-center gap-2">
                    <span className="text-sm font-heading font-bold text-foreground">R$ {addon.price}</span>
                    <div className={`w-5 h-5 rounded-md border flex items-center justify-center transition-all ${
                      isChecked ? "bg-brand border-brand text-white" : "border-border-muted bg-light"
                    }`}>
                      {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Summary Card */}
      <div className="lg:col-span-5 lg:sticky lg:top-28">
        <div className="bg-white border border-brand/20 p-6 sm:p-8 rounded-3xl flex flex-col gap-6 relative overflow-hidden shadow-xl shadow-brand/5">
          {/* Subtle glow card */}
          <div className="absolute -top-24 -right-24 w-48 h-48 bg-accent-blue/10 rounded-full filter blur-[40px] pointer-events-none" />

          <div className="flex items-center gap-2 self-start bg-accent-blue/10 px-3.5 py-1.5 rounded-full border border-accent-blue/20">
            <Sparkles className="w-4 h-4 text-accent-blue" />
            <span className="text-xs font-bold tracking-wider uppercase text-accent-blue">Resumo do Pedido</span>
          </div>

          <h3 className="font-heading text-2xl font-bold text-foreground mt-2 border-b border-border-muted pb-4">
            Seu Agendamento
          </h3>

          <div className="flex flex-col gap-4 text-sm sm:text-base font-body">
            <div className="flex justify-between items-center py-2 border-b border-border-muted/50">
              <span className="text-muted-text">Pet & Porte</span>
              <span className="font-bold text-foreground capitalize">
                {petType === "dog" ? "🐕 Cão" : "🐈 Gato"} • {petSize === "small" ? "Pequeno" : petSize === "medium" ? "Médio" : "Grande"}
              </span>
            </div>

            <div className="flex justify-between items-start py-2 border-b border-border-muted/50">
              <span className="text-muted-text shrink-0">Serviço Principal</span>
              <span className="font-bold text-foreground text-right max-w-[200px]">
                {treatments.find((t) => t.id === selectedTreatment)?.name}
              </span>
            </div>

            <div className="flex justify-between items-start py-2 border-b border-border-muted/50">
              <span className="text-muted-text shrink-0">Adicionais</span>
              <span className="font-bold text-foreground text-right max-w-[200px]">
                {selectedAddOns.length > 0
                  ? addOns.filter((a) => selectedAddOns.includes(a.id)).map((a) => a.name).join(", ")
                  : "Nenhum"}
              </span>
            </div>

            <div className="flex justify-between items-center py-2 border-b border-border-muted/50">
              <span className="text-muted-text flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-brand" /> Tempo Estimado
              </span>
              <span className="font-heading font-bold text-foreground">
                {totalDuration} min
              </span>
            </div>
          </div>

          {/* Pricing Display */}
          <div className="bg-brand/10 border border-brand/20 p-5 rounded-2xl flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              <CreditCard className="w-5 h-5 text-brand" />
              <span className="text-sm font-bold text-brand">Total Estimado</span>
            </div>
            <div className="flex items-baseline gap-1.5 text-right">
              <span className="text-sm font-body text-brand">R$</span>
              <span className="text-3xl sm:text-4xl font-heading font-extrabold text-brand">{totalPrice},00</span>
            </div>
          </div>

          {/* Final Call To Action */}
          <a
            href={getWhatsAppLink()}
            target="_blank"
            rel="noreferrer"
            className="w-full mt-2 py-4 px-6 rounded-full bg-brand text-white font-heading font-bold text-base flex items-center justify-center gap-2.5 hover:bg-brand-dark transition-all shadow-xl shadow-brand/20 group active:scale-[0.98]"
          >
            Agendar pelo WhatsApp
            <ArrowRight className="w-4 h-4 text-white transition-transform group-hover:translate-x-1" />
          </a>

          <p className="text-xs text-center font-body text-muted-text">
            Os valores são apenas estimativas. O valor final pode variar após a avaliação do pet na loja.
          </p>
        </div>
      </div>
    </div>
  );
}

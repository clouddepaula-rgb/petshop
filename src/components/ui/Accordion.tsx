"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-4 w-full">
      {items.map((item, idx) => {
        const isOpen = openIndex === idx;

        return (
          <div
            key={idx}
            className={`border rounded-2xl transition-all duration-300 ${
              isOpen
                ? "border-gold/30 bg-dark-card/85 shadow-lg shadow-gold/5"
                : "border-border-muted bg-dark-card/45 hover:border-gold/20"
            }`}
          >
            {/* Header Trigger */}
            <button
              onClick={() => toggleItem(idx)}
              className="flex items-center justify-between w-full px-6 py-5 text-left focus:outline-none group"
            >
              <span className="font-syne font-semibold text-base sm:text-lg text-foreground group-hover:text-gold transition-colors">
                {item.question}
              </span>
              <div
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isOpen
                    ? "border-gold/30 text-gold bg-gold/5 rotate-180"
                    : "border-border-muted text-muted-text group-hover:border-gold/30 group-hover:text-gold"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {/* Content panel */}
            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out`}
              style={{
                maxHeight: isOpen ? "200px" : "0px",
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-muted-text leading-relaxed border-t border-border-muted/50 mt-1">
                {item.answer}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

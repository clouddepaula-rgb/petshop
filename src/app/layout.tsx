import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aura Pet Shop | Banho, Tosa e Produtos para o seu Pet",
  description: "O melhor pet shop da região! Oferecemos banho e tosa com muito carinho, rações premium, acessórios divertidos e consultório veterinário.",
  keywords: [
    "pet shop",
    "banho e tosa",
    "rações para cachorro",
    "brinquedos pet",
    "veterinário",
    "clínica veterinária",
    "Aura Pet"
  ],
  authors: [{ name: "Aura Pet Shop" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://aurapetshop.com.br",
    title: "Aura Pet Shop | O Melhor Cuidado para o Seu Pet",
    description: "Banho, tosa, veterinário e tudo o que seu melhor amigo precisa em um ambiente alegre e cheio de amor.",
    siteName: "Aura Pet Shop",
    images: [
      {
        url: "https://aurapetshop.com.br/hero_petshop.png",
        width: 1200,
        height: 630,
        alt: "Aura Pet Shop"
      }
    ]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="h-full scroll-smooth">
      <body className="min-h-full flex flex-col antialiased bg-light text-foreground">
        {children}
      </body>
    </html>
  );
}

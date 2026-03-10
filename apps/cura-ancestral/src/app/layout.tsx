import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Manual da Cura Ancestral | Protocolo V.I.T.A.L.",
  description: "Recupere sua mobilidade e vitalidade através da medicina natural.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen">
        {children}
      </body>
    </html>
  );
}

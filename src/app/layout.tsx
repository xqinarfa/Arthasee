import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Arthasee — Sistem Manajemen Bengkel Terintegrasi",
  description:
    "Arthasee menyimpan data pelanggan, riwayat kendaraan, dan catatan servis bengkel Anda di satu tempat. Mulai gratis, tidak perlu kartu kredit.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${outfit.variable} font-sans antialiased`}>
      <body>{children}</body>
    </html>
  );
}

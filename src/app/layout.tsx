import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
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
    <html lang="id" className={`${plusJakartaSans.variable} font-sans antialiased`}>
      <body>{children}</body>
    </html>
  );
}

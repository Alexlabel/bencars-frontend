import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import {Metadata} from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Bencars – новые автомобили",
    description: "Покупка новых авто по лучшим ценам",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body className={inter.className + " bg-lightGray text-secondary"}>
        {children}
        </body>
        </html>
    );
}

"use client"
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Nav/Nav";
import AuthProvider from "./helpers/AuthProvider";
import { RecipeContextProvider } from "./context/RecipeContext";

const inter = Inter({ subsets: ["latin"] });

/* export const metadata: Metadata = {
  title: "Foodchat | Recipes for you and your partner, made with love",
  description: "Foodchat - Recipes for you and your partner, made with love",
}; */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <RecipeContextProvider>
          <AuthProvider>
            <NavBar />
            {children}
          </AuthProvider>
        </RecipeContextProvider>
      </body>
    </html>
  );
}

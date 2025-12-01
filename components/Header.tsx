"use client";

import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image 
            src="/icon.png" 
            alt="Mozio Logo" 
            width={32} 
            height={32}
            className="w-8 h-8"
          />
          <span className="text-xl font-bold text-foreground">Mozio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
            Funcionalidades
          </Link>
          <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </Link>
          <Link href="#reviews" className="text-muted-foreground hover:text-foreground transition-colors">
            Avaliações
          </Link>
          <Link href="#download" className="text-muted-foreground hover:text-foreground transition-colors">
            Download
          </Link>
          <ModeToggle />
          <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium">
            Começar
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ModeToggle />
          <button 
            className="p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <div className="flex flex-col gap-4 p-6">
              <Link href="#features" className="text-muted-foreground hover:text-foreground">
                Funcionalidades
              </Link>
              <Link href="#about" className="text-muted-foreground hover:text-foreground">
                Sobre
              </Link>
              <Link href="#reviews" className="text-muted-foreground hover:text-foreground">
                Avaliações
              </Link>
              <Link href="#download" className="text-muted-foreground hover:text-foreground">
                Download
              </Link>
              <button className="px-6 py-2 bg-primary text-primary-foreground rounded-full hover:opacity-90 transition-opacity font-medium">
                Começar
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

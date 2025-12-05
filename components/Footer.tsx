import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-muted border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Image 
                src="/icon.png" 
                alt="Mozio Logo" 
                width={32} 
                height={32}
                className="w-8 h-8"
              />
              <span className="text-xl font-bold text-foreground">Mozio</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Conectando estudantes moçambicanos pelo mundo 🇲🇿
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Product</h3>
            <div className="flex flex-col gap-2">
              <Link href="#features" className="text-muted-foreground hover:text-foreground text-sm">
                Features
              </Link>
              <Link href="#download" className="text-muted-foreground hover:text-foreground text-sm">
                Download
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Pricing
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Company</h3>
            <div className="flex flex-col gap-2">
              <Link href="#about" className="text-muted-foreground hover:text-foreground text-sm">
                About
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Blog
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Contact
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <div className="flex flex-col gap-2">
              <Link href="/privacy" className="text-muted-foreground hover:text-foreground text-sm">
                Privacy
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-foreground text-sm">
                Terms
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Mozio. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Instagram className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-foreground">
              <Facebook className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

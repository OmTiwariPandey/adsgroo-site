"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Code2Icon, Calculator, Menu } from "lucide-react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const scrollTo = useScrollTo();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    scrollTo(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4">
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={cn(
          "w-full max-w-5xl mt-4 rounded-full transition-all duration-300",
          "border border-border/40",
          isScrolled 
            ? "bg-background/60 backdrop-blur-lg shadow-lg"
            : "bg-background/40 backdrop-blur-md"
        )}
      >
        <div className="px-4 md:px-6">
          <div className="flex items-center justify-between h-14">
            <Link href="/" className="flex items-center space-x-2">
              <Code2Icon className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">AdsGroo</span>
            </Link>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a 
                href="#"
                onClick={(e) => handleNavClick(e, 'hero')}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
              <a 
                href="#services"
                onClick={(e) => handleNavClick(e, 'services')}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
              <a 
                href="#portfolio"
                onClick={(e) => handleNavClick(e, 'portfolio')}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
              <a 
                href="#contact"
                onClick={(e) => handleNavClick(e, 'contact')}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </a>
              <Link href="/calculator">
                <Button 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  size="sm"
                >
                  <Calculator className="w-4 h-4 mr-2" />
                  Calculator
                </Button>
              </Link>
            </nav>

            <button
              className="md:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border/40 rounded-b-full overflow-hidden"
            >
              <nav className="flex flex-col space-y-4 p-4">
                <a
                  href="#"
                  onClick={(e) => handleNavClick(e, 'hero')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Home
                </a>
                <a
                  href="#services"
                  onClick={(e) => handleNavClick(e, 'services')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Services
                </a>
                <a
                  href="#portfolio"
                  onClick={(e) => handleNavClick(e, 'portfolio')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Portfolio
                </a>
                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, 'contact')}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contact
                </a>
                <Link href="/calculator">
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    <Calculator className="w-4 h-4 mr-2" />
                    Calculator
                  </Button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </div>
  );
}
"use client";

import { Code2Icon } from "lucide-react";
import Link from "next/link";
import { footerLinks } from "@/lib/constants/footer";
import { useScrollTo } from "@/hooks/useScrollTo";

export default function Footer() {
  const scrollTo = useScrollTo();

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault();
    const id = sectionId.replace('#', '');
    scrollTo(id);
  };

  const renderLink = (link: { id: string; name: string; href: string; isSection: boolean }) => {
    if (link.isSection) {
      return (
        <button
          onClick={(e) => handleNavClick(e as any, link.href)}
          className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer"
        >
          {link.name}
        </button>
      );
    }
    return (
      <Link 
        href={link.href}
        className="text-sm text-muted-foreground hover:text-primary transition-colors"
      >
        {link.name}
      </Link>
    );
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
              <Code2Icon className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold">AdsGroo</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              Empowering businesses with custom development solutions.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={`${link.id}-services`}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={`${link.id}-company`}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={`${link.id}-legal`}>
                  {renderLink(link)}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} AdsGroo. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
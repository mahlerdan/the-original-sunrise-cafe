import React, { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Phone, Menu, X, Sun, Clock, MapPin, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Monitor scroll to make header sticky and compact
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Our Services", href: "/services" },
    { name: "About Us", href: "/about" },
    { name: "Contact & Hours", href: "/contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground selection:bg-secondary/30">
      {/* Top Notification bar - Local Touch */}
      <div className="bg-primary text-primary-foreground py-2 px-4 text-xs sm:text-sm text-center font-medium border-b border-primary/20 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-1.5">
            <Sun className="w-4 h-4 text-secondary animate-pulse" />
            <span>Serving Boise & Meridian Families Since 1995</span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5 text-secondary" /> Daily 6:00 AM - 2:00 PM
            </span>
            <span className="hidden md:flex items-center gap-1">
              <MapPin className="w-3.5 h-3.5 text-secondary" /> 805 N Main St, Meridian
            </span>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md py-3 shadow-md border-b border-border/40"
            : "bg-background py-5 border-b border-border/10"
        }`}
      >
        <div className="container flex justify-between items-center">
          {/* Logo with hand-crafted Sunrise Motif */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-secondary-foreground shadow-sm transition-transform duration-300 group-hover:scale-105">
              <Sun className="w-6 h-6 animate-spin-slow" />
              <div className="absolute inset-0 rounded-full border border-primary/10 animate-ping opacity-20"></div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg sm:text-xl tracking-tight text-primary leading-none">
                The Original
              </span>
              <span className="font-serif font-extrabold text-xl sm:text-2xl text-foreground leading-tight tracking-wide">
                Sunrise Cafe
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`relative font-medium text-sm transition-colors duration-200 py-1.5 ${
                    isActive
                      ? "text-primary font-bold"
                      : "text-foreground/80 hover:text-primary"
                  }`}
                >
                  {item.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-secondary rounded-full"></span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Call-to-Action Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:2088884517"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-4 py-2 rounded-full font-bold text-sm shadow-sm transition-all duration-200 active:scale-95"
            >
              <Phone className="w-4 h-4" />
              <span>(208) 888-4517</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 md:hidden text-foreground hover:text-primary focus:outline-none transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed inset-0 z-40 md:hidden bg-background/98 backdrop-blur-lg transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto translate-y-0"
            : "opacity-0 pointer-events-none -translate-y-4"
        }`}
        style={{ top: "108px" }} // offset notification + header height
      >
        <div className="container py-8 flex flex-col gap-6">
          <nav className="flex flex-col gap-4">
            {navItems.map((item) => {
              const isActive = location === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                    isActive
                      ? "bg-primary/5 text-primary font-bold border-l-4 border-secondary"
                      : "hover:bg-muted/50 text-foreground/90"
                  }`}
                >
                  <span className="text-lg font-medium">{item.name}</span>
                  <ChevronRight className="w-5 h-5 text-muted-foreground" />
                </Link>
              );
            })}
          </nav>

          <div className="mt-auto pb-16 flex flex-col gap-4 border-t border-border/40 pt-6">
            <div className="flex flex-col gap-1 text-center">
              <p className="text-sm text-muted-foreground">Call Us to Order Takeout</p>
              <a
                href="tel:2088884517"
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 py-4 rounded-xl font-bold text-lg shadow-sm transition-all active:scale-98"
              >
                <Phone className="w-5 h-5" />
                <span>(208) 888-4517</span>
              </a>
            </div>
            <div className="text-center text-xs text-muted-foreground flex flex-col gap-1 mt-2">
              <p>📍 805 N Main St, Meridian, ID 83642</p>
              <p>🕒 Open Daily: 6:00 AM - 2:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <main className="flex-grow">{children}</main>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground border-t border-primary/20 pt-16 pb-8 mt-auto relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Column 1: Brand & Promise */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold">
                  <Sun className="w-5 h-5" />
                </div>
                <span className="font-serif font-bold text-xl tracking-wide">
                  The Original Sunrise Cafe
                </span>
              </div>
              <p className="text-primary-foreground/80 text-sm leading-relaxed max-w-sm">
                Since 1995, we've been serving up Idaho's favorite breakfast and brunch with local ingredients, hearty portions, and warm community smiles. Come taste the sunrise!
              </p>
              <div className="flex items-center gap-3 mt-2">
                <span className="text-xs bg-secondary/20 text-secondary border border-secondary/30 px-3 py-1 rounded-full font-semibold">
                  Local Favorite
                </span>
                <span className="text-xs bg-accent/20 text-accent-foreground border border-accent/30 px-3 py-1 rounded-full font-semibold">
                  Family Owned
                </span>
              </div>
            </div>

            {/* Column 2: Hours & Quick Links */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif font-bold text-lg text-secondary border-b border-primary-foreground/10 pb-2">
                Dine With Us
              </h3>
              <ul className="flex flex-col gap-3 text-sm text-primary-foreground/80">
                <li className="flex justify-between border-b border-primary-foreground/5 pb-1">
                  <span>Monday - Sunday</span>
                  <span className="font-semibold text-secondary">6:00 AM - 2:00 PM</span>
                </li>
                <li className="flex justify-between border-b border-primary-foreground/5 pb-1">
                  <span>Breakfast Served</span>
                  <span className="font-semibold">All Day, Every Day</span>
                </li>
                <li className="flex justify-between border-b border-primary-foreground/5 pb-1">
                  <span>Holiday Hours</span>
                  <span className="font-semibold">6:00 AM - 12:00 PM</span>
                </li>
              </ul>
            </div>

            {/* Column 3: Find Us */}
            <div className="flex flex-col gap-4">
              <h3 className="font-serif font-bold text-lg text-secondary border-b border-primary-foreground/10 pb-2">
                Meridian Location
              </h3>
              <p className="text-sm text-primary-foreground/80 leading-relaxed">
                805 N Main St,<br />
                Meridian, ID 83642<br />
                <span className="text-xs text-primary-foreground/60">(Right in the heart of historic downtown Meridian)</span>
              </p>
              <div className="flex flex-col gap-2 mt-2">
                <a
                  href="tel:2088884517"
                  className="flex items-center gap-2 text-sm font-bold text-secondary hover:underline"
                >
                  <Phone className="w-4 h-4" /> (208) 888-4517
                </a>
                <a
                  href="https://maps.google.com/?q=805+N+Main+St,+Meridian,+ID+83642"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-secondary hover:underline"
                >
                  <MapPin className="w-4 h-4" /> Get Directions
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-primary-foreground/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/60">
            <p>© {new Date().getFullYear()} The Original Sunrise Cafe. All rights reserved.</p>
            <div className="flex gap-6">
              <Link href="/services" className="hover:underline hover:text-secondary">Menu & Services</Link>
              <Link href="/about" className="hover:underline hover:text-secondary">Our Story</Link>
              <Link href="/contact" className="hover:underline hover:text-secondary">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky/Floating Call Button */}
      <div className="sm:hidden fixed bottom-6 right-6 z-50 animate-bounce">
        <a
          href="tel:2088884517"
          className="flex items-center justify-center w-14 h-14 bg-secondary text-secondary-foreground rounded-full shadow-lg border border-background/20 focus:outline-none"
          aria-label="Call now"
        >
          <Phone className="w-6 h-6" />
        </a>
      </div>
    </div>
  );
}

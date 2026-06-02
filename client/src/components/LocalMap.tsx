import React from "react";
import { MapPin, Navigation, Phone, Clock } from "lucide-react";

export default function LocalMap() {
  return (
    <div className="w-full h-full min-h-[350px] bg-muted rounded-2xl overflow-hidden border border-border relative flex flex-col justify-between">
      {/* Visual Map Illustration (Stylized using pure CSS gradients and SVGs for local impact, avoiding stock/external images) */}
      <div className="absolute inset-0 bg-sky-100/40 flex items-center justify-center overflow-hidden">
        {/* Abstract road lines */}
        <div className="absolute w-full h-2 bg-white/80 rotate-12 top-1/4"></div>
        <div className="absolute w-full h-3 bg-white/80 -rotate-45 top-1/2"></div>
        <div className="absolute w-2 h-full bg-white/80 left-1/3 top-0"></div>
        <div className="absolute w-3 h-full bg-white/80 right-1/4 top-0"></div>
        
        {/* Park green areas */}
        <div className="absolute w-48 h-48 rounded-full bg-emerald-100/60 -left-12 -top-12 blur-md"></div>
        <div className="absolute w-64 h-64 rounded-full bg-emerald-100/50 right-8 bottom-4 blur-md"></div>

        {/* Cafe Pin Point */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center z-10">
          {/* Pulsing ripple */}
          <div className="absolute w-12 h-12 rounded-full bg-secondary/30 animate-ping"></div>
          
          {/* Map Pin Container */}
          <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg border-2 border-background relative">
            <MapPin className="w-6 h-6 text-secondary" />
          </div>
          
          {/* Label */}
          <div className="mt-2 bg-background text-foreground text-xs font-bold px-3 py-1.5 rounded-full shadow-md border border-border whitespace-nowrap">
            The Original Sunrise Cafe
          </div>
        </div>
      </div>

      {/* Information overlay at the bottom */}
      <div className="relative z-20 mt-auto bg-background/95 backdrop-blur-sm p-6 border-t border-border flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h4 className="font-serif font-bold text-lg text-primary">Find Us in Downtown Meridian</h4>
          <p className="text-sm text-muted-foreground">805 N Main St, Meridian, ID 83642, USA</p>
        </div>
        
        <div className="grid grid-cols-2 gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Open Daily</p>
              <p className="text-muted-foreground">6:00 AM - 2:00 PM</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-secondary shrink-0" />
            <div>
              <p className="font-semibold text-foreground">Phone Support</p>
              <p className="text-muted-foreground">(208) 888-4517</p>
            </div>
          </div>
        </div>

        <a
          href="https://maps.google.com/?q=805+N+Main+St,+Meridian,+ID+83642"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 py-2.5 rounded-xl font-bold text-sm shadow-sm transition-all duration-200 active:scale-98"
        >
          <Navigation className="w-4 h-4 text-secondary" />
          <span>Get Driving Directions</span>
        </a>
      </div>
    </div>
  );
}

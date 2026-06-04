import React from "react";
import { Link } from "wouter";
import { Phone, Sun, Clock, MapPin, ChevronRight, Star, Heart, Coffee, Egg, Utensils, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Paraphrased Google Review themes (not copied verbatim)
  const testimonials = [
    {
      text: "The absolute best breakfast spot in the Boise area. Their chicken fried steak is legendary, and the staff treats you like family from the moment you walk in. Generous portions and incredible coffee!",
      author: "Boise Customer",
      role: "Regular Diner",
      stars: 5,
    },
    {
      text: "We make it a tradition to come here every Sunday morning. The buttermilk pancakes are light, fluffy, and delicious. Even when they're busy, the service is fast and friendly.",
      author: "Meridian Local",
      role: "Family Visitor",
      stars: 5,
    },
    {
      text: "A perfect slice of classic Idaho diner culture. Hearty food, amazing biscuits and gravy, and a warm atmosphere. It's the kind of place that makes you feel right at home.",
      author: "Idaho Resident",
      role: "Breakfast Enthusiast",
      stars: 5,
    },
  ];

  // Core services/offerings preview
  const previewServices = [
    {
      icon: <Egg className="w-6 h-6 text-primary" />,
      title: "All-Day Breakfast",
      desc: "From fluffy pancakes to customized three-egg omelets, we serve your favorite breakfast classics all day.",
      image: "/images/service-pancakes.jpg",
      imageAlt: "Stack of fluffy buttermilk pancakes with maple syrup",
    },
    {
      icon: <Coffee className="w-6 h-6 text-primary" />,
      title: "Fresh Brewed Coffee",
      desc: "Enjoy unlimited refills of our signature premium blend, roasted to perfection to kickstart your morning.",
      image: "/images/service-coffee.jpg",
      imageAlt: "Freshly brewed hot coffee in a classic diner mug",
    },
    {
      icon: <Utensils className="w-6 h-6 text-primary" />,
      title: "Hearty Brunch Favorites",
      desc: "Indulge in our famous chicken fried steak, house-made biscuits & gravy, and savory breakfast skillets.",
      image: "/images/service-breakfast-plate.jpg",
      imageAlt: "Hearty American breakfast plate with eggs, bacon, and hash browns",
    },
  ];

  return (
    <Layout>
      {/* Hero Section with Real Photo Background */}
      <section className="relative overflow-hidden min-h-[85vh] flex items-center border-b border-border/40">
        {/* Full-bleed hero image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-diner.jpg"
            alt="The Original Sunrise Cafe warm diner interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/75 to-background/20"></div>
        </div>

        <div className="container relative z-10 py-20 lg:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <div className="inline-flex items-center gap-2 bg-secondary/20 text-foreground px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold border border-secondary/30 self-start backdrop-blur-sm">
                <Sun className="w-4 h-4 text-primary animate-pulse" />
                <span>Boise's Best Breakfast Since 1995</span>
              </div>

              <h1 className="font-serif font-extrabold text-4xl sm:text-5xl lg:text-6xl text-foreground leading-[1.1] tracking-tight">
                Where Boise Wakes Up to{" "}
                <span className="text-primary relative inline-block">
                  Fresh Goodness
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-secondary/30 -z-10 rounded"></span>
                </span>
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
                Step into a warm Boise tradition. At The Original Sunrise Cafe, we serve up golden pancakes, sizzling bacon, and bottomless coffee with a side of friendly Idaho hospitality.
              </p>

              {/* Call-to-Action Group */}
              <div className="flex flex-col sm:flex-row gap-4 mt-2">
                <a
                  href="tel:2088884517"
                  className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-md transition-all duration-200 active:scale-98"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call to Order: (208) 888-4517</span>
                </a>
                <Link
                  href="/services"
                  className="flex items-center justify-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-xl font-bold text-base sm:text-lg shadow-sm transition-all duration-200 active:scale-98"
                >
                  <span>View Our Menu</span>
                  <ArrowRight className="w-5 h-5 text-secondary" />
                </Link>
              </div>

              {/* Local Trust Badges */}
              <div className="flex items-center gap-6 mt-6 pt-6 border-t border-border/40">
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-primary">4.4 ★</span>
                  <span className="text-xs text-muted-foreground">1,500+ Google Reviews</span>
                </div>
                <div className="h-8 w-px bg-border/60"></div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-primary">30+ Yrs</span>
                  <span className="text-xs text-muted-foreground">Serving Treasure Valley</span>
                </div>
                <div className="h-8 w-px bg-border/60"></div>
                <div className="flex flex-col">
                  <span className="font-bold text-2xl text-primary">100%</span>
                  <span className="text-xs text-muted-foreground">Idaho Owned & Operated</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Preview Services Section */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
              Sunrise Favorites & Comfort Food
            </h2>
            <p className="text-muted-foreground">
              Whether you're looking for a hearty classic breakfast to fuel your day or a light brunch with friends, we have something for everyone.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {previewServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground rounded-2xl border border-border/40 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group overflow-hidden"
              >
                {/* Service photo */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/60 to-transparent"></div>
                </div>
                {/* Card content */}
                <div className="p-8 flex flex-col gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="font-serif font-bold text-xl text-primary">{service.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-primary font-bold hover:underline text-lg group"
            >
              <span>Explore Our Full Menu & Services</span>
              <ChevronRight className="w-5 h-5 text-secondary transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Local Story Section */}
      <section className="py-20 bg-muted/30 border-b border-border/40">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Photo of restaurant */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border-2 border-secondary/30">
                <img
                  src="/images/about-restaurant.jpg"
                  alt="The Original Sunrise Cafe warm dining room atmosphere"
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 to-transparent p-6">
                  <div className="flex flex-col gap-1">
                    <Heart className="w-6 h-6 text-secondary fill-secondary" />
                    <h3 className="font-serif font-bold text-xl text-secondary">Our Idaho Promise</h3>
                    <p className="text-xs text-primary-foreground/80">Boise & Meridian, Idaho</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Story Text */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="text-sm font-bold text-accent tracking-wider uppercase">Our Boise Story</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground leading-tight">
                Rooted in the Heart of the Treasure Valley
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                For over three decades, The Original Sunrise Cafe has been a gathering place for neighbors, families, and friends. We started with a simple vision: to create a cozy diner where anyone could enjoy a premium breakfast cooked to order.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, our Meridian location continues that legacy. We pride ourselves on sourcing fresh local ingredients, pouring strong coffee, and keeping our portions generous. We are honored to be a part of your morning routine.
              </p>
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 shadow-sm"
                >
                  <span>Read Our Full Story</span>
                  <ChevronRight className="w-4 h-4 text-secondary" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background border-b border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <span className="text-sm font-bold text-accent tracking-wider uppercase">Guest Testimonials</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
              What Boise is Saying About Us
            </h2>
            <p className="text-muted-foreground">
              We love our community, and we are incredibly grateful for the feedback from our amazing guests. Here are a few themes paraphrased from our Google reviews.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground p-8 rounded-2xl border border-border/40 shadow-sm flex flex-col justify-between gap-6 relative"
              >
                <div className="absolute top-6 right-8 text-6xl font-serif text-secondary/20 select-none">"</div>
                <div className="flex flex-col gap-4 relative z-10">
                  {/* Star Rating */}
                  <div className="flex gap-1">
                    {[...Array(t.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-secondary text-secondary" />
                    ))}
                  </div>
                  <p className="text-sm sm:text-base text-foreground/90 italic leading-relaxed">
                    "{t.text}"
                  </p>
                </div>
                <div className="border-t border-border/40 pt-4 flex flex-col">
                  <span className="font-bold text-primary text-sm">{t.author}</span>
                  <span className="text-xs text-muted-foreground">{t.role}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 bg-secondary/10 border border-secondary/20 p-6 rounded-2xl max-w-xl mx-auto">
            <p className="text-sm text-foreground/90 font-medium">
              ⭐ Proudly rated <strong className="text-primary">4.4 Stars</strong> by over <strong className="text-primary">1,558 diners</strong> on Google!
            </p>
          </div>
        </div>
      </section>

      {/* Final Call to Action Section */}
      <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
        {/* Subtle decorative background glow */}
        <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>

        <div className="container relative z-10 text-center max-w-3xl mx-auto flex flex-col gap-6">
          <Sun className="w-12 h-12 text-secondary mx-auto animate-spin-slow" />
          <h2 className="font-serif font-bold text-3xl sm:text-4xl md:text-5xl text-primary-foreground leading-tight">
            Ready to Start Your Morning Right?
          </h2>
          <p className="text-primary-foreground/80 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Stop by our Meridian location for dine-in or call ahead to order fresh takeout. We can't wait to serve you!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-4">
            <a
              href="tel:2088884517"
              className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-4 rounded-xl font-bold text-lg shadow-md transition-all active:scale-95"
            >
              <Phone className="w-5 h-5" />
              <span>Call (208) 888-4517</span>
            </a>
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-4 rounded-xl font-bold text-lg shadow-sm transition-all active:scale-95"
            >
              <span>Location & Hours</span>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

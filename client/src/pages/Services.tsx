import React from "react";
import { Coffee, Egg, Flame, Utensils, Clock, Heart, Star, Phone, Smile } from "lucide-react";
import Layout from "@/components/Layout";

export default function Services() {
  const services = [
    {
      icon: <Egg className="w-8 h-8 text-primary" />,
      title: "All-Day Breakfast Favorites",
      desc: "Our complete breakfast menu is available from open to close. Enjoy golden buttermilk pancakes, thick-cut French toast, custom three-egg omelets, and our signature loaded breakfast skillets made exactly how you like them.",
      highlights: ["Signature Buttermilk Pancakes", "Custom Omelets", "Sizzling Bacon & Sausage", "Loaded Skillets"],
      image: "/images/service-pancakes.jpg",
      imageAlt: "Stack of golden fluffy buttermilk pancakes with maple syrup",
    },
    {
      icon: <Coffee className="w-8 h-8 text-primary" />,
      title: "Premium Coffee & Beverages",
      desc: "We take our morning brew seriously. Our custom coffee blend is freshly ground and brewed throughout the day, served piping hot with bottomless refills. We also offer fresh juices, herbal teas, and classic diner milkshakes.",
      highlights: ["Bottomless Premium Coffee", "Fresh Squeezed Orange Juice", "Assorted Herbal Teas", "Diner Milkshakes"],
      image: "/images/service-coffee.jpg",
      imageAlt: "Hot freshly brewed coffee in a classic diner mug",
    },
    {
      icon: <Flame className="w-8 h-8 text-primary" />,
      title: "The Famous Chicken Fried Steak",
      desc: "An Idaho legend! Our tender, hand-breaded chicken fried steak is fried to a perfect golden crisp, smothered in our rich, house-made country sausage gravy, and served with two farm-fresh eggs, hash browns, and toast.",
      highlights: ["Hand-Breaded Daily", "House-Made Sausage Gravy", "Farm-Fresh Eggs", "Crispy Hash Browns"],
      image: "/images/service-biscuits-gravy.jpg",
      imageAlt: "House-made biscuits smothered in rich country sausage gravy",
    },
    {
      icon: <Utensils className="w-8 h-8 text-primary" />,
      title: "Hearty Brunch & Lunch Classics",
      desc: "Transitioning to lunch? We've got you covered with a selection of classic diner sandwiches, juicy flame-grilled burgers, fresh garden salads, and comforting house-made soups. Perfect for a midday pick-me-up.",
      highlights: ["Classic Club Sandwich", "Flame-Grilled Burgers", "Fresh Garden Salads", "Seasonal House Soups"],
      image: "/images/service-breakfast-plate.jpg",
      imageAlt: "Classic American breakfast plate with eggs, bacon, and toast",
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "Quick & Easy Takeout Services",
      desc: "In a hurry? Get the same delicious, home-cooked taste on the go. Call our Meridian line directly at (208) 888-4517, place your order with our friendly staff, and we'll have it fresh, hot, and packaged perfectly for your drive.",
      highlights: ["Fast Phone Ordering", "Secure Packaging", "Curbside Pickup Available", "Hot & Fresh Guarantee"],
      image: null,
      imageAlt: null,
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Family & Community Catering",
      desc: "Bring the taste of Sunrise to your next local event, family gathering, or office meeting. We offer customized catering platters featuring our breakfast burritos, fresh pastries, and portable coffee boxes designed to feed any crowd.",
      highlights: ["Breakfast Burrito Platters", "Fresh Pastry Boxes", "Portable Coffee Dispensers", "Custom Event Planning"],
      image: null,
      imageAlt: null,
    },
  ];

  return (
    <Layout>
      {/* Header Banner Section with photo background */}
      <section className="relative overflow-hidden py-24 text-primary-foreground border-b border-border/10">
        <div className="absolute inset-0 z-0">
          <img
            src="/images/service-breakfast-plate.jpg"
            alt="Hearty breakfast plate at The Original Sunrise Cafe"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none z-10"></div>
        <div className="container text-center max-w-3xl mx-auto flex flex-col gap-4 relative z-20">
          <span className="text-xs sm:text-sm font-bold text-secondary tracking-wider uppercase bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full self-center">
            Our Menu & Offerings
          </span>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary-foreground leading-tight">
            Hearty Comfort Food Crafted with Care
          </h1>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            From classic diner breakfast favorites to savory lunch plates, explore the services and culinary delights we offer daily in Meridian.
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground rounded-3xl border border-border/40 hover:border-primary/20 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group relative overflow-hidden"
              >
                {/* Service photo (if available) */}
                {service.image && (
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.imageAlt!}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/40 to-transparent"></div>
                  </div>
                )}

                <div className="p-8 flex flex-col gap-6">
                  {/* Accent glow on card hover */}
                  <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-secondary/5 group-hover:bg-secondary/10 transition-colors duration-300 blur-xl"></div>

                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-secondary/20 flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-105">
                      {service.icon}
                    </div>
                    <div className="flex flex-col gap-2">
                      <h2 className="font-serif font-bold text-xl sm:text-2xl text-primary group-hover:text-primary/90 transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                        {service.desc}
                      </p>
                    </div>
                  </div>

                  {/* Service Highlights / Bullet alternatives */}
                  <div className="border-t border-border/40 pt-4 mt-auto">
                    <p className="text-xs font-bold text-accent tracking-wider uppercase mb-3">Popular Options Included:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {service.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm text-foreground/80">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0"></span>
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Local Quality Promise */}
      <section className="py-16 bg-muted/30 border-t border-b border-border/40">
        <div className="container text-center max-w-2xl mx-auto flex flex-col gap-6">
          <Smile className="w-12 h-12 text-secondary mx-auto" />
          <h2 className="font-serif font-bold text-2xl sm:text-3xl text-foreground">Dietary Accommodations & Custom Orders</h2>
          <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
            Have dietary preferences or allergies? Our kitchen is happy to accommodate your requests. From gluten-friendly pancakes to egg-white omelets and vegetarian substitutions, just let your server know or mention it when calling in your takeout order.
          </p>
          <div className="mt-2">
            <a
              href="tel:2088884517"
              className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 shadow-sm"
            >
              <Phone className="w-4 h-4" />
              <span>Ask About Daily Specials: (208) 888-4517</span>
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
}

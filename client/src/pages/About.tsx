import React from "react";
import { Heart, Sun, Shield, Award, Users, Star, Utensils, Phone } from "lucide-react";
import Layout from "@/components/Layout";

export default function About() {
  const values = [
    {
      icon: <Heart className="w-6 h-6 text-primary" />,
      title: "Family First",
      desc: "We treat every customer who walks through our doors like a member of our own family, with warm smiles and genuine hospitality.",
    },
    {
      icon: <Shield className="w-6 h-6 text-primary" />,
      title: "Quality Ingredients",
      desc: "We source our ingredients locally whenever possible, ensuring fresh, wholesome, and delicious meals every single day.",
    },
    {
      icon: <Award className="w-6 h-6 text-primary" />,
      title: "Community Roots",
      desc: "As a local Idaho business, we take pride in supporting Boise and Meridian charities, youth sports, and neighborhood events.",
    },
  ];

  return (
    <Layout>
      {/* Header Banner Section with photo background */}
      <section className="relative overflow-hidden py-24 text-primary-foreground border-b border-border/10">
        {/* Background photo */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/hero-diner.jpg"
            alt="The Original Sunrise Cafe interior"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-primary/85"></div>
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none z-10"></div>
        <div className="container text-center max-w-3xl mx-auto flex flex-col gap-4 relative z-20">
          <span className="text-xs sm:text-sm font-bold text-secondary tracking-wider uppercase bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full self-center">
            Our Story & Legacy
          </span>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary-foreground leading-tight">
            Proudly Serving the Treasure Valley Since 1995
          </h1>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Discover the history, the passion, and the dedicated family behind Boise and Meridian's favorite breakfast and brunch destination.
          </p>
        </div>
      </section>

      {/* Main Narrative Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Real restaurant photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md rounded-3xl overflow-hidden shadow-xl border border-border/40">
                <img
                  src="/images/about-restaurant.jpg"
                  alt="The Original Sunrise Cafe warm dining atmosphere"
                  className="w-full h-96 object-cover"
                  loading="lazy"
                />
                {/* Overlay badge */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent p-6">
                  <div className="flex flex-col gap-2">
                    <h3 className="font-serif font-bold text-2xl text-secondary">Est. 1995</h3>
                    <div className="flex gap-1 text-secondary">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <p className="text-xs text-primary-foreground/80 font-semibold">1,500+ Five-Star Guest Reviews</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative Story */}
            <div className="lg:col-span-7 flex flex-col gap-6 text-left">
              <span className="text-sm font-bold text-accent tracking-wider uppercase">How It All Started</span>
              <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground leading-tight">
                A Dream Built on Butter, Batter, and Boise Pride
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                The story of The Original Sunrise Cafe began in 1995 with a simple goal: to create a warm, inviting neighborhood diner where families could gather for a delicious, hearty breakfast without breaking the bank. We wanted to build a place that felt like an extension of our own kitchen—where the coffee is always fresh, the portions are always generous, and everyone is greeted by name.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Over the last three decades, Boise and Meridian have grown and changed tremendously, but our core mission has remained exactly the same. Our kitchen team still wakes up before dawn to hand-bread our famous chicken fried steak, whisk our pancake batter from scratch, and prep fresh local ingredients for our signature skillets.
              </p>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                We believe that breakfast is more than just the first meal of the day—it's a time to connect with family, share a laugh with friends, and start your morning with a positive spirit. We are deeply grateful to the Boise and Meridian communities for welcoming us into your lives and making us a part of your morning traditions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-muted/30 border-t border-b border-border/40">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto flex flex-col gap-4 mb-16">
            <span className="text-sm font-bold text-accent tracking-wider uppercase">Our Core Philosophy</span>
            <h2 className="font-serif font-bold text-3xl sm:text-4xl text-foreground">
              The Values That Guide Our Kitchen & Service
            </h2>
            <p className="text-muted-foreground">
              Every dish we serve and every smile we share is guided by our commitment to quality, community, and local family heritage.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="bg-card text-card-foreground p-8 rounded-2xl border border-border/40 shadow-sm flex flex-col gap-4 group"
              >
                <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                  {value.icon}
                </div>
                <h3 className="font-serif font-bold text-xl text-primary">{value.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Teaser with food photo strip */}
      <section className="py-20 bg-background">
        <div className="container">
          {/* Photo strip */}
          <div className="grid grid-cols-3 gap-3 mb-12 rounded-2xl overflow-hidden max-w-3xl mx-auto">
            <img
              src="/images/service-pancakes.jpg"
              alt="Fluffy buttermilk pancakes"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <img
              src="/images/service-breakfast-plate.jpg"
              alt="Classic American breakfast plate"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
            <img
              src="/images/service-biscuits-gravy.jpg"
              alt="House-made biscuits and gravy"
              className="w-full h-40 object-cover"
              loading="lazy"
            />
          </div>

          <div className="text-center max-w-3xl mx-auto flex flex-col gap-6">
            <Users className="w-12 h-12 text-secondary mx-auto" />
            <h2 className="font-serif font-bold text-3xl text-foreground">Our Dedicated Morning Crew</h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Our incredible kitchen staff, friendly servers, and welcoming hosts are the heartbeat of The Original Sunrise Cafe. Many of our team members have been with us for years, dedicating their early mornings to making sure your coffee cup is never empty and your food is prepared exactly to your liking. The next time you visit us in Meridian, be sure to say hello!
            </p>
            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-4">
              <a
                href="tel:2088884517"
                className="flex items-center justify-center gap-2 bg-secondary text-secondary-foreground hover:bg-secondary/90 px-6 py-3 rounded-xl font-bold transition-all duration-200 active:scale-95 shadow-sm"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us: (208) 888-4517</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

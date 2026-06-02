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
      {/* Header Banner Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-b border-border/10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="container text-center max-w-3xl mx-auto flex flex-col gap-4 relative z-10">
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
            {/* Left Column: Artistic Brand Graphic (No stock images) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-br from-secondary/30 via-accent/10 to-primary/10 p-8 sm:p-12 rounded-3xl border border-border/40 shadow-inner flex flex-col gap-6 text-center overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-secondary/10 blur-xl pointer-events-none"></div>
                <Sun className="w-16 h-16 text-secondary mx-auto animate-spin-slow" />
                <h3 className="font-serif font-bold text-2xl text-primary">Est. 1995</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  "Over 30 years of early mornings, hot coffee, and full plates. We're proud to be Boise's home away from home."
                </p>
                <div className="border-t border-border/40 pt-4 mt-2">
                  <div className="flex justify-center gap-1 text-secondary mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground font-semibold">1,500+ Five-Star Guest Reviews</p>
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

      {/* Meet the Team Teaser */}
      <section className="py-20 bg-background">
        <div className="container text-center max-w-3xl mx-auto flex flex-col gap-6">
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
      </section>
    </Layout>
  );
}

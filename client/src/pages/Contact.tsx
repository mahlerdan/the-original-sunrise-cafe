import React from "react";
import { Phone, MapPin, Clock, Mail, Calendar, HelpCircle, Navigation, Info } from "lucide-react";
import Layout from "@/components/Layout";
import LocalMap from "@/components/LocalMap";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-primary" />,
      title: "Call Us Directly",
      details: "(208) 888-4517",
      subtext: "Call ahead to order takeout or check wait times.",
      action: "tel:2088884517",
      actionText: "Call Now",
    },
    {
      icon: <MapPin className="w-5 h-5 text-primary" />,
      title: "Visit Our Location",
      details: "805 N Main St, Meridian, ID 83642",
      subtext: "Right in the heart of historic downtown Meridian.",
      action: "https://maps.google.com/?q=805+N+Main+St,+Meridian,+ID+83642",
      actionText: "Get Directions",
    },
  ];

  const hours = [
    { day: "Monday", time: "6:00 AM - 2:00 PM" },
    { day: "Tuesday", time: "6:00 AM - 2:00 PM" },
    { day: "Wednesday", time: "6:00 AM - 2:00 PM" },
    { day: "Thursday", time: "6:00 AM - 2:00 PM" },
    { day: "Friday", time: "6:00 AM - 2:00 PM" },
    { day: "Saturday", time: "6:00 AM - 2:00 PM" },
    { day: "Sunday", time: "6:00 AM - 2:00 PM" },
  ];

  return (
    <Layout>
      {/* Header Banner Section */}
      <section className="relative overflow-hidden py-16 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground border-b border-border/10">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-secondary/10 blur-3xl pointer-events-none"></div>
        <div className="container text-center max-w-3xl mx-auto flex flex-col gap-4 relative z-10">
          <span className="text-xs sm:text-sm font-bold text-secondary tracking-wider uppercase bg-secondary/10 border border-secondary/20 px-4 py-1.5 rounded-full self-center">
            Get In Touch
          </span>
          <h1 className="font-serif font-extrabold text-3xl sm:text-4xl md:text-5xl text-primary-foreground leading-tight">
            We'd Love to Hear From You
          </h1>
          <p className="text-primary-foreground/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Have a question, want to order some fresh takeout, or planning a group visit? Reach out to our friendly Meridian team today.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Column: Info & Hours */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Quick Contact Cards */}
              <div className="flex flex-col gap-4">
                <h2 className="font-serif font-bold text-2xl text-primary">Contact Details</h2>
                <div className="grid grid-cols-1 gap-4">
                  {contactInfo.map((info, idx) => (
                    <div
                      key={idx}
                      className="bg-card text-card-foreground p-6 rounded-2xl border border-border/40 shadow-sm flex flex-col gap-4 group hover:border-primary/20 transition-all duration-300"
                    >
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-secondary/20 flex items-center justify-center shrink-0">
                          {info.icon}
                        </div>
                        <h3 className="font-serif font-bold text-lg text-primary">{info.title}</h3>
                      </div>
                      <div className="flex flex-col">
                        <p className="font-bold text-foreground">{info.details}</p>
                        <p className="text-xs text-muted-foreground mt-1">{info.subtext}</p>
                      </div>
                      <a
                        href={info.action}
                        target={info.action.startsWith("http") ? "_blank" : undefined}
                        rel={info.action.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-xs font-bold text-accent hover:underline flex items-center gap-1 self-start mt-1"
                      >
                        <span>{info.actionText}</span>
                        <Navigation className="w-3 h-3" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours Panel */}
              <div className="bg-card text-card-foreground p-8 rounded-3xl border border-border/40 shadow-sm flex flex-col gap-6">
                <div className="flex items-center gap-3 border-b border-border/40 pb-4">
                  <Clock className="w-6 h-6 text-secondary" />
                  <h2 className="font-serif font-bold text-2xl text-primary">Our Operating Hours</h2>
                </div>
                <ul className="flex flex-col gap-3">
                  {hours.map((h, idx) => (
                    <li
                      key={idx}
                      className="flex justify-between items-center text-sm sm:text-base border-b border-border/10 pb-2 last:border-0 last:pb-0"
                    >
                      <span className="font-medium text-foreground/80">{h.day}</span>
                      <span className="font-bold text-primary">{h.time}</span>
                    </li>
                  ))}
                </ul>
                <div className="bg-secondary/10 border border-secondary/20 p-4 rounded-xl flex gap-3 items-start">
                  <Info className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Breakfast is proudly served all day, every day! Lunch items are available starting at 11:00 AM daily. Holiday hours may vary.
                  </p>
                </div>
              </div>

            </div>

            {/* Right Column: Beautiful Local Map */}
            <div className="lg:col-span-7 flex flex-col gap-6">
              <h2 className="font-serif font-bold text-2xl text-primary">Find Us on the Map</h2>
              <LocalMap />
            </div>

          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Section */}
      <section className="py-20 bg-muted/30 border-t border-border/40">
        <div className="container max-w-4xl mx-auto">
          <div className="text-center flex flex-col gap-4 mb-16">
            <HelpCircle className="w-12 h-12 text-secondary mx-auto" />
            <h2 className="font-serif font-bold text-3xl text-foreground">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">
              Have a quick question? Here are some of the most common inquiries from our Treasure Valley guests.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border/40 shadow-sm flex flex-col gap-2">
              <h3 className="font-serif font-bold text-lg text-primary">Do you accept reservations?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We operate on a first-come, first-served basis and do not take traditional reservations. However, you can call us at (208) 888-4517 to check current wait times before driving over.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border/40 shadow-sm flex flex-col gap-2">
              <h3 className="font-serif font-bold text-lg text-primary">Do you offer takeout?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes! Our complete breakfast and lunch menus are available for takeout. Just call us directly, place your order, and we'll have it fresh and hot for you to pick up.
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border/40 shadow-sm flex flex-col gap-2">
              <h3 className="font-serif font-bold text-lg text-primary">Are there gluten-free options?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We offer several gluten-friendly options, including gluten-free pancake batter, egg-white omelets, and customized breakfast plates. Please let your server know about any allergies!
              </p>
            </div>
            <div className="bg-card text-card-foreground p-6 rounded-2xl border border-border/40 shadow-sm flex flex-col gap-2">
              <h3 className="font-serif font-bold text-lg text-primary">Is parking available?</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Yes, there is ample free street parking and public parking lots available right around our historic downtown Meridian location.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

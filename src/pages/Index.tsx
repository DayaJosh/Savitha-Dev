import { Link } from "react-router-dom";
import PropertyCard from "@/components/PropertyCard";
import ScrollSection from "@/components/ScrollSection";
import TestimonialCard from "@/components/TestimonialCard";
import heroImage from "@/assets/frisco-hero.jpg";
import listingBurbank from "@/assets/listing-burbank.webp";
import listingPaley from "@/assets/listing-paley.webp";

const featuredListings = [
  {
    image: listingBurbank,
    price: "$480,000",
    address: "6420 Burbank Way",
    city: "Plano, TX 75024",
    beds: 3,
    baths: 3,
    sqft: "1,919",
    tag: "For Sale" as const,
    link: "https://www.zillow.com/homedetails/6420-Burbank-Way-Plano-TX-75024/242103940_zpid/?utm_campaign=zillowwebmessage&utm_medium=referral&utm_source=txtshare",
  },
  {
    image: listingPaley,
    price: "$625,000",
    address: "1513 Paley Park Dr",
    city: "Prosper, TX 75078",
    beds: 5,
    baths: 4,
    sqft: "3,798",
    tag: "For Sale" as const,
    status: "Under Contract" as const,
    link: "https://www.zillow.com/homedetails/1513-Paley-Park-Dr-Prosper-TX-75078/243577566_zpid/?utm_campaign=zillowwebmessage&utm_medium=referral&utm_source=txtshare",
  },
];

const testimonials = [
  { text: "I had the pleasure of working with Savitha, and I can't recommend her enough! She was exceptional in every way—extremely knowledgeable, professional, and attentive to every detail. From the very beginning, she took the time to understand my needs and guided me through the process with expertise and patience. Her commitment to providing outstanding service made the experience seamless and enjoyable. If you're looking for a realtor who truly goes above and beyond, Savitha is the one to call!", name: "Elicia Crouch" },
  { text: "Savitha represented us a buyer agent when we bought our single family home. Savitha took the time in walking us through the property, helped with home inspection during the option period, negotiated with seller's agent in paying for some of the observations as part of the home inspection and in closing.", name: "Narasimha Ramu" },
  { text: "I want to extend my heartfelt thanks for your exceptional support in finding the perfect location for our new home. Your dedication throughout the entire process—from helping us during construction, making multiple site visits, to guiding us with your complete knowledge of the market—has been invaluable. You truly went above and beyond, making sure everything went smoothly right up until closing. I couldn't have asked for a better experience, and I'm incredibly grateful for your expertise and commitment. Thank you for making this journey a positive and stress-free one!", name: "Arunprasad Chandran" },
];

const Index = () => {
  return (
  <main>
    {/* Hero */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroImage}
        alt="Modern home in the Dallas-Fort Worth area"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
        fetchPriority="high"
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-foreground/50" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in">
        <p className="font-serif text-lg md:text-xl text-primary-foreground tracking-wide mb-5">
          Savitha Rameshkumar <span className="text-primary-foreground/50">·</span> LM Max Realty
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl text-primary-foreground leading-tight">
          Your Trusted<br />Dallas-Fort Worth<br />Real Estate Expert
        </h1>
        <p className="mt-8 text-primary-foreground/80 max-w-lg mx-auto leading-relaxed">
          Helping families find their dream homes across the DFW metroplex with personalized service and deep local expertise.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link to="/listings" className="px-8 py-3 bg-primary-foreground text-foreground text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
            Search Homes
          </Link>
          <Link to="/home-valuation" className="px-8 py-3 border border-primary-foreground text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-foreground transition-colors">
            Home Valuation
          </Link>
          <Link to="/contact" className="px-8 py-3 border border-primary-foreground text-primary-foreground text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-foreground transition-colors">
            Let's Connect
          </Link>
        </div>
      </div>

      {/* Bottom text */}
      <div className="absolute bottom-12 left-0 right-0 z-20 text-center">
        <p className="text-sm md:text-base text-primary-foreground/80 tracking-widest uppercase">
          Over 50+ Homes Sold and Leased
        </p>
      </div>
    </section>

    {/* Intro */}
    <section className="py-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <ScrollSection>
          <h2 className="text-3xl md:text-4xl mb-6">Welcome</h2>
          <p className="text-muted-foreground leading-relaxed">
            With over five years of experience in the Dallas-Fort Worth real estate market, I'm dedicated to providing an
            exceptional, personalized experience for every client. Whether you're buying your first home, upgrading to your
            dream property, or selling to move forward, I'll guide you through every step with expertise and genuine care.
          </p>
          <Link to="/about" className="inline-block mt-8 text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
            Learn More About Me
          </Link>
        </ScrollSection>
      </div>
    </section>

    {/* Featured Listings - For Sale */}
    <section className="py-24 bg-secondary">
      <div className="container mx-auto px-6">
        <ScrollSection>
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl md:text-4xl">Featured Homes</h2>
          </div>
        </ScrollSection>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredListings.map((listing, i) => (
            <ScrollSection key={listing.address} delay={i * 0.1}>
              <PropertyCard {...listing} />
            </ScrollSection>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/listings" className="text-sm tracking-widest uppercase border-b border-foreground pb-1 hover:opacity-70 transition-opacity">
            View Listings For Lease
          </Link>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="py-24">
      <div className="container mx-auto px-6">
        <ScrollSection>
          <h2 className="text-3xl md:text-4xl text-center mb-16">What My Clients Say</h2>
        </ScrollSection>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {testimonials.map((t, i) => (
            <ScrollSection key={t.name} delay={i * 0.15}>
              <TestimonialCard text={t.text} name={t.name} />
            </ScrollSection>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <ScrollSection>
      <section className="py-24 bg-primary text-primary-foreground text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl mb-4">Ready to Make a Move?</h2>
          <p className="opacity-70 max-w-md mx-auto mb-8">
            Let's discuss your real estate goals. I'd love to help you find your perfect home in DFW.
          </p>
          <Link to="/contact" className="inline-block px-8 py-3 border border-primary-foreground text-sm tracking-widest uppercase hover:bg-primary-foreground hover:text-primary transition-colors">
            Get in Touch
          </Link>
        </div>
      </section>
    </ScrollSection>
  </main>
  );
};

export default Index;

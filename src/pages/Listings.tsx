import { Link } from "react-router-dom";
import { HelpCircle } from "lucide-react";
import PropertyCard from "@/components/PropertyCard";
import listingBurbank from "@/assets/listing-burbank.webp";
import listingPaley from "@/assets/listing-paley.webp";
import listingCrestwood from "@/assets/listing-crestwood.webp";
import listingPrinceton from "@/assets/listing-princeton.webp";
import listingLynx from "@/assets/listing-lynx.webp";

const forSaleListings = [
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

const forLeaseListings = [
  {
    image: listingCrestwood,
    price: "$3,490/month",
    address: "1901 Crestwood Ln",
    city: "Celina, TX 75009",
    beds: 5,
    baths: 4,
    sqft: "3,586",
    tag: "For Lease" as const,
    link: "https://www.zillow.com/homedetails/1901-Crestwood-Ln-Celina-TX-75009/341950514_zpid/?utm_campaign=zillowwebmessage&utm_medium=referral&utm_source=txtshare",
  },
  {
    image: listingPrinceton,
    price: "$1,995/month",
    address: "1211 Princeton Heights Blvd",
    city: "Princeton, TX 75407",
    beds: 3,
    baths: 2,
    sqft: "1,401",
    tag: "For Lease" as const,
    link: "https://www.zillow.com/homedetails/1211-Princeton-Hts-Princeton-TX-75407/339771620_zpid/?utm_campaign=zillowwebmessage&utm_medium=referral&utm_source=txtshare",
  },
  {
    image: listingLynx,
    price: "$2,700/month",
    address: "3900 Lynx Ct",
    city: "Little Elm, TX 75068",
    beds: 4,
    baths: 3,
    sqft: "2,449",
    tag: "For Lease" as const,
    link: "https://www.zillow.com/homedetails/3900-Lynx-Ct-Little-Elm-TX-75068/458066674_zpid/?utm_campaign=zillowwebmessage&utm_medium=referral&utm_source=txtshare",
  },
];

const Listings = () => {
  return (
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl mb-4">Listings</h1>
          <p className="text-muted-foreground mb-12 max-w-xl">
            Browse available properties across the Dallas-Fort Worth metroplex.
          </p>

          {/* For Sale */}
          <h2 className="text-2xl md:text-3xl mb-8">For Sale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {forSaleListings.map((listing) => (
              <PropertyCard key={listing.address} {...listing} />
            ))}
            {/* Inquiry card */}
            <Link to="/contact" className="group cursor-pointer block">
              <div className="overflow-hidden relative bg-muted flex items-center justify-center aspect-[4/3]">
                <div className="text-center transition-transform duration-300 group-hover:scale-110">
                  <HelpCircle size={48} className="mx-auto text-muted-foreground mb-2" />
                  <p className="text-4xl font-serif text-muted-foreground">???</p>
                </div>
                <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="px-6 py-2 border border-primary-foreground text-primary-foreground text-sm tracking-widest uppercase">
                    Inquire to Sell/Lease House
                  </span>
                </div>
              </div>
              <div className="pt-4 pb-2">
                <p className="font-serif text-xl text-muted-foreground">Your Home Here</p>
                <p className="text-sm text-muted-foreground mt-1">Ready to sell or lease?</p>
                <p className="text-sm text-muted-foreground">Contact me today</p>
              </div>
            </Link>
          </div>

          {/* For Lease */}
          <h2 className="text-2xl md:text-3xl mb-8">For Lease</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {forLeaseListings.map((listing) => (
              <PropertyCard key={listing.address} {...listing} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Listings;

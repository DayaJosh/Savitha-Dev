import { Bath, BedDouble, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  address: string;
  city: string;
  beds: number;
  baths: number;
  sqft: string;
  tag?: "For Sale" | "For Lease";
  status?: "Under Contract";
  link?: string;
}

const PropertyCard = ({ image, price, address, city, beds, baths, sqft, tag, status, link }: PropertyCardProps) => {
  const content = (
    <div className="group cursor-pointer">
      <div className="overflow-hidden relative">
        <img
          src={image}
          alt={address}
          loading="lazy"
          width={800}
          height={600}
          className="w-full aspect-[4/3] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <span className={`absolute top-3 left-3 px-3 py-1 text-xs tracking-widest uppercase font-medium ${
            tag === "For Sale" ? "bg-primary text-primary-foreground" : "bg-accent text-accent-foreground"
          }`}>
            {tag}
          </span>
        )}
        {status && (
          <span className="absolute top-3 right-3 px-3 py-1 text-xs tracking-widest uppercase font-medium bg-amber-500 text-white">
            {status}
          </span>
        )}
        {link && (
          <div className="absolute inset-0 bg-foreground/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="px-6 py-2 border border-primary-foreground text-primary-foreground text-sm tracking-widest uppercase">
              View on Zillow
            </span>
          </div>
        )}
      </div>
      <div className="pt-4 pb-2">
        <p className="font-serif text-xl">{price}</p>
        <p className="text-sm text-muted-foreground mt-1">{address}</p>
        <p className="text-sm text-muted-foreground">{city}</p>
        <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
          <span className="flex items-center gap-1"><BedDouble size={14} /> {beds} Beds</span>
          <span className="flex items-center gap-1"><Bath size={14} /> {baths} Baths</span>
          <span className="flex items-center gap-1"><Maximize size={14} /> {sqft} Sq Ft</span>
        </div>
      </div>
    </div>
  );

  if (link) {
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return content;
};

export default PropertyCard;

import { MapPin, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import ScrollSection from "@/components/ScrollSection";
const areas = [
  { name: "Dallas", desc: "From uptown condos to Preston Hollow estates, Dallas offers diverse living at every price point." },
  { name: "Fort Worth", desc: "A vibrant blend of Western heritage and modern living with charming neighborhoods and excellent schools." },
  { name: "Frisco", desc: "One of the fastest-growing cities in the nation, known for top-rated schools and master-planned communities." },
  { name: "Prosper", desc: "A rapidly growing community offering luxury homes, open spaces, and a small-town feel." },
  { name: "McKinney", desc: "Named one of the best places to live in America, with a historic downtown and beautiful neighborhoods." },
  { name: "Plano", desc: "A thriving city with excellent dining, corporate headquarters, and family-friendly communities." },
  { name: "Allen", desc: "Known for its strong community spirit, great parks, and highly rated school district." },
  { name: "Celina", desc: "An emerging suburb with new construction, wide open spaces, and exciting growth potential." },
  { name: "Little Elm", desc: "A lakeside community with outdoor recreation, growing amenities, and family-friendly neighborhoods." },
  { name: "Coppell", desc: "A well-established city with top-rated schools, beautiful parks, and a tight-knit community feel." },
  { name: "Irving", desc: "A dynamic city with diverse housing options, cultural attractions, and proximity to major employment centers." },
  { name: "Lewisville", desc: "Situated near Lewisville Lake, offering a mix of waterfront living and suburban convenience." },
  { name: "The Colony", desc: "A growing lakeside community with excellent amenities, dining, and entertainment options." },
  { name: "Flower Mound", desc: "Known for its scenic beauty, excellent schools, and family-oriented master-planned communities." },
  { name: "Argyle", desc: "A charming rural community offering spacious lots, equestrian properties, and a peaceful lifestyle." },
  { name: "Northlake", desc: "A fast-growing area with new construction homes and convenient access to the DFW metroplex." },
  { name: "Denton", desc: "A vibrant college town with a lively downtown, diverse culture, and affordable housing options." },
  { name: "Krum", desc: "A small-town community with rural charm, growing development, and a welcoming atmosphere." },
  { name: "Melissa", desc: "A rapidly expanding city with new neighborhoods, great schools, and a strong sense of community." },
  { name: "Sherman", desc: "A historic North Texas city with affordable homes, a revitalized downtown, and steady growth." },
  { name: "Van Alstyne", desc: "A small town experiencing exciting growth with new homes and a friendly, close-knit community." },
  { name: "Anna", desc: "One of the fastest-growing cities in the region, offering new construction and family-friendly living." },
  { name: "Princeton", desc: "A booming community with affordable new homes, excellent schools, and easy access to the metroplex." },
  { name: "Farmersville", desc: "A quaint town with a rich agricultural heritage, affordable living, and small-town charm." },
  { name: "Greenville", desc: "A historic city with affordable housing, a growing economy, and a revitalized downtown district." },
];

const Areas = () => (
  <main className="pt-20">
    <section className="py-24">
      <div className="container mx-auto px-6">
        <ScrollSection>
          <h1 className="text-4xl md:text-5xl mb-4">Areas I Serve</h1>
          <p className="text-muted-foreground mb-16 max-w-xl">
            I proudly serve communities across the entire Dallas-Fort Worth metroplex.
          </p>
        </ScrollSection>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, i) => (
            <ScrollSection key={area.name} delay={i * 0.08}>
              <div className="bg-secondary p-8 hover:bg-accent transition-colors group h-full">
                <MapPin size={20} className="text-muted-foreground mb-4 group-hover:text-foreground transition-colors" />
                <h3 className="text-xl mb-2">{area.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{area.desc}</p>
              </div>
            </ScrollSection>
          ))}
          {/* Fill remaining 3 slots with CTA card spanning 3 columns */}
          <ScrollSection delay={areas.length * 0.08}>
            <Link
              to="/contact"
              className="bg-secondary p-8 hover:bg-foreground hover:text-background transition-colors group h-full flex flex-col items-center justify-center text-center col-span-1 md:col-span-2 lg:col-span-3 block"
            >
              <ArrowRight size={24} className="text-muted-foreground mb-4 group-hover:text-background transition-colors" />
              <h3 className="text-xl mb-2">I also work with areas that you request for</h3>
              <p className="text-sm text-muted-foreground group-hover:text-background/70 transition-colors">Click to get in touch</p>
            </Link>
          </ScrollSection>
        </div>
      </div>
    </section>
  </main>
);

export default Areas;

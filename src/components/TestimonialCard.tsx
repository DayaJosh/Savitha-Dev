import { useState } from "react";
import { Quote, Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  name: string;
}

const TestimonialCard = ({ text, name }: TestimonialCardProps) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="text-center">
      <div className="flex justify-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={16} className="text-muted-foreground fill-muted-foreground" />
        ))}
      </div>
      <p
        className={`text-muted-foreground leading-relaxed italic mb-2 ${
          expanded ? "" : "line-clamp-3"
        }`}
      >
        "{text}"
      </p>
      <button
        onClick={() => setExpanded(!expanded)}
        className="text-xs tracking-widest uppercase text-foreground mb-6 hover:opacity-70 transition-opacity"
      >
        {expanded ? "Show less" : "Read more"}
      </button>
      <p className="font-serif text-lg">{name}</p>
    </div>
  );
};

export default TestimonialCard;

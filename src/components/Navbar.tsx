import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import easterEggHouse from "@/assets/easter-egg-house.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/listings", label: "Listings" },
  { to: "/areas", label: "Areas" },
  { to: "/home-valuation", label: "Home Valuation" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-20 px-6">
        <Link to="/" className="font-serif text-2xl tracking-wide text-foreground">
          Savitha Rameshkumar
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm tracking-widest uppercase transition-colors ${
                location.pathname === link.to
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="group ml-4 px-6 py-2.5 bg-foreground text-background text-sm tracking-widest uppercase transition-all hover:pb-1 relative overflow-hidden flex flex-col items-center"
          >
            <span className="transition-transform duration-300 group-hover:-translate-y-2">Contact</span>
            <img
              src={easterEggHouse}
              alt=""
              className="w-6 h-6 absolute bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-[-2px]"
              width={24}
              height={24}
            />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          className="md:hidden text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div id="mobile-navigation" className="md:hidden bg-background border-b border-border px-6 pb-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-sm tracking-widest uppercase text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setMobileOpen(false)}
            className="block mt-4 px-6 py-2.5 bg-foreground text-background text-sm tracking-widest uppercase text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

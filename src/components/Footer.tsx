import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";
import lmMaxLogo from "@/assets/lm-max-logo.png";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="container mx-auto px-6 py-16">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
        <div>
          <h3 className="text-2xl mb-2">Savitha</h3>
          <p className="text-sm opacity-70">Licensed Realtor</p>
          <div className="flex items-center gap-2 mt-2">
            <img src={lmMaxLogo} alt="LM Max Realty" className="w-8 h-8 object-contain" />
            <p className="text-sm opacity-70">LM Max Realty</p>
          </div>
          <div className="mt-3 flex flex-col gap-1">
            <a href="https://www.dropbox.com/scl/fi/gxx6joraxtrqr0c1105h3/IABS-LM-Max-Realty-1.pdf?rlkey=c9oxhzct3fabh67k3nwv1dvpc&st=596cqgcq&dl=0" target="_blank" rel="noopener noreferrer" className="text-sm italic font-bold opacity-70 hover:opacity-100 transition-opacity">
              Information About Brokerage Services
            </a>
            <span className="text-sm italic font-bold opacity-70">and</span>
            <a href="https://www.dropbox.com/scl/fi/0u2rfy0559fypbwhiw123/Consumer-Protection-Notice-1.pdf?rlkey=tty0kw8n7rm3zmlyms03e07qc&st=l3i8o983&dl=0" target="_blank" rel="noopener noreferrer" className="text-sm italic font-bold opacity-70 hover:opacity-100 transition-opacity">
              Consumer Protection Notice
            </a>
          </div>
        </div>
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 opacity-70">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Home", "About", "Listings", "Areas", "Contact"].map((link) => (
              <Link
                key={link}
                to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                className="text-sm opacity-70 hover:opacity-100 transition-opacity"
              >
                {link}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 opacity-70">Contact</h4>
          <a className="block text-sm opacity-70 hover:opacity-100" href="mailto:savitha.realtor@gmail.com">savitha.realtor@gmail.com</a>
          <a className="block text-sm opacity-70 mt-1 hover:opacity-100" href="tel:+14016540197">+1 (401) 654-0197</a>
          <p className="text-sm opacity-70 mt-1">2301 Ohio Dr STE 243, Plano, TX 75093</p>
        </div>
        <div>
          <h4 className="text-sm tracking-widest uppercase mb-4 opacity-70">Socials</h4>
          <div className="flex items-center gap-4">
            <a href="https://www.facebook.com/savitha.rameshkumar.1" target="_blank" rel="noopener noreferrer" aria-label="Savitha on Facebook" className="opacity-70 hover:opacity-100 transition-opacity">
              <Facebook size={20} />
            </a>
            <a href="https://www.instagram.com/savitha_realtor/" target="_blank" rel="noopener noreferrer" aria-label="Savitha on Instagram" className="opacity-70 hover:opacity-100 transition-opacity">
              <Instagram size={20} />
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center">
        <p className="text-xs opacity-50">
          © {new Date().getFullYear()} PSquare Homes LLC. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;

import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "", areas: "" });
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      toast.error("Please fill in your name and email.");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to be contacted before submitting.");
      return;
    }
    toast.success("Thank you! Savitha will be in touch shortly.");
    setForm({ name: "", email: "", phone: "", interest: "", areas: "" });
    setAgreed(false);
  };

  return (
    <main className="pt-20">
      <section className="py-24">
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h1 className="text-4xl md:text-5xl mb-4">Let's Connect!</h1>
            <p className="text-muted-foreground mb-12 max-w-md leading-relaxed">
              Ready to buy, sell, or learn more about the DFW market? I'd love to hear from you.
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <Mail size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>savitha.realtor@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p>+1 (401) 654-0197</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <MapPin size={18} className="text-muted-foreground" />
                <div>
                  <p className="text-sm text-muted-foreground">Brokerage</p>
                  <p>LM Max Realty</p>
                  <p className="text-sm text-muted-foreground">2301 Ohio Dr STE 243, Plano, TX 75093</p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Name *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                maxLength={100}
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Email *</label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                maxLength={255}
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Phone</label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">I'm interested in</label>
              <select
                value={form.interest}
                onChange={(e) => setForm({ ...form, interest: e.target.value })}
                className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
              >
                <option value="">Select one...</option>
                <option value="buying">Buying a Home</option>
                <option value="selling">Selling a Home</option>
                <option value="valuation">Home Valuation</option>
            </select>
            </div>
            <div>
              <label className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">Areas of Interest</label>
              <input
                type="text"
                value={form.areas}
                onChange={(e) => setForm({ ...form, areas: e.target.value })}
                placeholder="City, City, City..."
                className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
              />
            </div>
            <div className="flex items-start gap-3">
              <Checkbox
                id="contact-consent"
                checked={agreed}
                onCheckedChange={(v) => setAgreed(v === true)}
                className="mt-0.5"
              />
              <label htmlFor="contact-consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                I agree to be contacted by Savitha Rameshkumar via call, email, and text.
              </label>
            </div>
            <button
              type="submit"
              className="w-full px-8 py-3 bg-primary text-primary-foreground text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Contact;

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { toast } from "sonner";
import { Checkbox } from "@/components/ui/checkbox";
import dfwSkyline from "@/assets/dfw-skyline.jpg";
import { submitLead } from "@/lib/leads";

const HomeValuation = () => {
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleStep1 = (e: React.FormEvent) => {
    e.preventDefault();
    if (!address.trim()) {
      toast.error("Please enter a property address.");
      return;
    }
    setStep(2);
  };

  const handleStep2 = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) {
      toast.error("Please fill in all fields.");
      return;
    }
    if (!agreed) {
      toast.error("Please agree to be contacted before continuing.");
      return;
    }
    setSubmitting(true);
    try {
      await submitLead({ source: "home_valuation", property_address: address, name, email, phone });
      setStep(3);
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Unable to submit your request.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="pt-20">
      <section className="min-h-[calc(100vh-5rem)] flex">
        {/* Left side — form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-6 py-16">
          <div className="max-w-md w-full">
            {/* Step indicators */}
            <div className="flex items-center justify-center gap-3 mb-12">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center gap-3">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors ${
                      step >= s
                        ? "bg-foreground text-background border-foreground"
                        : "border-border text-muted-foreground"
                    }`}
                  >
                    {step > s ? <CheckCircle2 size={18} /> : s}
                  </div>
                  {s < 3 && (
                    <div
                      className={`w-12 h-0.5 ${
                        step > s ? "bg-foreground" : "bg-border"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1 — Address */}
            {step === 1 && (
              <form onSubmit={handleStep1} className="space-y-8">
                <div className="text-center">
                  <h1 className="text-3xl md:text-4xl font-serif mb-3">
                    How Much Is Your Property Worth?
                  </h1>
                  <p className="text-muted-foreground text-sm">
                    Enter your property address to get started.
                  </p>
                </div>
                <div>
                  <label htmlFor="property-address" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Property Address
                  </label>
                  <input
                    id="property-address"
                    name="property-address"
                    type="text"
                    autoComplete="street-address"
                    required
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="123 Main St, Dallas, TX 75201"
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                    maxLength={200}
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-8 py-3 bg-foreground text-background text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
                >
                  Continue
                </button>
              </form>
            )}

            {/* Step 2 — Contact info */}
            {step === 2 && (
              <form onSubmit={handleStep2} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl font-serif mb-3">Your Information</h2>
                  <p className="text-muted-foreground text-sm">
                    So we can send you the valuation results.
                  </p>
                </div>
                <div>
                  <label htmlFor="valuation-name" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    id="valuation-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                    maxLength={100}
                  />
                </div>
                <div>
                  <label htmlFor="valuation-email" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Email Address *
                  </label>
                  <input
                    id="valuation-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                    maxLength={255}
                  />
                </div>
                <div>
                  <label htmlFor="valuation-phone" className="block text-xs tracking-widest uppercase text-muted-foreground mb-2">
                    Phone Number *
                  </label>
                  <input
                    id="valuation-phone"
                    name="phone"
                    type="tel"
                    autoComplete="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-secondary border border-border px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                </div>
                <div className="flex items-start gap-3">
                  <Checkbox
                    id="consent"
                    checked={agreed}
                    onCheckedChange={(v) => setAgreed(v === true)}
                    className="mt-0.5"
                  />
                  <label htmlFor="consent" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                    I agree to be contacted by Savitha Rameshkumar via call, email, and text regarding my property valuation.
                  </label>
                </div>
                <div className="flex gap-3">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="px-6 py-3 border border-border text-sm tracking-widest uppercase hover:bg-secondary transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    disabled={submitting}
                    className="flex-1 px-8 py-3 bg-foreground text-background text-sm tracking-widest uppercase hover:opacity-80 transition-opacity"
                  >
                    {submitting ? "Submitting…" : "Submit"}
                  </button>
                </div>
              </form>
            )}

            {/* Step 3 — Confirmation */}
            {step === 3 && (
              <div className="text-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-foreground text-background flex items-center justify-center mx-auto">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-3xl font-serif">Thank You!</h2>
                <p className="text-muted-foreground leading-relaxed max-w-sm mx-auto">
                  Savitha will review your property details and contact you within{" "}
                  <strong className="text-foreground">1–3 business days</strong> with your
                  home valuation.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Right side — image */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src={dfwSkyline}
            alt="Dallas-Fort Worth skyline"
            className="absolute inset-0 w-full h-full object-cover"
            width={1280}
            height={960}
          />
          <div className="absolute inset-0 bg-foreground/20" />
        </div>
      </section>
    </main>
  );
};

export default HomeValuation;

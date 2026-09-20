import { supabase } from "@/integrations/supabase/client";

export type Lead = {
  source: "contact" | "home_valuation";
  name: string;
  email: string;
  phone?: string;
  interest?: string;
  areas?: string;
  property_address?: string;
};

export async function submitLead(lead: Lead) {
  const { error } = await supabase.from("leads").insert(lead);

  if (error) {
    throw new Error("Unable to submit your request. Please call or email Savitha directly.");
  }
}

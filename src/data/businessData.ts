export interface BusinessInfo {
  name: string;
  owner: string;
  phone: string;
  phoneTel: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappUrl: string;
  location: {
    village: string;
    town: string;
    district: string;
    state: string;
    country: string;
    fullAddress: string;
    mapsUrl: string;
  };
  pricingNote: string;
  tagline: string;
  subtagline: string;
}

export const BUSINESS_DATA: BusinessInfo = {
  name: "ABI WOOD WORKS",
  owner: "Sankar",
  phone: "9585839099",
  phoneTel: "tel:+919585839099",
  phoneDisplay: "+91 95858 39099",
  whatsapp: "919585839099",
  whatsappUrl: "https://wa.me/919585839099",
  location: {
    village: "Ammachathiram",
    town: "Kumbakonam",
    district: "Thanjavur District",
    state: "Tamil Nadu",
    country: "India",
    fullAddress: "Ammachathiram, Kumbakonam, Thanjavur District, Tamil Nadu, India",
    mapsUrl: "https://www.google.com/maps/search/?api=1&query=ABI+WOOD+WORKS+Ammachathiram+Kumbakonam+Tamil+Nadu"
  },
  pricingNote: "Prices are indicative estimates only. Final cost depends on wood type, dimensions, design complexity, material quantity, fittings, polish, labour, and customization. Contact us for an accurate quotation.",
  tagline: "From Wood to Something Worth Keeping.",
  subtagline: "Thoughtfully crafted furniture, shaped around your home, your space, and your ideas."
};

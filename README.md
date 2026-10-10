# ABI WOOD WORKS — Custom Furniture Showcase Website

Official showcase website for **ABI WOOD WORKS**, a custom woodwork and furniture workshop in Ammachathiram, near Kumbakonam, Thanjavur District, Tamil Nadu, owned and run by **Sankar**.

The site presents the workshop's furniture, materials, craftsmanship and working process, and lets customers contact Sankar directly through WhatsApp, phone or an enquiry form. It is a static single-page application with no backend and no database.

---

## Table of Contents

1. [About the Business](#about-the-business)
2. [Contact Details](#contact-details)
3. [Features](#features)
4. [Website Sections](#website-sections)
5. [Furniture Collection](#furniture-collection)
6. [Enquiry Flow](#enquiry-flow)
7. [Language and Theme](#language-and-theme)
8. [Tech Stack](#tech-stack)
9. [Project Structure](#project-structure)
10. [Design System](#design-system)
11. [Updating Content](#updating-content)
12. [Known Limitations](#known-limitations)
13. [Credits](#credits)

---

## About the Business

**ABI WOOD WORKS** builds wooden furniture and customized woodwork to each customer's requirements. Sankar is the owner and master carpenter, and every order is discussed directly with him, with no intermediaries and no hidden costs.

- **Tagline:** From Wood to Something Worth Keeping.
- **Service area:** Kumbakonam and Thanjavur
- **Work:** sofas, wardrobes (bero), chairs, tables, benches, beds and cots, doors, shelves and storage, pooja units, wooden accessories and fully custom woodwork
- **Timber:** first quality teak, rosewood and hardwoods, and selected country timber

**Pricing.** Prices shown on the site are indicative estimates only. The final cost depends on wood type, dimensions, design complexity, material quantity, fittings, polish, labour and customization. Customers are asked to contact Sankar for an accurate quotation.

---

## Contact Details

| | |
|---|---|
| **Business** | ABI WOOD WORKS |
| **Owner** | Sankar |
| **Phone / WhatsApp** | [+91 95858 39099](tel:+919585839099) |
| **WhatsApp chat** | https://wa.me/919585839099 |
| **Workshop address** | Ammachathiram, Kumbakonam, Thanjavur District, Tamil Nadu, India |
| **Coordinates** | 10.985987214774537, 79.42311211308093 |
| **Directions** | [Open in Google Maps](https://www.google.com/maps/dir/?api=1&destination=10.985987214774537,79.42311211308093) |

---

## Features

- Single-page layout with smooth scrolling and an active-section indicator in the navigation bar
- Bilingual interface (English and Tamil) with a language toggle in the top bar
- Light and dark themes with a toggle
- Animated sections: scroll reveals, a rising panel over the hero, staggered entrances and hover effects
- Furniture collection with a scrollable category filter and a product detail modal
- Enquiry form that composes a ready-to-send WhatsApp message
- Direct WhatsApp and call buttons on every screen size, plus a fixed mobile action bar
- Embedded Google Map of the workshop with a Get Directions button
- Portfolio gallery that separates verified workshop projects from design inspiration
- Fully responsive layout for phones, tablets and desktops
- Accessible modals with focus and scroll handling

---

## Website Sections

The page is built from the sections below, in this order.

| Section | Anchor | Purpose |
|---|---|---|
| Hero | `#hero` | Opening banner with the tagline and calls to action for a quote and the collection |
| Material | `#material` | The timber the workshop uses: First Quality Teak Wood, Rosewood and Hardwoods, Selected Country Timber |
| Craftsmanship | `#craftsmanship` | Precision Measurements, Design Discussion, Solid Wood Construction, Multi-Layer Polish |
| Collection | `#collection` | Filterable furniture catalogue with product details and enquiry buttons |
| Custom Work | `#custom-work` | How custom orders work: Share Your Idea, Discuss Design and Measurements, Confirm and Crafting |
| Process | `#process` | Six steps from first conversation to handover |
| Portfolio | `#portfolio` | Gallery of work and inspiration |
| About | `#about` | The workshop, Sankar's portrait and verified business details |
| Contact | `#contact` | WhatsApp, call and enquiry buttons, embedded map and directions |
| Footer | | Page links, quick connect buttons, pricing note and credits |

### Working Process

1. **Requirement Discussion** — furniture needs, room space, design preferences and intended use
2. **Measurements** — room dimensions and doorway clearance, so the piece fits
3. **Material and Design** — choice of timber (teak, rosewood, hardwood) and polish shade
4. **Crafting** — traditional joinery in solid timber by Sankar
5. **Finishing** — hand sanding, sealer coats, stain matching and protective topcoats
6. **Handover** — collection or delivery as agreed

---

## Furniture Collection

The catalogue has 12 filter categories and 10 products.

| Category | Description |
|---|---|
| All Collections | The complete range of custom woodwork |
| Wooden Sofas | Solid wood lounge sofas, 3-seaters and sectional frames |
| Wardrobes / Bero | Wooden wardrobes with custom shelving, drawers and polish |
| Wooden Chairs | Dining chairs, armchairs and traditional carved seats |
| Tables | Dining tables, study desks, coffee tables and side tables |
| Wooden Benches | Traditional benches, foyer seats and dining seating |
| Beds / Cots | King and queen size solid wood beds with carved headboards |
| Wooden Doors | Teak entrance doors, interior doors and carved frames |
| Shelves & Storage | Wall shelves, crockery cabinets and TV console units |
| Pooja Units | Wooden pooja mandapams with detailed joinery and brass accents |
| Wooden Accessories | Wall art, mirrors, stools and decor pieces |
| Custom Woodwork | Architectural woodwork, interior panelling and customized furniture |

Each product carries a name, category, indicative price range, short and full description, image gallery, customization options, suggested materials and finish options.

---

## Enquiry Flow

Customers can start an enquiry from the navigation bar, hero, product modal, custom work section, contact section, footer or mobile action bar.

1. The customer opens the enquiry form. Opening it from a product pre-fills the furniture category and product name.
2. The form collects:
   - Name (required)
   - Phone number (required)
   - Furniture category (required)
   - Preferred material
   - Dimensions
   - Budget range
   - Design description
3. The phone number is validated as an Indian mobile number: 10 digits starting with 6 to 9. A leading `+91`, `91` or `0` is accepted and removed.
4. On submit, the details are formatted into a WhatsApp message addressed to Sankar and opened through `wa.me/919585839099`.

The enquiry never touches a server. Nothing is stored, and the customer sends the message from their own WhatsApp.

---

## Language and Theme

**Language.** The interface is available in English and Tamil.
- Components call `t('English text')` from the language context.
- Tamil text lives in `src/i18n/ta.ts`, a dictionary keyed by the exact English string. If a key is missing, the English text is shown.
- The chosen language is saved in the browser under `abi_lang`.
- Tamil text uses the Noto Sans Tamil font, and the desktop navigation switches to the hamburger menu below 1280px so Tamil labels do not crowd the bar.

**Theme.** Light and dark themes use Tailwind's class strategy. The choice is saved under `abi_theme` and falls back to the visitor's system preference.

---

## Tech Stack

| Area | Technology |
|---|---|
| UI | React 18 |
| Language | TypeScript 5 (strict mode) |
| Build tool | Vite 5 |
| Styling | Tailwind CSS 3 with PostCSS and Autoprefixer |
| Animation | Framer Motion 11 |
| Icons | Lucide React |
| Utilities | clsx |
| Fonts | Playfair Display, Plus Jakarta Sans, Noto Sans Tamil (Google Fonts) |
| Maps | Google Maps embed (no API key) |
| Enquiries | WhatsApp `wa.me` links |

The `@` alias points to `src`.

---

## Project Structure

```
abi-woodworks/
├── index.html                  Page shell, fonts and metadata
├── package.json
├── vite.config.ts              Vite config and the @ alias
├── tailwind.config.js          Colours, fonts, breakpoints, animations
├── postcss.config.js
├── tsconfig.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── logo.png            Brand logo
│       ├── sankar.png          Portrait used in the About section
│       ├── custom-work.jpg     Workshop photo for Custom Work
│       └── placeholder.svg     Fallback for broken images
└── src/
    ├── main.tsx                Entry point
    ├── App.tsx                 Page assembly, modals and navigation state
    ├── styles/index.css        Global styles and Tamil font support
    ├── types/index.ts          Product, Category, PortfolioItem, QuoteFormData
    ├── data/
    │   ├── businessData.ts     Phone, address, tagline, pricing note
    │   ├── products.ts         Categories and products
    │   └── portfolio.ts        Portfolio gallery items
    ├── i18n/
    │   ├── LanguageContext.tsx Language provider and t() function
    │   └── ta.ts               Tamil dictionary
    ├── contexts/
    │   └── ThemeContext.tsx    Light and dark theme provider
    ├── hooks/
    │   └── useModalBehavior.ts Scroll lock and keyboard handling for modals
    ├── lib/
    │   └── whatsapp.ts         Message builder, phone validation, wa.me links
    ├── sections/               Hero, Material, Craftsmanship, Collection,
    │                           CustomWork, Process, Portfolio, About, Contact
    └── components/
        ├── navigation/         Navbar, MobileActionBar
        ├── common/             BrandLogo, Footer, SmartImage, Reveal,
        │                       RisingPanel, ChipScroller
        ├── forms/              QuoteModal
        └── furniture/          ProductModal
```

---

## Design System

Colours are defined in `tailwind.config.js`.

| Token | Light | Dark |
|---|---|---|
| Background | `#F7F5F0` | `#151412` |
| Secondary background | `#EAE5DC` | `#201E1B` |
| Card | `#FFFEFA` | `#292520` |
| Text | `#211E1A` | `#F6F0E7` |
| Subtext | `#706A61` | `#B9AEA0` |
| Accent | `#C69A6A` | `#C89A68` |
| Border | `#DED7CD` | `#3C352D` |

Brand colours: wood `#8B603D`, walnut `#39271E`, gold `#C89A68`, cream `#F7F5F0`.

Typography: Playfair Display for headings, Plus Jakarta Sans for body text, Noto Sans Tamil for Tamil.

Breakpoints: `xs` 375px, `sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px, `2xl` 1440px.

---

## Updating Content

All business content lives in data files, so no component code needs to change for routine updates.

| To change | Edit |
|---|---|
| Phone, WhatsApp number, address, tagline, pricing note | `src/data/businessData.ts` |
| Products, prices, descriptions, galleries | `src/data/products.ts` |
| Filter categories | `CATEGORIES` in `src/data/products.ts` and `CategoryId` in `src/types/index.ts` |
| Portfolio gallery | `src/data/portfolio.ts` |
| Tamil translations | `src/i18n/ta.ts` |
| Map location and directions link | `LAT` and `LNG` at the top of `src/sections/ContactSection.tsx` |
| Colours and fonts | `tailwind.config.js` |
| Photos | `public/images/`, referenced as `/images/name.jpg` |

**Adding a product.** Add an object to `PRODUCTS` with the fields `id`, `name`, `category`, `categoryLabel`, `indicativePrice`, `priceMin`, `priceMax`, `shortDescription`, `description`, `image`, `customizationInfo`, `materialsSuggested` and `finishOptions`. The `gallery` and `isFeatured` fields are optional.

**Portfolio honesty flag.** Each portfolio item has `verifiedProject`. Set it to `true` only for real work completed by the workshop, and leave it `false` for design concepts and inspiration.

**Translating new text.** Wrap new text in `t('English text')` in the component, then add the same English string as a key in `src/i18n/ta.ts` with its Tamil translation.

**Using real photos.** Save photos in `public/images/` and point `image` and `gallery` to `/images/name.jpg`. Broken or missing images fall back to `public/images/placeholder.svg`.

---

## Known Limitations

- Product and portfolio photos currently load from Unsplash and should be replaced with photos of the workshop's own work.
- Two harmless development-mode warnings appear in the hero (the `fetchPriority` prop and a Framer Motion scroll-position notice).
- Enquiries depend on the customer's WhatsApp, so there is no server-side record of enquiries.
- The Google Maps listing for the business is managed separately through Google Business Profile.

---

## Credits

**Owner and master carpenter:** Sankar, ABI WOOD WORKS

**Website:** Built by [StormForge Technologies - Easwar S](https://easwar-dev.vercel.app/)
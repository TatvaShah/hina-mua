import type { SiteConfig } from "@/lib/types";

export const site: SiteConfig = {
  name: "Hina MUA",
  tagline: "Bridal makeup and hair for Nikkah, Barat, Walima and engagement looks.",
  category: "Bridal makeup and hair",
  schemaType: "BeautySalon",
  area: "GTA, ON",
  siteUrl: "https://hina-mua-ca.vercel.app",

  theme: {
    preset: "salon-chic",
    colors: { accent: "#6b2a3a" },
  },
  logo: "/images/logo.jpg",
  showNameWithLogo: true,

  hero: {
    eyebrow: "Makeup artist and hair stylist",
    headline: "Bridal makeup and hair for your celebration",
    subhead: "Looks for Nikkah, Barat, Walima, engagements, parties and events. Book by Instagram DM, text or WhatsApp.",
    images: [
      { src: "/images/post-4.jpg", alt: "A bridal makeup and hair look by Hina MUA", width: 1080, height: 1440 },
      { src: "/images/post-1.jpg", alt: "An engagement makeup look by Hina MUA", width: 1080, height: 1439 },
      { src: "/images/post-7.jpg", alt: "A red bridal makeup and hair look by Hina MUA", width: 1080, height: 1442 },
    ],
    primaryCta: { label: "Book on WhatsApp", href: "https://wa.me/16475003299" },
    secondaryCta: { label: "See the portfolio", href: "#gallery" },
  },

  highlights: [
    "Bridal makeup and hair",
    "Nikkah, Barat and Walima looks",
    "Engagement, party and event glam",
    "Book by DM, text or WhatsApp",
  ],

  about: {
    title: "Welcome to Hina MUA",
    body: [
      "Hina MUA is a makeup artist and hair stylist serving the GTA, creating bridal looks for Nikkah, Barat and Walima, as well as engagement, party and event glam.",
      "Bookings are made by Instagram DM, text or WhatsApp at 647-500-3299.",
    ],
    image: { src: "/images/post-4.jpg", alt: "A bridal makeup and hair look by Hina MUA", width: 1080, height: 1440 },
  },

  menu: {
    label: "Services",
    title: "Makeup and hair",
    variant: "list",
    showPrices: false,
    priceNote: "Send a message to ask about current pricing and availability.",
    groups: [
      {
        title: "Bridal",
        items: [
          { name: "Bridal makeup and hair", description: "Looks for Nikkah, Barat and Walima." },
        ],
      },
      {
        title: "Other events",
        items: [
          { name: "Engagement makeup" },
          { name: "Party and event glam" },
        ],
      },
    ],
  },

  gallery: {
    title: "Recent looks",
    items: [
      { src: "/images/post-4.jpg", width: 1080, height: 1440, alt: "A bridal makeup and hair look by Hina MUA", caption: "A bridal look", href: "https://www.instagram.com/p/DfiQqMbsPrH/" },
      { src: "/images/post-1.jpg", width: 1080, height: 1439, alt: "An engagement makeup look by Hina MUA", caption: "An engagement look", href: "https://www.instagram.com/p/DfqQ009n8Pj/" },
      { src: "/images/post-2.jpg", width: 1080, height: 1439, alt: "A bridal makeup look by Hina MUA", caption: "Bridal makeup", href: "https://www.instagram.com/p/Dfnr71aDpXZ/" },
      { src: "/images/post-5.jpg", width: 1080, height: 1442, alt: "A seated bridal look by Hina MUA", caption: "A wedding look", href: "https://www.instagram.com/p/Dff4FdiDlIq/" },
      { src: "/images/post-6.jpg", width: 720, height: 1280, alt: "A formal makeup and hair look by Hina MUA", caption: "A formal look", href: "https://www.instagram.com/reel/DfXPgj5sV4_/" },
      { src: "/images/post-7.jpg", width: 1080, height: 1442, alt: "A red bridal makeup and hair look by Hina MUA", caption: "A red bridal look", href: "https://www.instagram.com/p/DfQZVzzHzsv/" },
      { src: "/images/post-8.jpg", width: 1080, height: 1442, alt: "A bridal look with a red lehenga by Hina MUA", caption: "Bridal glam", href: "https://www.instagram.com/p/DfN-xPBDttU/" },
      { src: "/images/post-3.jpg", width: 720, height: 1280, alt: "A soft glam makeup look by Hina MUA", caption: "Soft glam", href: "https://www.instagram.com/reel/DfkPpaysYnN/" },
      { src: "/images/post-9.jpg", width: 720, height: 1280, alt: "A bridal makeup and hair look by Hina MUA", caption: "A reception look", href: "https://www.instagram.com/reel/DfIv8fJOOZV/" },
    ],
  },

  reels: { items: [] },

  instagram: {
    handle: "hinamua",
    embeds: ["https://www.instagram.com/p/DfiQqMbsPrH/", "https://www.instagram.com/p/DfqQ009n8Pj/", "https://www.instagram.com/p/DfQZVzzHzsv/"],
  },

  order: {
    label: "How to book",
    title: "Book by DM, text or WhatsApp",
    intro: "Send a message on Instagram, or text or message on WhatsApp at 647-500-3299, with your event date and the look you want.",
    dmMessage: "Hi Hina MUA! I would like to book.\nEvent date:\nEvent type (bridal, engagement, party or other):\nMakeup, hair, or both:",
    headerCtaLabel: "DM to book",
    links: [
      { label: "Book on WhatsApp", href: "https://wa.me/16475003299" },
      { label: "DM to book", href: "https://ig.me/m/hinamua" },
    ],
  },

  reviews: { items: [] },

  faq: [
    { q: "How do I book?", a: "Send a message on Instagram, or text or message on WhatsApp at 647-500-3299." },
    { q: "Where do you work?", a: "Hina MUA serves clients in the GTA." },
    { q: "What services do you offer?", a: "Bridal makeup and hair for Nikkah, Barat and Walima, plus engagement, party and event glam." },
  ],

  contact: {
    title: "Contact and booking",
    area: "GTA, Ontario",
    phone: "647-500-3299",
    socials: [{ label: "Instagram", href: "https://www.instagram.com/hinamua/" }],
  },

  seo: {
    title: "Hina MUA | Bridal makeup and hair in the GTA",
    description: "Bridal makeup and hair in the GTA for Nikkah, Barat, Walima, engagement and party looks. Book by Instagram DM, text or WhatsApp at 647-500-3299.",
    keywords: ["bridal makeup GTA", "Nikkah makeup artist", "Hina MUA"],
    ogPhoto: "/images/og-photo.jpg",
  },
};

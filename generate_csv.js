const fs = require('fs');

const headers = [
  "Handle",
  "Title",
  "Body (HTML)",
  "Vendor",
  "Standard Product Type",
  "Custom Product Type",
  "Tags",
  "Published",
  "Option1 Name",
  "Option1 Value",
  "Option2 Name",
  "Option2 Value",
  "Option3 Name",
  "Option3 Value",
  "Variant SKU",
  "Variant Grams",
  "Variant Inventory Tracker",
  "Variant Inventory Qty",
  "Variant Inventory Policy",
  "Variant Fulfillment Service",
  "Variant Price",
  "Variant Compare At Price",
  "Variant Requires Shipping",
  "Variant Taxable",
  "Variant Barcode",
  "Image Src",
  "Image Position",
  "Image Alt Text",
  "Gift Card",
  "SEO Title",
  "SEO Description",
  "Status"
];

const products = [
  {
    handle: "love-anyway",
    title: "Love Anyway",
    body: "<p>This necklace was created for the heart in every season of life.</p><p>Rose Quartz reminds us to give and receive love freely. Pink Opal encourages healing, peace, and gentle new beginnings. Pink Tourmaline offers strength, compassion, and the courage to remain open, even after life's most difficult moments.</p><p>Together, these carefully chosen gemstones represent the journey of the heart—from healing and self-love to hope, connection, and the confidence to embrace whatever comes next. More than a necklace, it is a meaningful reminder that the strongest hearts are not the ones that have never been broken, but the ones that continue to love anyway.</p><h3>Treasure Meanings</h3><ul><li><strong>Rose Quartz:</strong> Love & Self-Love</li><li><strong>Pink Opal:</strong> Healing, Peace & New Beginnings</li><li><strong>Pink Tourmaline:</strong> Strength, Compassion & Courage</li></ul>",
    vendor: "Daisy Chains",
    type: "Necklace",
    tags: "Rose Quartz, Pink Opal, Pink Tourmaline, Heart, Intention, Handcrafted, California",
    sku: "DC-LOVE-ANYWAY",
    price: "195.00",
    image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Love Anyway Gemstone Necklace",
    seoTitle: "Love Anyway | Rose Quartz, Pink Opal & Pink Tourmaline Necklace",
    seoDesc: "Love Anyway gemstone necklace handcrafted with Rose Quartz, Pink Opal, and Pink Tourmaline for healing, peace, and love."
  },
  {
    handle: "trust-the-tide",
    title: "Trust the Tide",
    body: "<p>Abalone Shell Necklace with Freshwater Pearl & Evil Eye</p><p>The ocean has a way of reminding us that beauty is found in constant change.</p><p>Handcrafted with luminous faceted Abalone Shell beads, this necklace reflects the ever-changing colors of the sea with beautiful flashes of blue, green, and iridescent shimmer. Tiny sterling silver accent beads are thoughtfully placed between each shell, allowing the natural beauty of the abalone to remain the centerpiece.</p><p>A Freshwater Pearl, symbolizing wisdom, authenticity, and beauty found in imperfection, is paired with a delicate Evil Eye, long believed to offer protection and positive energy. Together, these meaningful elements create more than a beautiful necklace—they become a gentle reminder to trust your journey, protect your peace, and embrace the beauty of becoming exactly who you were meant to be.</p><h3>Treasure Details</h3><ul><li><strong>Length:</strong> 16\" necklace with a 2\" extender</li><li><strong>Materials:</strong> Genuine faceted Abalone Shell, Freshwater Pearl</li><li><strong>Featured Element:</strong> Evil Eye</li><li><strong>Metal:</strong> Sterling silver accent beads, silver-plated stainless steel chain, clasp, extender, and findings</li><li><strong>Handcrafted:</strong> Designed and handcrafted with intention in California.</li></ul><h3>Treasure Meanings</h3><ul><li><strong>Abalone Shell:</strong> Resilience • Intuition • Emotional Balance</li><li><strong>Freshwater Pearl:</strong> Wisdom • Authenticity • Beauty in Imperfection</li><li><strong>Evil Eye:</strong> Protection • Positivity • Peace</li></ul>",
    vendor: "Daisy Chains",
    type: "Necklace",
    tags: "Abalone Shell, Freshwater Pearl, Evil Eye, Protection, Resilience, Intuition, Handcrafted, California",
    sku: "DC-TRUST-TIDE",
    price: "198.00",
    image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Trust the Tide Abalone Shell Necklace",
    seoTitle: "Trust the Tide | Abalone Shell, Pearl & Evil Eye Necklace",
    seoDesc: "Handcrafted Abalone Shell necklace with Freshwater Pearl and Evil Eye for protection, resilience, and emotional balance."
  },
  {
    handle: "find-your-center",
    title: "Find Your Center",
    body: "<p>Abalone Shell Necklace with Baroque Freshwater Pearl & Evil Eye</p><p>Some of life's greatest treasures are found when we slow down, trust ourselves, and embrace the beauty of who we are becoming.</p><p>Handcrafted with luminous faceted Abalone Shell beads, this necklace reflects the calming colors of the sea with flashes of blue, green, and iridescent shimmer. At its center rests a striking 25mm Baroque Freshwater Pearl, chosen for its one-of-a-kind shape and organic beauty. No two baroque pearls are ever alike, making every necklace as unique as the person who wears it.</p><p>A delicate Evil Eye and freshwater pearl suspended from the extender add a meaningful finishing touch, creating a treasure that is both elegant and intentional.</p><h3>Treasure Details</h3><ul><li><strong>Length:</strong> 16\" necklace with a 2\" extender</li><li><strong>Materials:</strong> Genuine faceted Abalone Shell, 25mm Baroque Freshwater Pearl, Freshwater Pearl</li><li><strong>Featured Element:</strong> Evil Eye</li><li><strong>Metal:</strong> Sterling silver accent beads, silver-plated stainless steel chain, clasp, extender, and findings</li><li><strong>Handcrafted:</strong> Designed and handcrafted with intention in California.</li></ul><h3>Treasure Meanings</h3><ul><li><strong>Abalone Shell:</strong> Resilience • Intuition • Emotional Balance</li><li><strong>Baroque Freshwater Pearl:</strong> Wisdom • Authenticity • Beauty in Imperfection</li><li><strong>Evil Eye:</strong> Protection • Positivity • Peace</li></ul>",
    vendor: "Daisy Chains",
    type: "Necklace",
    tags: "Baroque Pearl, Abalone Shell, Evil Eye, Protection, Wisdom, Authenticity, Handcrafted, California",
    sku: "DC-FIND-CENTER",
    price: "245.00",
    image: "https://images.unsplash.com/photo-1611591475824-28770172cd1b?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Find Your Center Baroque Pearl Necklace",
    seoTitle: "Find Your Center | 25mm Baroque Pearl & Abalone Necklace",
    seoDesc: "Handcrafted Abalone Shell necklace featuring a 25mm Baroque Freshwater Pearl and Evil Eye charm."
  },
  {
    handle: "swim-free",
    title: "Swim Free",
    body: "<p>Red Coral Heishi Necklace with Freshwater Pearls & Silver Fish Charm</p><p>Some of life's greatest adventures begin when we stop fighting the current and trust where it is taking us.</p><p>Handcrafted with vibrant Red Coral Heishi beads, this necklace captures the warmth of sun-soaked days and the fearless spirit of those who follow their own path. Silver-plated heishi spacer beads are woven throughout the design, adding subtle shimmer and texture without distracting from the rich natural beauty of the coral.</p><p>At the center, a playful Fish charm is nestled between three Freshwater Pearls, creating a meaningful focal point. The fish has long symbolized freedom, abundance, perseverance, and trusting the journey ahead, while freshwater pearls represent wisdom, authenticity, and finding beauty through life's experiences.</p><h3>Treasure Details</h3><ul><li><strong>Length:</strong> 17\" necklace with a 2\" extender</li><li><strong>Materials:</strong> Genuine Red Coral Heishi, Freshwater Pearls</li><li><strong>Featured Element:</strong> 30 mm Silver-Plated Fish Charm</li><li><strong>Metal:</strong> Silver-plated heishi spacer beads, silver-plated chain, clasp, extender, and findings</li><li><strong>Handcrafted:</strong> Designed and handcrafted with intention in California.</li></ul><h3>Treasure Meanings</h3><ul><li><strong>Red Coral:</strong> Vitality • Courage • Protection • Passion</li><li><strong>Freshwater Pearl:</strong> Wisdom • Authenticity • Beauty in Imperfection</li><li><strong>Fish:</strong> Freedom • Abundance • Perseverance • Trusting the Journey</li></ul>",
    vendor: "Daisy Chains",
    type: "Necklace",
    tags: "Red Coral, Freshwater Pearl, Fish Charm, Freedom, Courage, Vitality, Handcrafted, California",
    sku: "DC-SWIM-FREE",
    price: "185.00",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Swim Free Red Coral & Fish Charm Necklace",
    seoTitle: "Swim Free | Red Coral, Freshwater Pearl & Fish Charm Necklace",
    seoDesc: "Vibrant Red Coral Heishi necklace featuring Freshwater Pearls and a 30mm Silver Fish charm for freedom and vitality."
  },
  {
    handle: "color-outside-the-lines",
    title: "Color Outside the Lines",
    body: "<p>Multi-Gemstone Necklace with Freshwater Stick Pearls & Ladybug Intention Charm</p><p>Life is more beautiful when you embrace every color, every adventure, and every unexpected turn.</p><p>Handcrafted with a joyful mix of natural gemstone abacus beads in playful candy-inspired hues, this versatile necklace is designed to celebrate individuality and self-expression. Featuring Dalmatian Jasper, Jade, Strawberry Quartz, Lapis Lazuli, Malachite, and Aquamarine, each gemstone brings its own unique beauty and energy.</p><p>Scattered throughout the design are luminous 15–20 mm Freshwater Stick Pearls, adding organic texture and effortless elegance. Near the clasp, a tiny Ladybug charm is tucked away as a hidden treasure—a symbol of good fortune, joy, and happy surprises. Two beautiful Edison Pearls complete the design.</p><h3>Treasure Details</h3><ul><li><strong>Length:</strong> 36\" necklace (wear long, double layered, or wrap)</li><li><strong>Materials:</strong> Genuine Dalmatian Jasper, Jade, Strawberry Quartz, Lapis Lazuli, Malachite, Aquamarine, Freshwater Stick Pearls, Edison Pearls</li><li><strong>Featured Element:</strong> Hidden Ladybug Intention Charm</li><li><strong>Metal:</strong> Silver-plated clasp and findings</li><li><strong>Handcrafted:</strong> Designed and handcrafted with intention in California.</li></ul><h3>Treasure Meanings</h3><ul><li><strong>Dalmatian Jasper:</strong> Joy • Playfulness • Grounding</li><li><strong>Jade:</strong> Harmony • Good Fortune • Prosperity</li><li><strong>Strawberry Quartz:</strong> Love • Gratitude • Positive Energy</li><li><strong>Lapis Lazuli:</strong> Wisdom • Truth • Inner Strength</li><li><strong>Malachite:</strong> Transformation • Protection • Growth</li><li><strong>Aquamarine:</strong> Courage • Calm • Clarity</li><li><strong>Freshwater Pearls:</strong> Wisdom • Authenticity • Beauty in Imperfection</li><li><strong>Ladybug:</strong> Luck • Happiness • New Beginnings</li></ul>",
    vendor: "Daisy Chains",
    type: "Necklace",
    tags: "Multi-Gemstone, Stick Pearls, Ladybug Charm, Dalmatian Jasper, Jade, Aquamarine, Joy, Handcrafted",
    sku: "DC-COLOR-LINES",
    price: "275.00",
    image: "https://images.unsplash.com/photo-1599643477877-530eb83abc8e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Color Outside the Lines Multi-Gemstone Necklace",
    seoTitle: "Color Outside the Lines | Multi-Gemstone & Stick Pearl Necklace",
    seoDesc: "36-inch versatile Multi-Gemstone necklace with Freshwater Stick Pearls, Edison Pearls, and a hidden Ladybug charm."
  },
  {
    handle: "golden-serpent",
    title: "Golden Serpent",
    body: "<p>Hand-Knotted Tiger's Eye Drop Double Leather Choker</p><p>Some of nature's most captivating creations remind us that true strength comes through transformation.</p><p>Handcrafted on a rich chocolate double-stitched leather choker, Golden Serpent features a hand-knotted drop of graduated Golden Tiger's Eye gemstones suspended from an elegant 18K gold-plated bail. The warm golden bands within each stone catch the light with every movement, while the graceful, tapered design creates an organic silhouette inspired by the elegance of a serpent.</p><p>An Evil Eye charm paired with a Tiger's Eye bead is thoughtfully suspended from the extender, adding a hidden finishing touch to the back of the necklace.</p><h3>Treasure Details</h3><ul><li><strong>Length:</strong> 16\" double-stitched chocolate leather choker with a 1\" extender</li><li><strong>Materials:</strong> Genuine graduated Golden Tiger's Eye gemstones, double-stitched leather cord</li><li><strong>Drop Length:</strong> Hand-knotted graduated Tiger's Eye drop (5.5\" or 8\" lengths)</li><li><strong>Featured Element:</strong> Evil Eye charm with Tiger's Eye accent bead</li><li><strong>Metal:</strong> 18K gold-plated bail, clasp, extender, and accent beads</li><li><strong>Handcrafted:</strong> Designed and handcrafted with intention in California.</li></ul><h3>Treasure Meanings</h3><ul><li><strong>Golden Tiger's Eye:</strong> Confidence • Courage • Success</li><li><strong>Serpent:</strong> Transformation • Renewal • Wisdom</li><li><strong>Evil Eye:</strong> Protection • Positivity • Peace</li></ul>",
    vendor: "Daisy Chains",
    type: "Choker",
    tags: "Tiger's Eye, Leather Choker, Serpent, Evil Eye, 18K Gold, Courage, Transformation, Handcrafted",
    sku: "DC-SERPENT-5",
    price: "220.00",
    image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Golden Serpent Tiger's Eye Leather Choker",
    seoTitle: "Golden Serpent | Hand-Knotted Tiger's Eye Leather Choker",
    seoDesc: "Double leather choker with hand-knotted Golden Tiger's Eye drop, 18K gold bail, and Evil Eye extender."
  },
  {
    handle: "hidden-treasures-aquamarine",
    title: "Hidden Treasures (Aquamarine Edition)",
    body: "<p>Aquamarine Necklace with Freshwater Pearl & Hidden Four-Leaf Clover</p><p>Sometimes the most meaningful reminders are the ones we carry quietly, close to our hearts.</p><p>This delicate necklace is handcrafted with faceted Aquamarine gemstones, celebrated for their calming blue hues that reflect the serenity of the sea. At its center rests a luminous Freshwater Pearl, symbolizing wisdom, authenticity, and the beauty found in life's perfectly imperfect moments.</p><p>Hidden discreetly near the clasp is a tiny Four-Leaf Clover—a secret treasure chosen to remind the wearer that luck often comes to those who continue to believe, even through life's unexpected twists and turns.</p><h3>Treasure Details</h3><ul><li><strong>Length:</strong> 16\" necklace with a 2\" extender</li><li><strong>Gemstones:</strong> Genuine faceted Aquamarine</li><li><strong>Center Stone:</strong> Freshwater Pearl</li><li><strong>Hidden Treasure:</strong> Four-Leaf Clover</li><li><strong>Metal:</strong> 18K gold-plated or sterling silver</li><li><strong>Handcrafted:</strong> Designed and handcrafted with intention in California.</li></ul><h3>Treasure Meanings</h3><ul><li><strong>Aquamarine:</strong> Calm • Courage • Clarity</li><li><strong>Freshwater Pearl:</strong> Wisdom • Authenticity • Beauty in Imperfection</li><li><strong>Four-Leaf Clover:</strong> Luck • Hope • Faith • Love</li></ul>",
    vendor: "Daisy Chains",
    type: "Necklace",
    tags: "Aquamarine, Freshwater Pearl, Four-Leaf Clover, Luck, Calm, Clarity, Handcrafted, California",
    sku: "DC-HIDDEN-AQUA",
    price: "165.00",
    image: "https://images.unsplash.com/photo-1602751584552-8ba73aad10e1?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Hidden Treasures Aquamarine & Pearl Necklace",
    seoTitle: "Hidden Treasures | Aquamarine & Freshwater Pearl Necklace",
    seoDesc: "Aquamarine gemstone necklace with Freshwater Pearl centerpiece and hidden Four-Leaf Clover charm."
  },
  {
    handle: "hidden-treasures-golden-rutilated-quartz",
    title: "Hidden Treasures (Golden Rutilated Quartz Edition)",
    body: "<p>Golden Rutilated Quartz Necklace with Freshwater Pearl & Hidden Symbol</p><p>Sometimes the smallest treasures carry the greatest meaning.</p><p>Handcrafted with faceted Golden Rutilated Quartz, this delicate necklace glows with warm golden threads naturally suspended within each stone. Often called the \"Stone of Illumination,\" Golden Rutilated Quartz is admired for its remarkable beauty and believed to inspire clarity, confidence, and new possibilities. At its center rests a luminous Freshwater Pearl.</p><p>Hidden quietly near the clasp is a meaningful symbol chosen just for you—a personal reminder carried close to your heart.</p><h3>Treasure Details</h3><ul><li><strong>Length:</strong> 16\" necklace with a 2\" extender</li><li><strong>Gemstone:</strong> Genuine faceted Golden Rutilated Quartz</li><li><strong>Center Stone:</strong> Freshwater Pearl</li><li><strong>Hidden Treasure:</strong> Customizable Hidden Symbol</li><li><strong>Metal:</strong> 18K gold-plated chain, clasp, extender, findings, and charm</li><li><strong>Handcrafted:</strong> Designed and handcrafted with intention in California.</li></ul><h3>Treasure Meanings</h3><ul><li><strong>Golden Rutilated Quartz:</strong> Clarity • Confidence • Manifestation</li><li><strong>Freshwater Pearl:</strong> Wisdom • Authenticity • Beauty in Imperfection</li><li><strong>Hidden Symbol:</strong> Choose the intention that speaks to your journey.</li></ul>",
    vendor: "Daisy Chains",
    type: "Necklace",
    tags: "Golden Rutilated Quartz, Freshwater Pearl, Intention, Manifestation, Clarity, 18K Gold, Handcrafted",
    sku: "DC-HIDDEN-RUTILATED",
    price: "175.00",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?auto=format&fit=crop&w=1000&q=80",
    imageAlt: "Hidden Treasures Golden Rutilated Quartz Necklace",
    seoTitle: "Hidden Treasures | Golden Rutilated Quartz & Pearl Necklace",
    seoDesc: "Golden Rutilated Quartz necklace featuring a Freshwater Pearl centerpiece and customizable hidden intention symbol."
  }
];

function escapeCsv(val) {
  if (val === null || val === undefined) return '';
  const str = String(val);
  if (str.includes(',') || str.includes('"') || str.includes('\n')) {
    return '"' + str.replace(/"/g, '""') + '"';
  }
  return str;
}

const rows = [headers.map(escapeCsv).join(',')];

products.forEach(p => {
  const row = [
    p.handle,                    // Handle
    p.title,                     // Title
    p.body,                      // Body (HTML)
    p.vendor,                    // Vendor
    "",                          // Standard Product Type
    p.type,                      // Custom Product Type
    p.tags,                      // Tags
    "TRUE",                      // Published
    "Title",                     // Option1 Name
    "Default Title",             // Option1 Value
    "",                          // Option2 Name
    "",                          // Option2 Value
    "",                          // Option3 Name
    "",                          // Option3 Value
    p.sku,                       // Variant SKU
    "200",                       // Variant Grams
    "shopify",                   // Variant Inventory Tracker
    "10",                        // Variant Inventory Qty
    "deny",                      // Variant Inventory Policy
    "manual",                    // Variant Fulfillment Service
    p.price,                     // Variant Price
    "",                          // Variant Compare At Price
    "TRUE",                      // Variant Requires Shipping
    "TRUE",                      // Variant Taxable
    "",                          // Variant Barcode
    p.image,                     // Image Src
    "1",                         // Image Position
    p.imageAlt,                  // Image Alt Text
    "FALSE",                     // Gift Card
    p.seoTitle,                  // SEO Title
    p.seoDesc,                   // SEO Description
    "active"                     // Status
  ];
  rows.push(row.map(escapeCsv).join(','));
});

fs.writeFileSync('c:\\Users\\DELL-PC\\OneDrive\\DC\\daisy_chains_shopify_products_import.csv', rows.join('\r\n'), 'utf8');
console.log('CSV successfully generated!');

export default [
  // Blog Title
  {
    name: "Blog Title",
    desc: "An AI tool that generates catchy blog titles based on your niche and outline.",
    category: "Blog",
    icon: "https://cdn-icons-png.flaticon.com/128/1187/1187595.png",
    aiPrompt:
      "Give me 5 blog topic ideas in bullet format, based on the given niche and outline. Return the result in Rich-Text-Editor (RTE) format.",
    slug: "generate-blog-title",
    form: [
      { label: "Enter your blog niche", field: "input", name: "niche", required: true },
      { label: "Enter blog outline", field: "textarea", name: "outline" }
    ]
  },

  // Social Media Caption
  {
    name: "Social Media Caption",
    desc: "Creates engaging captions tailored to platform, audience, and vibe.",
    category: "Social",
    icon: "https://cdn-icons-png.flaticon.com/128/9236/9236027.png",
    aiPrompt:
      "Write 5 social-media captions (max 150 characters each) for the given platform, product, and tone. Use emoji where appropriate.",
    slug: "social-caption-generator",
    form: [
      { label: "Platform (Instagram, X, etc.)", field: "input", name: "platform", required: true },
      { label: "Describe your product or topic", field: "textarea", name: "topic", required: true },
      { label: "Tone (fun, professional, etc.)", field: "input", name: "tone" }
    ]
  },

  // Product Description
  {
    name: "Product Description",
    desc: "Generates persuasive product descriptions emphasizing features and benefits.",
    category: "E-Commerce",
    icon: "https://cdn-icons-png.flaticon.com/128/3081/3081648.png",
    aiPrompt:
      "Create a 3-paragraph product description. First paragraph: hook; second: key features; third: emotional benefit and CTA.",
    slug: "product-description-writer",
    form: [
      { label: "Product name", field: "input", name: "productName", required: true },
      { label: "Key features (comma separated)", field: "textarea", name: "features", required: true },
      { label: "Target audience", field: "input", name: "audience" }
    ]
  },

  // Email Subject Line
  {
    name: "Email Subject Line",
    desc: "Crafts high-open-rate subject lines and preview text.",
    category: "Email",
    icon: "https://cdn-icons-png.flaticon.com/128/2965/2965306.png",
    aiPrompt:
      "Produce 7 compelling email subject lines (max 60 chars) plus preview text (max 90 chars) based on the goal and audience.",
    slug: "email-subject-generator",
    form: [
      { label: "Email goal (promo, newsletter, etc.)", field: "input", name: "goal", required: true },
      { label: "Audience segment", field: "input", name: "audience" }
    ]
  },

  // Ad Copy
  {
    name: "Ad Copy",
    desc: "Writes short, punchy ad copy for Google or Facebook campaigns.",
    category: "Advertising",
    icon: "https://cdn-icons-png.flaticon.com/128/1466/1466288.png",
    aiPrompt:
      "Generate 3 variations of ad copy: headline (max 30 chars) + description (max 90 chars). Highlight the unique selling point.",
    slug: "ad-copy-creator",
    form: [
      { label: "Product/service name", field: "input", name: "product", required: true },
      { label: "Unique selling point (USP)", field: "textarea", name: "usp", required: true },
      { label: "Target platform (Google, FB)", field: "input", name: "platform" }
    ]
  },

  // YouTube Title & Description
  {
    name: "YouTube Title & Description",
    desc: "Generates optimized video titles and engaging descriptions for YouTube.",
    category: "Video",
    icon: "https://cdn-icons-png.flaticon.com/128/16183/16183555.png",
    aiPrompt:
      "Create 3 clickable YouTube titles and 1 optimized description with keywords based on the given topic and audience.",
    slug: "youtube-title-description",
    form: [
      { label: "Video topic", field: "input", name: "topic", required: true },
      { label: "Target audience", field: "input", name: "audience" },
      { label: "Add focus keywords", field: "textarea", name: "keywords" }
    ]
  },

  // Instagram Reel Ideas
  {
    name: "Instagram Reel Ideas",
    desc: "Suggests trendy and viral Instagram reel content ideas for your niche.",
    category: "Social",
    icon: "https://cdn-icons-png.flaticon.com/128/11820/11820224.png",
    aiPrompt:
      "Give 5 creative Instagram Reel content ideas for the given niche and audience. Include format (voiceover, text on screen, etc.).",
    slug: "reel-idea-generator",
    form: [
      { label: "Niche or theme", field: "input", name: "niche", required: true },
      { label: "Audience type (optional)", field: "input", name: "audience" }
    ]
  },

  // LinkedIn Post Idea
  {
    name: "LinkedIn Post Idea",
    desc: "Suggests professional LinkedIn post angles to boost engagement.",
    category: "Social",
    icon: "https://cdn-icons-png.flaticon.com/128/145/145807.png",
    aiPrompt:
      "Provide 5 LinkedIn post ideas (hook, key point, CTA) suited to the user’s industry and goal. Keep each under 120 words.",
    slug: "linkedin-post-generator",
    form: [
      { label: "Industry / niche", field: "input", name: "industry", required: true },
      { label: "Goal (thought leadership, hiring, etc.)", field: "input", name: "goal" }
    ]
  },

  // Pitch Deck Copy
  {
    name: "Pitch Deck Copy",
    desc: "Creates persuasive pitch deck copy for startup or project presentations.",
    category: "Business",
    icon: "https://cdn-icons-png.flaticon.com/128/564/564619.png",
    aiPrompt:
      "Generate copy for a pitch deck based on business name, value proposition, and target audience. Include slide headings and short descriptions.",
    slug: "pitch-deck-copy",
    form: [
      { label: "Business name", field: "input", name: "business", required: true },
      { label: "Value proposition", field: "textarea", name: "value" },
      { label: "Target audience", field: "input", name: "audience" }
    ]
  },

  // FAQs Generator
  {
    name: "FAQs Generator",
    desc: "Automatically creates Frequently Asked Questions for your product or service.",
    category: "Support",
    icon: "https://cdn-icons-png.flaticon.com/128/7714/7714424.png",
    aiPrompt:
      "Generate 5 common FAQs and their answers based on the product/service description and audience.",
    slug: "faqs-generator",
    form: [
      { label: "Describe your product or service", field: "textarea", name: "description", required: true },
      { label: "Audience type (optional)", field: "input", name: "audience" }
    ]
  },

  // Brand Slogan Generator
  {
    name: "Brand Slogan",
    desc: "Generates catchy and memorable brand slogans.",
    category: "Branding",
    icon: "https://cdn-icons-png.flaticon.com/128/17763/17763230.png",
    aiPrompt:
      "Generate 5 brand slogans based on brand name, mission, and tone. Return them in a creative and punchy tone.",
    slug: "brand-slogan-generator",
    form: [
      { label: "Brand name", field: "input", name: "brand", required: true },
      { label: "Brand mission", field: "textarea", name: "mission" },
      { label: "Tone (playful, serious, etc.)", field: "input", name: "tone" }
    ]
  },

  // Tweet Generator
  {
    name: "Tweet Generator",
    desc: "Creates tweet-sized posts for promotions, engagement or information.",
    category: "Social",
    icon: "https://cdn-icons-png.flaticon.com/128/3670/3670151.png",
    aiPrompt:
      "Generate 5 tweets (max 280 characters) based on the provided context and goal. Add emojis and hashtags where appropriate.",
    slug: "tweet-generator",
    form: [
      { label: "Topic or context", field: "textarea", name: "topic", required: true },
      { label: "Goal (engage, inform, promote, etc.)", field: "input", name: "goal" }
    ]
  }
];

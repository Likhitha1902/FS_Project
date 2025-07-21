import React, { useRef, useEffect, useState } from "react";

const GardeningTips = () => {
  const tips = [
  {
    title: "🧤 Wear Gloves",
    description: "Wearing gloves is essential to protect your hands from injuries, blisters, thorns, and harmful microbes present in soil. Choose gloves suited for your task—rubber-coated for wet work, leather for heavy digging, and lightweight cotton for light planting. Proper glove use also reduces the risk of allergic reactions and fungal infections."
  },
  {
    title: "🧂 Use Epsom Salt",
    description: "Epsom salt contains magnesium and sulfate, vital for seed germination, nutrient absorption, and healthy green foliage. Mix 1 tablespoon with a gallon of water and apply monthly. It's especially beneficial for tomatoes, peppers, and roses, helping them thrive. Always test your soil before use to avoid excess salt accumulation."
  },
  {
    title: "🐝 Attract Pollinators",
    description: "Pollinators like bees, butterflies, and hummingbirds are crucial for plant reproduction. Grow nectar-rich flowers like lavender, bee balm, and marigolds. Avoid chemical pesticides and provide water sources like shallow dishes. Creating a pollinator-friendly habitat can boost both your blooms and veggie yield."
  },
  {
    title: "🪨 Add Mulch Paths",
    description: "Mulch paths suppress weeds, retain soil moisture, and improve garden structure. Use materials like bark chips, straw, or gravel. Lay landscape fabric underneath to prevent unwanted growth. Refresh paths each season and keep mulch layers 2–3 inches thick for best results and an attractive look."
  },
  {
    title: "🌿 Use Compost",
    description: "Compost is nature’s fertilizer—rich in nutrients, it enhances soil structure and microbial activity. Combine green (nitrogen) and brown (carbon) materials, like veggie scraps and dry leaves. Turn the pile weekly to accelerate decomposition. Mature compost smells earthy and crumbles in your hand."
  },
  {
    title: "💧 Water Deeply, Not Frequently",
    description: "Instead of daily watering, deeply soak your soil 1–2 times a week to promote strong root systems. This helps plants become drought-resistant and prevents surface evaporation. Focus on the base of the plant and water slowly to ensure deep soil penetration."
  },
  {
    title: "🕒 Water Early in the Day",
    description: "Morning watering reduces water loss to evaporation and gives plants time to dry before nightfall, which reduces fungal growth. Avoid late evening watering, which can create moist conditions ideal for pests and disease."
  },
  {
    title: "🔍 Check Soil Before Watering",
    description: "Stick your finger 1–2 inches into the soil—if it feels dry, it's time to water. This simple method prevents overwatering, which leads to root rot, and ensures you're not underwatering during dry spells. Use moisture meters for added accuracy."
  },
  {
    title: "🌾 Rotate Crops",
    description: "Rotating crops annually prevents soil from being depleted of specific nutrients and breaks pest and disease cycles. For example, follow nitrogen-hungry plants like tomatoes with beans, which fix nitrogen. Use a garden planner to track plant locations each year."
  },
  {
    title: "🧪 Test Your Soil",
    description: "Soil testing reveals pH and nutrient deficiencies. Use home kits or send samples to local extension services. Amend soil based on results—lime for acidity, sulfur for alkalinity, and compost or fertilizers for nutrient gaps."
  },
  {
    title: "🪱 Encourage Earthworms",
    description: "Earthworms naturally till the soil and increase aeration and nutrient availability. Avoid harsh pesticides and keep soil moist and mulched to attract them. Worm castings are excellent for plant health and soil structure."
  },
  {
    title: "✂️ Deadhead Flowers",
    description: "Removing faded blooms (deadheading) directs energy to new growth and extends blooming periods. Use clean shears to snip just above a healthy leaf or bud. This keeps plants tidy and reduces seed formation."
  },
  {
    title: "🛑 Avoid Overcrowding",
    description: "Crowded plants compete for light, water, and nutrients, and poor airflow encourages diseases. Follow seed packet or nursery tag spacing recommendations. Thin seedlings early to give strong plants room to grow."
  },
  {
    title: "🌬️ Provide Wind Protection",
    description: "Wind can damage tender stems and dry out plants. Use barriers like fences, hedges, or garden fabric to protect exposed areas. Plant taller crops as windbreaks or build simple frames with mesh to reduce wind intensity."
  },
  {
    title: "🌞 Use Raised Beds",
    description: "Raised beds improve drainage, extend the growing season, and reduce compaction. They’re ideal for small spaces and poor native soil. Use untreated wood, stone, or metal frames and fill with rich, loose soil."
  },
  {
    title: "📅 Use a Planting Calendar",
    description: "A calendar helps you plan sowing, fertilizing, pruning, and harvesting. Track frost dates, moon phases, and seasonal weather. Digital apps and printable garden journals make this easier and more accurate."
  },
  {
    title: "🌸 Choose Native Plants",
    description: "Native plants require less water and care because they're adapted to your region. They support local wildlife, including pollinators and birds. Choose from native wildflowers, grasses, and shrubs for a sustainable landscape."
  },
  {
    title: "🧼 Clean Tools Regularly",
    description: "Dirty tools spread disease and rust faster. Clean them with soapy water after use, dry them, and apply oil to metal parts. Sterilize blades with alcohol when switching between diseased and healthy plants."
  },
  {
    title: "🌾 Mulch Around Plants",
    description: "Mulching prevents water loss, moderates temperature, and suppresses weeds. Apply 2–3 inches of mulch around plant bases, but keep it a few inches away from stems to prevent rot. Reapply seasonally as mulch breaks down."
  },
  {
    title: "🐞 Encourage Beneficial Insects",
    description: "Beneficial insects like ladybugs and lacewings eat pests like aphids. Attract them with flowers like dill, fennel, and marigold. Avoid broad-spectrum pesticides and allow a small pest population to sustain them."
  },
  {
    title: "🌿 Prune Properly",
    description: "Prune to remove dead, diseased, or crowded branches. Use clean, sharp shears and follow species-specific guidelines. Prune in early spring or after flowering for most plants. Avoid over-pruning which can stress plants."
  },
  {
    title: "🪴 Repot When Needed",
    description: "If roots circle the pot or grow from drainage holes, it's time to repot. Choose a pot 1–2 inches larger and refresh with nutrient-rich soil. Gently loosen roots and water thoroughly after repotting."
  },
  {
    title: "🌧️ Harvest Rainwater",
    description: "Rainwater is soft and naturally free of chlorine and salts. Use rain barrels with mesh covers to prevent mosquitoes. Direct overflow to a rain garden or water vegetable beds during dry spells."
  },
  {
    title: "🥬 Companion Plant",
    description: "Pairing certain plants enhances growth and pest control. For example, basil repels tomato pests, and marigolds deter nematodes. Avoid negative pairings like beans and onions. Research successful pairings for each crop."
  },
  {
    title: "🧊 Protect from Frost",
    description: "Use fabric covers, plastic tunnels, or cold frames to insulate plants from frost. Watering before a frost can help retain soil heat. Move potted plants indoors or into sheltered spaces during freezing nights."
  }];

  const [index, setIndex] = useState(0);
  const totalTips = tips.length;

  const prevTip = () => {
    setIndex((prev) => (prev - 1 + totalTips) % totalTips);
  };

  const nextTip = () => {
    setIndex((prev) => (prev + 1) % totalTips);
  };

  return (
    <section
      className="min-h-screen text-green-900 py-12 px-4 sm:px-12 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-photo/unfocused-field_1160-908.jpg?semt=ais_items_boosted&w=740')",
      }}
    >
      <div className="text-center mb-16 bg-white/70 backdrop-blur-md p-6 rounded-xl">
        <h1 className="text-5xl font-extrabold text-green-700 mb-4 tracking-tight">
          🌱 Gardening Tips
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl mx-auto text-green-600">
          Discover essential gardening advice for lush, healthy plants—perfect for beginners and seasoned growers alike.
        </p>
      </div>

      <div className="relative flex items-center justify-center gap-1">
        <button
          onClick={prevTip}
          className="font-bold text-6xl z-10"
        >
          ⬅️
        </button>

        <div className="bg-white/80 border border-green-300 rounded-2xl shadow-2xl p-8 text-center flex flex-col justify-center w-[800vw] max-w-xl h-[400px] transition duration-500 ease-in-out backdrop-blur-md">
          <h3 className="text-3xl sm:text-4xl font-extrabold text-green-900 mb-4">
            {tips[index].title}
          </h3>
          <p className="text-green-800 text-lg sm:text-xl leading-relaxed overflow-y-auto max-h-[360px]">
            {tips[index].description}
          </p>
        </div>

        <button
          onClick={nextTip}
          className="font-bold text-6xl z-10"
        >
          ➡️
        </button>
      </div>
    </section>
  );
};

export default GardeningTips;

import React, { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "What types of plants do you offer?",
      answer:
        "At Terra & Twine, we offer a curated selection of indoor plants. This includes low-maintenance succulents, air-purifying houseplants, rare foliage, and beautiful flowering plants that add life and color to any space."
    },
    {
      question: "Do you offer plant care instructions?",
      answer:
        "Absolutely! Each plant comes with a detailed care guide specific to its needs. We also provide additional care tips through our website blog and monthly newsletter for ongoing support."
    },
    {
      question: "Do you deliver plants?",
      answer:
        "Yes, we offer delivery across India with eco-friendly, safe packaging. In select cities, we even provide same-day delivery options to ensure your plant arrives fresh and healthy."
    },
    {
      question: "Can I return or exchange a plant?",
      answer:
        "Plants are delicate, but if yours arrives damaged, just contact us within 24 hours. Share a few pictures, and we'll ensure a hassle-free replacement or refund."
    },
    {
      question: "Do you offer gift wrapping or special packaging?",
      answer:
        "Yes, we provide custom gift wrapping options with eco-friendly materials. You can also include handwritten notes and festive packaging for special occasions."
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major debit and credit cards, UPI, net banking, and popular digital wallets. Our checkout process is secure and encrypted for your safety."
    },
    {
      question: "How often should I water my plant?",
      answer:
        "Watering depends on plant type, pot size, and local climate. Our care guides help you learn what each plant needs to thrive without over- or under-watering."
    },
    {
      question: "Can I visit your store in person?",
      answer:
        "Yes! We invite you to explore our cozy store in Bengaluru, where you can get personalized recommendations and see our plant collection in person."
    },
    {
      question: "Do you offer plants for office spaces or events?",
      answer:
        "Absolutely! We cater to corporate offices, weddings, and events with custom plant packages. Bulk orders and decor consultations are also available."
    },
    {
      question: "Are your plants safe for pets?",
      answer:
        "We understand pet safety is important. Many of our plants are non-toxic to cats and dogs, and we clearly mark these options for your convenience."
    },
    {
      question: "Do you sell pots and planters too?",
      answer:
        "Yes, our collection includes ceramic, terracotta, and eco-friendly planters. You can choose planters that match your interior aesthetic and plant size."
    },
    {
      question: "What plants are best for low-light areas?",
      answer:
        "Plants like snake plants, ZZ plants, and pothos thrive in low-light environments. They're great for rooms with limited sunlight or shaded corners."
    },
    {
      question: "Do you offer styling or interior plant consultation?",
      answer:
        "Yes, our green design experts help transform your space with curated plant arrangements. We offer consultations for homes, cafes, and workspaces."
    },
    {
      question: "Can I subscribe to monthly plant deliveries?",
      answer:
        "Yes! Our subscription service sends you a new plant every month with pots, care instructions, and surprise gifts. It’s perfect for plant lovers."
    },
    {
      question: "Are your plants locally sourced?",
      answer:
        "We collaborate with local nurseries and ethical growers to ensure our plants are fresh, healthy, and adapted to the Indian climate."
    },
    {
      question: "How do I report a damaged plant delivery?",
      answer:
        "If your plant arrives in poor condition, take clear photos and contact our team within 24 hours. We'll assess the issue and offer a solution promptly."
    },
    {
      question: "What should I do if leaves are turning yellow?",
      answer:
        "Yellowing leaves can be due to overwatering, underwatering, or poor light. Our team can help you diagnose the problem and revive your plant."
    },
    {
      question: "Do you support sustainability practices?",
      answer:
        "Yes, sustainability is core to our values. We use recyclable packaging, avoid plastic, and contribute to tree planting initiatives with every 10 orders."
    },
    {
      question: "Can I customize a gift plant combo?",
      answer:
        "Definitely! Choose a plant, pot, greeting card, and wrapping style to create a unique, thoughtful green gift for any occasion."
    },
    {
      question: "Do you provide a guarantee on plants?",
      answer:
        "We guarantee healthy delivery and offer expert advice post-purchase. If there’s a concern, our support team is always ready to assist."
    },
    {
      question: "Can I pick up my order instead of delivery?",
      answer:
        "Yes, we offer convenient store pickup. You’ll be notified when your order is ready, and we’ll ensure it’s packed safely for transport."
    },
    {
      question: "Are there workshops or classes?",
      answer:
        "Yes, we regularly conduct hands-on workshops on plant care, terrarium building, and propagation. Both in-person and online options are available."
    },
    {
      question: "Do you offer seasonal or holiday discounts?",
      answer:
        "We frequently run seasonal sales and festive offers. Subscribe to our newsletter or follow us on social media to stay updated."
    },
    {
      question: "How do I propagate my plant?",
      answer:
        "Propagation varies by plant type. We provide guides, videos, and personalized advice to help you grow your plant family from cuttings or offsets."
    },
    {
      question: "Can I track my order?",
      answer:
        "Yes, we share tracking details via SMS and email. You’ll be able to monitor your order’s journey right to your doorstep."
    },
    {
      question: "Do you offer plant care kits?",
      answer:
        "Yes! Our kits include essentials like watering cans, organic fertilizers, neem oil, and cleaning cloths to help you maintain healthy, happy plants."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div
      className="min-h-screen bg-contain p-8 font-sans"
      style={{ backgroundImage: "url('https://img.freepik.com/premium-photo/watercolor-seamless-pattern-green-herbs-leaves-ideal-designer-decoration-illustration-plants-greenery_1286135-439.jpg?semt=ais_hybrid&w=740')" }}
    >
      <div className="bg-white/70 backdrop-blur-md max-w-4xl mx-auto text-center rounded-xl p-6">
        <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-8">
          🌿 Frequently Asked Questions
        </h1>
        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-2xl p-6 text-left border-l-8 border-green-400 transition-transform hover:scale-[1.02] cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl md:text-2xl font-semibold text-green-700">
                  {faq.question}
                </h2>
                <span className="text-2xl text-green-600">
                  {openIndex === index ? "x" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <p className="text-gray-700 text-md md:text-lg leading-relaxed mt-4">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;

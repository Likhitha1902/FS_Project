import React from "react";

const About = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-green-100 via-green-200 to-green-300 text-green-900 p-6 sm:p-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-6xl font-bold text-green-800 mb-4">Terra & Twine</h1>
        <p className="text-xl sm:text-2xl max-w-3xl mx-auto">
          Welcome to <span className="font-semibold">Terra & Twine</span> — your personal green escape. We bring a curated collection of indoor plants that add freshness, tranquility, and beauty to your everyday spaces. More than just plants, we deliver joy, air, and life.
        </p>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">🌿 Why Choose Us?</h2>
        <div className="grid gap-8 sm:grid-cols-3 text-center">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">🌱 Handpicked Plants</h3>
            <p>Our team carefully selects each plant to ensure it's healthy, vibrant, and thriving before it reaches your home. We believe that quality begins at the root, literally!</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">📦 Eco-Friendly Packaging</h3>
            <p>We care about the planet as much as you do. That’s why we use biodegradable, plastic-free packaging that keeps your plants safe while minimizing environmental impact.</p>
          </div>
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-semibold mb-2">🌼 Expert Guidance</h3>
            <p>From plant selection to ongoing care, our knowledgeable support team is here to help you every step of the way with personalized advice and easy-to-follow tips.</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-center">💬 What Our Customers Say</h2>
        <div className="grid gap-6 sm:grid-cols-3 text-left">
          <div className="bg-white rounded-xl shadow-md p-4">
            <p>“My first plant from Leaf & Vine arrived healthy and gorgeous. The packaging was adorable and eco-friendly. Totally in love with the service and quality!”</p>
            <footer className="mt-2 font-semibold text-green-700">— Aanya R.</footer>
            <p className="text-yellow-500">★★★★★</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p>“Their eco-packaging is amazing, and the plant came with cute care instructions! I’m a beginner, but they made it so easy for me to care for my new green buddy.”</p>
            <footer className="mt-2 font-semibold text-green-700">— Kiran V.</footer>
            <p className="text-yellow-500">★★★★☆</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p>“Great variety, fast delivery, and a super helpful team. I reached out with questions and they responded promptly with personalized advice.”</p>
            <footer className="mt-2 font-semibold text-green-700">— Meera D.</footer>
            <p className="text-yellow-500">★★★★★</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p>“The plant I received was lush and thriving. I’ve ordered from other sites before but nothing matched this quality. Definitely ordering again soon.”</p>
            <footer className="mt-2 font-semibold text-green-700">— Rahul S.</footer>
            <p className="text-yellow-500">★★★★★</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p>“I love how they make plant parenting so easy. The instructions, the customer care, and the follow-up tips — everything is top-notch.”</p>
            <footer className="mt-2 font-semibold text-green-700">— Sneha M.</footer>
            <p className="text-yellow-500">★★★★☆</p>
          </div>
          <div className="bg-white rounded-xl shadow-md p-4">
            <p>“Exceptional quality and care. The unboxing experience felt like opening a gift. The little touches truly show they care about their customers.”</p>
            <footer className="mt-2 font-semibold text-green-700">— Anuj T.</footer>
            <p className="text-yellow-500">★★★★★</p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-2">📲 Connect With Us</h2>
        <p className="mb-4">Follow us for daily green inspo, plant tips and exclusive offers:</p>
        <div className="flex justify-center gap-6">
          <div className="bg-green-200 shadow-lg rounded-xl p-4 text-lg font-semibold text-green-900">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
          <div className="bg-green-200 shadow-lg rounded-xl p-4 text-lg font-semibold text-green-900">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
          </div>
          <div className="bg-green-200 shadow-lg rounded-xl p-4 text-lg font-semibold text-green-900">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

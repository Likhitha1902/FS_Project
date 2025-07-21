import React, { useState } from "react";

const Home = () => {
  return (
    <div className="scroll-smooth">
      <section
        className="min-h-screen bg-gradient-to-r from-green-300 to-green-600 bg-cover flex flex-col justify-center items-center text-white text-center"
        style={{
          backgroundImage:
            "url('https://static.vecteezy.com/system/resources/previews/009/644/381/non_2x/banner-plant-and-leave-space-for-text-on-white-background-vector.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundColor: "#228B22",
        }}
      >
        <section className="min-h-screen flex flex-col justify-start pt-4">
          <p className="text-4xl sm:text-6xl md:text-9xl text-green-700 mb-6 px-4 mt-20">
            Terra & Twine
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl text-black mb-6 px-4">
            Your guide to the world of houseplants
          </p>
          <p className="text-2xl sm:text-3xl md:text-5xl text-black mb-6 px-2">
            Turning a new leaf in home decor
          </p>
        </section>
        <a
          href="#contact"
          className="absolute top-52 left-6 sm:top-16 sm:left-10 bg-green-600 text-white py-2 px-4 rounded-full text-sm sm:text-base md:text-lg hover:bg-green-700"
        >
          Contact Us
        </a>
      </section>

      <section
        id="contact"
        className="min-h-screen bg-gradient-to-r from-green-500 to-lime-500 flex flex-col md:flex-row justify-between items-start p-4 sm:p-8"
      >
        <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-4xl">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-white">Contact Us</h2>
          <p className="text-2xl sm:text-4xl md:text-5xl text-white mb-6">Let's grow together!</p>

          <div className="flex flex-col space-y-4 sm:space-y-6 w-full max-w-lg">
            <Card title="Email" info="greenroots@plantstore.com" />
            <Card title="Phone" info="+91 9876543210" />
            <Card title="Address" info="123 Green Street, Eco City, Garden State, 560001" />
          </div>
        </div>

        <div className="w-full max-w-lg mt-8 md:mt-0 md:ml-16">
          <Form />
        </div>
      </section>
    </div>
  );
};

const Card = ({ title, info }) => {
  return (
    <div className="bg-white bg-opacity-90 rounded-lg p-4 sm:p-6 shadow-lg text-gray-800 w-full sm:w-80 mx-auto">
      <h3 className="text-xl sm:text-2xl font-semibold mb-2">{title}</h3>
      <p className="text-base sm:text-lg">{info}</p>
    </div>
  );
};

const Form = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [isError, setIsError] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!data.name.trim() || !data.email.trim() || !data.subject.trim() || !data.message.trim()) {
      setIsError(true);
      setStatus("Please fill in all fields.");
      return;
    }

    if (!validateEmail(data.email)) {
      setIsError(true);
      setStatus("Please enter a valid email address.");
      return;
    }

    setIsError(false);
    setStatus("Thank you for reaching out! We'll get back to you soon.");
    setData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
      <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-center text-gray-800 mb-4 sm:mb-6">Get In Touch</h1>
      {status && (
        <div className={`text-center mb-4 ${isError ? "text-red-600" : "text-green-600"}`}>{status}</div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Name</label>
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Email</label>
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Subject</label>
          <input
            type="text"
            name="subject"
            value={data.subject}
            onChange={handleInput}
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-green-400"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Your Message</label>
          <textarea
            name="message"
            value={data.message}
            onChange={handleInput}
            rows="4"
            className="w-full mt-2 p-2 sm:p-3 border rounded-md focus:ring-2 focus:ring-green-400"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full py-2 sm:py-3 bg-green-600 text-white font-semibold rounded-md hover:bg-green-700 focus:ring-2 focus:ring-green-400"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Home;

"use client";

import { navItems } from "@/data";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import { useState } from "react";

const Home = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      return "Please fill in all the fields before submitting.";
    }
    return null;
  };

  const submitContactForm = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
    
    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      setSuccess(""); // Clear success message if any
      return;
    }

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSuccess("Your message has been sent successfully.");
        setFormData({ name: '', email: '', message: '' }); // Clear form after successful submission
        console.log(data); // handle the success response
      } else {
        setError("Failed to send your message. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <main className="pt-10 relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <div className="py-20 w-full">
          <h1 className="heading">
            Who <span className="text-purple">We</span> Are?
          </h1>

          <p className="text-white-200 md:mt-10 my-5 text-center">
            At Axiom, we&apos;re more than just a tech agency—we&apos;re your partners in innovation. Our mission is to empower businesses with cutting-edge digital solutions, tailored to meet your unique needs. With a team of experts in development, design, and strategy, we turn visions into reality.
          </p>
        </div>

        <div className="py-8 w-full">
          <form onSubmit={submitContactForm}>
            <div className="container px-5 mx-auto">
              <div className="flex flex-col text-center w-full mb-12">
                <h1 className="heading">
                  Get In <span className="text-purple">Touch</span>
                </h1>
              </div>
              <div className="lg:w-1/2 md:w-2/3 mx-auto">
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <div className="relative">
                      <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                        required
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button type="submit" className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg" disabled={loading}>
                      {loading ? "Sending..." : "Submit"}
                    </button>
                  </div>
                  {error && <div className="p-2 w-full text-red-500 text-center">{error}</div>}
                  {success && <div className="p-2 w-full text-green-500 text-center">{success}</div>}
                </div>
              </div>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    </main>
  );
};

export default Home;

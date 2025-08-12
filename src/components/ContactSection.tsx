"use client";

import React, {  useState } from "react";
import Container from "./Container";
import SocialCardsSection from "./Socials/SocialCardsSection";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(SplitText)
gsap.registerPlugin(ScrollTrigger)

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    if(formData.name === "" || formData.email === "" || formData.message === ""){
      setLoading(false);
      setStatus("⚠️ Please fill all the fields");
      return;
    }

    if(formData.email.includes("@") || formData.email.includes(".")) {
        setLoading(false);
      setStatus("⚠️ Invalid Email address");
      return;
    }

    try {
      const res = await fetch(process.env.NEXT_PUBLIC_CONTACT_FORM_API!, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_CONTACT_FORM_ACCESS_KEY,
          ...formData,
        }),
      });

      const result = await res.json();

      if (result.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again.");
      }
    } catch (error) {
      setStatus("⚠️ Something went wrong.");
      console.log("Contact form error ::",error)
    } finally {
      setLoading(false);
    }
  };

  useGSAP(()=>{
    const split = SplitText.create(".contact-h",{
      type:"chars"
    })
    // Animate subtitle words with stagger
    gsap.from(
      split.chars,
      {
        y: 100,
        autoAlpha: 0,
        rotationX: 90,
        duration: 1,
        stagger: 0.05,
        ease: "power2.out",
        scrollTrigger: {
          trigger: "#contact-container",
          start: "top 60%",
        }
      }
    );
  })

  return (
    <section id="contact" className="relative w-full min-h-screen bg-gradient-to-b from- via-neutral-900 to-black text-white py-20">
      <Container>
        <div id="contact-container" className="flex flex-col items-center gap-12">
          {/* Heading */}
          <h2  className="contact-h text-7xl md:text-8xl lg:text-9xl  font-extrabold text-center tracking-wide bg-gradient-to-t from-[#9ca3af] via-[#f5f5f5] to-white inline-block text-[#f5f5f5] bg-clip-text">
            Contact
          </h2>

          {/* Social Links */}
          <SocialCardsSection />

          {/* Notification */}
  

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-2xl px-2 flex flex-col gap-6 mt-8"
          >
            <input
              type="text"
              value={formData.name}
              onChange={handleChange}
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-5 py-4 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/50 outline-none transition-all duration-200 text-lg placeholder-gray-400"
            />
            <input
              type="email"
              value={formData.email}
              onChange={handleChange}
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-5 py-4 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/50 outline-none transition-all duration-200 text-lg placeholder-gray-400"
            />
            <textarea
              value={formData.message}
              onChange={handleChange}
              name="message"
              placeholder="Your Message"
              rows={5}
              required
              className="w-full px-5 py-4 rounded-xl bg-neutral-800 border border-neutral-700 focus:border-green-500 focus:ring-2 focus:ring-green-500/50 outline-none transition-all duration-200 text-lg placeholder-gray-400 resize-none"
            ></textarea>
            <button
              type="submit"
              disabled={status === "loading"}
              className={`px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 transition-colors duration-200 text-lg font-semibold tracking-wide ${
                loading ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
             {status && <p className="text-center mt-4">{status}</p>}

          </form>
        </div>
      </Container>
    </section>
  );
};

export default ContactSection;

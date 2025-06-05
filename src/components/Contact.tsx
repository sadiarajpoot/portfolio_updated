"use client";
import React from "react";
import { Particles } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import { motion } from "framer-motion";

export default function Contact() {
  const particlesInit = async (main: any) => {
    await loadFull(main);
  };

  return (
     <section
      id="about"
      className="fonts relative py-16 px-6 bg-gray-900 bg-gradient-to-r from-gray-900 via-gray-900 to-orange-900/20 overflow-hidden"
    >
       <div className="absolute top-200 left-[300px] w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>

      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="head_fonts text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500"
        >
          Contact Me
        </motion.h2>
           <div className="absolute -top-4 -left-6 w-32 h-32 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
        <p className="text-gray-400 mt-2">
          Let’s build something great together. Reach out via the form below!
        </p>
      </div>

      {/* Contact Form */}
      <div className="absolute top-2 right-[30px] w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
        <div className="absolute top-20 right-[60px] w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
      <motion.form
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto bg-white bg-opacity-5 p-8 rounded-xl shadow-lg backdrop-blur-md space-y-6"
      >
        <div>
          <label className="block text-sm mb-1">Your Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            className="w-full px-4 py-2 rounded-md bg-black bg-opacity-20 text-white border border-gray-600 outline-none focus:ring-1 focus:ring-orange-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="Enter your email"
           className="w-full px-4 py-2 rounded-md bg-black bg-opacity-20 text-white border border-gray-600 outline-none focus:ring-1 focus:ring-orange-500"
          />
               <div className="absolute top-60 left-[-300px] w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
        
        </div>
        <div>
          <label className="block text-sm mb-1">Message</label>
          <textarea
            rows={5}
            placeholder="Write your message..."
             className="w-full px-4 py-2 rounded-md bg-black bg-opacity-20 text-white border border-gray-600 outline-none focus:ring-1 focus:ring-orange-500"
          />
            <div className="absolute top-[40px] left-[-200px] w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
        </div>
        
        <button
          type="submit"
          className="w-full py-2 px-6 rounded-md bg-gradient-to-r from-orange-500 to-purple-300 hover:from-orange-400 hover:to-orange-500 transition font-semibold"
        >
          Send Message
        </button>
      </motion.form>
         <div className="absolute top-90 left-9 w-20 h-20 rounded-full bg-orange-500 opacity-20 blur-2xl animate-pulse pointer-events-none z-0"></div>
        
    </section>
  );
}


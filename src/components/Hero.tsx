"use client";
import Image from "next/image";
import portimage from "../../public/bg copy.png";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const typingTexts = ["Frontend Web Developer", "Frontend Developer"];
const nameText = "Sadia Khan";

export default function HeroSection() {
  const [darkMode, setDarkMode] = useState(true);

  // For top typing line
  const [displayText, setDisplayText] = useState("");
  const [typingIndex, setTypingIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  // For name typing effect
  const [displayName, setDisplayName] = useState("");
  const [nameCharIndex, setNameCharIndex] = useState(0);
  const [nameDeleting, setNameDeleting] = useState(false);

  // Typing effect logic for top line
  useEffect(() => {
    const currentText = typingTexts[typingIndex];
    let timeout: NodeJS.Timeout;

    if (!deleting && charIndex <= currentText.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev + 1);
      }, 100);
    } else if (deleting && charIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentText.slice(0, charIndex));
        setCharIndex((prev) => prev - 1);
      }, 50);
    } else if (charIndex === currentText.length + 1) {
      timeout = setTimeout(() => setDeleting(true), 1000);
    } else if (charIndex === -1) {
      setDeleting(false);
      setTypingIndex((prev) => (prev + 1) % typingTexts.length);
      setCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, deleting, typingIndex]);

  // Typing effect logic for name
  useEffect(() => {
    let timeout: NodeJS.Timeout;

    if (!nameDeleting && nameCharIndex <= nameText.length) {
      timeout = setTimeout(() => {
        setDisplayName(nameText.slice(0, nameCharIndex));
        setNameCharIndex((prev) => prev + 1);
      }, 150);
    } else if (nameDeleting && nameCharIndex >= 0) {
      timeout = setTimeout(() => {
        setDisplayName(nameText.slice(0, nameCharIndex));
        setNameCharIndex((prev) => prev - 1);
      }, 100);
    } else if (nameCharIndex === nameText.length + 1) {
      timeout = setTimeout(() => setNameDeleting(true), 2000);
    } else if (nameCharIndex === -1) {
      setNameDeleting(false);
      setNameCharIndex(0);
    }

    return () => clearTimeout(timeout);
  }, [nameCharIndex, nameDeleting]);

  return (
    <div className={`${darkMode ? "bg-black text-white" : "bg-white text-black"} min-h-screen relative overflow-hidden`}>
      {/* HERO SECTION */}
      <section className=" fonts flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-20 lg:px-32 h-[calc(100vh-100px)] relative z-10">
        {/* LEFT CONTENT */}
        <div className="z-20 mt-10 md:mt-0 text-center md:text-left max-w-xl animate-fadeInUp">
          <h2 className="text-lg md:text-xl text-purple-400 uppercase tracking-wide h-8 md:h-10">
            {displayText}
            <span className="border-r-2 border-purple-400 animate-blink ml-1" />
          </h2>
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold mt-4 leading-tight min-h-[90px]">
            {displayName}
            <span className="border-r-2 border-purple-400 animate-blink ml-1" />
          </h1>
          <p className="mt-6 max-w-md text-base md:text-lg opacity-90 leading-relaxed">
            I’m a Frontend Web Developer and I work remotely. I specialize in crafting modern, responsive, and high-performance user interfaces using technologies like <strong>HTML | CSS | React | Next.js | Tailwind CSS | TypeScript | JavaScript | Python</strong>.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-5 justify-center md:justify-start">
            <button className="bg-gradient-to-r from-purple-600 to-pink-500 px-8 py-4 rounded-full text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg">
              HIRE ME →
            </button>
<a
  href="/Sadia_Resume.pdf"
  download
  target="_blank"
  rel="noopener noreferrer"
  className="
    bg-white 
    text-purple-600 
    px-8 py-4 
    rounded-full 
    font-semibold 
    shadow-lg 
    hover:scale-105 
   
    transition-all 
    duration-300 
    text-center 
    inline-block
  "
>
  DOWNLOAD CV 
</a>



          </div>
          
        </div>

        {/* RIGHT IMAGE WITH GRADIENT GLOW */}
        <div className="relative w-[280px] h-[370px] sm:w-[340px] sm:h-[460px] md:w-[440px] md:h-[580px] z-10 animate-fadeInRight">
          {/* Gradient behind image */}
                {/* Dark Mode Toggle Button */}
  <button
  onClick={() => setDarkMode(!darkMode)}
  className="
    fixed top-7 
    right-4          
    sm:right-1         
    md:right-0          
    z-30 
   
    text-white 
    px-4 py-2 
    rounded-full 
    shadow-lg 
    hover:scale-110 
    transition-transform 
    duration-300
    flex items-center justify-center
    sm:px-3 sm:py-1.5
  "
  aria-label={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
>
  {darkMode ? (
    <FaSun className="text-yellow-300 opacity-70" size={24} />
  ) : (
    <FaMoon className="text-white opacity-50" size={24} />
  )}
</button>


          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-purple-700 blur-[120px] opacity-30 -z-10 animate-pulseSlow" />

          {/* Profile image */}
          <Image
            src={portimage}
            alt="Hero"
            fill
            className="object-contain rounded-xl drop-shadow-lg"
            priority
          />
        </div>

        {/* Floating download icon */}
        <div className="absolute right-4 bottom-10 md:right-16 md:bottom-16 z-20 animate-bounce">
  <a
    href="/Sadia_Resume.pdf"
    download
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Download CV PDF"
  >
    <button className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center shadow-[0_10px_30px_rgba(236,72,153,0.6)] hover:scale-110 transition-transform duration-300">
      <ArrowDownTrayIcon className="w-6 h-6 md:w-7 md:h-7 text-white" />
    </button>
  </a>
</div>

      </section>

      {/* BACKGROUND CODE SNIPPETS */}
      <div className="hidden md:block absolute top-20 right-6 text-sm text-gray-300 opacity-20 z-0 max-w-sm select-none">
        <pre className="whitespace-pre-wrap">{`
<h2>External JavaScript</h2>
<p id="demo"></p>
<button onclick="myFunction()">Click Me</button>
<p>This example links to "myScript.js"</p>
<script src="myScript.js"></script>
        `}</pre>
      </div>

      {/* Glowing Moving Purple Ball */}
      <div className="absolute top-1/3 left-[-80px] w-[200px] h-[200px] rounded-full bg-purple-600 opacity-50 blur-3xl animate-float-slow z-0" />
      
      


      <style jsx>{`
        @keyframes blink {
          0%, 50%, 100% {
            opacity: 1;
          }
          25%, 75% {
            opacity: 0;
          }
        }
        .animate-blink {
          animation: blink 1.2s infinite;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s ease forwards;
        }
        @keyframes fadeInRight {
          0% {
            opacity: 0;
            transform: translateX(20px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fadeInRight {
          animation: fadeInRight 1s ease forwards;
        }
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        .animate-pulseSlow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float-slow {
          animation: floatSlow 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

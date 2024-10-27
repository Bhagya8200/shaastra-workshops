import { transform } from "typescript";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scaleUp: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.25)" },
        },
        fadeOutLeft: {
          "0%": { opacity: 1, transform: "translateX(0)" },
          "100%": { opacity: 0, transform: "translateX(-100vw)" },
        },
        fadeInRight: {
          "0%": { opacity: 0, transform: "translateX(100vw)" },
          "100%": { opacity: 1, transform: "translateX(0%)" },
        },
        // slideInfromLeft: {
        //   "0%": { opacity: 0, transform: "translateX(-100%)" },
        //   "100%": { opacity: 1, transform: "translateX(0)" },
        // },
      },
      animation: {
        "scale-up": "scaleUp 0.5s ease-in-out",
        "fade-out-left": "fadeOutLeft 0.5s forwards",
        "fade-in-right": "fadeInRight 0.5s forwards",
        // "slide-in-from-left": "slideInfromLeft 0.5s ",
      },
    },
  },
  plugins: [],
};









// <div
//             className={`w-full h-[150px] ${
//               isFixed ? "fixed-top-0 " : "hidden"
//             } md:w-[450px] bg-[#501957] text-white flex flex-col md:flex-col z-10 md:z-1 fixed md:left-0 transform md:-translate-y-1/2 md:top-1/2 md:h-[550px] justify-center items-center px-4`}
//           ></div>

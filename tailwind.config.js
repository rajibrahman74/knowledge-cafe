/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#84d35f",

          secondary: "#e07b99",

          accent: "#6ff7c0",

          neutral: "#232037",

          "base-100": "#FFFFFF",

          info: "#78D5ED",

          success: "#1D9667",

          warning: "#EFB64E",

          error: "#F03824",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};

const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		fontFamily: {
      inter: "Inter var, sans-serif",
    },
		extend: {
			colors: {
        brand: "#4687C7",
        brand110:"#397DC0",
        accent: "#F28F8F",
        accent110: "##EF7777",
        dark: "#121212",
        offWhite: "#FCF8F1",
        white: "#FFFFFF",
      },
		},
		variants: {
			backgroundColor: ["responsive", "hover", "focus", "active"],
			extend: {
				scale: ["group-hover"],
			},
		},
	},
	plugins: [
    
  ],
}

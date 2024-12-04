/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
  "./pages/**/*.{js,jsx}",
  "./components/**/*.{js,jsx}",
  "./app/**/*.{js,jsx}",
  "./src/**/*.{js,jsx}",
];
export const prefix = "";
export const theme = {
  container: {
    center: true,
    padding: "2rem",
    screens: {
      "2xl": "1400px",
    },
  },
  extend: {
    colors: {
      customBlue: {
        100: "#D6F0FA", // Very light blue
        200: "#ADE1F5", // Lighter blue
        300: "#85D1F0", // Light blue
        400: "#5CC2EB", // Medium blue
        500: "rgb(18, 150, 211)", // Original blue
        600: "#127BB5", // Darker blue
        700: "#0D5A86", // Even darker blue
        800: "#083858", // Deep blue
        900: "#03192A", // Very dark blue
      },
      customGreen: {
        100: "#E6F6E5", // Light Green
        200: "#CDEDCB", // Lighter Green
        300: "#A9DC9E", // Medium-Light Green
        400: "#85CB71", // Medium Green
        500: "#6DC067", // Base Green
        600: "#5BAA57", // Slightly Dark Green
        700: "#478C43", // Dark Green
        800: "#326E30", // Darker Green
        900: "#205020", // Deep Green
      },
      "custom-blue": "#3d61ad",
      purple: {
        100: "#EDE9FE", // Light Purple
        200: "#DDD6FE", // Light Purple 2
        300: "#C4B5FD", // Medium Purple
        400: "#A78BFA", // Darker Purple
        500: "#8B5CF6", // Base Purple
        600: "#7C3AED", // Dark Purple
        700: "#6D28D9", // Dark Purple 2
        800: "#5B21B6", // Darker Purple
        900: "#4C1D95", // Deep Purple
      },
      "custom-green": "rgb(0, 237, 100)",
      border: "hsl(var(--border))",
      input: "hsl(var(--input))",
      ring: "hsl(var(--ring))",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        DEFAULT: "hsl(var(--secondary))",
        foreground: "hsl(var(--secondary-foreground))",
      },
      destructive: {
        DEFAULT: "hsl(var(--destructive))",
        foreground: "hsl(var(--destructive-foreground))",
      },
      muted: {
        DEFAULT: "hsl(var(--muted))",
        foreground: "hsl(var(--muted-foreground))",
      },
      accent: {
        DEFAULT: "hsl(var(--accent))",
        foreground: "hsl(var(--accent-foreground))",
      },
      popover: {
        DEFAULT: "hsl(var(--popover))",
        foreground: "hsl(var(--popover-foreground))",
      },
      card: {
        DEFAULT: "hsl(var(--card))",
        foreground: "hsl(var(--card-foreground))",
      },
    },
    borderRadius: {
      lg: "var(--radius)",
      md: "calc(var(--radius) - 2px)",
      sm: "calc(var(--radius) - 4px)",
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      contentAround: {
        "0%": {
          transform: "rotate(0deg) translateX(50%)",
        },
        "100%": {
          transform: "rotate(360deg) translateX(50%)",
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      "spin-slow": "spin 4s linear infinite",
      "content-around": "contentAround 6s linear infinite",
    },
  },
};
// eslint-disable-next-line no-undef
export const plugins = [require("tailwindcss-animate")];

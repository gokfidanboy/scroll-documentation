/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    screens: {
      xs: "375px",
      sm: "480px",
      md: "37.75em", // 604px
      lg: "50em", // 800px
      xl: "72em", // 1152px
    },
    extend: {
      borderRadius: {
        primary: "var(--border-radius-primary)" /* Inputs, Buttons */,
        secondary: "var(--border-radius-secondary)" /* Cards */,
        reset: "var(--border-radius-reset)" /* Border reset */,
        round: "var(--border-radius-round)" /* Rounded icon buttons */,
      },
      borderWidth: {
        "w-primary": "var(--border-width-primary)" /* Inputs */,
        "w-secondary": "var(--border-width-secondary)" /* Buttons */,
        "w-reset": "var(--border-width-reset)" /* Border reset */,
      },
      backgroundColor: {
        normal: "#FFF0DD",
        "dark-normal": "#262626",
        highlight: "#FFDEB5",
        "dark-highlight": "#3b3b3b",
        "callout-note": "#FFF8F3",
        "callout-dark-note": "#262626",
        "callout-caution": "#F8F5E0",
        "callout-dark-caution": "#5D4C38",
        "callout-danger": "#FFE4DF",
        "callout-dark-danger": "#662A1E",
        "callout-tip": "#EEEEEE",
        "callout-dark-tip": "#3A635E",
      },
      borderColor: {
        primary: "#dadada",
        "dark-primary": "#FFF8F34D",
      },
      colors: {
        blue: {
          100: "var(--blue-100)",
          200: "var(--blue-200)",
          300: "var(--blue-300)",
          400: "var(--blue-400)",
          500: "var(--blue-500)",
          600: "var(--blue-600)",
          700: "var(--blue-700)",
          800: "var(--blue-800)",
          900: "var(--blue-900)",
        },
        gray: {
          100: "var(--gray-100)",
          200: "var(--gray-200)",
          300: "var(--gray-300)",
          400: "var(--gray-400)",
          500: "var(--gray-500)",
          600: "var(--gray-600)",
          700: "var(--gray-700)",
          800: "var(--gray-800)",
          900: "var(--gray-900)",
        },
        green: {
          100: "var(--green-100)",
          200: "var(--green-200)",
          300: "var(--green-300)",
          400: "var(--green-400)",
          500: "var(--green-500)",
          600: "var(--green-600)",
          700: "var(--green-700)",
          800: "var(--green-800)",
          900: "var(--green-900)",
        },
        orange: {
          100: "var(--orange-100)",
          200: "var(--orange-200)",
          300: "var(--orange-300)",
          400: "var(--orange-400)",
          500: "var(--orange-500)",
          600: "var(--orange-600)",
          700: "var(--orange-700)",
          800: "var(--orange-800)",
          900: "var(--orange-900)",
        },
        purple: {
          100: "var(--purple-100)",
          200: "var(--purple-200)",
          300: "var(--purple-300)",
          400: "var(--purple-400)",
          500: "var(--purple-500)",
          600: "var(--purple-600)",
          700: "var(--purple-700)",
          800: "var(--purple-800)",
          900: "var(--purple-900)",
        },
        red: {
          100: "var(--red-100)",
          200: "var(--red-200)",
          300: "var(--red-300)",
          400: "var(--red-400)",
          500: "var(--red-500)",
          600: "var(--red-600)",
          700: "var(--red-700)",
          800: "var(--red-800)",
          900: "var(--red-900)",
        },
        yellow: {
          100: "var(--yellow-100)",
          200: "var(--yellow-200)",
          300: "var(--yellow-300)",
          400: "var(--yellow-400)",
          500: "var(--yellow-500)",
          600: "var(--yellow-600)",
          700: "var(--yellow-700)",
          800: "var(--yellow-800)",
          900: "var(--yellow-900)",
        },
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
        heading: "var(--color-text-heading)",
        error: "var(--color-text-error)",
        warning: "var(--color-text-warning)",
        success: "var(--color-text-success)",
        info: "var(--color-text-info)",
        contrast: "var(--color-text-contrast)",
        link: "var(--color-text-link)",
        "link-hover": "var(--color-text-link-hover)",
        "link-pressed": "var(--color-text-link-pressed)",
        disabled: "var(--color-text-disabled)",
        placeholder: "var(--color-text-placeholder)",
        value: "var(--color-text-value)",
        label: "var(--color-text-label)",
        text: "var(--theme-text)",
        accent: "var(--theme-text-accent)",
        light: "var(--theme-text-light)",
        lighter: "var(--theme-text-lighter)",
        bg: "var(--theme-bg)",
        "bg-hover": "var(--theme-bg-hover)",
        "bg-offset": "var(--theme-bg-offset)",
        "bg-accent": "var(--theme-bg-accent)",
        divider: "#000000",
        accent: "var(--theme-accent)",
        "code-text": "var(--theme-code-text)",
        "code-bg": "var(--theme-code-bg)",
        "background-primary": "var(--color-background-primary)",
        "background-secondary": "var(--color-background-secondary)",
        "background-error": "var(--color-background-error)",
        "background-contrast": "var(--color-background-contrast)",
        "background-warning": "var(--color-background-warning)",
        "background-success": "var(--color-background-success)",
        "background-info": "var(--color-background-info)",
        "background-disabled": "var(--color-background-disabled)",
        "code-inline-bg": "var(--theme-code-inline-bg)",
        "border-primary": "var(--color-border-primary)",
        "border-secondary": "var(--color-border-secondary)",
        "border-contrast": "var(--color-border-contrast)",
        "border-interactive": "var(--color-border-interactive)",
        "border-disabled": "var(--color-border-disabled)",
        "border-separator": "var(--color-border-separator)",
        "interactive-focus": "var(--color-border-interactive-focus)",
        "interactive-hover": "var(--color-border-interactive-hover)",
        "interactive-pressed": "var(--color-border-interactive-pressed)",
        "interactive-error": "var(--color-border-interactive-error)",

        // theme
        black: "#101010",
        white: "#FFF8F3",

        "pure-black": "#000",
        "pure-white": "#fff",
      },
      fontFamily: {
        text: "var(--font-family-text)",
        code: "var(--font-family-code)",
        mono: "var(--font-family-code)",
      },
      fontWeight: {
        normal: "var(--font-weight-normal)",
        medium: "var(--font-weight-medium)",
        bold: "var(--font-weight-bold)",
      },
      fontSize: {
        base: ["16px", "28px"],
      },
      height: {
        navbar: "var(--theme-navbar-height)",
      },
      margin: {
        navbar: "var(--theme-navbar-height)",
      },
      opacity: {
        accent: "var(--theme-accent-opacity)",
      },
      padding: {
        modal: "var(--modal-padding)",
        doc: "var(--doc-padding)",
      },
    },
  },
  plugins: [],
}

function withOpacity(variableName) {
  return ({ opacityValue }) => (opacityValue !== undefined ? `rgba(var(${variableName}), ${opacityValue})` : `rgb(var(${variableName}))`);
}

const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: withOpacity("--primary"),
        secondary: withOpacity("--secondary"),
        thirdy: withOpacity("--thirdy"),

        content: withOpacity("--content"),
      },
      dropShadow: {
        "md-primary": `0 0px 5px rgba(var(--primary))`,
        "lg-primary": `0 0px 10px rgba(var(--primary))`,
        "md-gray": `0 0px 5px rgba(255,255,255,0.5)`,
        "lg-gray": `0 0px 10px rgba(255,255,255,0.5)`,
      },
    },
  },
  plugins: [],
};
export default config;

const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: `rgb(var(--primary)/ <alpha-value>)`,
        secondary: `rgb(var(--secondary)/ <alpha-value>)`,
        content: `rgb(var(--content)/ <alpha-value>)`,
        text: `rgb(var(--text)/ <alpha-value>)`,
        bej: `rgb(var(--bej)/ <alpha-value>)`,
      },
      dropShadow: {
        'md-primary': `0 0px 5px rgba(var(--primary))`,
        'lg-primary': `0 0px 10px rgba(var(--primary))`,
        'md-gray': `0 0px 5px rgba(255,255,255,0.5)`,
        'lg-gray': `0 0px 10px rgba(255,255,255,0.5)`,
      },
    },
  },
  plugins: [],
};
export default config;

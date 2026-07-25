export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
          "secondary-fixed": "#acf847",
          "on-secondary": "#1f3700",
          "on-background": "#e1e3e4",
          "surface-variant": "#323536",
          "background": "#111415",
          "surface-tint": "#c0c6db",
          "secondary-fixed-dim": "#91db2a",
          "tertiary-container": "#171919",
          "surface-bright": "#373a3b",
          "error": "#ffb4ab",
          "on-tertiary": "#2f3131",
          "on-error": "#690005",
          "secondary": "#94de2d",
          "tertiary-fixed-dim": "#c6c6c7",
          "surface-container-high": "#282a2b",
          "secondary-container": "#7ac100",
          "surface-container-lowest": "#0c0f10",
          "error-container": "#93000a",
          "on-surface": "#e1e3e4",
          "on-error-container": "#ffdad6",
          "inverse-surface": "#e1e3e4",
          "on-tertiary-container": "#808282",
          "primary-container": "#111827",
          "on-primary": "#293040",
          "primary-fixed-dim": "#c0c6db",
          "tertiary": "#c6c6c7",
          "outline-variant": "#45464c",
          "surface": "#111415",
          "on-tertiary-fixed-variant": "#454747",
          "inverse-on-surface": "#2e3132",
          "tertiary-fixed": "#e2e2e2",
          "on-secondary-fixed": "#102000",
          "surface-dim": "#111415",
          "surface-container-low": "#191c1d",
          "primary-fixed": "#dce2f7",
          "on-secondary-fixed-variant": "#304f00",
          "surface-container": "#1d2021",
          "on-surface-variant": "#c6c6cd",
          "on-primary-container": "#7a8194",
          "primary": "#c0c6db",
          "on-tertiary-fixed": "#1a1c1c",
          "outline": "#909097",
          "on-primary-fixed": "#141b2b",
          "surface-container-highest": "#323536",
          "on-secondary-container": "#2c4900",
          "on-primary-fixed-variant": "#404758",
          "inverse-primary": "#575e70"
      },
      borderRadius: {
          "DEFAULT": "1rem",
          "lg": "2rem",
          "xl": "3rem",
          "full": "9999px"
      },
      spacing: {
          "margin-mobile": "16px",
          "gutter": "24px",
          "margin-desktop": "48px",
          "unit": "4px",
          "container-max": "1280px"
      },
      fontFamily: {
          "headline-md": ["Archivo Narrow"],
          "display-lg": ["Archivo Narrow"],
          "headline-lg": ["Archivo Narrow"],
          "headline-lg-mobile": ["Archivo Narrow"],
          "body-md": ["Hanken Grotesk"],
          "body-lg": ["Hanken Grotesk"],
          "label-caps": ["JetBrains Mono"]
      },
      fontSize: {
          "headline-md": ["24px", { "lineHeight": "1.3", "fontWeight": "600" }],
          "display-lg": ["64px", { "lineHeight": "1.1", "letterSpacing": "-0.02em", "fontWeight": "700" }],
          "headline-lg": ["40px", { "lineHeight": "1.2", "letterSpacing": "-0.01em", "fontWeight": "700" }],
          "headline-lg-mobile": ["32px", { "lineHeight": "1.2", "fontWeight": "700" }],
          "body-md": ["16px", { "lineHeight": "1.5", "fontWeight": "400" }],
          "body-lg": ["18px", { "lineHeight": "1.6", "fontWeight": "400" }],
          "label-caps": ["12px", { "lineHeight": "1.0", "letterSpacing": "0.1em", "fontWeight": "600" }]
      },
      boxShadow: {
          "ambient": "0px 8px 32px 0px rgba(0, 0, 0, 0.40)",
          "lift": "0px 16px 48px 0px rgba(172, 248, 71, 0.15)"
      }
    }
  },
  plugins: [],
}

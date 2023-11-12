import { ThemeProvider } from "react-bootstrap";
const generalTheme = {
  colors: {
    primary:
      "var(--header-cl, linear-gradient(180deg, #FB8501 0%, #F6A142 33.33%, #FDC587 66.67%, #FDE6CC 93.75%))",
    black: "#000000",
    white: "#ffffff",
  },
  fonts: ["M PLUS Rounded 1c", "sans-serif"],
  fontSizes: {
    xsmall: "0.8rem",
    small: "1.0rem",
    medium: "1.5rem",
    large: "3rem",
    xlarge: "4.5rem",
  },
  fontWeights: {
    light: 100,
    normal: 300,
    regular: 400,
    medium: 500,
    bold: 700,
    xbold: 800,
    black: 900,
  },
};

export default function Theme({ children }) {
  return <ThemeProvider theme={generalTheme}>{children}</ThemeProvider>;
}

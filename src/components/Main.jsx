import { ThemeProvider, createTheme } from '@mui/material/styles';
import {
  About,
  Cards,
  ContactUs,
  Footer,
  Hero,
  Home,
  Navbar,
  Testimonals,
} from "../pages";

const theme = createTheme({
  breakpoints: {
    values: {
      sm: "586px",
      md: "930px",
      lg: "1280px",
      xl: "1920px",
    },
  },

  palette: {
    primary: {
      main: "#0F5132",
    },
  },
});

const Main = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Home />
      <About />
      <Hero />
      <Cards />
      <Testimonals />
      <ContactUs />
      <Footer />
    </ThemeProvider>
  );
};

export default Main;

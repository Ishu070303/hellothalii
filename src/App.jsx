import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './pages/navbar/Navbar';

import './index.css';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Hero from './pages/Hero/Hero';
import Cards from './pages/cards/Cards';

const theme = createTheme({
  breakpoints: {
    values: {
      sm: "586px",
      md: "930px",
      lg: "1280px",
      xl: "1920px"
    }
  }, 

  palette: {
    primary: {
      main: "#0F5132",
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
    <Navbar />
    <Home />
    <About />
    <Hero />
    <Cards />
    </ThemeProvider>
  )
}

export default App
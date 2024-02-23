import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './pages/navbar/Navbar';

import './index.css';
import Home from './pages/Home/Home';

const theme = createTheme({
  breakpoints: {
    values: {
      sm: "505px",
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
    </ThemeProvider>
  )
}

export default App
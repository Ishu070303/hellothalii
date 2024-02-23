import { ThemeProvider, createTheme } from '@mui/material/styles';
import Navbar from './pages/navbar/Navbar';

import './index.css';

const theme = createTheme({
  breakpoints: {
    values: {
      sm: 430,
      md: 1024,
      lg: 1280,
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
    </ThemeProvider>
  )
}

export default App
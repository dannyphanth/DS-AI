import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline, Box } from '@mui/material'
import { Analytics } from '@vercel/analytics/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop.jsx'
// import Home from './components/Home'
import Events from './components/Events'
import About from './components/About'
import Board from './components/Contact.jsx'
import Projects from './components/Projects'
import Resources from './components/Resources'
import Contact from './components/Contact'
import DatathonPopup from './components/DatathonPopup'
import './App.css'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00c8ff',
      light: '#9cebff',
      dark: '#009ea1',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#009ea1',
      light: '#9cebff',
      dark: '#00c8ff',
      contrastText: '#ffffff',
    },
    background: {
      default: '#0a192f',
      paper: '#0d0f12',
    },
  },
  typography: {
    fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontFamily: 'Montserrat, Poppins, sans-serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Montserrat, Poppins, sans-serif',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Montserrat, Poppins, sans-serif',
      fontWeight: 600,
    },
    h4: {
      fontFamily: 'Montserrat, Poppins, sans-serif',
      fontWeight: 600,
    },
    h5: {
      fontFamily: 'Montserrat, Poppins, sans-serif',
      fontWeight: 500,
    },
    h6: {
      fontFamily: 'Montserrat, Poppins, sans-serif',
      fontWeight: 500,
    },
    button: {
      fontFamily: 'Montserrat, Poppins, sans-serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif',
    },
    subtitle2: {
      fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif',
    },
    body1: {
      fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif',
    },
    body2: {
      fontFamily: 'Lato, Roboto, Helvetica, Arial, sans-serif',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: 8,
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        },
      },
    },
  },
})

function AppShell() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <Box sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#0a192f'
    }}>
      <Box sx={{ display: isHome ? { xs: 'none', sm: 'block' } : 'block' }}>
        <Navbar />
      </Box>
      <Box component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={
            <>
              <Home />
            </>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/board" element={<Board />} />
        </Routes>
      </Box>
      <Footer />
      <DatathonPopup />
    </Box>
  )
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <AppShell />
      </Router>
      <Analytics />
    </ThemeProvider>
  )
}

export default App

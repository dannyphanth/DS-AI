import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material'
import Navbar from './components/Navbar'
import Footer from './components/Footer.jsx'
import Home from './components/Home'
import ScrollToTop from './components/ScrollToTop.jsx'
// import Home from './components/Home'
import Events from './components/Events'
import About from './components/About'
import Board from './components/Contact.jsx'
import Join from './components/Join'
import Projects from './components/Projects'
import Resources from './components/Resources'
import Contact from './components/Contact'
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
      default: '#ffffff',
      paper: '#f5f5f5',
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col bg-primary text-white">
          <Navbar />
          <main className="flex-1 container mx-auto px-4 py-8">
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
              <Route path="/join" element={<Join />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  )
}

export default App

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import LandingPage from './components/LandingPage'
import AboutPage from './pages/AboutPage'
import MenuPage from './pages/MenuPage'
import LocationPage from './pages/LocationPage'
import ShopPage from './pages/ShopPage'
import ContactPage from './pages/ContactPage'
import Navbar from './components/Navbar'
import ChatWidget from './components/ChatWidget'

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <LandingPage />
              </motion.div>
            } />
            <Route path="/about" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <AboutPage />
              </motion.div>
            } />
            <Route path="/menu" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <MenuPage />
              </motion.div>
            } />
            <Route path="/location" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <LocationPage />
              </motion.div>
            } />
            <Route path="/shop" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ShopPage />
              </motion.div>
            } />
            <Route path="/contact" element={
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
              >
                <ContactPage />
              </motion.div>
            } />
          </Routes>
        </AnimatePresence>
        <ChatWidget />
      </div>
    </Router>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import BlankLayout from './layouts/BlankLayout'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './components/Home'
import About from './/components/About'
import NotFound from './components/pages/NotFound'
//import Projects from './components/Projects'
//import Contact from './components/Contact'
//import Footer from './components/Footer'
import './styles/main.scss'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        {/* ✅ Standard-layout med header/footer */}
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          {/* fler pages här... */}
        </Route>

        {/* 🚫 Special-layout utan header/footer */}
        <Route element={<BlankLayout />}>
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App

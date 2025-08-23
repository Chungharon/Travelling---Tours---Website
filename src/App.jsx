import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TourDetailPage from './Components/Pages/TourDetail'

function App() {

  return (
    <>
    <ToastContainer />
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="TourDetail/:id" element={<TourDetailPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

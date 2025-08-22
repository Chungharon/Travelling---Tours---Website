import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Nav from './Components/Nav/Nav'
import Index from './Components/Pages/Index'
import TourDetails from './Components/Pages/TourDetails'
function App() {

  return (
    <>
    <Router>
      <Nav/>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="TourDetail/:id" element={<TourDetails />} />
      </Routes>
    </Router>
    </>
  )
}

export default App

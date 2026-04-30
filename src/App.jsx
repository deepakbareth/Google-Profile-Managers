import { Routes, Route } from 'react-router-dom'
import Homes from "./Pages/Home"
import Management from './Pages/Management'
import Navbar2 from "./Components/Layout/Navbar2"
import Footer from './Components/Layout/Footer'
import OptimizationPage from './Pages/OptimizationPage'
import SetupServicePage from './Pages/SeupServicePage'

function App() {
  const navLinks = [
    { name: 'MANAGEMENT', path: 'management' },
    { name: 'OPTIMIZATION', path: '#optimization' },
    { name: 'SETUP', path: '#setup' },
    { name: 'SUPPORT', path: '#support' },
    { name: 'WEB SERVICES', path: '#web-services' },
  ];
  return (
    <>
 <Navbar2 />

      <Routes>

        <Route path="/googleprofilemanagers/" element={<Homes />} />
        <Route path="/googleprofilemanagers/management" element={<Management/>} />
          <Route path="/googleprofilemanagers/optimization" element={<OptimizationPage/>} />
          <Route path="/googleprofilemanagers/setup" element={<SetupServicePage/>} />
          <Route path="/googleprofilemanagers/support" element={<Homes />} />
          <Route path="/googleprofilemanagers/web-services" element={<Homes />} />
          <Route path="/googleprofilemanagers/contact-us" element={<Homes />} />
      </Routes>
      <Footer/>
    </>

  )
}
export default App
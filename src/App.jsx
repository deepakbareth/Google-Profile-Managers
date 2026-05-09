import { Routes, Route } from 'react-router-dom'
import Homes from "./Pages/Home"
import Management from './Pages/Management'
import Navbar2 from "./Components/Layout/Navbar2"
import Footer from './Components/Layout/Footer'
import OptimizationPage from './Pages/OptimizationPage'
import SetupServicePage from './Pages/SeupServicePage'
import SupportPage from './Pages/SupportPage'
import WebServicesPage from './Pages/WebServicesPage'
import ContactUs from './Components/Contect-Us/ContactUs'
import Home from './Pages/Home'
import PersonalWebsitePage from './Pages/PersonalWebsitePage'
import MobileAppPage from './Pages/MobileAppPage'
import SoftwareDevelopmentPage from './Pages/SoftwareDevelopmentPage'
import ErpCrmPage from './Pages/erpCrmPage'
import DigitalMarketingPage from './Pages/DigitalMarketingPage'
import SeoPage from './Pages/SeoPage'
import ServicesPage from './Pages/ServicesPage'
import SuccessStoriesPage from './Pages/SuccessStoriesPage'

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
        <Route path="/googleprofilemanagers/management" element={<Management />} />
        <Route path="/googleprofilemanagers/optimization" element={<OptimizationPage />} />
        <Route path="/googleprofilemanagers/setup" element={<SetupServicePage />} />
        <Route path="/googleprofilemanagers/support" element={<SupportPage />} />
        <Route path="/googleprofilemanagers/web-services" element={<WebServicesPage />} />
        <Route path="/googleprofilemanagers/contact-us" element={<ContactUs />} />
        <Route path="/googleprofilemanagers/personal-website-design" element={<PersonalWebsitePage />} />
        <Route path="/googleprofilemanagers/mobile-app-development" element={<MobileAppPage />} />
        <Route path="/googleprofilemanagers/software-development" element={<SoftwareDevelopmentPage />} />
        <Route path="/googleprofilemanagers/erp-crm" element={<ErpCrmPage />} />
        <Route path="/googleprofilemanagers/digital-marketing" element={<DigitalMarketingPage />} />
        <Route path="/googleprofilemanagers/search-engine-optimization" element={<SeoPage />} />
        <Route path="/googleprofilemanagers/services" element={<ServicesPage />} />
        <Route path="/googleprofilemanagers/success-stories" element={<SuccessStoriesPage />} />
      </Routes>
      <Footer />
    </>

  )
}
export default App
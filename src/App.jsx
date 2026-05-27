import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

// 1. Eagerly load layout components (Navbar/Footer) so they render immediately
import Navbar2 from "./Components/Layout/Navbar2";
import Footer from './Components/Layout/Footer';
import Skeleton from './Components/Layout/Skeleton';

// 2. Lazy load all page components using your EXACT file paths
const Homes = lazy(() => import('./Pages/Home'));
const Management = lazy(() => import('./Pages/Management'));
const OptimizationPage = lazy(() => import('./Pages/OptimizationPage'));
const SetupServicePage = lazy(() => import('./Pages/SeupServicePage')); // Kept original file name
const SupportPage = lazy(() => import('./Pages/SupportPage'));
const WebServicesPage = lazy(() => import('./Pages/WebServicesPage'));
const ContactUs = lazy(() => import('./Components/Contect-Us/ContactUs'));
const PersonalWebsitePage = lazy(() => import('./Pages/PersonalWebsitePage'));
const MobileAppPage = lazy(() => import('./Pages/MobileAppPage'));
const SoftwareDevelopmentPage = lazy(() => import('./Pages/SoftwareDevelopmentPage'));
const ErpCrmPage = lazy(() => import('./Pages/erpCrmPage'));
const DigitalMarketingPage = lazy(() => import('./Pages/DigitalMarketingPage'));
const SeoPage = lazy(() => import('./Pages/SeoPage'));
const ServicesPage = lazy(() => import('./Pages/ServicesPage'));
const SuccessStoriesPage = lazy(() => import('./Pages/SuccessStoriesPage'));
const BlogsPage = lazy(() => import('./Pages/BlogsPage'));

function App() {
  // Note: Removed the unused `navLinks` array to keep memory usage low and the file clean.

  return (
    <>
      <Navbar2 />

      {/* 3. Wrap Routes in Suspense to handle the loading state of lazy components */}
      <Suspense fallback={<Skeleton />}>
        <Routes>
          <Route path="/" element={<Homes />} />
          <Route path="/management" element={<Management />} />
          <Route path="/optimization" element={<OptimizationPage />} />
          <Route path="/setup" element={<SetupServicePage />} />
          <Route path="/support" element={<SupportPage />} />
          <Route path="/web-services" element={<WebServicesPage />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/personal-website-design" element={<PersonalWebsitePage />} />
          <Route path="/mobile-app-development" element={<MobileAppPage />} />
          <Route path="/software-development" element={<SoftwareDevelopmentPage />} />
          <Route path="/erp-crm" element={<ErpCrmPage />} />
          <Route path="/digital-marketing" element={<DigitalMarketingPage />} />
          <Route path="/search-engine-optimization" element={<SeoPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/success-stories" element={<SuccessStoriesPage />} />
          <Route path="/blogs" element={<BlogsPage />} />
        </Routes>
      </Suspense>

      <Footer />
    </>
  );
}

export default App;
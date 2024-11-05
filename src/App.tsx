import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Solutions from './pages/Solutions';
import Resources from './pages/Resources';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import OnboardingModal from './components/OnboardingModal';
import Login from './components/portal/Login';
import AdminDashboard from './components/portal/admin/AdminDashboard';
import ClientDashboard from './components/portal/client/ClientDashboard';
import ProtectedRoute from './components/portal/ProtectedRoute';

// Service Pages
import SEOServices from './pages/services/SEOServices';
import PPCManagement from './pages/services/PPCManagement';
import SocialMedia from './pages/services/SocialMedia';
import ContentMarketing from './pages/services/ContentMarketing';
import Analytics from './pages/services/Analytics';
import BrandStrategy from './pages/services/BrandStrategy';
import WebDesign from './pages/services/WebDesign';
import CustomDevelopment from './pages/services/CustomDevelopment';
import AIConsulting from './pages/services/AIConsulting';

// Solution Pages
import Enterprise from './pages/solutions/Enterprise';
import SmallBusiness from './pages/solutions/SmallBusiness';
import Healthcare from './pages/solutions/Healthcare';
import Ecommerce from './pages/solutions/Ecommerce';

// Resource Pages
import Blog from './pages/resources/Blog';
import BlogPost from './pages/resources/BlogPost';
import CaseStudies from './pages/resources/CaseStudies';
import Webinars from './pages/resources/Webinars';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <ParallaxProvider>
        <OnboardingModal />
        <Routes>
          {/* Portal Routes */}
          <Route path="/portal">
            <Route index element={<Navigate to="/portal/login" replace />} />
            <Route path="login" element={<Login />} />
            <Route
              path="admin/*"
              element={
                <ProtectedRoute allowedRole="admin">
                  <AdminDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="client/*"
              element={
                <ProtectedRoute allowedRole="client">
                  <ClientDashboard />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Main Website Routes */}
          <Route
            path="/*"
            element={
              <>
                <Navbar />
                <main className="flex-grow pt-[72px]">
                  <Routes>
                    <Route index element={<Home />} />
                    
                    {/* Service Routes */}
                    <Route path="services" element={<Services />} />
                    <Route path="services/seo" element={<SEOServices />} />
                    <Route path="services/ppc" element={<PPCManagement />} />
                    <Route path="services/social-media" element={<SocialMedia />} />
                    <Route path="services/content-marketing" element={<ContentMarketing />} />
                    <Route path="services/analytics" element={<Analytics />} />
                    <Route path="services/brand-strategy" element={<BrandStrategy />} />
                    <Route path="services/web-design" element={<WebDesign />} />
                    <Route path="services/custom-development" element={<CustomDevelopment />} />
                    <Route path="services/ai-consulting" element={<AIConsulting />} />

                    {/* Solution Routes */}
                    <Route path="solutions" element={<Solutions />} />
                    <Route path="solutions/enterprise" element={<Enterprise />} />
                    <Route path="solutions/small-business" element={<SmallBusiness />} />
                    <Route path="solutions/healthcare" element={<Healthcare />} />
                    <Route path="solutions/ecommerce" element={<Ecommerce />} />

                    {/* Resource Routes */}
                    <Route path="resources" element={<Resources />} />
                    <Route path="resources/blog" element={<Blog />} />
                    <Route path="resources/blog/:id" element={<BlogPost />} />
                    <Route path="resources/case-studies" element={<CaseStudies />} />
                    <Route path="resources/webinars" element={<Webinars />} />

                    <Route path="contact" element={<Contact />} />
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </Routes>
                  <Footer />
                </main>
              </>
            }
          />
        </Routes>
      </ParallaxProvider>
    </ErrorBoundary>
  );
};

export default App;
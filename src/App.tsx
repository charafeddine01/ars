// import React from 'react';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from './hooks/useAuth';
import Layout from './components/Layout/Layout';
import AdminLayout from './components/Admin/AdminLayout';
import ProtectedRoute from './components/Admin/ProtectedRoute';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import AdminLogin from './pages/Admin/Login';
import AdminDashboard from './pages/Admin/Dashboard';
import ProductManagement from './pages/Admin/ProductManagement';

function App() {
  useEffect(() => {
  // Remove Bolt badge <script> if present
  document
    .querySelectorAll('script[src*="bolt.new"], script[src*="badge.js"]')
    .forEach((s) => s.remove());

  const removeBadgeHosts = () => {
    // Find any host element that has a shadowRoot containing the Bolt badge
    document.querySelectorAll<HTMLElement>('div, a').forEach((el) => {
      const sr = (el as any).shadowRoot as ShadowRoot | null;
      if (!sr) return;
      const badge = sr.querySelector('a.badge[href*="bolt.new"], a[href*="bolt.new"].badge');
      if (badge) el.remove(); // remove the host that displays the badge
    });
  };

  // Run now + on future DOM changes (in case a script reinjects it)
  removeBadgeHosts();
  const mo = new MutationObserver(removeBadgeHosts);
  mo.observe(document.body, { childList: true, subtree: true });
  return () => mo.disconnect();
}, []);
  return (
    <HelmetProvider>
      <AuthProvider>
        <Router>
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
            </Route>
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<AdminLogin />} />
            <Route path="/admin" element={
              <ProtectedRoute>
                <AdminLayout />
              </ProtectedRoute>
            }>
              <Route index element={<AdminDashboard />} />
              <Route path="products" element={<ProductManagement />} />
              <Route path="content" element={<div>Content Management (Coming Soon)</div>} />
              <Route path="settings" element={<div>Settings (Coming Soon)</div>} />
            </Route>
            
            {/* 404 */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </HelmetProvider>
  );
}

export default App;
// import React from 'react';
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/Layout/Layout';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import About from './pages/About';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';

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
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="catalog" element={<Catalog />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </HelmetProvider>
  );
}

export default App;
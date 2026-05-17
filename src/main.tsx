import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async'; // <-- 1. Import this

// Main App Component
import App from './App';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* 2. Wrap your Router and App inside the HelmetProvider */}
    <HelmetProvider>
      <Router>
        <App />
      </Router>
    </HelmetProvider>
  </StrictMode>,
);
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import React from 'react';
import './index.css';

createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

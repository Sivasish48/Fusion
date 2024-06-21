import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from "@/components/component/theme-provider.jsx"
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <RecoilRoot>
      <App />
    </RecoilRoot>
    </ThemeProvider>
  </React.StrictMode>,
);

import { createRoot } from 'react-dom/client'
import { HashRouter } from 'react-router-dom' // <--- Import this
import { ThemeProvider } from "./hooks/use-theme.tsx";
import App from './App.tsx'
import "./index.css";

createRoot(document.getElementById('root')!).render(
  <HashRouter> 
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </HashRouter>,
)
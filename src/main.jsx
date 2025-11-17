import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'primereact/resources/themes/lara-light-blue/theme.css';   // ✅ Theme
import 'primereact/resources/primereact.min.css';                 // ✅ Core CSS
import 'primeicons/primeicons.css';                               // ✅ Icons
import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

// ✅ Create a single QueryClient instance
const queryClient = new QueryClient();
createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>,
)

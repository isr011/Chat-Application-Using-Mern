import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {AuthContext, AuthProvider} from "./context/AuthProvider.jsx"

createRoot(document.getElementById('root')).render(
 <AuthProvider>
  <App />
 </AuthProvider>,
)

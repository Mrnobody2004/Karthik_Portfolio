import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/globals.css'
import './styles/Header.css'
import './styles/About.css'
import './styles/Experience.css'
import './styles/Education.css'
import './styles/Skills.css'
import './styles/Projects.css'
import './styles/FlipCard.css'
import './styles/Contact.css'
import './styles/Footer.css'
import './styles/DarkModeToggle.css'
import './styles/LoadingSpinner.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
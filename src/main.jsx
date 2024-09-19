import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import App from './App.jsx'
import Home from './Home.jsx'
import Navbar from './Navbar.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Navbar/>
    <Home/>
  </StrictMode>,
)
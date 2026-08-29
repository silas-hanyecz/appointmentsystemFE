import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import Home from "./Home/Home.jsx";
import Navigation from "./Home/Navigation.jsx";
import Services from "./Home/Services.jsx";
import Guide from "./Home/Guide.jsx";
import Booking from "./Home/Booking.jsx";
import About from "./Home/About.jsx";
import Footer from "./Home/Footer.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <Navigation/>
        <Home/>
        <Services/>
        <Guide/>
        <Booking/>
        <About/>
        <Footer/>
    </StrictMode>,
)

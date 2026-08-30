import NavButton_cms from "./NavButton_cms.jsx";
import StatCard from "./StatCard_cms.jsx";
import Dashboard from "./Dashboard_cms.jsx";
import ServiceForm_cms from "./ServiceForm_cms.jsx";
import Termine from "./Termine_cms.jsx";
import Leistungen from "./Leistungen_cms.jsx";
import Settings_cms from "./Settings_cms.jsx";
import {createRoot} from "react-dom/client";
import {StrictMode} from "react";

function Home_cms() {
    return (
        createRoot(document.getElementById('root')).render(
            <StrictMode>
                <NavButton_cms/>
                <StatCard/>
                <Dashboard/>
                <Termine/>
                <ServiceForm_cms/>
                <Leistungen/>
                <Settings_cms/>
            </StrictMode>
        )
    )
}

export default Home_cms
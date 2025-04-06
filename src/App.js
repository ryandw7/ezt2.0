import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from './pages/PageWrapper';
import CurrentServicesPage from "./pages/CurrentServicesPage";
import NewCoreServicesPage from "./pages/NewCoreServicesPage";
import NewMobilePage from "./pages/NewMobilePage";
import AdditionalInfoPage from './pages/AdditionalInfoPage';
import FinishPage from "./pages/FinishPage";

export default function App() {

    return (
        <Routes>
            <Route element={<PageWrapper />}>
                <Route path="/" element={<CurrentServicesPage next={"/core"} />} />
                <Route path="/core" element={<NewCoreServicesPage />} />
                <Route path="/mobile" element={<NewMobilePage />} />
                <Route path="/additional" element={<AdditionalInfoPage />} />
                <Route path="/finish" element={<FinishPage />} />
            </Route>
        </Routes>
    )
}
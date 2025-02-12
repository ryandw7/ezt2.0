import React from "react";
import { Route, Routes } from "react-router-dom";
import PageWrapper from './pages/PageWrapper';
import Current from "./pages/Current";
import NewCore from "./pages/NewCore";
import NewMobile from "./pages/NewMobile";
export default function App (){

return (
    <>
    <Routes>
        <Route element={<PageWrapper/>}>
        <Route path="/" element={<Current/>}/>
        <Route path="/core" element={<NewCore/>}/>
        <Route path="/mobile" element={<NewMobile/>}/>
        </Route>
    </Routes>
    </>
)
}
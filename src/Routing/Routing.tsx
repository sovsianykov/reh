import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Admin from "../features/pages/Admin/Admin";
import Contacts from "../features/pages/Contacts/Contacts";
import Login from "../features/pages/Login/Login";
import Navbar from "../components/Navbar/Navbar";
import Home from "../features/pages/Home/Home";
import {AppRoute} from "../components/constantes/AppRoute";
import StudioA from "../features/pages/StudioA/StudioA";
import StudioD from "../features/pages/StudioD/StudioD";
import StudioC from "../features/pages/StudioC/StudioC";
import StudioB from "../features/pages/StudioB/StudioB";

function Routing() {

    return (
    <Router>
        <Navbar/>
        <Routes>

            <Route  path={AppRoute.Home} element={<Home/>} />
            <Route path={AppRoute.StudioA} element={<StudioA/>} />
            <Route path={AppRoute.StudioB} element={<StudioB/>} />
            <Route path={AppRoute.StudioC} element={<StudioC/>} />
            <Route path={AppRoute.StudioD} element={<StudioD/>} />
            <Route path={AppRoute.Login} element={<Login/>} />
            <Route path={AppRoute.Admin} element={<Admin/>} />
            <Route path="/contact" element={<Contacts/>} />
            <Route path="/login" element={<Login/>} />
        </Routes>

    </Router>

);
}
export default Routing;
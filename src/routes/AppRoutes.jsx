import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import { ROUTES } from "./routes";
import Register from "../pages/Register";
import RegisterCity from "../pages/RegisterСity";
import RegisterForm from "../pages/RegisterForm";
import Thanks from "../pages/Thanks";
import Donat from "../pages/Donat";
import About from "../pages/About";
import Faq from "../pages/Faq";
import InfoCar from "../pages/FAQservice";
import Faqpo from "../pages/FAQPOservice";
import Faqwa from "../pages/FAQWAservice";

const AppRoutes = () => {
  return (
    <Routes>
      <Route index element={<Home />}></Route>
      <Route path={ROUTES.REGISTER} element={<Register />}></Route>
      <Route path={ROUTES.REGISTERCITY} element={<RegisterCity />}></Route>
      <Route path={ROUTES.REGISTERFORM} element={<RegisterForm />}></Route>
      <Route path={ROUTES.THANKS} element={<Thanks />}></Route>
      <Route path={ROUTES.DONAT} element={<Donat />}></Route>
      <Route path={ROUTES.ABOUT} element={<About />}></Route>
      <Route path={ROUTES.FAQ} element={<Faq />}></Route>
      <Route path={ROUTES.INFO} element={<InfoCar />}></Route>
      <Route path={ROUTES.PO} element={<Faqpo />}></Route>
      <Route path={ROUTES.WA} element={<Faqwa />}></Route>
    </Routes>
  );
};

export default AppRoutes;

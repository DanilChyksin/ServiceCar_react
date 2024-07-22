import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import { ROUTES } from "./routes";
import Register from "../components/Register";
import RegisterCity from "../components/RegisterСity";
import RegisterForm from "../components/RegisterForm";
import Thanks from "../components/Thanks";
import Donat from "../components/Donat";
import About from "../components/About";
import Faq from "../components/Faq";
import InfoCar from "../components/FAQservice";
import Faqpo from "../components/FAQPOservice";
import Faqwa from "../components/FAQWAservice";

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

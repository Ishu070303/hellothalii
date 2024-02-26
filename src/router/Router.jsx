import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main, PricingPlans } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
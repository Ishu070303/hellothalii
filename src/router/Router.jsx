import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Explore, Main, PricingPlans } from "../components";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/pricing-plans" element={<PricingPlans />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;
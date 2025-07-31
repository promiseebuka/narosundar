import Hero from "../components/Hero";
import About from "../pages/About";
import TopPrice from "../components/TopPrice";
import CustomerSay from "../components/CustomerSay";
import ServiceCard from "../components/ServiceCard";
import AllWe from "../components/AllWe";

function Homepage() {
  return (
    <>
      <Hero />
      <About />

      <AllWe />
      <TopPrice />
      <ServiceCard />
      <CustomerSay />
    </>
  );
}
export default Homepage;

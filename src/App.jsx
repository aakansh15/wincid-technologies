import ButtonGradient from "./assets/svg/ButtonGradient";
// import Benefits from "./components/Benefits";
import Collaboration from "./components/Collaboration";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
// import Pricing from "./components/Pricing";
import Roadmap from "./components/Roadmap";
import Careers from "./components/Careers";
import Services from "./components/Services";
import Contacts from "./components/Contacts";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        {/* <Benefits /> */}  
        <Collaboration />
        <Services />
        {/* <Pricing /> */}
        <Roadmap />
        <Careers />
        <Contacts />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;

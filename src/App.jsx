import "./App.css";
import Archievements from "./components/achievements/Archievements";
import Calendar from "./components/calendar/Calendar";
import Clients from "./components/clients/Clients";
import Community from "./components/community/Community";
import Customers from "./components/customers/Customers";
import Demo from "./components/demo/Demo";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Unlock from "./components/unlock/Unlock";
import Updates from "./components/updates/Updates";

function App() {
  return (
    <>
      <section id="header">
        <Header />
        <Hero />
        <Clients />
        <Community />
      </section>
      <section id="body">
        <Unlock />
        <Archievements />
        <Calendar />
        <Customers />
        <Updates />
        <Demo />
      </section>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

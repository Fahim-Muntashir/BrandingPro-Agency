import "./App.css";
import Banner from "./components/Home/Banner";
import CompanyMarque from "./components/Home/CompanyMarque";
import WeAre from "./components/Home/WeAre";
import Contact from "./components/Shared/Contact";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <CompanyMarque></CompanyMarque>
      <WeAre></WeAre>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;

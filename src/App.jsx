import "./App.css";
import Banner from "./components/Home/Banner";
import CompanyMarque from "./components/Home/CompanyMarque";
import Contact from "./components/Shared/Contact";
import Footer from "./components/Shared/Footer";
import Header from "./components/Shared/Header";

function App() {
  return (
    <>
      <Header></Header>
      <Banner></Banner>
      <CompanyMarque></CompanyMarque>
      <Contact></Contact>
      <Footer></Footer>
    </>
  );
}

export default App;

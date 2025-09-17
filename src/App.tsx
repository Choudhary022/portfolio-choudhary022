import About from "./component/about/About";
import BasicDetails from "./component/basicDetails/BasicDetails";
import Experience from "./component/Experience";
import Footer from "./component/footer/Footer";
import Header from "./component/header/Header";
import TechnicalSkills from "./component/TechnicalSkills";


const App = () => {

  return (
    <>
      <Header />
      <BasicDetails />
      <About />
      <Experience />
      <TechnicalSkills />
      <Footer />
    </>
  )
}

export default App;
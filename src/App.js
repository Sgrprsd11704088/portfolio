import React from "react";
import Navbar from "./component/Navbar/navbar";
import Footer from "./component/Footer/footer";
import Intro from "./component/Intro/intro";
import Skills from "./component/Skills/skills";
import Works from "./component/Works/works";
import Contact from "./component/Contact/contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;

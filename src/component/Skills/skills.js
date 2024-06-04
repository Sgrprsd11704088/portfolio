import React from "react";
import "./skills.css";
import UIDesign from "../../assets/ui-design.png";
import WebDesign from "../../assets/website-design.png";
import AppDesign from "../../assets/app-design.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I Do</span>
      <span className="skillDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
        voluptatem ullam omnis molestiae sapiente, provident at dolore autem
        cumque sunt?
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Doloremque, sit.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              ab.
            </p>
          </div>
        </div>

        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus, magni!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

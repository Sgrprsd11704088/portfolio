import React from "react";
import "./works.css";
import Portfolio1 from "../../assets/portfolio-1.png";
import Portfolio2 from "../../assets/portfolio-2.png";
import Portfolio3 from "../../assets/portfolio-3.png";
import Portfolio4 from "../../assets/portfolio-4.png";
import Portfolio5 from "../../assets/portfolio-5.png";
import Portfolio6 from "../../assets/portfolio-6.png";

const workImgs = [
  { id: 1, image: Portfolio1 },
  { id: 2, image: Portfolio2 },
  { id: 3, image: Portfolio3 },
  { id: 4, image: Portfolio4 },
  { id: 5, image: Portfolio5 },
  { id: 6, image: Portfolio6 },
];

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">My Portfolio</h2>
      <span className="worksDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo suscipit
        vel impedit quos molestias dignissimos eum veniam nihil maxime quae?
      </span>
      <div className="worksImgs">
        {workImgs.map((img) => {
          return (
            <img
              key={img.id}
              src={img.image}
              alt="Portfolio1"
              className="worksImg"
            />
          );
        })}
      </div>

      <button className="worksBtn">See More</button>
    </section>
  );
};

export default Works;

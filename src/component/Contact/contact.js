import React, { useRef } from "react";
import "./contact.css";
import WallMart from "../../assets/walmart.png";
import Microsoft from "../../assets/microsoft.png";
import Facebook from "../../assets/facebook.png";
import Adobe from "../../assets/adobe.png";
import FacebookIcon from "../../assets/facebook-icon.png";
import TwitterIcon from "../../assets/twitter.png";
import YoutubeIcon from "../../assets/youtube.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";

const clientImg = [
  { id: 1, image: WallMart, label: "Wallmart" },
  { id: 2, image: Microsoft, label: "Microsoft" },
  { id: 3, image: Facebook, label: "Facebook" },
  { id: 4, image: Adobe, label: "Adobe" },
];

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_omhig3d",
        "template_npobwpc",
        form.current,
        "l-LSCGLrUwfmpUZuY"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          alert("email sent !");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Clients</h1>
        <p className="clientDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
          expedita repellat. Vel nesciunt ipsa nobis hic, adipisci corporis
          tenetur beatae?
        </p>

        <div className="clientImgs">
          {clientImg.map((img) => {
            return (
              <img
                key={img.id}
                src={img.image}
                alt={img.label}
                className="clientImg"
              />
            );
          })}
        </div>
      </div>

      <div id="contact">
        <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, a?
        </span>

        <form onSubmit={sendEmail} ref={form} className="contactForm">
          <input
            type="text"
            name="to_name"
            className="name"
            placeholder="Your Name"
          />
          <input
            name="your_email"
            type="email"
            className="email"
            placeholder="Your Email"
          />
          <textarea
            className="msg"
            name="message"
            cols="30"
            rows="5"
            placeholder="Your Message"
          ></textarea>
          <button type="submit" value="Send" className="submitBtn">
            Submit
          </button>

          <div className="links">
            <img src={FacebookIcon} alt="link" className="link" />
            <img src={TwitterIcon} alt="link" className="link" />
            <img src={YoutubeIcon} alt="link" className="link" />
            <img src={InstagramIcon} alt="link" className="link" />
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "./footer.css";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      Copyright &#169; {year} Company, Inc. All rights reserved.
    </footer>
  );
};

export default Footer;

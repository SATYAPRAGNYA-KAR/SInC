import React from "react";
import "./Footer.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function Footer() {
  return (
    <div class="footer">
      <div class="footer__left">
        <h2>IIT Delhi, Hauz Khas, New Delhi</h2>
      </div>
      <div class="footer__right">
        <div class="icon__container">
          <FacebookIcon />
        </div>
        <div class="icon__container">
          <TwitterIcon />
        </div>
        <div class="icon__container">
          <InstagramIcon />
        </div>
        <div class="icon__container">
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}

export default Footer;

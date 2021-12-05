import React, { useEffect, useState } from "react";
import "./Header.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar } from "@mui/material";

function Header() {
  const [seed, setSeed] = useState("");
  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div class="header">
      <div class="header__left">
        <MenuIcon />
        <h2>Dashboard</h2>
      </div>
      <div class="header__center">
        <div class="header__center-top">
          <img
            src="https://media-exp1.licdn.com/dms/image/C510BAQE16x5t0uDm4Q/company-logo_200_200/0/1568468276035?e=2159024400&v=beta&t=Kno3pclqtMRNpav1Lx1hQ4YGsuWKSFHpIISiogua5wc"
            alt="SInC Logo"
          />
          <h2>Student Incubation Cell</h2>
        </div>
        <h2>Mentors | Startups | Initiatives</h2>
      </div>
      <div class="header__right">
        <div class="bond">
          <h2>James</h2>
          <h3>Bond</h3>
        </div>
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      </div>
    </div>
  );
}

export default Header;

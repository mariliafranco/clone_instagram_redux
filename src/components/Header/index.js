import React from "react";
import { Link } from 'react-router-dom';
import TopInfo from "../TopInfo";
import Logo from "../../images/logo-instagram.png";

export default function Header() {
  return (
    <nav>
      <div className="header">
        <header>
          <Link to="/">
            <img src={Logo} alt="Logo Instagram" />
          </Link>
          <TopInfo />
        </header>
      </div>
    </nav>
  );
}

import React, { useState } from "react";
import Logo from "../../assets/TestLogo.svg";
import Home from "../../assets/Home.svg";
import Patient from "../../assets/Patient.svg";
import UserIcon from "../../assets/User-icon/userIcon.png";
import Calendar from "../../assets/Calendar.svg";
import Chat from "../../assets/Chat.svg";
import Transaction from "../../assets/Transaction.svg";
import Settings from "../../assets/Settings.svg";
import Options from "../../assets/Options.svg";
import "./index.css";

const NavLinks = [
  { name: "Overview", img: Home },
  { name: "Patients", img: Patient },
  { name: "Schedule", img: Calendar },
  { name: "Message", img: Chat },
  { name: "Transactions", img: Transaction },
];

function Header() {
  const [selectedLink, setSelectedLink] = useState("Overview");

  return (
    <div className="Header">
      <div className="header-left">
        <img src={Logo} alt="" />
      </div>
      <div className="header-center">
        <ul>
          {NavLinks.map((link, i) => (
            <li
              key={i}
              className={`${selectedLink === link.name ? "activeLink" : ""}`}
              onClick={() => setSelectedLink(link.name)}
            >
              <div className="icon">
                <img src={link.img} alt="" />
              </div>{" "}
              {link.name}
            </li>
          ))}
        </ul>
      </div>
      <div className="header-right">
        <div className="user_icon">
          <img src={UserIcon} alt="" />
        </div>
        <div className="user_info">
          <div className="username">Dr Jose Simmons</div>
          <div className="userdesignation">General Practitioner</div>
        </div>
        <div className="user_hr"></div>
        <div className="options">
          <div className="settings">
            <img src={Settings} alt="" />
          </div>
          <div className="setting_option">
            <img src={Options} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;

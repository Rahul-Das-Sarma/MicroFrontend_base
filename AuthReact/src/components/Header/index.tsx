import React from "react";
import "./styles.scss";
import { BsFillPersonFill } from "react-icons/bs";

type Props = {};

const Header = (props: Props) => {
  return (
    <div className="header-container">
      <span className="header-title">E-Commerce</span>
      <BsFillPersonFill className="person-icon" />
    </div>
  );
};

export default Header;

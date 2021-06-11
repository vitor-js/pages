import React, { useState, useEffect } from "react";

import CloseMenu from "../../assets/x.svg";
import MenuIcon from "../../assets/menu.svg";

import "./style.css";

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  return (
    <div className="header">
      <div className="mobile-menu" onClick={handleClick}>
        {click ? (
          <img style={{ width: "25%" }} src={CloseMenu} />
        ) : (
          <img style={{ width: "25%" }} src={MenuIcon} />
        )}
      </div>
    </div>
  );
}

export default Header;

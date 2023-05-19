import React, { useState } from "react";
import dotsIcon from "../static/icons/dots.svg"
import '../assets/css/DropdownMenu.css'

const DropdownMenu = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  return (
    <div
      className="dropdown"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button className="dropdown-btn"><img src={dotsIcon} alt="" /></button>
      {isDropdownOpen && (
        <div className="edit_option_list">
          <a href="/">Edit</a>
          <a href="/">Report</a>
          <a href="/">Option 3</a>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

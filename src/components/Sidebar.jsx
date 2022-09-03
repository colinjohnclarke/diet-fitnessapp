import React from "react";
import { AiOutlineMenuFold } from "react-icons/ai";
import { GiCook, GiMuscleUp, GiNewspaper } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import { useState } from "react";

function Sidebar() {
  const [active, setActive] = useState(false);

  const activeNav = () => {
    setActive(!active);
  };

  return (
    <div className={active ? "header" : "header-mobile"}>
      <div className="menu-icon" onClick={activeNav}>
        {!active ? (
          <AiOutlineMenuFold className="menu iconsvg" />
        ) : (
          <IoMdClose className="close-icon iconsvg" />
        )}
      </div>

      <ul className={active ? "open" : "closed oicon"}>
        <li className="lisidebar">
          <Link to="/" className="shut">
            <AiOutlineHome className="iconsvg" />
            <p className="textlink"> Home</p>
          </Link>
        </li>
        <li className="lisidebar">
          <Link to="/recipies/" className="shut">
            <GiCook className="iconsvg" />
            <p className="textlink">Recipies</p>
          </Link>
        </li>

        <li className="lisidebar">
          <Link to="/fitness/" className="shut">
            <GiMuscleUp className="iconsvg" />
            <p className="textlink">Workouts</p>
          </Link>
        </li>
        <li className="lisidebar">
          <Link to="/news/" className="shut">
            <GiNewspaper className="iconsvg" />
            <p className="textlink">News</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

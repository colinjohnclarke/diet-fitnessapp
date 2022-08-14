import React from "react";
import { AiFillLike } from "react-icons/ai";

import { useState } from "react";

function Liked() {
  const [likeclicked, setLikeclicked] = useState([false]);

  const click = () => {
    setLikeclicked(!likeclicked);
  };

  return (
    <div>
      <div className={likeclicked ? "clicked" : "not-clicked"}>
        <AiFillLike
          className="like_icon"
          // className="animate__animated animate__bounce"
          //   className="animate__animated animate__bounce"
          onClick={click}
        >
          {" "}
        </AiFillLike>
      </div>
    </div>
  );
}

export default Liked;

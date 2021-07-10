import React from "react";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/1026512/screenshots/10130839/waifu_laifu_404_copia_4x.png"
        alt="error"
        height="900"
        width="1500"
      />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
}

export default Error;

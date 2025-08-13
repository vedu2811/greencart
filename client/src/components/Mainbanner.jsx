import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Mainbanner = () => {
  return (
    <div className="relative">
      <img
        src={assets.main_banner_bg}
        alt="banner"
        className="w-full hidden md:block"
      />
      <img
        src={assets.main_banner_bg_sm}
        alt="banner"
        className="w-full md:hidden"
      />
      <div>
        <h1>Freshness You Can Trust, Savings You will Love! </h1>
      </div>
      <Link>
        Shop Now
        <img src={assets.white_arrow_icon} alt="arrow" />
      </Link>
    </div>
  );
};

export default Mainbanner;

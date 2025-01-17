import React from "react";
import CenterMenu from "./CenterMenu";

function Header() {
  const buttonStyle =
    "border-[px] rounded-[10px] border-[#232A4E] px-[25px] py-[7px]";
  return (
    <div className="header bg-[#081730] flex items-center justify-between px-[5rem] pt-[-2rem] text-[1.5rem]">
      {/* logo */}
      <img
        src={require("../img/openclass1.png")}
        alt=""
        className="logo  w-[250px] h-[250px]"
      />
      {/* side menu */}
      <CenterMenu />
      {/* buttons */}
      <div className="buttons flex">
        <button className={`mr-[35px] hover:bg-[#232A4E] ` + buttonStyle}>
          Log in
        </button>
        <button className={buttonStyle+` bg-[#232A4E]`}>Sign up</button>
      </div>
    </div>
  );
}

export default Header;

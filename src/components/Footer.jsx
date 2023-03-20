import React from "react";
import CenterMenu from "./CenterMenu";
function Footer() {
    const SocialStyle = "rounded-full border-2 border-whit p-2 mr-[5rem]"
  return (
    <div className=" footer flex flex-col items-center justify-start px-[5rem] bg-[#081730] h-[45rem] pt-[18rem] mt-[-10rem] relative z-[-1]">
      <CenterMenu />
      {/* Social icons */}
      <div className="flex w-[100%] justify-center mt-14">
      </div>
    </div>
  );
}

export default Footer;

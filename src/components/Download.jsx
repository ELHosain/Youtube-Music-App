import React from "react";
import DownloadAds from "./DownloadAds";

function Download() {
  return (
    <div className="flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[30rem] pt-[18rem] mt-[-10rem] relative z-[0] rounded-b-[5rem]">
      {/* tild icon or path icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>Discover new ways of learning </span>
        <span>
          <b>and achieving your goals</b>
        </span>
      </div>
      <div className="mt-14">
        <DownloadAds />
      </div>
    </div>
  );
}

export default Download;

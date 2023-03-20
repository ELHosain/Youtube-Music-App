import React from "react";
import Feature from "./Feature";

function Experience() {
  return (
    <div className="experience flex flex-col items-center justify-start px-[5rem] bg-[#020917] h-[60rem] pt-[18rem] mt-[-10rem] relative z-[2] rounded-b-[5rem]">
      {/* titld icon */}
      <img src={require("../img/Path 318.png")} alt="" className="w-[5rem]" />
      {/* heading */}
      <div className="headline mt-7 flex flex-col items-center text-[2rem]">
        <span>An Incredible Online Education Website That Can Transform</span>
        <span>
          <b>Your Learning Experience</b>
        </span>
      </div>
      {/* features  */}
      <div className="feature flex items-center justify-around mt-[5rem] w-[100%]">
        <Feature icon="Addpost1" title="For Add New Post" content = ' Allows users to create and publish new content on the website'/>
        <Feature icon="Groupchat1" title="For Group Chat" content ="Allows multiple users to communicate with each other in a single chat window"/>
        <Feature icon="Interaction" title="For Interaction" content =" interaction features is to create a more engaging and interactive experience for users"/>
      </div>
    </div>
  );
}

export default Experience;

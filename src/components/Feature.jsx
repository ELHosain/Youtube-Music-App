import {React, useState} from "react";
import { motion } from "framer-motion";
import VisibilitySensor from "react-visibility-sensor";

function Feature({icon, title, content}) {
  const variant = {
    true: {
      transform: "scale(1)",
    },///
    false: {
      transform: "scale(0.5)",
    },
  };

  const [elementIsVisible, setElementIsVisible] = useState(false);
  return (
    <VisibilitySensor
      onChange={(isVisible) => setElementIsVisible(isVisible)}
      minTopValue={100}
    >
      <div className="feature flex items-center justify-center flex-col relative text-center mx-12">
        {/* icon */}
        <motion.div
          variants={variant}
          transition={{
            duration: 1,
            type: "ease-out",
          }}
          animate={`${elementIsVisible}`}
          className="icon bg-[#081730] rounded-2xl p-4"
        >
          <img
            src={require(`../img/${icon}.png`)}
            alt=""
            className="w-[7rem]"
          />
        </motion.div>

        <span className="mt-5">{title}</span>

        <span className="text-[#707070] mt-3 w-[55%]">
          {content}
        </span>
      </div>
    </VisibilitySensor>
  );
}

export default Feature;

import React from "react";
import Button from "./Button";
import { FaArrowRight } from "react-icons/fa";
import logo from "../assets/images/Image 18.png"

const CodeBlocks = ({
  position,
  heading,
  subheading,
  ctabtn1,
  ctabtn2,
  backgroundGradient
}) => {
  return (
    <div className={`flex ${position} my-20 justify-between flex-col lg:gap-10 gap-10`}>

      {/* Section 1  */}
      <div className="w-[100%] lg:w-[50%] flex flex-col gap-8 border border-red-500">
        {heading}

        {/* Sub Heading */}
        <div className="text-richblack-300 text-base font-bold w-[85%] -mt-3">
          {subheading}
        </div>

        {/* Button Group */}
        <div className="flex gap-7 mt-7">
          <Button active={ctabtn1.active} linkto={ctabtn1.link}>
            <div className="flex items-center gap-2">
              {ctabtn1.btnText}
              <FaArrowRight />
            </div>
          </Button>
          <Button active={ctabtn2.active} linkto={ctabtn2.link}>
            {ctabtn2.btnText}
          </Button>
        </div>
      </div>

      {/* Section 2 */}
      <div className="h-fit code-border flex flex-row py-3 text-[10px] sm:text-sm leading-[18px] sm:leading-6 relative w-[100%] lg:w-[470px] border border-red-500">
        {backgroundGradient}
        {/* Indexing */}
        

        {/* Codes */}
        <div
          className={`w-[90%] flex flex-col gap-2 font-bold font-mono pr-1`}
        >
          <img src={logo} alt="Logo"loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default CodeBlocks;

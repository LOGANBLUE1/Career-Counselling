import React from "react";
import { FooterLink2 } from "@/data/footer-links";

// Images

// Icons
import { FaFacebook, FaGoogle, FaTwitter, FaYoutube } from "react-icons/fa";
import Link from "next/link";

const BottomFooter = ["Privacy Policy", "Cookie Policy", "Terms"];
const Resources = [
  "Articles",
  "Blog",
  "Chart Sheet",
  "Code challenges",
  "Docs",
  "Projects",
  "Videos",
  "Workspaces",
];
const Plans = ["Paid memberships", "For students", "Business solutions"];
const Community = ["Forums", "Chapters", "Events"];

const Footer = () => {

  return (
      <div className="bg-black text-white w-full">
        <div className="flex lg:flex-row gap-8 items-center justify-between w-11/12 max-w-maxContent text-richblack-400 leading-6 mx-auto relative py-14">
          <div className="border-b w-[100%] flex flex-col lg:flex-row pb-5 border-richblack-700">
            {/* Section 1 */}
            <div className="lg:w-[50%] flex flex-wrap flex-row justify-between lg:border-r lg:border-richblack-700 pl-3 lg:pr-5 gap-3">
              <div className="w-[30%] flex flex-col gap-3 lg:w-[30%] mb-7 lg:pl-0">
                <img src="/Logo-Full-Light.png" alt="" className="object-contain" />
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  Company
                </h1>
                <div className="flex flex-col gap-2">
                  {["About", "Careers", "Affiliates"].map((ele, i) => {
                    return (
                        <div
                            key={i}
                            className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link href={`/${ele.toLowerCase()}`}>{ele}</Link>
                        </div>
                    );
                  })}
                </div>
                <div className="flex gap-3 text-lg">
                  <FaFacebook />
                  <FaGoogle />
                  <FaTwitter />
                  <FaYoutube />
                </div>
                <div></div>
              </div>

              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  Resources
                </h1>

                <div className="flex flex-col gap-2 mt-2">
                  {Resources.map((ele, index) => {
                    return (
                        <div
                            key={index}
                            className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link href={ele.split(" ").join("-").toLowerCase()}>
                            {ele}
                          </Link>
                        </div>
                    );
                  })}
                </div>

                <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                  Support
                </h1>
                <div className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200 mt-2">
                  <Link href="/help-center">Help Center</Link>
                </div>
              </div>

              <div className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                <h1 className="text-richblack-50 font-semibold text-[16px]">
                  Plans
                </h1>

                <div className="flex flex-col gap-2 mt-2">
                  {Plans.map((ele, index) => {
                    return (
                        <div
                            key={index}
                            className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link href={ele.split(" ").join("-").toLowerCase()}>
                            {ele}
                          </Link>
                        </div>
                    );
                  })}
                </div>
                <h1 className="text-richblack-50 font-semibold text-[16px] mt-7">
                  Community
                </h1>

                <div className="flex flex-col gap-2 mt-2">
                  {Community.map((ele, index) => {
                    return (
                        <div
                            key={index}
                            className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        >
                          <Link href={ele.split(" ").join("-").toLowerCase()}>
                            {ele}
                          </Link>
                        </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Section 2 */}
            <div className="lg:w-[50%] flex flex-wrap flex-row justify-between pl-3 lg:pl-5 gap-3">
              {FooterLink2.map((ele, i) => {
                return (
                    <div key={i} className="w-[48%] lg:w-[30%] mb-7 lg:pl-0">
                      <h1 className="text-richblack-50 font-semibold text-[16px]">
                        {ele.title}
                      </h1>
                      <div className="flex flex-col gap-2 mt-2">
                        {ele.links.map((link, index) => {
                          return (
                              <div
                                  key={index}
                                  className="text-[14px] cursor-pointer hover:text-richblack-50 transition-all duration-200"
                              >
                                <Link href={link.link}>{link.title}</Link>
                              </div>
                          );
                        })}
                      </div>
                    </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="flex flex-row items-center justify-between w-11/12 max-w-maxContent text-richblack-400 mx-auto  pb-14 text-sm">
          {/* Section 1 */}
          <div className="flex justify-between lg:items-start items-center flex-col lg:flex-row gap-3 w-full">
            <div className="flex flex-row">
              {BottomFooter.map((ele, i) => {
                return (
                    <div
                        key={i}
                        className={` ${
                            BottomFooter.length - 1 === i
                                ? ""
                                : "border-r border-richblack-700 cursor-pointer hover:text-richblack-50 transition-all duration-200"
                        } px-3 `}
                    >
                      <Link href={ele.split(" ").join("-").toLocaleLowerCase()}>
                        {ele}
                      </Link>
                    </div>
                );
              })}
            </div>

            <div className="text-center">Made with ❤️ Daddy © 2025 Counceller</div>
          </div>
        </div>
      </div>
  );
};

export default Footer;

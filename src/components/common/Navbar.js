"use client"
import { useRouter } from "next/router";
import { NavbarLinks } from "@/data/navbar-links";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
//   const router = useRouter();

//   const matchRoute = (route) => {
//     console.log("Route:", route, router.pathname);
//     return router.pathname === route;
//   };

  return (
    <div>
      <nav className="flex justify-between items-center h-20 mx-auto px-10 bg-blue-300">
        <div className="flex flex-row justify-around items-center">
          <Link href="/">
            <Image src="/image.png" alt="Logo" width={80} height={80} loading="lazy" />
          </Link>
          <p>Career Mentor Hub</p>
        </div>
        <ul className="flex gap-x-6 text-richblack-25 h-9 items-center justify-center">
          {NavbarLinks.map((link, index) => (
            <li key={index} className="hover:text-blue-500">
              <Link href={link?.path}>
                <p
                  className={`${
                    // matchRoute(link?.path)
                    //   ? "text-yellow-25"
                    //   : 
                      "text-richblack-25"
                  }`}
                >
                  {link.title}
                </p>
              </Link>
            </li>
          ))}
          <li className="h-9 px-3 flex items-center justify-center font-montserrat text-sm leading-6 font-normal text-white bg-[#171A1F] opacity-100 rounded-full hover:bg-[#262A33] active:bg-[#323842] disabled:opacity-40">
            <button>Sign In</button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
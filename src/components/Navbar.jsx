import { Link, matchPath, useLocation } from "react-router-dom"
import { NavbarLinks } from "../data/navbar-links"
import logo from "../assets/images/Image.png"

const Navbar = () => {
  const location = useLocation()

  const matchRoute = (route) => {
    console.log("Route:", route, location.pathname)
    return matchPath({ path: route }, location.pathname)
  }

  return (
    <div >
      <nav className="flex justify-between items-center h-20 mx-auto px-10 bg-blue-300">
          <div className="flex flex-row justify-around items-center">
            <Link to="/">
              <img src={logo} alt="Logo"loading="lazy" />
            </Link>
            <p>Career Mentor Hub</p>
          </div>
          <ul className="flex gap-x-6 text-richblack-25 h-9 items-center justify-center">
            {
              NavbarLinks.map((link, index) => (
                <li key={index} className="hover:text-blue-500">
                    <Link to={link?.path}>
                      <p
                        className={`${
                          matchRoute(link?.path)
                            ? "text-yellow-25"
                            : "text-richblack-25"
                        }`}
                      >
                        {link.title}
                      </p>
                    </Link>
                </li>
              ))
            }
            <li className="h-9 px-3 flex items-center justify-center font-montserrat text-sm leading-6 font-normal text-white bg-[#171A1F] opacity-100 rounded-full hover:bg-[#262A33] active:bg-[#323842] disabled:opacity-40">
              <button >
                Sign In
              </button>
            </li>
          </ul>
      </nav>
    </div>
  )
};

export default Navbar;
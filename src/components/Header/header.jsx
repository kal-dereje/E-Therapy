import { AiFillCaretDown } from "react-icons/ai";
import { Outlet, Link } from "react-router-dom";
function Header() {
  return (
    <>
      <div className="flex justify-between items-center px-10 h-20">
        <div className="h-full w-14 flex justify-center items-center bg-green-700 text-white">
          Logo
        </div>
        <div>
          <nav className="flex justify-between items-center gap-10">
            <Link to="/" className="hover:cursor-pointer">
              Homepage
            </Link>
            <Link to="/About" className="hover:cursor-pointer">
              About Us
            </Link>
            <ul className="hover:cursor-pointer group flex items-center gap-4 relative">
              Servives
              <AiFillCaretDown />
              <div className="absolute -bottom-[140px]   bg-white w-32 hidden group-hover:flex  flex-col  ">
                <Link
                  to="/singleservice"
                  href=""
                  className="mt-5 py-2 px-2 hover:bg-green-700 hover:text-white w-full"
                >
                  Single Services
                </Link>
                <Link
                  to="/Priceplan"
                  href=""
                  className="py-2 px-2 hover:bg-green-700 hover:text-white w-full"
                >
                  Price plan
                </Link>
                <Link
                  to="/Appointment"
                  href=""
                  className="py-2 px-2 hover:bg-green-700 hover:text-white w-full"
                >
                  Appointment
                </Link>
              </div>
            </ul>
            <Link to="/Contact " className="hover:cursor-pointer">
              Contact Us
            </Link>
            <ul className="hover:cursor-pointer flex items-center  gap-4 relative group">
              Page
              <AiFillCaretDown />
              <div className="absolute -bottom-[180px]   bg-white w-32 hidden group-hover:flex  flex-col  ">
                <Link
                  to="/Team"
                  href=""
                  className="mt-5 py-2 px-2 hover:bg-green-700 hover:text-white w-full"
                >
                  Team
                </Link>
                <Link
                  to="/FQA"
                  href=""
                  className="py-2 px-2 hover:bg-green-700 hover:text-white w-full"
                >
                  FAQ
                </Link>
                <Link
                  to="/Blog"
                  href=""
                  className="py-2 px-2 hover:bg-green-700 hover:text-white w-full"
                >
                  Blog
                </Link>
                <Link
                  to="/Singlepost"
                  href=""
                  className="py-2 px-2 hover:bg-green-700 hover:text-white w-full"
                >
                  Single Post
                </Link>
              </div>
            </ul>
            <Link
              to="/Getappointment"
              className=" hover:cursor-pointer px-10 py-3 bg-green-700 text-white"
            >
              Get Appointment
            </Link>
          </nav>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Header;

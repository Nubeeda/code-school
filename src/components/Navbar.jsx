"use client";
import {Link} from "react-router"
const Navbar=()=>{
    return(
        <nav className="bg-white flex justify-between py-0 px-16 shadow-slate-300 shadow-lg">
  <div className="flex items-center gap-2">
  <img src="./images/logo.png" className="w-24 h-24" />
  <h1 className="text-2xl font-bold">CodeSchool</h1>
  </div>
     
        <ul className="m-0 p-0 gap-12 flex items-center">
          <li className="text-lg text-[#323232]">
            <Link to="/">
            Home
            </Link>
          </li>

          <li className="text-lg text-[#323232]">
            <Link to="/teachers">
            Teachers
            </Link>
          </li>

          <li className="text-lg text-[#323232]">
            <Link to="/holiday">
            Holidays
            </Link>
          </li>

          <li className="text-lg text-white bg-[#8700ff] py-2 px-4 rounded-lg hover:bg-yellow-600 ">
            <Link to="/contact">
            Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    )
}
export default Navbar
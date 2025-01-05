
import {Link} from "react-router";

const menus =[
  {
    lable: "Home",
    href: "/",
  },
  {
    lable: "Teachers",
    href: "/teachers",
  },
  {
    lable: "Holidays",
    href: "/holiday",
  },
  {
    lable: "Contact-Us",
    href: "/contact",
  },
]
const Navbar=()=>{
    return(
        <nav className="bg-white flex justify-between py-0 px-16 shadow-slate-300 shadow-lg">
  <div className="flex items-center gap-2">
  <img src="./images/logo.png" className="w-24 h-24" />
  <h1 className="text-2xl font-bold">CodeSchool</h1>
  </div>
     
        <ul className="m-0 p-0 gap-12 flex items-center">
          {
            menus.map((menu,index)=>{
              return(
                <li key={index}
                className="text-lg text-[#323232]">
            <Link to={menu.href} key={index}>
            {menu.lable}
            </Link>
          </li>
              )
            })
          }

          
        </ul>
      </nav>
    )
}
export default Navbar
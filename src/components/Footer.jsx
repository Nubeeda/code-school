"use client";
import {Link} from "react-router"
const Footer=()=>{
    return(
       <footer className="bg-[#280044] py-20 px-20 flex">

        <div className="w-full">
            <h2 className="text-white font-semibold text-lg">CodeSchool</h2>
            <p className="text-[#f7f0f0] py-3">
                A school is an educational institution that provides a learning 
                environment for students, typically under the direction of teachers</p>
        </div>

        <div className="w-full flex gap-3 flex-col">
            <h2 className="text-white font-semibold text-lg ">Popular Links</h2>
           <ul className="text-white flex flex-col gap-2">
            <li className="">
                <Link to="/">Home</Link>
            </li>
            
            <li>
            <Link to="/teachers">Teachers</Link>
            </li>

            <li>
            <Link to="/Holiday">Holidays</Link>
            </li>

            <li>
            <Link to="/contact">Contact-Us</Link>
            </li>
           </ul>
        </div>

        <div className="w-full flex gap-3 flex-col">
            <h2 className="text-white font-semibold text-lg ">Social Profiles</h2>
           <ul className="text-white flex flex-col gap-2">
            <li>
                <Link target="_blank" to="https://github.com/Nubeeda">
                <i className="ri-github-fill text-white mr-1"></i>
                GitHub
                </Link>
            </li>
            
            <li>
            <Link target="_blank" to="https://twitter.com/nubeead77841">
            <i className="ri-twitter-x-line text-white mr-1 "></i>
            Twitter
            </Link>
            </li>

            <li>
            <Link target="_blank" to="https://youtube.com/@mk_gaming-281?si=bK6zUBstrXpzrQTz">
            <i className="ri-youtube-line  text-white mr-1"></i>
            Youtube
            </Link>
            </li>
           </ul>
        </div>

        <div className="w-full">
            <h2 className="text-white font-semibold text-lg pb-3">Contact-Us</h2>
            <form className="flex flex-col gap-3">
                <input 
                required
                name="FirstName"
                placeholder="FirstName"
                type="text"
                className="border-none rounded-md p-2 w-80 text-left "
                />

                <input 
                required
                name="Email"
                placeholder="email234@gmail.com"
                type="text"
                className="border-none rounded-md p-2 w-80 text-left "
                 />

                <textarea
                required
                name="message"
                placeholder="Message"
                type="text"
                className="border-none rounded-md p-2 w-80 text-left "
                rows={3}
                 >
                   </textarea>
                   <button className="text-white bg-orange-400 w-20 h-10 rounded-md">
                    Submit
                   </button>
            </form>
        </div>
       </footer>
    )
}
export default Footer;
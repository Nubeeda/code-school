"use client";
import { useState } from "react";
import Swal from "sweetalert2";
import Nav from "./Navbar";
import Footer from "./Footer";

const ContactUs = () => {
  const [firstname, setFirstname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const submitlist = (e) => {
    alert("hello")
    e.preventDefult();
    console.log(firstname,email,message)
      // Swal.fire({
      //   title: "success",
      //   text: "Congrats!",
      //   icon: "success",
      //   confirmButtonText: "Cool",
      // });
  };
  return (
    <div>
      <Nav />

      <div className="flex p-14 gap-14">
        <img className="w-1/2" src="./images/contact.svg" />

        <div className="w-1/2 ">
          <form 
          onSubmit={submitlist}
          className="flex gap-6 flex-col ">
            <div className="flex pb-2 flex-col ">
              <label className=" font-medium text-lg">Firstname</label>
              <input
                value={firstname}
                onChange={(e) => setFirstname(e.target.value)}
                className="w-full p-4 border-[1px solid #ccc] border rounded-md"
                required
                name="firstname"
                type="text"
                placeholder="Enter your name" 
              />
            </div>
            <div className="flex pb-2 flex-col ">
              <label className=" font-medium text-lg">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-4 border-[1px solid #ccc] border rounded-md"
                required
                name="email"
                type="email"
                placeholder="example@mail.com"
              />
            </div>
            <div className="flex pb-4 flex-col ">
              <label className=" font-medium text-lg">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-4 border-[1px solid #ccc] border rounded-md"
                required
                name="message"
                type="text"
                placeholder="Enter your message"
                rows={3}
              />
            </div>
            <button
            type="submit"
            className="bg-blue-600 w-20 p-2 font-medium text-white rounded-md"
          >
            Submit
          </button>
          </form>
          
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default ContactUs;

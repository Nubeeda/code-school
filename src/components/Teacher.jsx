"use client";
import Nav from "./Navbar";
import Footer from "./Footer";
const teachers = [
  {
    image: "./teachers/a.jpg",
    name: "Sadaf khan",
    qua: "BS (Computer science)",
  },
  {
    image: "./teachers/b.jpg",
    name: "Asma Ahmad",
    qua: "BS (Software engineering)",
  },
  {
    image: "./teachers/c.jpg",
    name: "Huma",
    qua: "Master (Agriculture)",
  },
  {
    image: "./teachers/d.jpg",
    name: "Masood khan",
    qua: "BS (Computer science)",
  },
  {
    image: "./teachers/e.jpg",
    name: "Mansoor khan",
    qua: "BS (Education)",
  },
  {
    image: "./teachers/f.jpg",
    name: "Ahmad Ikram",
    qua: "Master (Botany)",
  },
  {
    image: "./teachers/g.jpg",
    name: "Dimag Kharab",
    qua: "BS (Math)",
  },
  {
    image: "./teachers/h.jpg",
    name: "Kharos",
    qua: "BSc (Chemistry)",
  },
];
const Teachers = () => {
  return (
    <>
      <div>
        <Nav />
        <div className="pt-2">
          <header
            className="flex items-center justify-center"
            style={{
              height: 280,
              backgroundImage:
                "linear-gradient(109.6deg, rgba(102,51,153,1) 11.2%, rgba(2,0,4,1) 91.1%)",
            }}
          >
            <h1 className="font-bold text-4xl text-white">
              <i className="ri-user-voice-line mr-2"></i>
              Teachers
            </h1>
          </header>
          <section className="w-4/5 my-0 mx-auto flex flex-wrap gap-x-4 gap-y-10 py-20 px-0">
            {teachers.map((item, index) => {
              return(
                <div className="w-1/5 my-0 mx-auto" key={index}>
                <img src={item.image} alt={item.image} />
                <h2 className="p-0 mt-2 font-semibold">{item.name}</h2>
                <p  className="p-0 m-0 text-gray-400">{item.qua}</p>
              </div>
              )
            })}
          </section>
        </div>

        <Footer />
      </div>
    </>
  );
};
export default Teachers;

import Nav from "./Navbar";
import Footer from "./Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
const Home = () => {
  return (
    <div>
      <Nav />
      <div>
        <header className="grid grid-cols-2 p-24 bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% animate__animated animate__fadeIn">
          <div>
            <img
              src="./images/student.jpg"
              className="w-2/3 rounded-full animate__animated animate__pulse border-[#baada5] border-2 shadow-xl"
            />
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <h1 className="text-white font-bold text-7xl">"Say hello !</h1>
            <p className="font-semibold text-lg">
              Enjoy complete digital learning experience with codeschool by
              codingOtt
            </p>
            <div className="flex gap-7">
              <button className="bg-[#1E3C60] text-white text-lg py-2 px-6 rounded-md font-semibold hover:bg-orange-500">
                Learn more
              </button>
              <button className="border-2 border-[#1E3C60] text-[#1E3C60] text-lg py-2 px-6 rounded-md font-semibold">
                Watch video
              </button>
            </div>
          </div>
        </header>
        <div className="p-24">
          <h1 className="text-center font-bold text-2xl">
            Benefits & Advantages
          </h1>
          <p className="text-gray-600 text-center mt-4 text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad nisi cum
            nam nihil minus facilis quisquam fuga temporibus, dicta qui
            doloribus fugiat incidunt aspernatur, quam asperiores commodi natus.
            Rem, qui?
          </p>
          <div className=" mt-12 w-11/12 mx-auto grid grid-cols-3 gap-8">
            <div className="shadow-xl rounded-md text-center">
              <i className="ri-artboard-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-2">Great Faculty</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor eudj yrefdskjx sit amet consectetur Ad nisi
                cum{" "}
              </p>
            </div>
            <div className="shadow-xl rounded-md text-center">
              <i className="ri-file-edit-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-2">Latest Curriculum</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor sit yfedc wudsj amet consectetur Ad nisi cum{" "}
              </p>
            </div>
            <div className="shadow-xl rounded-md text-center">
              <i className="ri-tree-line text-6xl"></i>
              <h1 className="text-2xl font-semibold mb-2">Green Environment</h1>
              <p className="text-gray-500">
                Lorem ipsum dolor yrefd t4refuidj sit amet consectetur Ad nisi
                cum{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 p-12 gap-20">
          <div>
            <Swiper className="mySwiper rounded-md">
              <SwiperSlide>
                <img src="./images/s1.jpg" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="./images/s2.jpg" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="./images/s3.jpg" />
              </SwiperSlide>

              <SwiperSlide>
                <img src="./images/s4.jpg" />
              </SwiperSlide>
            </Swiper>
          </div>
          <div className="flex flex-col gap-6 justify-center">
            <h1 className="font-bold text-7xl">"Say hello !</h1>
            <p className="font-semibold text-lg">
              Enjoy complete digital learning experience with codeschool by
              codingOtt
            </p>
            <div className="flex gap-7">
              <button className="bg-[#1E3C60] text-white text-lg py-2 px-6 rounded-md font-semibold hover:bg-orange-500">
                Learn more
              </button>
              <button className="border-2 border-[#1E3C60] text-[#1E3C60] text-lg py-2 px-6 rounded-md font-semibold">
                Watch video
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Home;

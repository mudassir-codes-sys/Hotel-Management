import hero from "../assets/heroImage.png";
import Navbar from "./Navbar";
import { CalendarDays } from "lucide-react";
import search from "../assets/searchIcon.svg";

function Info({ type, placeholder, label, className = "" }) {
  return (
    <>
      <div className="flex flex-col w-full md:w-auto  gap-3">
        <div className="flex items-center gap-2  ">
          <CalendarDays />
          <label className="font-medium" htmlFor={label}>
            {label}
          </label>
        </div>
        <input
          className={`outline-none border-1 md:px-1 w-60   text-black md:w-auto px-2 py-1 rounded-md border-black  ${className}`}
          placeholder={placeholder}
          type={type}
        />
      </div>
    </>
  );
}

function Hero() {
  return (
    // hero image

    <div
      data-aos="fade-down"
      className="min-w-full min-h-screen bg-cover  bg-center relative"
      style={{ backgroundImage: `url(${hero})` }}
    >
      <div className="absolute top-0 left-0 w-full">
        <Navbar />
      </div>

      {/* heading and para */}
      <div className="bg-[#4A85B0] inline-block md:mt-40 mt-30  md:ml-20 ml-8 px-4 py-1 rounded-2xl">
        <p className="text-white">The Ultimate Hotel Experience</p>
      </div>
      <div className=" mt-3 md:ml-20 ml-8  max-w-140  ">
        <h1 className="md:text-5xl text-2xl  md:leading-15 font-bold text-white ">
          Discover Your Perfect GateAway Destination{" "}
        </h1>
      </div>
      <div className="  mt-3 md:ml-20 ml-8   max-w-70 md:max-w-120">
        <p className="text-white   font-medium ">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>
      </div>

      {/* form */}
      <form className="md:max-w-250  max-w-80 mx-auto max-h-110 mt-5  flex justify-center  items-center flex-col md:flex-row   gap-2 md:gap-6 md:px-5 md:py-0 py-8   rounded-2xl  bg-gray-300 md:h-35">
        <div className="flex md:flex-row flex-col  justify-center items-center gap-4 ">
          <Info
            type="text"
            placeholder="Type here"
            label="Destination"
            className=""
          />
          <Info type="date" placeholder="mm/dd/yy" label="Check in" />
          <Info type="date" placeholder="mm/dd/yy" label="Check out" />
          <Info
            type="number"
            placeholder="0"
            className="  text-center "
            label="Guests"
          />

          <button className="bg-black cursor-pointer text-white md:mt-0 mt-3 md:px-4 px-8 flex  md:py-2 py-3 justify-center items-center rounded-xl">
            <img src={search} alt="search logo" className="" />
            Search
          </button>
        </div>
      </form>
    </div>
  );
}

export default Hero;

import hero from "../assets/heroImage.png";
import Navbar from "./Navbar";
import calender from "../assets/calenderIcon.svg";
import search from "../assets/searchIcon.svg";

function Info({ type, placeholder, label, className = "" }) {
  return (
    <>
      <div className="flex flex-col  items-center gap-3">
        <div className="flex ">
          <img src={calender} alt="" className="w-4 " />
          <label htmlFor={label}>{label}</label>
        </div>
        <input
          className={`outline-none border-1 md:px-1  text-black md:w-auto px-2 py-1 rounded-md border-black  ${className}`}
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
      <div className="bg-[#4A85B0] inline-block absolute top-35 left-6 md:top-45 md:left-40 px-4 py-1 rounded-2xl">
        <p className="text-white">The Ultimate Hotel Experience</p>
      </div>
      <div className=" absolute md:top-55 top-50 md:left-40 left-5 max-w-140  ">
        <h1 className="md:text-5xl text-2xl  md:leading-15 font-bold text-white ">
          Discover Your Perfect GateAway Destination{" "}
        </h1>
      </div>
      <div className="absolute max-w-70  top-70 left-14 md:top-90 md:left-40 md:max-w-120">
        <p className="text-white  font-medium ">
          Unparalleled luxury and comfort await at the world's most exclusive
          hotels and resorts. Start your journey today.
        </p>
      </div>

      {/* form */}
      <form className="md:min-w-200 min-w-70 h-110   absolute flex  flex-col md:flex-row  justify-center  items-center gap-2 md:gap-6 md:px-5  py-2  md:left-82 md:top-110 top-95 left-15 rounded-2xl  bg-gray-300 md:h-35">
        <Info
          type="text"
          placeholder="Type here"
          label="Destination"
          className="w-40"
        />
        <Info type="date" placeholder="mm/dd/yy" label="Check in" />
        <Info type="date" placeholder="mm/dd/yy" label="Check out" />
        <Info
          type="number"
          placeholder="0"
          className="md:max-w-14 max-w-42 text-center ml-2"
          label="Guests"
        />

        <button className="bg-black  cursor-pointer text-white md:mt-0 mt-2 px-4 flex  py-2 justify-center items-center rounded-xl">
          <img src={search} alt="search logo" className="" />
          Search
        </button>
      </form>
    </div>
  );
}

export default Hero;

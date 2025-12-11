import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import search from "../assets/searchIcon.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg";

function Nav({ to, name }) {
  return (
    <div>
      <NavLink
        className="relative inline-block px-1 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
        to={to}
      >
        {name}
      </NavLink>
    </div>
  );
}

function Input({ placeholder, type }) {
  return (
    <input
      className="bg-gray-200 text-black px-2 py-1 rounded-xl  outline-none"
      type={type}
      placeholder={placeholder}
    />
  );
}

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginForm, setIsLoginForm] = useState(true);

  return (
    <>
      <div className=" text-white  md:w-full h-23 px-4 md:px-40 flex  items-center  justify-between">
        {/* logo */}
        <div className="flex flex-col">
          <img
            onClick={() => navigate("/")}
            className=""
            src={logo}
            alt="logo"
          />
          <svg
            onClick={() => setIsOpen(!isOpen)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 md:hidden block cursor-pointer absolute top-5 right-5 z-50 "
          >
            {" "}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />{" "}
          </svg>
        </div>

        {/* nav links */}
        <nav>
          <div className=" hidden md:flex gap-6 ">
            <Nav to="/" name="HOME" />
            <Nav to="/hotels" name="HOTELS" />
            <Nav to="/experience" name="EXPERIENCE" />
            <Nav to="/about" name="ABOUT" />
          </div>
        </nav>

        {/* search icon & login */}

        <div className="flex  items-center gap-2 md:gap-6 ">
          <img src={search} alt="search logo" />
          <button
            onClick={() => setIsLoginOpen(!isLoginOpen)}
            className="cursor-pointer bg-black rounded-3xl px-5 py-2"
          >
            Login
          </button>
        </div>
      </div>

      {/* Login */}

      {isOpen && (
        <div
          data-aos="fade-right"
          className="fixed top-0 left-0 h-full w-64 bg-white text-black shadow-xl z-[9999] p-6 md:hidden"
        >
          <svg
            onClick={() => setIsOpen(false)}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-7 absolute top-4 right-4 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
          <div className="flex flex-col gap-5 mt-10 text-lg font-semibold ">
            <a href="/">HOME</a>
            <a href="/experience">EXPERIENCE</a>
            <a href="/hotels">HOTELS</a>
            <a href="/about">ABOUT</a>
          </div>
        </div>
      )}
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            key="loginModal"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            transition={{ duration: 0.3 }}
            className="md:w-90  h-110 rounded-2xl  text-white fixed left-6 md:left-125 md:mt-8 mt-10 z-[999] overflow-hidden"
          >
            <img
              src={img}
              alt="login-bg"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black opacity-85"></div>
            <div>
              <svg
                onClick={() => setIsLoginOpen(false)}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-7 absolute top-4 right-4 cursor-pointer"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </div>
            <div className="p-15 ">
              <form
                className="relative  "
                action="
                
                "
              >
                <div className="flex  justify-center items-center  flex-col gap-4">
                  <h1 className="font-semibold text-2xl">
                    {isLoginForm ? "Login" : "Sign up"}{" "}
                  </h1>
                  <h1 className="font-semibold text-2xl">
                    {isLoginForm ? "Welcome Back" : "Create Your Account"}{" "}
                  </h1>
                  {!isLoginForm && <Input type="text" placeholder="Username" />}
                  <Input type="text" placeholder="Email" />
                  <Input type="password" placeholder="Password" />
                  {!isLoginForm && (
                    <Input
                      type="Password"
                      placeholder="Re-Enter Your Password"
                    />
                  )}
                  <button
                    type="submit"
                    className='cursor-pointer {isLoginForm && "mt-2"}  bg-gray-500 rounded-3xl px-5 py-2 text-white'
                  >
                    {isLoginForm ? "Login" : "Sign up"}
                  </button>
                  <p className={isLoginForm && "mt-2"}>
                    {" "}
                    Don't have an account?{" "}
                    <span
                      onClick={() => {
                        setIsLoginForm(!isLoginForm);
                      }}
                      className="cursor-pointer text-blue-600 hover:underline"
                    >
                      {isLoginForm ? "Sign up" : "Login"}
                    </span>{" "}
                  </p>
                </div>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
export default Navbar;

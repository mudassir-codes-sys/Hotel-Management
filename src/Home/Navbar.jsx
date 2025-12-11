import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.svg";
import search from "../assets/searchIcon.svg";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import img from "../assets/manuel-moreno-DGa0LQ0yDPc-unsplash.jpg";

function Nav({ to, name }) {
  return (
    <NavLink
      className="relative inline-block px-2 text-white after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-white after:transition-all after:duration-300 hover:after:w-full"
      to={to}
    >
      {name}
    </NavLink>
  );
}

function Input({ placeholder, type }) {
  return (
    <input
      className="bg-gray-200 text-black px-3 py-2 rounded-xl outline-none w-full"
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
      {/* Navbar */}
      <div className="w-full h-20 flex items-center justify-between px-4 md:px-16 bg-transparent text-white relative">
        {/* Logo & Hamburger */}
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="logo"
            className="h-10 cursor-pointer"
            onClick={() => navigate("/")}
          />
          {/* Hamburger mobile */}
          <button
            className="md:hidden block text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Nav Links Desktop */}
        <div className="hidden md:flex gap-8">
          <Nav to="/" name="HOME" />
          <Nav to="/hotels" name="HOTELS" />
          <Nav to="/experience" name="EXPERIENCE" />
          <Nav to="/about" name="ABOUT" />
        </div>

        {/* Search & Login */}
        <div className="flex items-center gap-4">
          <img src={search} alt="search" className="w-6 h-6" />
          <button
            onClick={() => setIsLoginOpen(true)}
            className="bg-black cursor-pointer px-4 py-2 rounded-3xl"
          >
            Login
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 w-64 h-full bg-white text-black z-50 shadow-lg p-6 md:hidden"
          >
            <button
              className="absolute  top-4 right-4"
              onClick={() => setIsOpen(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <nav className="flex flex-col gap-6 mt-12 text-lg font-semibold">
              <Nav to="/" name="HOME" />
              <Nav to="/hotels" name="HOTELS" />
              <Nav to="/experience" name="EXPERIENCE" />
              <Nav to="/about" name="ABOUT" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Login Modal */}
      <AnimatePresence>
        {isLoginOpen && (
          <motion.div
            key="loginModal"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 flex items-center justify-center z-50"
          >
            <div
              className="absolute inset-0 bg-black/70"
              onClick={() => setIsLoginOpen(false)}
            ></div>

            <div className="relative bg-white w-11/12 md:w-96 rounded-2xl overflow-hidden p-6 z-10">
              <button
                className="absolute top-4 right-4 text-black"
                onClick={() => setIsLoginOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <h1 className="text-2xl font-semibold text-center">
                {isLoginForm ? "Login" : "Sign up"}
              </h1>
              <h2 className="text-lg text-center mb-4">
                {isLoginForm ? "Welcome Back" : "Create Your Account"}
              </h2>

              <form className="flex flex-col gap-3">
                {!isLoginForm && <Input type="text" placeholder="Username" />}
                <Input type="text" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                {!isLoginForm && (
                  <Input type="password" placeholder="Re-enter Password" />
                )}

                <button className="bg-gray-800 cursor-pointer text-white rounded-xl py-2 mt-2">
                  {isLoginForm ? "Login" : "Sign up"}
                </button>
              </form>

              <p className="text-center mt-4 text-sm">
                {isLoginForm
                  ? "Don't have an account?"
                  : "Already have an account?"}{" "}
                <span
                  onClick={() => setIsLoginForm(!isLoginForm)}
                  className="text-blue-600 cursor-pointer hover:underline"
                >
                  {isLoginForm ? "Sign up" : "Login"}
                </span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;

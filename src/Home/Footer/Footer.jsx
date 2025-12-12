import logo from "../../assets/logo.svg";
import insta from "../../assets/instagramIcon.svg";
import twitter from "../../assets/twitterIcon.svg";
import fb from "../../assets/facebookIcon.svg";
import arrow from "../../assets/arrowIcon.svg";
import linkedin from "../../assets/linkendinIcon.svg";
function Footer() {
  return (
    // md:grid md:grid-cols-4 flex flex-col justify-center items-center
    <>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 col-span-full place-items-center  ">
        <div className="px-20 mt-18">
          <img className="invert" src={logo} alt="logo" />
          <p className="max-w-70 mt-4 text-sm text-gray-900">
            Discover the world's most extraordinary places to stay, from
            boutique hotels to luxury villas and private islands.
          </p>
          <div className="flex  mt-3 gap-2 cursor-pointer ">
            <img className="w-7" src={insta} alt="" />
            <img className="w-7" src={twitter} alt="" />
            <img className="w-7" src={fb} alt="" />
            <img className="w-7" src={linkedin} alt="" />
          </div>
        </div>
        <div className="mt-18 md:mr-0 mr-16 ">
          <h4 className="text-lg text-gray-700">Company</h4>
          <ul className="flex flex-col  gap-1 mt-2  ">
            <li>About</li>
            <li>Careers</li>
            <li>Press</li>
            <li>Blog</li>
            <li>Partners</li>
          </ul>
        </div>

        <div className="mt-18">
          <h4 className="text-lg text-gray-700">Support</h4>
          <ul className="flex flex-col  gap-1 mt-2">
            <li>Help Center</li>
            <li>Safety</li>
            <li>Cancellation Options</li>
            <li>Contacts Us</li>
            <li>Accessibility</li>
          </ul>
        </div>

        <div className="mt-18  min-w-full col-span-full  flex flex-col items-center text-center  ">
          <h2 className="text-gray-700">STAY UPDATED </h2>
          <p className="max-w-60 mt-2">
            Subscribe to our newsletter for inspiration and special offers.
          </p>
          <div className=" flex ">
            <input
              className="border-2 px-2 border-r-black border-gray-600 mt-4"
              type="text"
              placeholder="Your Email"
            />
            <div className="bg-black w-6 justify-center  rounded-r-lg h-8 mt-4 flex items-center ">
              <img className="w-3.5 invert  " src={arrow} alt="" />
            </div>
          </div>
        </div>
      </div>
      <hr className="mt-10" />
      <div className="flex justify-center items-center  min-h-20 ">
        <p className="text-sm">© 2025 QuickStay. All rights reserved.</p>
      </div>
    </>
  );
}

export default Footer;

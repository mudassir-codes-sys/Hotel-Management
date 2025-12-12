import arrow from "../../assets/arrowIcon.svg";

function ExclusiveOfferCard({ img, off, heading, para, date }) {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="border-2 text-white relative md:w-90 lg:min-w-75 h-70 md:max-w-70 md:my-4 rounded-xl  bg-center "
    >
      <p className=" mt-8  ml-5 text-black max-w-20    bg-white rounded-4xl px-3 text-sm py-1">
        {off}% OFF
      </p>
      <h2 className="mt-3 ml-8  font-semibold text-xl md:text-xl   ">
        {heading}
      </h2>
      <p className="mt-2 ml-8   max-w-70 ">{para}</p>
      <p className=" mt-2 ml-8  text-gray-300">Expires {date}</p>
      <p className="absolute bottom-7 left-8">View Offers</p>
      <img
        className="cursor-pointer  absolute bottom-8.5 left-30 invert  hover:translate-x-1.5 transition-all 1000"
        src={arrow}
        alt=""
      />
    </div>
  );
}

export default ExclusiveOfferCard;

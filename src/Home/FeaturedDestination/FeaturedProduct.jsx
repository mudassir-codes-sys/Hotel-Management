import star from "../../assets/starIconFilled.svg";
import { MapPin } from "lucide-react";
function FeaturedProduct({ img, title, rating, price, para }) {
  return (
    <div className="w-80 h-85  text-gray-700 px-2 ">
      <img src={img} className="rounded-lg" alt="room" />
      <div className="flex justify-between items-center   mt-2  ">
        <h1 className=" text-xl  font-bold">{title}</h1>
        <div className="flex justify-center items-center gap-2">
          <img src={star} alt="" />
          <p>{rating}</p>
        </div>
      </div>
      <div>
        <p className="text-sm  text-gray-500">Jumeria Bay Island, Jumeriah 2</p>
      </div>
      <div className="flex items-center font-semibold   gap-1 ">
        <MapPin width="20px" />
        <p className="leading-4  text-base mt-1">{para}</p>
      </div>
      <div className="mt-2 flex justify-between ">
        <p className="text-lg font-semibold text-black">
          ${price}
          <span className="text-gray-700">/night </span>
        </p>
        <button className="border-2 border-gray-500 px-4 py-1 font-semibold">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default FeaturedProduct;

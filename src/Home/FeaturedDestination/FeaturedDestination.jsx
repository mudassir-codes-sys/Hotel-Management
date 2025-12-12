import FeaturedList from "./FeaturedList";
import FeaturedProduct from "./FeaturedProduct";

function FeaturedDestination() {
  return (
    <>
      <div
        data-aos="fade-up"
        className=" mt-30 man-w-auto mx-auto flex flex-col justify-center items-center"
      >
        <div className="flex flex-col  justify-center items-center">
          <h1 className="text-4xl">Featured Destination</h1>
          <p className="md:max-w-150 max-w-80 text-center mx-auto   text-sm md:text-base   mt-2 leading-6 text-gray-600">
            Discover our handpicked selection of exceptional properties around
            the world, offering unparalleled luxury and unforgettable
            experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-10  lg:gap-5 gap-5 justify-items-center md:px-10 mt-4">
          <FeaturedList />
        </div>
        <div className="flex justify center  mt-14 border-2 border-gray-400 py-1 px-2">
          <button>View All Destinations</button>
        </div>
      </div>
    </>
  );
}

export default FeaturedDestination;

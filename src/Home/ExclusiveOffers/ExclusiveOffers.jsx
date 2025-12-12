import { ArrowRight } from "lucide-react";
import ExclusiveOfferCard from "./ExclusiveOfferCard";

import ExclusiveOffersList from "./ExclusiveOffersList";
function ExclusiveOffers() {
  return (
    <>
      <div className="mt-30 flex flex-col md:flex-row  md:justify-between px-30 items-center ">
        <div>
          <h1 className="text-4xl">Exclusive Offers</h1>
          <p className="mt-4  md:max-w-140 text-gray-700">
            Take advantage of our limited-time offers and special packages to
            enhance your stay and create unforgettable memories.
          </p>
        </div>
        <div className="flex gap-2  md:mt-0 mt-6  font-semibold">
          <p>View All Offers</p>
          <ArrowRight strokeWidth={2} />
        </div>
      </div>
      <div data-aos="fade-up">
        <ExclusiveOffersList />
      </div>
    </>
  );
}

export default ExclusiveOffers;

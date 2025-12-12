import React from "react";
import GuestCard from "./GuestCard";
import GuestCardList from "./GuestCardList";

function Guests() {
  return (
    <>
      <div className="flex justify-center flex-col   items-center mt-15">
        <h1 className="text-2xl font-semibold">What Our Guests Say</h1>
        <p className="md:max-w-140 max-w-60 text-gray-700 text-center mt-2">
          Discover why discerning travelers consistently choose QuickStay for
          their exclusive and luxurious accommodations around the world.
        </p>
      </div>

      <GuestCardList />
    </>
  );
}

export default Guests;

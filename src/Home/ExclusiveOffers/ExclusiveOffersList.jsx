import img1 from "../../assets/exclusiveOfferCardImg1.png";
import img2 from "../../assets/exclusiveOfferCardImg2.png";
import img3 from "../../assets/exclusiveOfferCardImg3.png";
import ExclusiveOfferCard from "./ExclusiveOfferCard";

const offers = [
  {
    img: img1,
    off: 25,
    heading: "Summer Escape Package",
    para: "Enjoy a complimentary night and daily breakfast",
    date: "Aug 31",
  },
  {
    img: img2,
    off: 20,
    heading: "Romantic Getaway",
    para: "Special couples package including spa treatment",
    date: "Sep 20",
  },
  {
    img: img3,
    off: 30,
    heading: "Luxury Retreat",
    para: "Book 60 days in advance and save on your stay at any of our luxury properties worldwide",
    date: "Sep 25",
  },
];

function ExclusiveOffersList() {
  return (
    <div
      className="lg:mt-20 mx-auto md:mt-10 mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3   lg:gap-0  lg:px-10 px-0 gap-6 justify-items-center
 "
    >
      {offers.map((offer, i) => (
        <ExclusiveOfferCard
          key={i}
          img={offer.img}
          off={offer.off}
          heading={offer.heading}
          para={offer.para}
          date={offer.date}
        />
      ))}
    </div>
  );
}

export default ExclusiveOffersList;
//

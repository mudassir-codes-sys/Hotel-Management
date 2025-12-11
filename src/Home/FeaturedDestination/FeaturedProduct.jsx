
import star from '../../assets/starIconFilled.svg'
import location from '../../assets/locationIcon.svg'
function FeaturedProduct({ img, title, rating, price , para }) {
    return (
        <div className="w-80 h-85  text-gray-700  "  >
            <img src={img} className="rounded-lg" alt="room" />
            <div className="flex justify-between  mt-2 px-5 "  >
                <h1 className="text-base font-semibold">{title}</h1>
                <div className="flex gap-2" >
                    <img src={star} alt="" />
                    <p >{rating}</p>
                </div>
            </div>


            <div className="flex " >
                <img src={location} alt="" />
                <p className="leading-4 mt-1" >{para}</p>
            </div>
            <div className="mt-2 flex justify-between px-6" >
                <p className="text-lg font-semibold text-black">
                    ${price}<span className="text-gray-700">/night </span>
                </p>
                <button className="border-2 border-gray-500 px-4 py-1 font-semibold">Book Now</button>
            </div>
        </div>
    )
}

export default FeaturedProduct
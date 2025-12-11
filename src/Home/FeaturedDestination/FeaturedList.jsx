import room1 from "../../assets/roomImg4.png"
import room2 from "../../assets/roomImg3.png"
import room3 from "../../assets/roomImg2.png"
import room4 from "../../assets/roomImg4.png"

import FeaturedProduct from "./FeaturedProduct"
const FeaturedRooms = [
    {
        img: room1,
        title: "Bvlgari Resort",
        rating: 4.5,
        para: 'Jumeria Bay Island, Jumeriah 2, Dubai United Arab Emirates',
        price: 1099
    },
    {
        img: room2,
        title: "Bvlgari Resort",
        rating: 4.5,
        para: 'Jumeria Bay Island, Jumeriah 2, Dubai United Arab Emirates',
        price: 499
    },
    {
        img: room3,
        title: "Bvlgari Resort",
        rating: 4.5,
        para: 'Jumeria Bay Island, Jumeriah 2, Dubai United Arab Emirates',
        price: 699
    },
    {
        img: room4,
        title: "Bvlgari Resort",
        rating: 4.5,
        para: 'Jumeria Bay Island, Jumeriah 2, Dubai United Arab Emirates',
        price: 899
    },
]

function FeaturedList() {
    return (
        <>
            {
                FeaturedRooms.map((room, i) => (
                    <FeaturedProduct key={i} img={room.img} title={room.title} rating={room.rating} para={room.para} price={room.price} />
                ))
            }
        </>
    )
}

export default FeaturedList
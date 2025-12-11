
import arrow from '../../assets/arrowIcon.svg'

function ExclusiveOfferCard({ img, off, heading, para, date }) {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className="border-2 text-white relative w-90 h-70 rounded-xl  bg-center " >
            <p className='absolute top-5 text-black  left-5 bg-white rounded-4xl px-3 text-sm py-1' >{off}% OFF</p>
            <h2 className='top-20 text-xl left-8 absolute'>{heading}</h2>
            <p className='absolute top-28 max-w-70 left-8 ' >{para}</p>
            <p className='absolute top-48  left-8 text-gray-300'>Expires {date}</p>
            <p className='absolute bottom-5 left-8'>View Offers</p>
            <img className="cursor-pointer  absolute bottom-6 left-30 invert  hover:translate-x-1.5 transition-all 1000" src={arrow} alt="" />

        </div >
    )
}

export default ExclusiveOfferCard
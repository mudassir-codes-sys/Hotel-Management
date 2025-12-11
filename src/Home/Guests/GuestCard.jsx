import guest1 from "../../assets/guestsIcon.svg"
import stars from '../../assets/starIconFilled.svg'
import stars2 from '../../assets/starIconOutlined.svg'
function FilledStar() {
    return <img src={stars} />

}
function EmptyStar() {
    return <img src={stars2} />

}

function GuestCard({ fullName, city, comment }) {
    return (
        <div className="min-w-auto min-h-60 flex justify-center  py-5" >
        <div className='bg-[#f1efef] rounded-lg  w-80 md:h-50 p-2 '  >
            <div className="flex " >
                <img className="w-8" src={guest1} alt="guest-pic" />
                <h1 className="ml-4 text-lg font-semibold " > {fullName}</h1>
            </div>
            <p className="ml-12 text-sm text-gray-700  " >{city}</p>
            <div className="flex gap-1 mt-3 ml-2" >
                <FilledStar />
                <FilledStar />
                <FilledStar />
                <FilledStar />
                <EmptyStar />
            </div>
            <p className="mt-4 text-gray-700" >{comment}</p>
        </div>
        </div>
    )
}

export default GuestCard
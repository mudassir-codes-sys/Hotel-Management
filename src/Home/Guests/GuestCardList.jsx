import GuestCard from "./GuestCard"

const reviews = [
    {
        fullName: "Emma Rodriguez",
        city: "Barcelona, Spain",
        comment: `"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides"`
    },
    {
        fullName: "Emma Rodriguez",
        city: "Barcelona, Spain",
        comment: `"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides"`
    },
    {
        fullName: "Emma Rodriguez",
        city: "Barcelona, Spain",
        comment: `"I've used many booking platforms before, but none compare to the personalized experience and attention to detail that QuickStay provides"`
    },
]
function GuestCardList() {
    return (
        <div  className="mt-10 grid grid-cols-1 md:grid-cols-3   md:px-10 ">
            {reviews.map((review, i) => (
                <GuestCard key={i} fullName={review.fullName} city={review.city} comment={review.comment} />
            ))}
        </div>
    )
}

export default GuestCardList
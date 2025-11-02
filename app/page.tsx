import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

const events=[
  {image:'/event1.png', title:'Event1'},
  {image:'/event2.png', title:'Event2'},
]


export default function Home() {
  return (
    <section className="relative overflow-hidden text-white py-20 px-6">
      {/* Square mesh background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="container mx-auto space-y-6">
        <h1 className="text-6xl text-center font-bold leading-tight">
          The Hub for Every Dev <br /> Event You Can't Miss
        </h1>
        <p className="text-md text-center opacity-80">
          Hackathons, Meetups, and Conferences, All in One Place
        </p>
        <div className="mx-auto flex justify-center">
          <ExploreBtn />
        </div>

        {/* Featured events */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-8">
            Featured Events
          </h3>
          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {events.map((event) => (
              <li
                key={event.title}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 text-center hover:bg-white/20 transition"
              >
                <EventCard image={event.image} title={event.title} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

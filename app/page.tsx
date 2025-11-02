import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";
import { events } from "@/lib/constants";



export default function Home() {
  return (
    <section className="relative overflow-hidden text-white py-20 px-6">
      {/* ✅ Square mesh background */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

      <div className="container mx-auto space-y-6">
        {/* Hero */}
        <h1 className="text-5xl md:text-6xl text-center font-extrabold leading-tight">
          The Hub for Every Dev <br /> Event You Can't Miss
        </h1>
        <p className="text-lg text-center opacity-80 max-w-2xl mx-auto">
          Hackathons, Meetups, and Conferences — all in one place.
        </p>
        <div className="flex justify-center">
          <ExploreBtn />
        </div>

        {/* Featured Events */}
        <div className="mt-20">
          <h3 className="text-5xl font-bold text-center mb-1">
            Featured Events
          </h3>
<div className="w-36 lg:w-72 h-2 rounded-full mx-auto bg-gradient-to-r from-blue-400 via-green-500 to-purple-400 mb-10"></div>

          <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
            {events.map((event) => (
              <li key={event.title}>
                <EventCard {...event} />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

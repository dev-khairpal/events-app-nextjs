import EventCard from "@/components/EventCard";
import ExploreBtn from "@/components/ExploreBtn";

const events = [
  {
    image: "/event1.png",
    title: "Hackathon Summit 2025",
    location: "Bangalore, India",
    date: "Nov 15, 2025",
    time: "10:00 AM - 6:00 PM",
  },
  {
    image: "/event2.png",
    title: "Next.js Conf 2025",
    location: "San Francisco, USA",
    date: "Dec 1, 2025",
    time: "9:00 AM - 5:00 PM",
  },
  {
    image: "/event2.png",
    title: "AI Developers Meetup",
    location: "Pune, India",
    date: "Nov 22, 2025",
    time: "2:00 PM - 8:00 PM",
  },
  {
    image: "/event1.png",
    title: "Open Source India 2025",
    location: "Hyderabad, India",
    date: "Dec 10, 2025",
    time: "9:30 AM - 4:30 PM",
  },
  {
    image: "/event2.png",
    title: "Frontend Dev Fest",
    location: "Berlin, Germany",
    date: "Jan 5, 2026",
    time: "11:00 AM - 7:00 PM",
  },
  {
    image: "/event1.png",
    title: "Cloud Native Summit",
    location: "Singapore",
    date: "Jan 18, 2026",
    time: "9:00 AM - 6:00 PM",
  },
  {
    image: "/event2.png",
    title: "Web3 Innovators Meetup",
    location: "Mumbai, India",
    date: "Feb 2, 2026",
    time: "5:00 PM - 9:00 PM",
  },
  {
    image: "/event1.png",
    title: "Global Tech Expo 2026",
    location: "Dubai, UAE",
    date: "Feb 15–17, 2026",
    time: "10:00 AM - 8:00 PM",
  },
];


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
          <h3 className="text-3xl font-bold text-center mb-10">
            Featured Events
          </h3>

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

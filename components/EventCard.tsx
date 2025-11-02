import { LocateIcon, LocationEdit, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  location: string;
  date: string;
  time: string;
}

const EventCard = ({ title, image, location, date, time }: Props) => {
  return (
    <Link
      href={`/events`}
      className="group block w-72 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden hover:scale-[1.03] transition-transform duration-300"
    >
      <div className="relative w-full h-44">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-4">
        <div className="flex gap-2 items-center">
          <MapPinned /> <span>{location}</span>
        </div>
        <p className="text-lg font-semibold mb-2">{title}</p>
        <div className="">
          <p>{date}</p>
          <p>{time}</p>
        </div>
      </div>
    </Link>
  );
};

export default EventCard;

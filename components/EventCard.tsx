import Image from "next/image"
import Link from "next/link"

interface Props{
    title:string,
    image:string
}

const EventCard = ({title, image}:Props) => {
  return (
    <Link href={`/events`}>
        <div className="w-[400px] h-[100px]">
             <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
        </div>
        <p>{title}</p>
    </Link>
  )
}

export default EventCard
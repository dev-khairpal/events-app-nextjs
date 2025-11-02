import { Plus } from "lucide-react"
import Link from "next/link"


const Navbar = () => {
  return (
    <header className="text-white bg-white/10 p-4">
        <nav className="flex items-center justify-between max-w-6xl mx-auto">
            <Link href="/" className="font-bold text-2xl" >
            Events Explorer
            </Link>

            <ul className="flex gap-4 items-center justify-center">
                <Link href="/" >Home</Link>
                <Link href="/" >Events</Link>
                <Link href="/" className="flex gap-1 bg-white/20 p-2 rounded hover:bg-white/30" ><Plus /><p>Create Event</p></Link>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar
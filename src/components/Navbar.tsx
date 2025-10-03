import Link from "next/link"
import Logo from "./ui/Logo"

const Navbar = () => {
  return (
    <nav className="sticky md:top-4 top-0 z-50 w-full">
      <div className="w-[95%] mx-auto backdrop-blur border border-zinc-950/5 md:rounded-2xl px-3 flex justify-between py-2 items-center">
        {/* Logo Section */}
        <div className="">
          <Logo />
        </div>
        {/* Navigation Links */}
        <div className="flex gap-4 items-center">
          <div className="flex gap-4 text-zinc-800 font-light text-sm lg:text-base">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dev">Devs CD</Link>
            <Link href="/contributor">Contributeurs</Link>
          </div>
          <button className="bg-blue-600 text-white hover:bg-blue-500 active:bg-blue-800 border-zinc-950/5 cursor-pointer py-3 px-8 duration-300 active:scale-90 rounded-lg font-light text-xs lg:text-sm">Contribuer</button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
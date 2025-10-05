import Link from "next/link"

const LinkMenu = () => {
  return (
    <div>
        <div className="flex gap-4 text-zinc-800 font-light text-sm lg:text-base">
            <Link href="/" className="hover:text-[#007FFF] duration-300 transition">Home</Link>
            <Link href="/about" className="hover:text-[#007FFF] duration-300 transition">About</Link>
            <Link href="/dev" className="hover:text-[#007FFF] duration-300 transition">Devs CD</Link>
            <Link href="/contributor" className="hover:text-[#007FFF] duration-300 transition">Contributeurs</Link>
          </div>
    </div>
  )
}

export default LinkMenu
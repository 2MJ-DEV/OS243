import Link from "next/link"

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between w-[95%] mx-auto py-6 border-t border-zinc-950/5">
        <div className="flex gap-4 items-center">
          <span>&copy; {new Date().getFullYear()} 2MJ-DEV</span>
          <div className="flex gap-4 text-zinc-800 font-light text-sm lg:text-base">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
        <div className="">
          <div className="flex gap-4 text-zinc-800 font-light text-sm lg:text-base">
            <Link href="/">Home</Link>
            <Link href="/about">About</Link>
            <Link href="/dev">Devs CD</Link>
            <Link href="/contributor">Contributeurs</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
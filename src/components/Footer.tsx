import Link from "next/link"
import LinkMenu from "./ui/LinkMenu"
import LinkItem from "./ui/LinkItem"

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between w-[95%] mx-auto py-6 border-t border-zinc-950/5">
        <div className="flex gap-4 items-center">
          <span>&copy; {new Date().getFullYear()} 2MJ-DEV</span>
          <LinkItem />
        </div>
        <div className="">
          <LinkMenu />
        </div>
      </div>
    </footer>
  )
}

export default Footer
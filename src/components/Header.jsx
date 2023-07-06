import MenuItem from "./MenuItem";
import {AiFillHome} from "react-icons/ai"
import {BsFillInfoCircleFill} from "react-icons"
import Link from "next/link";

export default function Header() {
  return (
    <div>
        <div className="flex justify-between mx-2 max-w-6xl sm:mx-auto items-center py-6">
            <MenuItem title="HOME" address="/" Icon={AiFillHome}/>
            <MenuItem title="ABOUT" address="/about" Icon={BsFillInfoCircleFill}/>
        </div>
        <div className="">
            <Link href="/">
                <h2 className="text-2xl">
                    <span className="font-bold bg-amber-500 py-1 px-2 rounded-lg mr-1">IMDB</span>
                    <span className="text-xl hidden sm:inline">Clone</span>
                </h2>
            </Link>
        </div>
    </div>
  )
}

import React from "react"
import {useRouter} from "next/router"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  return <div className={`flex w-full h-16 bg-stone-800 bg-opacity-80 backdrop-blur-md p-2 items-center justify-center fixed top-0 left-0 shadow-md z-50`}>
    <img src={require("./../assets/name no outline no black.svg").default.src} className="h-full bg-stone-900 rounded-tl-2xl rounded-br-2xl shadow-inner bg-opacity-90 backdrop-blur-sm" alt="Ewsgit" />
    {/* <ul className="flex gap-2 sm:ml-20 md:ml-28 lg:ml-40 ml-10 transition-all text-white font-semibold tracking-wider">
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/projects">
          <a>Projects</a>
        </Link>
      </li>
    </ul> */}
  </div>
}
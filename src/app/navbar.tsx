import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
 return (
    <nav className="flex bg-purple-600 py-3 px-5 justify-between">
      <div className="flex">
      <h1 className="text-white">Navbar</h1>
      <ul className="flex ml-5">
        <Link href="/">
        <li className={`mr-3 ${pathname === "/" ? "text-pink-400" : "text-white"} cursor-pointer`}>Home</li>
        </Link>
        <Link href="/about">
          <li className={`mr-3 ${pathname === "/about" ? "text-pink-400" : "text-white"} cursor-pointer`}>About</li>
        </Link>
        <Link href="/about/profile">
          <li className={`mr-3 ${pathname === "/about/profile" ? "text-pink-400" : "text-white"} cursor-pointer`}>Profile</li>
        </Link>
      </ul>
      </div>
      <div>
        <button 
        className="bg-white rounded-md px-3 text-sm h-7 cursor-pointer"
        onClick ={() =>router.push("/login")}
        >
          Login
        </button>
      </div>
    </nav>
 );
}

import Link from "next/link";
import Hamburger from "./hamburger";
import Search from "./search";

type headerProps = {
  menuIsShown: boolean;
  setMenuIsShown: (value: boolean) => void;
}

export default function Header(props: headerProps) {
    
  return (
    <div>
      <div className="flex justify-center items-center font-fraunces bg-glacier-600 text-white py-4 px-6">
        <Link href="/" className="absolute left-4 md:relative text-3xl md:text-6xl whitespace-nowrap">
          Blue's Blog
        </Link>
        <div className="ml-auto flex items-center gap-4 z-10">
          <Search />
          <div className="md:hidden cursor-pointer" onClick={() => props.setMenuIsShown(!props.menuIsShown) }>
            <Hamburger />
          </div>
        </div>
      </div>
    </div>
  )
}
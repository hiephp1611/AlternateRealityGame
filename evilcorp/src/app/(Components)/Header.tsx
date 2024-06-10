import Link from "next/link";
import Hamburger from "./Hamburger";

type HeaderProps = {
  menuIsShown: boolean;
  setMenuIsShown: (value: boolean) => void;
}

const HEADER_ITEMS = [
  { href: "/", text: "Home"},
  { href: "/vision", text: "Vision" },
  { href: "/story", text: "Our Story" },
  { href: "/services", text: "Services" },
  { href: "/career", text: "Career" },
  { href: "/contact", text: "Contact" },
]

export default function Header(props: HeaderProps) {

  function LandscapeHeaderItem({ text, href }: { text: string, href: string }) {
    return (
      <li className="text-lg transition-all hover:border-white border-b-2 border-transparent whitespace-nowrap">
        <Link href={href}>{text}</Link>
      </li>
    )
  }
  
  function PortraitItems() {
    return (
      <div className="absolute z-10 w-full bg-[#111211] text-white py-12">
        <ul className="flex flex-col gap-4 font-medium font-kanit items-center">
          {
            HEADER_ITEMS.map((a) => (
              <div onClick={() => props.setMenuIsShown(false)}>
                <LandscapeHeaderItem text={a.text} href={a.href} key={a.href}/>
              </div>
            ))
          }
        </ul>
      </div>
    )
  }

  return (
    <>
      <header className="w-full font-goldman bg-evildark text-white md:flex md:justify-center">
        <div className="py-4 px-8 flex items-center justify-between md:w-full md:max-w-4xl">
          <Link href="/" className="text-6xl">
            INISTR
          </Link>
          <div className="">
            <ul className="md:flex gap-4 font-medium hidden font-kanit">
              {
                HEADER_ITEMS.map((a) => (
                  <LandscapeHeaderItem text={a.text} href={a.href} key={a.href} />
                ))
              }
            </ul>
          </div>
          <div className="ml-auto flex items-center md:hidden">
            <div className="md:hidden cursor-pointer" onClick={() => props.setMenuIsShown(!props.menuIsShown)}>
              <Hamburger />
            </div>
          </div>
        </div>
      </header>

      <div className={`md:hidden ${props.menuIsShown ? "block" : "hidden"} relative`}>
        <PortraitItems />
      </div>
    </>
  )
}



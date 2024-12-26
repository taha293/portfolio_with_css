'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";

function NavBar() {

  const Reff = useRef<HTMLUListElement>(null)
  const Reff2 = useRef<HTMLDivElement>(null)
  const navClose = ():any => {
    if (Reff.current && Reff2.current) {
  Reff.current.style.display = ''
  Reff.current.style.flexDirection = 'row'
  Reff.current.style.textAlign = 'start'
  Reff.current.style.position = 'static'
  Reff.current.style.top = '0px'
  Reff.current.style.right = '0px'
  Reff2.current.style.alignItems = 'center'
  }
}

  return (
    <div className="flex justify-between px-5 sm:px-6 md:px-8 lg:px-10 xl:px-12 py-[22px] items-center" ref={Reff2} >
      <p className="text-[20px] font-bold bg-gradient-to-br from-[#13B0F5] via-[#CA24B4] bg-clip-text text-transparent leading-[0.8]" > Taha's <br /><span className="text-[18px]">Portfolio</span></p>
      <div className="md:flex" id="navDiv">
        <ul className="md:flex gap-8 hidden" id="navUl" ref={Reff}>
          <Link href="/" onClick={navClose}><li className="hover:text-[#42446E] text-[14px] lg:text-[16px]">Home</li></Link>
          <Link href="/#skills" onClick={navClose}><li className="hover:text-[#42446E] text-[14px] lg:text-[16px]">Tech Stacks</li></Link>
          <Link href="/#projects" onClick={navClose}><li className="hover:text-[#42446E] text-[14px] lg:text-[16px]">Projects</li></Link>
          <Link href="/about" onClick={navClose}><li className="hover:text-[#42446E] text-[14px] lg:text-[16px]">About</li></Link>
          <Link href="/contact" onClick={navClose}><li className="hover:text-[#42446E] text-[14px] lg:text-[16px]">Contact</li></Link>
        </ul>
      </div>
      <div className="flex md:hidden">
        <FontAwesomeIcon icon={faBars} className="text-[#666666] text-[24px] cursor-pointer" onClick={() => {

          if (Reff.current && Reff2.current) {
            if (Reff.current.style.display == '') {
              Reff.current.style.display = 'flex'
              Reff.current.style.flexDirection = 'column'
              Reff.current.style.textAlign = 'center'
              Reff.current.style.position = 'relative'
              Reff.current.style.top = '35px'
              Reff.current.style.right = '20px'
              Reff2.current.style.alignItems = 'baseline'

            } else if (Reff.current.style.display == 'flex') {
              
            navClose()
            }

          }
        }} />
      </div>
    </div>
  );
}
export default NavBar
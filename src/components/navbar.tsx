'use client'
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useRef } from "react";
import styles from './styles/navbar.module.css'

function NavBar() {

  const Reff = useRef<HTMLUListElement>(null)
  const Reff2 = useRef<HTMLDivElement>(null)
  const navClose = () => {
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
    <div className={styles.navbar} ref={Reff2} >
      <p className={styles.navLogo}> Taha&apos;s <br /><span>Portfolio</span></p>
      <div className={styles.navitems} id="navDiv">
        <ul id="navUl" ref={Reff}>
          <Link href="/" onClick={navClose}><li>Home</li></Link>
          <Link href="/#skills" onClick={navClose}><li>Tech Stacks</li></Link>
          <Link href="/#projects" onClick={navClose}><li>Projects</li></Link>
          <Link href="/about" onClick={navClose}><li>About</li></Link>
          <Link href="/contact" onClick={navClose}><li>Contact</li></Link>
        </ul>
      </div>
      <div className={styles.hamburger}>
        <FontAwesomeIcon icon={faBars} className={styles.hamburgerI} onClick={() => {

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
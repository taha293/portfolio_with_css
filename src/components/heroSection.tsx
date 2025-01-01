'use client'
import { ReactTyped } from "react-typed";
import Image from "next/image";
import styles from './styles/herosection.module.css'

function HeroSection() {
    return (
        <div className={styles.hero}>
            <div className={styles.herodiv}>
                <p>Hi 👋,<br />
                    My name is <br />
                    M. Taha <br />

                    <ReactTyped
                        strings={[
                            "I build things for web",
                            "Fast development.",
                            "SEO-friendly.",
                            "Scalable solutions.",
                        ]}
                        typeSpeed={50}
                        backSpeed={30}
                        loop
                    /></p>
            </div>
            <div className={styles.heroimg}>
                <Image className={styles.heroImage} src='/img.jpg' alt="myimage" width={240} height={1}></Image>
            </div>
        </div>
    )
}

export default HeroSection
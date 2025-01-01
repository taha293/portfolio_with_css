'use client'
import { ReactTyped } from "react-typed";
import Image from "next/image";
import styles from './styles/about.module.css'

function AboutHero() {
    return (
        <div className={styles.hero}>
            <div className={styles.herodiv}>
                <p>About Me,<br /> <br />
                  
                    
                    <ReactTyped
        strings={[
          "Hi, I am Muhammad Taha—a passionate Frontend Developer dedicated to crafting intuitive and visually captivating web experiences. With a strong foundation in modern web technologies, I specialize in building responsive and performance-optimized applications using frameworks like React and Next.js.  My journey into web development began with a deep curiosity about how technology shapes our everyday lives. Over the years, I have transformed this curiosity into expertise, creating projects that not only look great but also solve real-world problems. From single-page applications to dynamic, user-focused platforms, I enjoy every step of the process.",
        ]}
        typeSpeed={10}
        backDelay={1000000}
        loop
       className={styles.typed}/></p>
            </div>
            <div className={styles.heroimg}>
                <Image  className={styles.heroImage} src='/img.jpg' alt="myimage" width={240} height={1}></Image>
            </div>
        </div>
    )
}

export default AboutHero
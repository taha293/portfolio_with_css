import Image from "next/image"
import styles from './styles/skills.module.css'

function Skills() {
    return (
        <div className={styles.skills} id="skills">
            <div className={styles.skillshead}>
                <p>My Tech Stack</p>
                <span> Technologies I&apos;ve been working with recently</span>
            </div>
            <div className={styles.skillsitems}>
                <div>
                    <Image src='/html.png' alt="html" width={105} height={105}></Image>
                </div><div>
                    <Image src='/css.png' alt="css" width={105} height={105}></Image>
                </div><div>
                    <Image src='/js.png' alt="js" width={105} height={105}></Image>
                </div><div>
                    <Image src='/ts.png' alt="ts" width={105} height={105}></Image>
                </div><div>
                    <Image src='/tailwind.png' alt="tailwind" width={105} height={105}></Image>
                </div><div>
                    <Image src='/react.png' alt="react" width={105} height={105}></Image>
                </div><div>
                    <Image src='/next.png' alt="nextjs" width={105} height={105}></Image>
                </div><div>
                    <Image src='/shadecn.png' alt="shadecn" width={105} height={105}></Image>
                </div>
                <div>
                    <Image src='/vs.png' alt="vscode" width={105} height={105}></Image>
                </div>
                <div>
                    <Image src='/github.png' alt="github" width={105} height={105}></Image>
                </div>
            </div>
        </div>
    )
}
export default Skills
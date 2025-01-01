import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import styles from './styles/footer.module.css'

function Footer() {
    return (
        <div className={styles.footer} >
            <div className={styles.hr}></div>
            <div className={styles.footeritems}>
                <div className={styles.footercontent}>
                    <p>Design and Develop by M. Taha</p>
                </div>
                <div className={styles.footerlinks}>
                    <a href="https://www.facebook.com/taha.hero.712" target="blank" ><FontAwesomeIcon icon={faFacebook} /></a>
                    <a href="https://www.github.com/taha293" target="blank" ><FontAwesomeIcon icon={faGithub} /></a>
                    <a href="https://www.linkedin.com/in/muhammad-taha-ansarii/" target="blank" ><FontAwesomeIcon icon={faLinkedin} /></a>
                </div>
            </div>

        </div>
    )
}
export default Footer
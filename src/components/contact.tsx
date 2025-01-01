import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faIdBadge } from "@fortawesome/free-solid-svg-icons"
import styles from './styles/contact.module.css'

function ContactHero() {
    return (
        <div className={styles.contact}>
            <div>
                <FontAwesomeIcon icon={faIdBadge} color='#42446E' className={styles.contacticon} />
            </div>
            <div className={styles.contactmain}>
                <p>Have a Project in Mind? <br />Contact me on the platforms given below.</p>
                <div>
                    <a href='https://www.linkedin.com/in/muhammad-taha-ansarii/' target="blank" className={styles.linkedin}> Linkedin </a>
                    <a href='https://mail.google.com/mail/?view=cm&fs=1&to=tahahero7890@gmail.com' target="blank" className={styles.gmail}> Gmail </a>
                    <a href='https://www.facebook.com/taha.hero.712' target="blank" className={styles.fb}> Facebook </a>
                </div>
            </div>
        </div>
    )
}
export default ContactHero
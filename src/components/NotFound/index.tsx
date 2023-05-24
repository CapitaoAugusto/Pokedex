import { Link } from "react-router-dom";
import NotFoundBanner from '../../assets/NotFoundBanner.svg'


import styles from "./index.module.css"

export default function NotFound() {


    return (
        <section className={styles.sectionPageError}>
            <img className={styles.imgNotFound} src={NotFoundBanner} alt="Banner NotFound"></img>
            <p className={styles.textRocketTeam}>The rocket team
                <span className={styles.textHasWon}> has won this time.</span>
            </p>
            <Link to="/">
                <button className={styles.buttonPageError} type="button">
                    Return
                </button>
            </Link>
        </section>
    );
}
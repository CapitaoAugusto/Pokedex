import styles from "./index.module.css"
import BannerHomePage from '../../assets/BannerHomePage.svg'
import { TeamDevMessage } from "../TeamDevMessage"

export const HomePage = () => {
    return (

        <section className={styles.section_homePage}>
            <section className={styles.section_BannerPikachu}>
                <img className={styles.imgPikachu} src={BannerHomePage} alt="Banner Do Pokemon da home page"></img>
            </section>
            <section className={styles.section_TextHomePage}>
                <p>
                    <span className={styles.text_Find}>Find</span> all your favorite
                    <span className={styles.text_Pokemon}> Pokemon</span>
                    <p className={styles.text_Inferior}>
                        You can know the type of Pokemon, its strengths, disadvantages and abilities
                    </p>
                </p>
                <button className={styles.buttonSeePokemons}>
                    See pokemons
                </button>
            </section>
            <TeamDevMessage />
        </section>
    )
}

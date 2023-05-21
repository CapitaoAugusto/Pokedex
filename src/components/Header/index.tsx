import Logo from '../../assets/Logo.svg'
import styles from "./index.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <a>
                <img className={styles.imgLogo} src={Logo} alt="Logo do Pokedex" />
            </a>
            <section className={styles.section_buttons}>
                <a>
                    <button className={styles.button}>Home</button>
                </a>
                <a>
                    <button className={styles.button}>Pokédex</button>
                </a>
                <a>
                    <button className={styles.button}>Legendaries</button>
                </a>
                <a>
                    <button className={styles.button}>Documentation</button>
                </a>
            </section>
        </header>
    )
}

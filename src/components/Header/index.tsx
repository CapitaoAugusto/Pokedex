import Logo from '../../assets/Logo.svg'
import styles from "./index.module.css"

export const Header = () => {
    return (
        <header className={styles.header}>
            <img className={styles.imgLogo} src={Logo} alt="Logo do Pokedex" />
            <section className={styles.section_buttons}>
                <button className={styles.button}>Home</button>
                <button className={styles.button}>Pokédex</button>
                <button className={styles.button}>Legendaries</button>
                <button className={styles.button}>Documentation</button>
            </section>
        </header>
    )
 }
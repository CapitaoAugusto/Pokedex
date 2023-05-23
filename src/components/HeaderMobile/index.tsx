import styles from './index.module.css';
import Logo from "../../assets/Logo.svg"

export const HeaderMobile = () => {

    return (

        <header className={styles.headerContainerMobile}>
            <a>
                <img className={styles.imgLogoMobile} src={Logo} alt="Logo do Pokedex" />
            </a>
            <section className={styles.section_buttonsMobile}>
                <a>
                    <button className={styles.buttonMobile}>Home</button>
                </a>
                <a>
                    <button className={styles.buttonMobile}>Pokédex</button>
                </a>
                <a>
                    <button className={styles.buttonMobile}>Legendaries</button>
                </a>
                <a href='https://pokeapi.co/'>
                    <button className={styles.buttonMobile}>Documentation</button>
                </a>
            </section>
        </header>

    );

};


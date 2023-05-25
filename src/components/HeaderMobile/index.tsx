import styles from './index.module.css';
import Logo from "../../assets/Logo.svg"
import { Link } from 'react-router-dom';

export const HeaderMobile = () => {

    return (

        <header className={styles.headerContainerMobile}>
            <Link to="/"><img className={styles.imgLogoMobile} src={Logo} alt="Logo do Pokedex" /></Link>


            <section className={styles.section_buttonsMobile}>
                <Link to="/">
                    <button className={styles.buttonMobile}>Home</button>
                </Link>
                <Link to="/Pokedex">
                    <button className={styles.buttonMobile}>Pokédex</button>
                </Link>
                <Link to="/Legendaries">
                    <button className={styles.buttonMobile}>Legendaries</button>
                </Link>
                <a href='https://pokeapi.co/'>
                    <button className={styles.buttonMobile}>Documentation</button>
                </a>
            </section>
        </header>
    );
};


import { useEffect, useRef, useState } from 'react';
import Logo from '../../assets/Logo.svg'
import BotaoHamburger from '../../assets/BotaoHamburger.svg'
import styles from "./index.module.css"
import { HeaderMobile } from '../HeaderMobile';
import { Link } from 'react-router-dom';

export const Header = () => {


    const [headerMobile, setHeaderMobile] = useState(false);
    const viewHeaderMobile = () => setHeaderMobile(!headerMobile);
    const menuBlock = useRef<HTMLInputElement | null>(null);


    useEffect(() => {
        const controle = (e: any) => {
            if (!menuBlock.current?.contains(e.target)) {
                setHeaderMobile(false);
            }
        }
        document.addEventListener("mousedown", controle)
        return () => {
            document.removeEventListener("mousedown", controle);
        }
    });


    return (
        <header className={styles.header} ref={menuBlock}>
            <Link to="/"><img className={styles.imgLogo} src={Logo} alt="Logo do Pokedex" /></Link>


            <img
                onClick={viewHeaderMobile}
                className={styles.isHidden}
                src={BotaoHamburger}
                alt="Botão hamburger mobile"
            />
            {headerMobile && <HeaderMobile />}
            <section className={styles.section_buttons}>
                <Link className={styles.tamanhoLink} to="/">
                    <button className={styles.button}>Home</button>
                </Link>
                <a>
                    <button className={styles.button}>Pokédex</button>
                </a>
                <a>
                    <button className={styles.button}>Legendaries</button>
                </a>
                <a href='https://pokeapi.co/'>
                    <button className={styles.button}>Documentation</button>
                </a>
            </section>
        </header>
    )
}

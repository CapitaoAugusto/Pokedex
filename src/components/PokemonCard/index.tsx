
import { useEffect, useState } from "react"
import { Header } from "../Header"
import styles from "./index.module.css"
import { api } from "../../configs/api"



type PokemonType = {
    type: Array<{
        name: string
    }>
}

type Pokemon = {
    name: string
    url: string
    id: number
    types: PokemonType[]
    image: string
    attack: number
    defense: number
}

type Request = {
    id: number;
    types: PokemonType[]
    image: string
    attack: number
    defense: number
}

export const PokemonCard = () => {

    const [quantidadePokemons, setQuantidadePokemons] = useState<number>(0);
    const [pokemons, setPokemons] = useState<Pokemon[]>([])

    useEffect(() => {//efeito colateral para retornar quantidade de pokemons
        async function buscarQuantidadePokemons() {
            const response = await api.get('https://pokeapi.co/api/v2/pokemon')
            console.log(response.data)//método para mostrar como os onjetos estão sendo retornados no console
            setQuantidadePokemons(response.data.count);
        }
        buscarQuantidadePokemons()
    }, [])

    useEffect(() => {//efeito colateral para buscar pokemons para serem colocados em cards
        async function buscarPokemons() {
            const response = await api.get('/pokemon/?limit=9')
            const { results } = response.data;
            const filtragemPokemons = await Promise.all(
                results.map(async (pokemon: Pokemon) => {
                    const { id,
                        types,
                        image,
                        attack,
                        defense
                    } = await informacoesPokemons(pokemon.url)
                    return {
                        name: pokemon.name,
                        id,
                        types,
                        image,
                        attack,
                        defense
                    }
                })
            )
            setPokemons(filtragemPokemons)
            console.log(filtragemPokemons)
        }
        buscarPokemons()
    }, [])
    async function informacoesPokemons(url: string): Promise<Request> {
        const response = await api.get(url)
        const { id, types } = response.data;
        return {
            id, types, image: response.data.sprites.other.home.front_default, attack: response.data.stats[1].base_start, defense: response.data.stats[2].base_start
        }
    }



    return (
        <section>
            <Header />
            <section className={styles.sectionPokedex}>
                <h1 className={styles.textCountPokemons}>
                    {quantidadePokemons}<span className={styles.pokemonText}> Pokemons</span> for you to choose your favorite
                </h1>
            </section>
            <section className={styles.sectionCardsPokemons}>
                {pokemons.map((pokemon) => (
                    <article className={styles.containerCard}>
                        <article className={styles.articleCard}>
                            <article className={styles.cardName}>
                                <h1>{pokemon.name}</h1>
                            </article>
                            <article className={styles.cardDivs}>
                                <div className={styles.cardAtributeValue}>
                                    {pokemon.attack}
                                </div>
                                <div className={styles.cardAtributeValue}>
                                    {pokemon.defense}
                                </div>
                            </article>
                            <article className={styles.cardAtribute}>
                                <p>Attack</p>
                                <p>Defense</p>
                            </article>
                            <article className={styles.cardType}>
                                <div className={styles.atributo}>
                                    {pokemon.types.map((element: any) =>
                                        <p className={styles.atributo02}>
                                            {element.type.name}</p>)}
                                </div>
                            </article>
                        </article>
                        <article className={styles.conteinerCardRight}>
                            <img src={pokemon.image} className={styles.conteinerCardImg} />
                        </article>
                    </article>
                ))}
            </section>
        </section>
    )
}


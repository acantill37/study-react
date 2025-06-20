import { useEffect, useState } from "react";
import './App.css';

const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'

export function App() {

    const [fact, setFact] = useState();
    const [imageUrl, setImageUrl] = useState();

    //siempre una funcion + concatenacion de promesas
    useEffect(() => {
        fetch(CAT_ENDPOINT_RANDOM_FACT)
            .then(res => {
                if (!res.ok)
                    throw new Error('Error al obtener el dato')
                return res.json()
            })
            .then(data => {
                const { fact } = data;
                setFact(fact)
            })
    }, [])


    useEffect(() => {
        if (!fact) return

        const firstThreeWords = fact.split(' ', 3).join(' ');
        console.log(firstThreeWords);

             fetch(`https://cataas.com/cat/says/${firstThreeWords}hello?size=50&
             color=red&json=true`)
                 .then(res => res.json())
                 .then(response => {
                     const { url } = response;
                     setImageUrl(url);
                 })
           }, [fact])

    return (
        <main>
            <h1>App de gatitos</h1>
            {fact && <p>{fact}</p>}
            <section>
            {imageUrl && <img src={imageUrl} alt={`Image extracted using the first three words for ${fact}`} />}
            </section>
        </main>
    );
}
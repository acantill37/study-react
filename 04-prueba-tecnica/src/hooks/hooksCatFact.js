import { useEffect, useState } from "react";
import { getRandomFact } from "../services/facts";

export function useCatFact (){
    const [fact, setFact] = useState();

    const refreshFact = () => {
        getRandomFact().then(newFact => setFact(newFact))
    }

    //siempre una funcion + concatenacion de promesas
    useEffect(refreshFact, [])
    return { fact, refreshFact };
}
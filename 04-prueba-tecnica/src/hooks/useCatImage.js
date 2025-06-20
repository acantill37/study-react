// Custom hook to fetch a cat image based on the fact
// extensible

import { useEffect, useState } from "react";
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage({ fact }) {
    const [imageUrl, setImageUrl] = useState();

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

    return { imageUrl: imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `${CAT_PREFIX_IMAGE_URL}${imageUrl}`) : undefined }

}
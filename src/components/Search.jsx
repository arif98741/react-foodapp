import React, { useEffect, useState } from 'react'

const URL = 'https://api.spoonacular.com/recipes/complexSearch';
const API_KEY = '';


export const Search = () => {

    const [query, setQuery] = useState("pizza")

    useEffect(() => {

        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json();
            console.log(data.results);
        }

        fetchFood()

    }, [query]); //syntax of useEffect hook

    return (
        <div>
            <input type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
        </div>
    )
}

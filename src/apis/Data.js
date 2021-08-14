import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Results from './Results';

const url = 'https://api.themoviedb.org/3/search/movie';

const Data = ({ term }) => {
    const [results, setResults] = useState([]);

    console.log(term);

    const renderResult = async () => {
        try {
            const { data } = await axios.get(url, {
                params: {
                    api_key: '6c4746b4c191956466d4666516f5c50e',
                    query: term
                }
            });
            setResults(data.results);
            // console.log(term);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        //     const timeoutId = setTimeout(() => {
        //         if (term) {
        renderResult();
        //     }
        // }, 2000);
        // return () => {
        //     clearTimeout(timeoutId);
        // }
    }, []);

    return (
        <div>
            <Results
                results={results}
            />
        </div>
    );
};

export default Data


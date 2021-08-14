import React, { useState, useEffect } from 'react';
import './Results.css';

const Results = ({ results }) => {


    console.log(results);

    return (
        <div className="results">
            {results.map((result) => (
                <div key={result.id} className="ui container grid">
                    <div className="ui row">
                        <div className="column seven wide">

                            <img alt="cover icon " src={"https://image.tmdb.org/t/p/w500" + result.poster_path} />

                        </div>

                        <div className="column nine wide">
                            <div className="header">
                                <h2>{result.title}</h2>
                            </div>
                            <div className="release">
                                <p>{result.release_date}</p>

                            </div>
                            <div className="rating" >
                                <i className="star icon" style={{ color: 'yellow' }}></i>
                                <p>{result.vote_average}</p>
                            </div>
                            <div className="review">
                                <p>{result.vote_count}</p>
                                <p>reviews</p>
                            </div>

                            <div className="overview">
                                {result.overview}
                            </div>

                            <div className="popularity">
                                <p>Popularity :{result.popularity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
            }

        </div>
    );
};


export default Results

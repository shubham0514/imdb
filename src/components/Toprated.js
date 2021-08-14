import React, { useState, useEffect } from 'react';
import axios from 'axios';

const url = 'https://api.themoviedb.org/3/movie/top_rated';

function Toprated() {
    const [items, setItems] = useState([])

    useEffect(() => {
        const renderList = async () => {
            const { data } = await axios.get(url, {
                params: {
                    api_key: '6c4746b4c191956466d4666516f5c50e'
                }
            })
            setItems(data.results);
        }
        renderList();
    }, []);

    const result = items.map((item) => {
        return (
            <div key={item.id} className="popular">
                <div className="ui row" style={{ flexDirection: 'column' }}>
                    <div className="popularity">
                        <p>Popularity :{item.popularity}</p>
                    </div>
                    <div className="column">
                        {/* <a href={}> */}
                        <img src={"https://image.tmdb.org/t/p/w500" + item.poster_path} />
                        {/* </a> */}
                    </div>
                    <div className="below">
                        {/* <div className="column three wide"> */}
                        <div className="header">
                            <h2>{item.title}</h2>
                        </div>
                        <div className="release">
                            <p>{item.release_date}</p>

                        </div>
                        <div className="rating" >
                            <i className="star icon" style={{ color: 'yellow' }}></i>
                            <p>{item.vote_average}</p>
                        </div>
                        <div className="review">
                            <p>{item.vote_count}</p>
                            <p>reviews</p>
                        </div>

                    </div>
                </div>
            </div>
        )
    })

    return (

        <div className="ui container grid">
            <h3 style={{ color: 'antiquewhite' }}>Top Rated Movies</h3>
            <br />
            <div className='column three wide' style={{ display: 'flex', justifyContent: 'space-between' }}>
                {result}
            </div>

        </div>


    );
}

export default Toprated

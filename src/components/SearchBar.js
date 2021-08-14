import React, { useState } from "react";
import Data from '../apis/Data';

const SearchBar = ({ onSearchSubmit }) => {
    const [term, setTerm] = useState('');
    // const onInputChange = (event) => {
    //     setTerm(event.target.value);
    // };

    const onSubmit = (e) => {
        e.preventDefault();
        onSearchSubmit(term);
    };
    return (
        <div className="search-bar ui segment" style={{ background: '#644cad' }}>
            <form onSubmit={onSubmit} className="ui form">
                <div className="field">
                    <div className="ui left icon input" >
                        <i className="search icon" style={{ color: 'white' }}></i>
                        <input
                            style={{ background: '#644caa' }}
                            type="text"
                            value={term}
                            onChange={(e) => setTerm(e.target.value)}
                            placeholder='Search'
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};
export default SearchBar;


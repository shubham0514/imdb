import React, { useState } from 'react'
import SearchBar from './SearchBar'
import Body from './Body'
import './App.css'
import Data from '../apis/Data'


function App() {
    const [items, setItems] = useState('')

    const onSearchSubmit = (term) => {
        console.log(term);
        console.log(items);
        setItems(term);
    }

    return (
        <div className="App" style={{ backgroundColor: 'darkred', opacity: '0.6', paddingBottom: '2.5em' }}>
            <div className="ui container" style={{ paddingTop: '4em' }}>

                <SearchBar onSearchSubmit={onSearchSubmit} />
                <Body items={items} />

            </div >
        </div >
    )
}

export default App

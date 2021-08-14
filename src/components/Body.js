import React from 'react'
import SearchHistory from './SearchHistory'
import OnDisplayKeys from './OnDisplayKeys'
import NumericKey from './NumericKey'
import Data from '../apis/Data'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Toprated from './Toprated'
import './Body.css'
import Results from '../apis/Results'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { IconButton } from '@material-ui/core'
function Body({ items }) {
    console.log(items)
    return (
        <Router>
            <div className="body" style={{ paddingBottom: '15.1em' }}>
                <div className="ui container grid">
                    <div className="ui row">
                        <div className="column one wide">

                            <Link to="/">
                                <div className="button" style={{ padding: '5px' }}>
                                    {/* <ArrowBackIcon fontSize='large' style={{ color: 'antiquewhite' }} /> */}
                                    <i class="left arrow icon" style={{ fontSize: '1.5em', color: '#F3AD0B', height: '22px', opacity: '0.8' }}></i>
                                </div></Link>
                        </div>

                        <Route exact path="/">
                            <div className="column seven wide">
                                <SearchHistory term={items} />
                            </div>
                        </Route>

                        <div className="column eight wide" >
                            <Route exact path='/'>
                                <OnDisplayKeys />
                            </Route>
                            <Route exact path='/NumericKey'>
                                <NumericKey />
                            </Route>
                            <Route path='/data'>
                                <Data term={items} />
                            </Route>
                        </div>
                    </div>
                </div>
            </div>
        </Router>
    )
}

export default Body

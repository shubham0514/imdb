import React, { useState } from 'react'
import { IconButton } from '@material-ui/core'
import ReplyIcon from '@material-ui/icons/Reply';
import Button from '@material-ui/core/Button';

function SearchHistory({ term }) {
    const [history, setHistory] = useState(term);
    return (
        <div className="history" style={{ height: 'auto', width: 'auto', margin: '2em 0em', paddingRight: '8em', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h3 style={{ color: '#F3AD0B' }}>Recent Search History</h3>

            <div className='items' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Button variant="contained" style={{ backgroundColor: 'rgba(240,240,240,0.3)', borderRadius: '20px' }}>
                    <p style={{ color: 'antiquewhite', fontStyle: 'italic', fontSize: '1.2em' }}>
                        <ReplyIcon style={{ marginRight: '1em' }} />{term}</p>
                </Button>
                <br />



            </div>
        </div>
    )
}

export default SearchHistory

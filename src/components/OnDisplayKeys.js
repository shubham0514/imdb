import React from 'react'
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Link, NavLink } from 'react-router-dom';
import { yellow } from '@material-ui/core/colors'
import './keyboard.css';

function OnDisplayKeys() {
    return (
        <div className="keys">
            <div className="keyboard-row">
                <span className="key"><button>A</button></span>
                <span className="key"><button>B</button></span>
                <span className="key"><button>C</button></span>
                <span className="key"><button>D</button></span>
                <span className="key"><button>E</button></span>
                <span className="key"><button>F</button></span>
                <span className="key"><button>G</button></span>
                <span className="Iconkeys"><button><BackspaceIcon style={{ color: yellow[700] }} /></button></span>
            </div>

            <div className="keyboard-row">
                <span className="key"><button>H</button></span>
                <span className="key"><button>I</button></span>
                <span className="key"><button>J</button></span>
                <span className="key"><button>K</button></span>
                <span className="key"><button>L</button></span>
                <span className="key"><button>M</button></span>
                <span className="key"><button>N</button></span>
                <Link to='/NumericKey'>
                    <span className="Iconkeys"><button style={{ color: yellow[700] }}>123</button></span>
                </Link>
            </div>

            <div className="keyboard-row">
                <span className="key"><button>O</button></span>
                <span className="key"><button>P</button></span>
                <span className="key"><button>Q</button></span>
                <span className="key"><button>R</button></span>
                <span className="key"><button>S</button></span>
                <span className="key"><button>T</button></span>
                <span className="key"><button>U</button></span>
            </div>

            <div className="keyboard-row">
                <span className="key"><button>V</button></span>
                <span className="key"><button>W</button></span>
                <span className="key"><button>X</button></span>
                <span className="key"><button>Y</button></span>
                <span className="key"><button>Z</button></span>
                <span className="key"><button>-</button></span>
                <span className="key"><button>'</button></span>
            </div>

            <div className="keyboard-buttons">
                <button className="Space">SPACE</button>
                <button className="Clear">Clear</button>
                <button className="Submit" >
                    <NavLink to="/data"> Submit</NavLink>
                </button>


            </div>

        </div >
    )
}

export default OnDisplayKeys

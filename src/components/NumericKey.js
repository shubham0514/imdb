import React from 'react'
import BackspaceIcon from '@material-ui/icons/Backspace';
import { Link } from 'react-router-dom';
import { yellow } from '@material-ui/core/colors'
import './keyboard.css'
function NumericKey() {
    return (
        <div className="Key">
            <div className="keyboard-row">
                <span className="key"><button>1</button></span>
                <span className="key"><button>2</button></span>
                <span className="key"><button>3</button></span>
                <span className="key"><button> & </button></span>
                <span className="key"><button> # </button></span>
                <span className="key"><button> ( </button></span>
                <span className="key"><button> ) </button></span>
                <span className="Ic"><button><BackspaceIcon style={{ color: yellow[700], marginTop: '3px' }} /></button></span>
            </div>
            <div className="Keyboard-row">
                <span className="key"><button>4</button></span>
                <span className="key"><button>5</button></span>
                <span className="key"><button>6</button></span>
                <span className="key"><button> @ </button></span>
                <span className="key"><button> ! </button></span>
                <span className="key"><button> ? </button></span>
                <span className="key"><button> : </button></span>

                <Link to='/'>
                    <span className="Iconkeys"><button style={{ color: yellow[700], justifyContent: 'center', alignItems: 'center' }}>&ABC</button></span>
                </Link>
            </div>
            <div className="keyboard-row">
                <span className="key"><button>7</button></span>
                <span className="key"><button>8</button></span>
                <span className="key"><button>9</button></span>
                <span className="key"><button>0</button></span>
                <span className="key"><button> . </button></span>
                <span className="key"><button> _ </button></span>
                <span className="key"><button> " </button></span>
            </div>
            <div className="keyboard-buttons">
                <button className="Space">SPACE</button>
                <button className="Clear" >Clear</button>

                <button className="Submit">
                    <Link to="/data">
                        Submit
                </Link>
                </button>

            </div>
        </div>
    )
}

export default NumericKey

import React from 'react';
import {Link} from 'react-router-dom';

function Header(){

    return(
        <header style = {sty}>
          <h1>Todos</h1>
          <Link to = "/" style ={{color : "#fff"}} >Home</Link> | <Link to ="/about" style ={{color : "#fff"}}>About</Link>
        </header>
    )
}

const sty = {

    textAlign : "center",
    background : "#333",
    color : "#fff",
    padding : "10px"

}

export default Header;
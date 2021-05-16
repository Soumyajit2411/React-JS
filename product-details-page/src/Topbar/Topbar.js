import React from 'react';
import amazon from './amazon.png';
import classes from './Topbar.module.css';

const Topbar=(props)=>{
    return(
        <header className="App-header">
            <nav className={classes.Topbar}>
            <img src={amazon} className="App-logo" alt="logo" />
            </nav>
        </header>
    );
}

export default Topbar;
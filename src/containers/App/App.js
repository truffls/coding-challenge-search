import React from 'react';

import Search from '../Search';

import './App.styles.css';

function App() {
    return (
        <div className="App">
            <header className="App__header">
                <h1 className="App__title">
                    Awesome search app
                </h1>
            </header>
            <Search />
        </div>
    );
}

export default App;

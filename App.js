import React from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import Row from './components/Row';
import requests from './api/requests';
import './App.css';

function App() {
    return (
        <div className="App">
            <Header />
            <Banner />
            <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        </div>
    );
}

export default App;

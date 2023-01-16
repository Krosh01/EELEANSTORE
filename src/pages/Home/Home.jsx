import React from 'react';
import Begin from "./Begin/Begin";
import Collection from "./Collection/Collection";
import About from "./About";
import Obrende from './Obrende/Obrende';

const Home = () => {
    return (
        <main>
            <Begin/>
            <Collection/>
            <Obrende/>
            <About/>
        </main>
    );
};
export default Home;
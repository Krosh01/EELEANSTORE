import React from 'react';
import Begin from './Begin/Begin'
import Collection from "./Collection/Collection";
import Obrende from './Obrende/Obrende';
import Primerka from './Primerka/Primerka';
import Shouroom from './Shouroom/Shouroom';
import Star from './Star/Star'
import Otziv from './Otziv/Otziv'
import Instagram from './Instagram/Instagram';
import { Navigate } from 'react-router-dom';

const Home = () => {

    return (
        <main>
            <Begin />
            <Collection />
            <Obrende />
            <Shouroom />
            <Primerka />
            <Star />
            <Otziv />
            <Instagram />
        </main>
    )
};
export default Home;
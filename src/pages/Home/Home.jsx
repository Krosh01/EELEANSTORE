<<<<<<< HEAD
import { useAuth } from '../../hooks/use-auth';
import HomePage from './HomePage';

const Home = () => {

    const {isAuth,email}=useAuth()

    return (
        <>
        <HomePage/>
        </>
    )

=======
import React from 'react';
import Begin from './Begin/Begin'
import Collection from "./Collection/Collection";
import Obrende from './Obrende/Obrende';
import Primerka from './Primerka/Primerka';
import Shouroom from './Shouroom/Shouroom';
import Star from './Star/Star'
import Otziv from './Otziv/Otziv'
import Instagram from './Instagram/Instagram';

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
    );
>>>>>>> f5ab2dd537dff3fba8e82e28e3206311b22de528
};
export default Home;
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
<<<<<<< HEAD
    )
=======
    );
>>>>>>> f5ab2dd537dff3fba8e82e28e3206311b22de528
>>>>>>> 0e9c2a18320bd99c175a4d67bf8eb870ba28eeb5
};
export default Home;
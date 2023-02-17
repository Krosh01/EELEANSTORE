import axios from "axios";
import { createContext, useState } from "react";

export const CustomContext = createContext()


const Context = (props) => {
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState({ data: [], error: '' })
    const [favarion, setFavarion] = useState({ data: [], error: '' })
    const [basket, setBasket] = useState(false)
    const [activ, setActiv] = useState(false)
    const [price, setPrice] = useState(1)
    const [card, setCard] = useState()
    const [favorite, setFavorite] = useState([]);
    const [aidar, setAidar] = useState(false)
    const [aidar2, setAidar2] = useState(false)
    const [aidar3, setAidar3] = useState(false)
    const [aidar4, setAidar4] = useState(false)



    const changeCategory = (value) => {
        setCategory(value)
    }

    const getProducts = () => {
        axios(`http://localhost:3001/catalog/?category=${category}`)
            .then(({ data }) => setProducts({ ...products, data: data }))
            .catch((error) => setProducts({ ...products, error: error }))
    }

    const value = {
        aidar,
        aidar2,
        aidar3,
        aidar4,
        favorite,
        favarion,
        products,
        category,
        setAidar,
        setAidar2,
        setAidar3,
        setAidar4,
        getProducts,
        setProducts,
        setFavarion,
        changeCategory,
        setBasket,
        setActiv,
        setPrice,
        setFavorite,
        activ,
        basket,
        price,
        card,
        setCard
    }


    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context
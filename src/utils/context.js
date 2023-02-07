import axios from "axios";
import { createContext, useState } from "react";

export const CustomContext = createContext()


const Context = (props) => {
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState({ data: [], error: '' })
    const [basket, setBasket] = useState(false)
    const [activ, setActiv] = useState(false)
    const [price, setPrice] = useState(1)
    const [card, setCard] = useState()


    const changeCategory = (value) => {
        setCategory(value)
    }
    const getProducts = () => {
        axios(`http://localhost:3001/catalog/?category=${category}`)
            .then(({ data }) => setProducts({ ...products, data: data }))
            .catch((error) => setProducts({ ...products, error: error }))
    }

    const value = {
        products,
        category,
        getProducts,
        setProducts,
        changeCategory,
        setBasket,
        setActiv,
        setPrice,
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
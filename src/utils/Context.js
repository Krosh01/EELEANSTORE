

import axios from "axios";
import { createContext, useState } from "react";

export const CustomContext = createContext()

const Context = (props) => {
    const [category, setCategory] = useState('')
    const [products, setProducts] = useState({data: [], error: ''})


    const changeCategory = (value) => {
        setCategory(value)
    }
    const getProducts = ()=> {
        axios(`http://localhost:4444/catalog`)
        .then(({data}) => setProducts({...products, data: data}))
        .catch((error) => setProducts({...products, error: error}))
    }

    const value ={
        products,
        category,
        getProducts,
        setProducts,
        changeCategory
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context
// import axios from "axios";
import {createContext, useState} from "react";

export const CustomContext = createContext();


const Context = (props) => {

    const [gender,setGender] = useState('woman')
    const [category,setCategory] = useState('t-short')
    const [price, setPrice] = useState('')
    const [size, setSize] = useState()
    const [products, setProducts] = useState({
        data: [],
        error: ''
    })

    const changeGender = (value) => {
        setGender(value)
    }
    const changeCategory = (value) => {
        setCategory(value)
        setSize('')
    }

    // const getProducts = () => {
    //     axios(`http://localhost:4444/catalog?gender=${gender}&category=${category}${price !== '' ? '&_sort=price&_order=' + price : ''}`)
    //     .then(({data}) => setProducts({...products, data: data}))
    //     .catch((error) => setProducts({...products, error: error}) )
    // }

    const value = {
        products,
        gender,
        category,
        changeGender,
        changeCategory,
        // getProducts,
        price,
        setPrice,
        size,
        setSize
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
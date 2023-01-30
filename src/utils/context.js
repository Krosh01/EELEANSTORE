import {createContext, useState} from "react";

export const CustomContext = createContext();


const Context = (props) => {

    const[basket, setBasket] = useState(false)
    const[activ, setActiv] = useState(false)
    const[price, setPrice] = useState(1)

    const value = {
        setBasket,
        setActiv,
        setPrice,
        activ,
        basket,
        price
    }

    return <CustomContext.Provider value={value}>
        {props.children}
    </CustomContext.Provider>
}

export default Context;
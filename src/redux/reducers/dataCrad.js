const coin = {
    task: [
        {
            id: 1,
            title: 'Брюки клёш',
            size: 48,
            price: 20000,
            underPrice: 20000,
            count: 1,
            image: 'https://eleanboutique.ru/image/cache/catalog/novinki2022/osen22/06cad9e1-f89a-4c70-a345-87e97190428b-150x200.jpeg'
        },
        {
            id: 2,
            title: 'Брюки клёш',
            size: 50,
            price: 11000,
            underPrice: 11000,
            count: 1,
            image: 'https://eleanboutique.ru/image/cache/catalog/novinki2021/eleancyclo2702-150x200.jpg'
        },
        {
            id: 3,
            title: 'Брюки клёш',
            size: 50,
            price: 17800,
            underPrice: 17800,
            count: 1,
            image: 'https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean06130-150x200.jpg'
        },
        {
            id: 4,
            title: 'Брюки клёш',
            size: 49,
            price: 20900,
            underPrice: 20900,
            count: 1,
            image: 'https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean018301-150x200.jpg'
        }
    ]
}


export default (state = coin, action) => {
    switch (action.type) {
        case "DELETE": {
            return {
                ...state,
                task: state.task.filter(item => {
                    return item.id !== action.id
                })
            }
        }
        case "ADD_PRICE": {
            return {
                ...state,
                task: state.task.map((item) => {
                    if (item.id === action.id) {
                        item.price = item.price + item.underPrice
                        item.count = item.count + 1
                    }
                    return item
                }),
            }
        }
        case "MINUS_PRICE": {
            return {
                ...state,
                task: state.task.map((item) => {
                    if (item.id === action.id) {
                        item.price = item.price - item.underPrice
                        item.count = item.count - 1
                    } if (item.count < 1) {
                        item.price = item.price = item.underPrice
                        item.count = item.count = 1
                    }
                    return item
                }),
            }
        }
        default: return state
    }
}

export const deleteTask = (id) => {
    return (dispath) => {
        return dispath({ type: 'DELETE', id })
    }
}

export const addPrice = (id) => {
    return (dispath) => {
        return dispath({ type: 'ADD_PRICE', id })
    }
}

export const deletePrice = (id) => {
    return (dispath) => {
        return dispath({ type: 'MINUS_PRICE', id })
    }
}
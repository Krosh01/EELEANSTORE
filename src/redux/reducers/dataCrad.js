const coin = {
        task: [
            {
                id: 1,
                title: 'Брюки клёш',
                size: 48,
                price: '20 000₽',
                count:1,
                image: 'https://eleanboutique.ru/image/cache/catalog/novinki2022/osen22/06cad9e1-f89a-4c70-a345-87e97190428b-150x200.jpeg'
            },
            {
                id: 2,
                title: 'Брюки клёш',
                size: 50,
                price: '10 000₽',
                count:1,
                image: 'https://eleanboutique.ru/image/cache/catalog/novinki2022/osen22/06cad9e1-f89a-4c70-a345-87e97190428b-150x200.jpeg'
            },
            {
                id: 3,
                title: 'Брюки клёш',
                size: 90,
                price: '200₽',
                count:1,
                image: 'https://eleanboutique.ru/image/cache/catalog/novinki2022/osen22/06cad9e1-f89a-4c70-a345-87e97190428b-150x200.jpeg'
            },
            {
                id: 4,
                title: 'Брюки клёш',
                size: 100,
                price: '90 000₽',
                count:1,
                image: 'https://eleanboutique.ru/image/cache/catalog/novinki2022/obtravki/elean018301-150x200.jpg'
            }
        ],
        taskCount: 4
}


export default (state = coin, action) => {
    switch(action.type) {
        case "DELETE": {
            return {
                ...state,
                task: state.task.filter(item => {
                    return item.id !== action.id
                }),
                taskCount: state.taskCount - 1
            }
        }
        case "ADD_PRICE": {
            return {
                ...state,
                task: state.task.map(item => {
                if(item.id === action.id) {
                item.price = action.price
                }
                return item;
                }),
                taskCount: state.taskCount + 1
            }
            
        }
        default:return state
    }
}

export const deleteTask = (id) => {
    return (dispath) => {
        return dispath({type: 'DELETE', id})
    }
}

export const addPrice = (price,id,task) => {
    return (dispath) => {
        return dispath({type: 'ADD_PRICE', id,task, price: price * 2})
    }
}   
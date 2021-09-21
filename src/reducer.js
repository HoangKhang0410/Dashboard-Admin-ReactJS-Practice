
const reducer = (state, action) => {
    if (action.type === 'REMOVE_PERSON'){
        return {
            ...state,
            people: state.people.filter((person)=> person.id !== action.payload),
        }
    }

    if (action.type === 'REMOVE_PRODUCT'){
        return {
            ...state,
            products: state.products.filter((item)=> item.id !== action.payload),
        }
    }

    if (action.type === 'ADD_PERSON'){
        return {
            ...state,
            people: [...state.people, action.payload],
        }
    }

    if (action.type === 'ADD_PRODUCT'){
        return {
            ...state,
            products: [...state.products, action.payload],
        }
    }

    if (action.type === 'SET_PAGE_ACTIVE'){
        return {
            ...state,
            page: action.payload,
        }
    }

    if (action.type === 'UPDATE_PRODUCT'){
        return {
            ...state,
            products: state.products.map((item)=>{
                if (parseInt(item.id) === parseInt(action.payload.id)){
                    return action.payload.newProduct;
                }
                return item;
            })
        }
    }

    if (action.type === 'UPDATE_PERSON'){
        const {username, email, fullName, phone, address} = action.payload.newPerson;
        return {
            ...state,
            people: state.people.map((person)=>{
                if (parseInt(person.id) === parseInt(action.payload.id)){
                    return {...person, username, email, fullName, phone, address};
                }
                return person;
            })
        }
    }


    return state;
}

export default reducer;
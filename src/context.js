import React, {useCallback, useContext, useReducer, useEffect} from 'react'
import reducer from './reducer';
import {userRows, productRows} from './dummyData';

const AppContext = React.createContext();

const getPeopleLocalStorage = () => {
    let peopleStorage = localStorage.getItem('people');
    if (peopleStorage) {
        return JSON.parse(localStorage.getItem('people'));
    }
    return userRows;
}

const getProductLocalStorage = () => {
    let productStorage = localStorage.getItem('products');
    if (productStorage) {
        return JSON.parse(localStorage.getItem('products'));
    }
    return productRows;
}

let peopleData = getPeopleLocalStorage();
let productData = getProductLocalStorage();


const initialState = {
    products: productData,
    people: peopleData,
    page: 'home',
}

const AppProvider = ({children}) => {

    const [state, dispatch] = useReducer(reducer, initialState);

    const addPerson = (person) => {
        dispatch({type: 'ADD_PERSON', payload: person});
    }

    const removePerson = (id) => {
        dispatch({type: 'REMOVE_PERSON', payload: id});
    }

    const addProduct = (product) => {
        dispatch({type: 'ADD_PRODUCT', payload: product});
    }

    const removeProduct = (id) => {
        dispatch({type: 'REMOVE_PRODUCT', payload: id});
    }

    const currentPage = useCallback((page) => {
        dispatch({type: 'SET_PAGE_ACTIVE', payload: page})
    }, []);

    const updateProduct = (id, newProduct) => {
        dispatch({type: 'UPDATE_PRODUCT', payload: {id, newProduct}});
    }

    const updatePerson = (id, newPerson) => {
        dispatch({type: 'UPDATE_PERSON', payload: {id,newPerson}})
    }

    useEffect(()=>{
        const pageCurrent = localStorage.getItem('page');
        currentPage(pageCurrent);
      }, [currentPage])

    useEffect (()=>{
        localStorage.setItem('people', JSON.stringify(state.people))
    }, [state.people])

    useEffect (()=>{
        localStorage.setItem('products', JSON.stringify(state.products))
    }, [state.products])

    return (
        <AppContext.Provider
            value={{
                ...state,
                addPerson,
                removePerson,
                removeProduct,
                addProduct,
                currentPage,
                updateProduct,
                updatePerson,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

export {AppProvider, AppContext}
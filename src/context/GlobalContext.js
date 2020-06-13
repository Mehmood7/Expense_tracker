import React, {useReducer ,createContext} from 'react'
import {Reducer} from './Reducer'

const data = {
    trans : []
}

export const GContext = createContext();

export const GlobalContext = ({ children }) => {

    const [state, dispatch] = useReducer(Reducer, data);

    const addTran = tran =>{
        console.log("gcontext add trans");
        console.log(tran);
        dispatch(
            {
                type: 'add',
                pload : tran
            }
        )
    }

    
    const delTran = id =>{
        dispatch(
            {
                type : 'del',
                pload : id
            }
        )
    }


    return (
        <GContext.Provider value={{
            trans : state.trans,
            addTran,
            delTran,
         }}>
            {children}
        </GContext.Provider>
    )
}

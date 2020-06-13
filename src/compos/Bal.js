import React, {useContext} from 'react'
import {GContext} from '../context/GlobalContext'

export const Bal = () => {
    const {trans} = useContext(GContext)
    const amounts = trans.map(tr=>tr.amount)
    const bal = amounts.reduce((tot,tra)=>(tot+tra),0)

    return (
            <h3>Your Balance:  ${bal} </h3>
    )
}

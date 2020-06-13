import React, {useContext} from 'react'
import {GContext} from '../context/GlobalContext'
import '../index.css'

export const IncExp = () => {
    const {trans} = useContext(GContext)
    const amounts = trans.map(tr=>tr.amount)
    const profits = amounts.filter(am=>am>0)
    const expenses = amounts.filter(am=>am<0)
    const profit = profits.reduce((tot,am)=>(tot+am),0)
    const expense = expenses.reduce((tot,am)=>(tot+am),0)

    return (
        <div>
            <div>
                <h3>Your Income</h3>
    <p className = "pos"> ${profit}</p>
            </div>
            <div>
                <h3>Your Expense</h3>
    <p className = "neg">-${expense*-1}</p>
            </div>
        </div>
    )
}

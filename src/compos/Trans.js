import React, {useContext} from 'react'
import '../index.css'
import {GContext} from '../context/GlobalContext'

export const Trans = ({transaction}) => {
    const {delTran} = useContext(GContext)
    const del = ()=>{
        console.log(` Trans deleted `);
        delTran(transaction.id)
    }
    return (
        <li className = "Li">
            <button className="crosbtn" onClick = {del}>X</button>
            <span className= "transtext"  >{transaction.text}</span>
            <span className= {`transtext ${transaction.amount>0? "pos":"neg"}`}> ${transaction.amount}</span>
            {console.log(transaction)}
        </li>
    )
}

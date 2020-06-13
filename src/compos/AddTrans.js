import React, {useContext, useState} from 'react'
import {GContext} from '../context/GlobalContext'


export const AddTrans = () => {
    const [amount , setAmount] = useState(0)
    const [text , setText] = useState("")
    

    const {addTran} = useContext(GContext)
    const submt = e =>{
        e.preventDefault();
        console.log("Action");
        console.log(text);
        console.log(amount);
        addTran({
            tran:{
                id: Math.floor(Math.random() * 100000000),
                amount: +amount,
                text
            }
        })
        setAmount(0)
        setText("")

    }


    return (
        <form onSubmit = { submt } >
            <label>Enter text (detail)</label><br/>
            <input onChange = {e =>
                {
                    setText(e.target.value)
                }
                } type="text" value={text}></input><br/><br/>
            <label>Enter amount<br/> (negative for expense, postive for income)</label><br/>
            <input onChange = {e =>
                {
                    setAmount(e.target.value)
                }
             } type="number" value= {amount}></input><br/><br/>
            <button>Submit</button>
        </form>
    )
}

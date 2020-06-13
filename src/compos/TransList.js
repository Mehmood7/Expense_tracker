import React, {useContext} from 'react'
import {GContext} from '../context/GlobalContext'
import {Trans} from './Trans'
import '../index.css'
import { Title } from './Title'


export const TransList = () => {
    const {trans} = useContext(GContext)

    return (
        <div className="list">
            <ul>
                <Title text = "Transaction history"/>
                
                {console.log("populating tran list")}
                    {console.log(trans)}
                
                {trans.map(tran =>
                    <Trans key={tran.id} transaction= {tran}
                    /> 
                )}
            </ul>
        </div>
    )
}

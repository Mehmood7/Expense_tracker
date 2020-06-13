import React from 'react';
import './index.css';
import {Title} from './compos/Title'
import {Bal} from './compos/Bal'
import {IncExp} from './compos/IncExp'
import {TransList} from './compos/TransList'
import {AddTrans} from './compos/AddTrans'
import { GlobalContext } from './context/GlobalContext';

function App() {
  return (
    <div className= "wrapper">
      <GlobalContext>
        <Title text = "Expense tracker app"> Hi</Title>
        <Bal/>
        <IncExp/>
        <TransList/>
        <AddTrans/>
      </GlobalContext>
    </div>
  );
}

export default App;

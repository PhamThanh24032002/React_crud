import logo from './logo.svg';
import './App.css';
import {Counter,Counter2} from './Compoments/Counter';
import Todolist from './Compoments/Todolist';
//----------------------------------------------------------------
import { useState } from 'react';
function App() {
  const [appData,setAppdata] = useState('data parent');

  return (
    <div className="AppName">
      <Todolist />
      {/* khi todolist chayj se gom nhom lai kieu
      
        {
          parentTochild:'data parent',
        }
      */}

    {/* <Counter/> */}
    {/* <Counter2/> */}
        <a
          className="App-links"
          href="https://vuejs.org"
          target="_blank"
          rel="noopener noreferrer"

        >
          {/* Phạm Quốc Thành */}
        </a>
    </div>
  );
}

export default App;

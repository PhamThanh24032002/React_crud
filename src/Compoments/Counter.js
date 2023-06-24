import React, { useState } from 'react';
function Counter() {
    const [counter, setCounter] = useState(0)
    console.log(Counter, setCounter);
    function handleTang() {
        setCounter(counter + 100)
    }
    function handleGiam() {
        setCounter(counter - 100)
    }
    return (
        <React.Fragment>
            <h1>Counte : {counter}</h1>
            <button onClick={handleTang} >Tăng</button>
            <button onClick={handleGiam}>Giảm</button>
        </React.Fragment>
    )
}

function Counter2() {
    return (
        <h1>s</h1>
    )
}
export { Counter, Counter2 };
"use client";
import React from 'react';
const Counter = () => {
    let [count, setCount] = React.useState(0);
    console.log(count)
    return (
        <div>
            <button onClick={() => setCount(count + 1)} style={{ cursor: "pointer" }}>clicked {count} times.</button>
        </div>
    );
}

export default Counter;

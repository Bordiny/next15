"use client";
import React from 'react';
import { useRouter } from 'next/navigation';
const Counter = () => {
    let [count, setCount] = React.useState(0);
    const router = useRouter();
    const handler = () => {
        alert("Button clicked");
        router.push("/products/1");
    };
    return (
        <div className='flex flex-col'>
            <button onClick={() => setCount(count + 1)} style={{ cursor: "pointer" }}>clicked {count} times.</button>
            <button className='bg-blue-500 text-white p-2 rounded-md cursor-pointer mt-2' onClick={handler}>
                Click Me
            </button>
        </div>
    );
}

export default Counter;


import React from 'react';

const Page = async ({ params }) => {
    console.log(await params)
    let { id } = await params;
    console.log("id", id);
    const handler = () => {
        console.log("Button clicked");
    };
    return (
        <div className='p-20'>
            <h1>products id : {id} </h1>

        </div>
    );
}

export default Page;

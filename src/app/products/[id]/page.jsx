import React from 'react';

const Page = async ({ params }) => {
    console.log(await params)
    let { id } = await params;
    console.log("id", id);
    return (
        <div className='p-20'>
            <h1>products id : {id} </h1>
        </div>
    );
}

export default Page;

import React from 'react';

const Layout = ({ children }) => {
    console.log(children)
    console.log("auth layout")
    return (
        <div className='p-20'>
            <h1>
                Navbar
            </h1>
            {children}
        </div>
    );
}

export default Layout;

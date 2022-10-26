import React from 'react';
import warning from '../Images/shocked.png';

const Error = () => {
    return (
        <div>
            <div className='my-16 text-center'>
                <img className='mx-auto' style={{height:'200px', width:'200px'}} src={warning} alt="Images Not Fond..." />
                <h1 className='text-6xl font-semibold'>404</h1>
                <p>Something went wrong...</p>
            </div>
        </div>
    );
};

export default Error;
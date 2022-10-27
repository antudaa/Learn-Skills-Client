import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
    return (
        <div className='my-10 text-center'>
            <h1 className='text-4xl text-sky-400 my-8'>This Are Our Terms & Conditions ...</h1>
            <span className='text-xl text-sky-400 my-8'>Return to <Link className='btn btn-primary' to="/signup">Register</Link></span>
        </div>
    );
};

export default TermsConditions;
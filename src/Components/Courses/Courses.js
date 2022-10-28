import React, { useState } from 'react';
import { useEffect } from 'react';

const Courses = () => {

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCatagories(data));
    }, [])


    return (
        <div>
            <h1 className='text-sky-400 my-8 text-2xl text-center'>All Our Courses </h1>
            <div className='grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-4 '>
                {
                    catagories.map(course => (
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img style={{ width: '250px', height: '200px' }} src={course.image_url} alt="Shoes" className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center ">
                                <h2 className="card-title text-center text-2xl text-emerald-500">{course.title}</h2>
                                <h4 className='text-xl text-teal-600'>Description</h4>
                                <p className='text-justify'>{course.details}</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">purchase Course</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default Courses;
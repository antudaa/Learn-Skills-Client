import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Course = () => {

    const courseItems = useLoaderData();

    return (
        <div className='flex flex-wrap justify-center align-center gap-6'>
            {
                courseItems.map(course => (
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
    );
};

export default Course;
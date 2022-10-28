import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Home = () => {

    const allCourse = useLoaderData();

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCatagories(data));
    }, [])

    return (
        <div className='flex flex-col md:flex-row lg:flex-row px-6 my-16'>
            <aside className='text-center w-20%'>
                <h1 className='text-sky-400 my-8 text-2xl '>Our Courses Catagories</h1>
                {
                    catagories.map(course => <div className='my-2 text-xl text-teal-500'><Link to={`/course/${course.id}`} key={course.id} course={course}>{course.name}</Link></div>)
                }

            </aside>
            <aside style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h1 className='text-sky-400 my-8 text-2xl text-center'>All Our Courses </h1>
                <div className='flex flex-wrap justify-center align-center gap-6'>
                    {
                        allCourse.map(course => (
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img style={{ width: '250px', height: '200px' }} src={course?.image_url} alt="Shoes" className="rounded-xl" />
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
            </aside>
        </div>
    );
};

export default Home;
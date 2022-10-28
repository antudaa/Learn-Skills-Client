import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Courses = () => {

    const [Courses, setCourses] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course')
            .then(res => res.json())
            .then(data => setCourses(data));
    }, [])

    const [catagories, setCatagories] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-category')
            .then(res => res.json())
            .then(data => setCatagories(data));
    }, [])


    return (
        <div className='flex flex-wrap flex-col md:flex-row lg:flex-row px-6 my-16'>
            <aside style={{height : '370px'}} className='text-center w-20% bg-emerald-500 p-6 rounded-xl lg:fixed'>
                {/* <div className=" my-10 ">
                    <Link className="btn btn-success">Get Premium Access</Link>
                </div> */}
                <h1 className=' my-8 text-2xl text-zinc-700'>Our Courses Catagories</h1>
                {
                    catagories.map(course => <div className='my-2 text-xl text-zinc-700 justify-start'><Link to={`/course/${course.id}`} key={course.id} course={course}>{course.name}</Link></div>)
                }

            </aside>

            <aside style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto' }}>
                <h1 className='text-sky-400 my-8 text-2xl text-center'>All Our Courses </h1>
                <div className='flex flex-wrap justify-center align-center gap-6'>
                    {
                        Courses.map(course => (
                            <div className="card w-96 bg-base-100 shadow-xl">
                                <figure className="px-10 pt-10">
                                    <img style={{ width: '250px', height: '200px' }} src={course.image_url} alt="Shoes" className="rounded-xl" />
                                </figure>
                                <div className="card-body items-center ">
                                    <h2 className="card-title text-center text-2xl text-emerald-500">{course.title} Course</h2>
                                    {/* <h4 className='text-xl text-teal-600'>Description</h4> */}
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

export default Courses;
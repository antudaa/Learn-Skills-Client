import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Course = () => {

    const courseItems = useLoaderData();
    console.log(courseItems);

    return (
        <div>
            <div className='text-4xl text-sky-400 text-center my-8'>
                <h1>Hear Are The Related Courses{courseItems.course_title}</h1>
            </div>
            <div className='flex flex-wrap justify-center align-center gap-6 my-16'>
            {
                courseItems.map(course => (
                    <div className="card card-compact w-96 bg-base-100 shadow-xl">
                        <figure><img src={course.image_url} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{course.title}</h2>
                            <p>Price : ${course.course_price}</p>
                            <div className='flex justify-between align-center'>
                            <div className="card-actions justify-start">
                                <Link to={`/courses/${course.id}`} key={course.id} course={course} className="btn btn-success">Get Premium Access</Link>
                            </div>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Purchase</button>
                            </div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
        </div>
    );
};

export default Course;
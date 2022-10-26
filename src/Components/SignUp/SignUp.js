import React from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle , FaGithub } from 'react-icons/fa';
import './SignUp.css'


const SignUp = () => {
    return (
        <div className='py-10'>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6 text-center">Welcome .Please Sign Up ...</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        {/* Sign Up Form ... */}
                        <form  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Sign Up</button>
                            </div>
                            <div  className='cursor-pointer'>
                                <p>Sign Up With...</p>
                                <div className='google-signup rounded mt-4 text-xl bg-teal-500 -300 text-center text-white p-3'>
                                    <FaGoogle className='mr-4 color-orange'/>
                                    Google
                                </div>
                                <div className='google-signup my-4 rounded text-xl bg-teal-500 -300 text-center text-white p-3'>
                                    <FaGithub className='mr-4'/>
                                    Github
                                </div>
                            </div>
                            <div>
                                <p>Already have an account ?</p>
                                <div className="form-control mt-6">
                                    <Link to='/login' className="btn btn-success">Login</Link>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import React, { useState } from 'react';
import { useContext } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const Login = () => {

    const [error , setError] = useState('');

    const { signIn , signInWithGoogle , githubSignUp } = useContext(AuthContext);

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();

    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const handleGithubSignUp = () =>{
        githubSignUp(gitProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error("Error ", error);
        })
    };

    const handleGoogleSignIn = () => {
        signInWithGoogle(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
        .then((result) => {
            const user = result.user;
            console.log("User Exist",user);
            form.reset();
            setError('');
            navigate(from , {replace : true});
        })
        .catch((error) => {
            console.error("User Not Exist",error);
            setError(error.message);
        })
    }

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Login now!</h1>
                        <p className="py-6 text-center">Welcome .Please Login ...</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        {/* Login Form  */}
                        <form onSubmit={handleLogin} className="card-body">
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
                                <label className="label">
                                    <a href="/forgot_pass" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn btn-primary">Login</button>
                            </div>
                            <div className='cursor-pointer text-center mt-4'>
                                <p>Continue With</p>
                                <div onClick={handleGoogleSignIn} className='google-signup rounded-2xl mt-4 text-xl bg-teal-500 -300 text-center text-white p-3'>
                                    <FaGoogle className='mr-4 color-orange' />
                                    Google
                                </div>
                                <div onClick={handleGithubSignUp} className='google-signup my-4 rounded-2xl text-xl bg-teal-500 -300 text-center text-white p-3'>
                                    <FaGithub className='mr-4' />
                                    Github
                                </div>
                            </div>
                            <div className='text-center'>
                                <p>New to this Site...</p>
                                <div className="form-control mt-6">
                                    <Link to='/signup' className="btn btn-success">Sign Up</Link>
                                </div>
                            </div>
                            <div>
                                <p className='text-rose-500	'>{error}</p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
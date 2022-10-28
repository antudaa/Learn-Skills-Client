import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import './SignUp.css'
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';


const SignUp = () => {

    const { signInWithGoogle, signUpWithEmail, updateUser , verifyEmail , githubSignUp } = useContext(AuthContext);

    const [error, setError] = useState('');

    const [accept , setAccept] = useState();

    const navigate = useNavigate();

    const googleProvider = new GoogleAuthProvider();

    const gitProvider = new GithubAuthProvider();

    const handleGithubSignUp = () =>{
        githubSignUp(gitProvider)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch((error) => {
            console.error("Error ", error);
        })
    }

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

    const handleSignUp = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const photoURL = form.photourl.value;
        const password = form.password.value;
        console.log(email, name, photoURL, password);

        signUpWithEmail(email, password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError();
                handleUpdateUser(name, photoURL);
                handleEmailVerify();
            })
            .catch(e => {
                console.error("User Already Exist", e);
                setError(e.message);
            })
    }


    const handleUpdateUser = (name , photoURL) =>{

        const profile = {
            displayName : name,
            photoURL : photoURL
        }
        updateUser(profile)
        .then(() =>{})
        .catch((error) => console.error(error));
    }

    const handleEmailVerify = () => {
        verifyEmail()
        .then(() => {})
        .catch((error) => console.error(error));
    }

    const handleTerms = (event) => {
        setAccept(event.target.checked);
    }

    return (
        <div className=''>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center lg:text-left">
                        <h1 className="text-5xl font-bold">Sign Up now!</h1>
                        <p className="py-6 text-center">Welcome .Please Sign Up ...</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">

                        {/* Sign Up Form ... */}
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Full Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Full name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo URL</span>
                                </label>
                                <input type="text" name='photourl' placeholder="Photo URL" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="Password" className="input input-bordered" required />

                            </div>

                            <div className="form-control">
                                <label className="label cursor-pointer">
                                    <span className="label-text">Please Accept <Link to='/terms'>terms & conditions</Link></span>
                                    <input onClick={handleTerms} type="checkbox" className="checkbox checkbox-xs" />
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button type='submit' disabled={!accept} className="btn btn-primary">Sign Up</button>
                            </div>

                            <div className='text-center mt-4'>
                                <p className='text-rose-500	'>{}</p>
                            </div>

                            <div className='cursor-pointer text-center mt-4'>
                                <p>Sign Up With...</p>
                                <div onClick={handleGoogleSignIn} className='google-signup rounded mt-4 text-xl bg-teal-500 -300 text-center text-white p-3'>
                                    <FaGoogle className='mr-4 color-orange' />
                                    Google
                                </div>
                                <div onClick={handleGithubSignUp} className='google-signup my-4 rounded text-xl bg-teal-500 -300 text-center text-white p-3'>
                                    <FaGithub className='mr-4' />
                                    Github
                                </div>
                            </div>
                            <div className='text-center'>
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
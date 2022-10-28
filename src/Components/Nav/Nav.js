import { Link } from 'react-router-dom';
import icon from "../Images/logo.png";
import { useRef } from "react";
import { FaBars, FaTimes, FaUser, FaMoon, FaSun } from "react-icons/fa";
import './Nav.css'
import { useContext } from 'react';
import { AuthContext } from '../Context/UserContext';


const Nav = () => {

    const { user, logOut } = useContext(AuthContext);


    const navRef = useRef();
    console.log("PhotoURL", user.photoURL)

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    const handleLogOut = () => {
        logOut()
        .then(() => {
            console.log("Sign Out Successful.")
            user({})
         })
        .catch((error) => console.error(error));
    }

    return (

        <header className='flex items-center bg-white p-6 px-6 lg:px-10 mx-auto justify-around'>
            <div className='font-bold py-3 text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                <span className='text-3xl pt-2 mr-6'>
                    <img style={{ width: '40px', height: '40px' }} src={icon} alt="Logo Not Found..." />
                </span>
                Learn Skills
            </div>
            <nav ref={navRef}>
                <Link className='md:ml-8 text-xl text-gray-800 hover:text-orange-600 duration-500' to='/'>Home</Link>
                <Link className='md:ml-8 text-xl text-gray-800 hover:text-orange-600 duration-500' to='/courses'>Courses</Link>
                <Link className='md:ml-8 text-xl text-gray-800 hover:text-orange-600 duration-500' to='/faq'>FAQ</Link>
                <Link className='md:ml-8 text-xl text-gray-800 hover:text-orange-600 duration-500' to='/blogs'>Blogs</Link>
                <Link className='md:ml-8 text-xl text-gray-800 hover:text-orange-600 duration-500' to='/login'>Login</Link>
                <Link className='md:ml-8 text-xl text-gray-800 hover:text-orange-600 duration-500' to='/signup'>Sign Up</Link>


                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <nav className='ml-6'>
                {
                    user?.uid ?

                        <>
                            <Link onClick={handleLogOut} className=' bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>LogOut</Link>
                            <Link className='text-black mx-3'>{user?.displayName}</Link>

                        </>
                        :
                        <>
                            <Link to='/login' className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>Login</Link>
                            <Link to='/signup' className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 mr-3'>SignUp</Link>
                        </>
                }

                <Link className=''>
                    {
                        user?.photoURL ?
                            <img 
                                style={{ height: '36px', borderRadius: '50%' }}
                                src={user?.photoURL}
                                alt=''>
                            </img>
                            :
                            <FaUser />
                    }
                </Link>
            </nav>

            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Nav;



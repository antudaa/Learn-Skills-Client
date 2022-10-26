import { Link } from 'react-router-dom';
import icon from "../Images/logo.png";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import './Nav.css'


const Nav = () => {

    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    };

    return (

        <header className='flex items-center bg-white p-6 px-6 lg:px-10 mx-auto justify-between'>
            <div className='font-bold py-3 text-2xl cursor-pointer flex items-center font-[poppins] text-gray-800'>
                <span className='text-3xl mr-1 pt-2'>
                    <img style={{ width: '30px', height: '30px' }} src={icon} alt="Logo Not Found..." />
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
                <button className='bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>Login</button>
                <button
                    className="nav-btn nav-close-btn"
                    onClick={showNavbar}>
                    <FaTimes />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
            </button>
        </header>
    );
};

export default Nav;
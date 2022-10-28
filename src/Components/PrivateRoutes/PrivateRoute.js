import React from 'react';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/UserContext';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);

    const location = useLocation();

    if (loading) {
        return <button className="btn loading ">loading</button>;
    }

    if (user && user.uid) {
        return children;
    }

    return (
        <div>
            <Navigate to='/login' state={{ from: location }} replace></Navigate>
        </div>
    );

};

export default PrivateRoute;








// const [dark, setDark] = useState("Dark");

//     const [white, setWhite] = useState('');

//     const handleDarkMode = () => {
//         if(dark === "Dark") {
//             setDark("Light")
//             if(dark === 'Light'){
//                 setWhite(dark);
//             }
//         }
//         if(dark === "Light"){
//             setDark("Dark")
//             setWhite('');
//         }
//     }


{/* <div>
    <Link onClick={handleDarkMode} className=' bg-indigo-600 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500'>{dark}</Link>
</div> */}
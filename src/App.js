import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layouts/Main';
import Courses from './Components/Courses/Courses';
import Blogs from './Components/Blogs/Blogs';
import FAQ from './Components/FAQ/FAQ';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Error from './Components/Error/Error';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import TermsConditions from './Components/TermsConditions/TermsConditions';
import Course from './Components/Courses/Course';
import Home from './Components/Home/Home';
import CheckOut from './Components/CheckOut/CheckOut';


function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          loader: () => fetch('http://localhost:5000/course'),
          element: <Home></Home>
        },
        {
          path: '/courses',
          element: <Courses></Courses>
        },
        {
          path: '/blogs',
          element: <Blogs></Blogs>
        },
        {
          path: '/faq',
          element: <FAQ></FAQ>
        },
        {
          path: '/login',
          element: <Login></Login>
        },
        {
          path: '/signup',
          element: <SignUp></SignUp>
        },
        {
          path: '/courses/:id',
          loader : ({ params }) => fetch(`http://localhost:5000/courses/${params.id}`),
          element: <PrivateRoute>
            <CheckOut></CheckOut>
          </PrivateRoute>
        },
        {
          path: '/terms',
          element: <TermsConditions></TermsConditions>
        },
        {
          path: '/course/:id',
          loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
          element: <Course></Course>
        },
        {
          path: '/courses',
          element: <Courses></Courses>,
        }
      ]

    },
    {
      path: '*',
      element: <Error></Error>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

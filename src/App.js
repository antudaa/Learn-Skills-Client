import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './Components/Layouts/Main';
import Courses from './Components/Courses/Courses';
import Blogs from './Components/Blogs/Blogs';
import FAQ from './Components/FAQ/FAQ';
import Login from './Components/Login/Login';
import SignUp from './Components/SignUp/SignUp';
import Error from './Components/Error/Error';
import PremiumAccess from './Components/PremiumAccess/PremiumAccess';
import PrivateRoute from './Components/PrivateRoutes/PrivateRoute';
import TermsConditions from './Components/TermsConditions/TermsConditions';


function App() {

  const router = createBrowserRouter([
    {
      path : '/', 
      element : <Main></Main>,
      children : [
        {
          path : '/courses',
          element : <Courses></Courses>
        },
        {
          path : '/blogs',
          element : <PrivateRoute>
                    <Blogs></Blogs>
                    </PrivateRoute>
        },
        {
          path : '/faq',
          element : <FAQ></FAQ>
        },
        {
          path : '/login',
          element : <Login></Login>
        },
        {
          path : '/signup',
          element : <SignUp></SignUp>
        },
        {
          path : '/premium-access',
          element : <PrivateRoute>
            <PremiumAccess></PremiumAccess>
            </PrivateRoute>
        },
        {
          path : '/terms',
          element : <TermsConditions></TermsConditions>
        }
      ]

    },
    {
      path : '*',
      element : <Error></Error>
    }
  ])
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

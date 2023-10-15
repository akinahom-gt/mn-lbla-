import Home  from "./Pages/Home"
import Login from "./Pages/Login"
import Navigation from "./Components/Navigation.jsx"
import Lunch from "./Pages/Lunch"
import Breakfast from "./Pages/Breakfast"
import Snack from "./Pages/Snack"
import Dinner from "./Pages/Dinner"
import Signup from "./Pages/Signup"
import Details from "./Pages/Details"
import Seafood from "./Pages/Seafood"
import Starter from "./Pages/Starter"
import Chicken from "./Pages/Chicken"
import Vegetarian from "./Pages/Vegetarian"
import Dessert from "./Pages/Dessert"
import Profile from "./Pages/Profile"
import Delete from "./Pages/Delete"
import Detail from "./Pages/Detail"
import Footer from './Components/Footer.jsx'
import Share from "./Pages/Share"
import Rating from "./Components/Rating"
import Det from "./Pages/Det"

// import Search from "./Components/Search"


import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";

// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


function App () {
  
  const Layout = () => {
    return (
      <div className="">

        <Navigation />
        
        <Outlet/>
        
     <Footer/>
      </div> 
    );
  }
  const router = createBrowserRouter([
  {
    path: "/",
      element: <Layout />,
      children: [
       
        {
          path: "/",
          element: <Home />,
        },

        {
          path: "/login",
          element:<Login/>,
        },
        {
          path: "sign up",
          element:<Signup/>,
        },
        {
          path: "/share",
          element:<Share/>,
        },
       
        {
          path: "/lunch",
          element:<Lunch/>
        },
        {
          path: "/seafood",
          element:<Seafood/>
        },
        {
          path: "/starter",
          element:<Starter/>
        },
        {
          path: "/chicken",
          element:<Chicken/>
        },
        {
          path: "/breakfast",
          element:<Breakfast/>
        },
        {
          path: "/vegetarian",
          element:<Vegetarian/>
        },
        {
          path: "/dessert",
          element:<Dessert/>
        },
      
        {
          path: "/dinner",
          element:<Dinner/>
        },
       
        {
          path: "/snack",
          element:<Snack/>
        },
        {
          path: "/details",
          element:<Details/>
        },
        {
          path: "/profile",
          element:<Profile/>
        },
        {
          path: "/delete",
          element:<Delete/>
        },
      
        {
          path: "/detail",
          element:<Detail/>
        },
      
      {
        path:"rating" ,
        element:<Rating/>
      },
      {
        path:"det" ,
        element:<Det/>
      },

      ]
  },
]);
  return (
     <div className="" >
       <RouterProvider router={router} />
     </div> 
      
  );
}

export default App;


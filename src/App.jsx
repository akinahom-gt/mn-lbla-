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
// import Meal from "./Components/Meal.jsx"


import Footer from './Components/Footer.jsx'
// import Search from "./Components/Search"
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Share from "./Pages/Share"

// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


function App () {
  
  // const [isLoading, setIsLoading] = useState(false);
  //   const [query, setQuery] = useState("");
  //   const [recipes, setRecipes] = useState([]);
    
  //   // search for the recipe
  //   const searchRecipes = async () => {
  //     setIsLoading(true);
  //     const url = searchApi + query
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     setRecipes(data.meals);
  //     setIsLoading(false);
  //   };
  
  //   useEffect(() => {
  //     searchRecipes()
  //   }, []);
  
  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     searchRecipes();
  //   }
    
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
        // {
        //   path: "/:idMeal",
        //   element:<Details/>
        // },
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
        // {
        //   path: "/meal",
        //   element:<Meal/>
        // },

      ]
  },
]);
  return (
    // <div>
    // <div className="max-w-6xl min-h-screen right-0 mt-6 ms-8">
    //   <h2 className="font-pacifico text-[50px] px-2"> Categories by type</h2>
    //   <Search
    //     isLoading={isLoading}
    //     query={query}
    //     setQuery={setQuery}
    //     handleSubmit={handleSubmit}
    //   />
    //   <div className="flex flex-row justify-center mt-[30px] flex-wrap  gap-[30px] ">
        
    //     {recipes ? recipes.map(recipe => (
    //       <Breakfast
    //          key={recipe.idMeal}
    //          recipe={recipe}
    //       />
    //     )) : "No Results."} 
    //    </div>
    // </div> 
     
    <div className="" >
       <RouterProvider router={router} />
      
      </div> 
      
  );
}

export default App;

// import React  , { useState, useEffect } from "react";
// import Footer from './Components/Footer.jsx'
// // import NavBar from "./Components/NavBar/NavBar.jsx";
// // import Button from "./Components/Button.jsx";

// import Home  from "./Pages/Home"
// import Login from "./Pages/Login"
// import Lunch from "./Pages/Lunch"
// import Breakfast from "./Pages/Breakfast"
// import Snack from "./Pages/Snack"
// import Dinner from "./Pages/Dinner"
// import SignUp from "./Pages/Signup.jsx"
// import {
//   createBrowserRouter,
//   Outlet,
//   RouterProvider,
// } from "react-router-dom";
// import Share from "./Pages/Share.jsx"

// // // import Navbar from './Components/Navbar.jsx'
// // import Breakfast from './Pages/Breakfast.jsx'
// import Navigation from './Components/Navigation.jsx'

// import "./App.css";
// import SearchBar from "./Components/SearchBar.jsx";
// import RecipeCard from "./Components/RecipeCard.jsx";
// const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";


// function App() {
//   const [isLoading, setIsLoading] = useState(false);
//   const [query, setQuery] = useState("");
//   const [recipes, setRecipes] = useState([]);
  
//   // search for the recipe
//   const searchRecipes = async () => {
//     setIsLoading(true);
//     const url = searchApi + query
//     const res = await fetch(url);
//     const data = await res.json();
//     setRecipes(data.meals);
//     setIsLoading(false);
//   };

//   useEffect(() => {
//     searchRecipes()
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     searchRecipes();
//   }
  
// //     return (    
// //     // <div>
     
// //     // <Navigation/>
// //     // {/* <div className="max-w-6xl min-h-screen right-0 mt-6 ms-8">
// //     //   <h2 className="font-pacifico text-[50px] px-2"> Categories by type</h2>
// //     //   <SearchBar
// //     //     isLoading={isLoading}
// //     //     query={query}
// //     //     setQuery={setQuery}
// //     //     handleSubmit={handleSubmit}
// //     //   />
// //     //   <div className="flex flex-row justify-center mt-[30px] flex-wrap  gap-[30px] ">
        
// //     //     {recipes ? recipes.map(recipe => (
// //     //       <RecipeCard
// //     //          key={recipe.idMeal}
// //     //          recipe={recipe}
// //     //       />
// //     //     )) : "No Results."} */}
// //     //   {/* </div>
// //     // </div> */}
// //     // <Footer/>
// //     // </div>
// //   );
// // }
// return (
//   <div className="">

//     <Navigation />
    
//     <Outlet/>
// {/*      <Footer/>*/}
//   </div> 
// );
// }
// const router = createBrowserRouter([
// {
// path: "/",
//   element: <Layout />,
//   children: [
   
//     {
//       path: "/",
//       element: <Home />,
//     },

//     {
//       path: "/login",
//       element:<Login/>,
//     },
//     {
//       path: "sign up",
//       element:<SignUp/>,
//     },
//     {
//       path: "/share",
//       element:<Share/>,
//     },
   
//     {
//       path: "/lunch",
//       element:<Lunch/>
//     },

//     {
//       path: "/recipecard",
//       element:<RecipeCard/>
//     },
//     {
//       path: "/dinner",
//       element:<Dinner/>
//     },
//     {
//       path: "/snack",
//       element:<Snack/>
//     },

//   ]

// },
// ]);
// return (
 
// <div className="" >
//    <RouterProvider router={router} />
  
//   </div> 
// );
// }


// export default App;
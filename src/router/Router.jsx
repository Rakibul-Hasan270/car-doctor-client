import { createBrowserRouter } from "react-router";
import Main from "../layout/Main";
import Home from "../pages/Home/Home/Home";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import Cheeckout from "../pages/Cheeckout/Cheeckout";
import Booking from "../pages/Booking/Booking";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/checkout/:id',
                element: <Cheeckout></Cheeckout>,
                loader: ({ params }) => fetch(`http://localhost:4000/services/${params.id}`)
            },
            {
                path: '/booking',
                element: <PrivateRoute> <Booking></Booking></PrivateRoute>
            }
        ]
    }
])

export default router;
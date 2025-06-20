import { createBrowserRouter } from "react-router-dom";
import HomePage from  "./pages/Home/home";
import NotFound from "./pages/NotFound/notfound";
import LoginPage from "./pages/Login/login";
import App from "./App";
import SignupPage from "./pages/Signup/signup";

export const router = createBrowserRouter([
    {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
        {
            path: '/home',
            element: <HomePage />
        },
        {
            path: '/sign-up',
            element: <SignupPage />
        },
        {
            path: '/login',
            element: <LoginPage />
        },
        {
            path: '/bookings',
            element: <bookingPage />
        }
    ]
    }
])
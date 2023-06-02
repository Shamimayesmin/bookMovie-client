import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import DetailsCard from "../components/DetailsCard/DetailsCard";


export const router = createBrowserRouter([
    {
        path : '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
				path: "/movie-details/:id",
				element: <DetailsCard/>
			},
        ]
    }
])
import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../components/Home/Home";
import DetailsCard from "../components/DetailsCard/DetailsCard";
import TicketBookingForm from "../components/DetailsCard/TicketBookingForm";
// import Details from "../components/Details/Details";

export const router = createBrowserRouter([
	{
		path: "/",
		element: <Main></Main>,
		children: [
			{
				path: "/",
				element: <Home></Home>,
			},
			{
				path: "/details/:id",

				element: <DetailsCard />,
				loader: ({ params }) => {
					console.log(params.id);
					return fetch(
						` https://movieticket-server.vercel.app/shows/${params.id}`
					);
				},
			},
			{
				path: "/ticket-book/:id",
				element: <TicketBookingForm />,
				loader: ({ params }) => {
					// console.log(params.id);
					return fetch(
						` https://movieticket-server.vercel.app/booking/${params.id}`
					);
				},
			},
		],
	},
]);

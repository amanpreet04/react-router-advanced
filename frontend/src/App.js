import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import EventsPage, { loader } from "./pages/EventsPage";
import EventDetailsPage, {
  loaderForEventDetails,
} from "./pages/EventDetailPage";
import NewEventPage, { action } from "./pages/NewEventPage";
import EditEventPage from "./pages/EditEventPage";
import RootLayout from "./pages/RootLayout";
import EventsRoot from "./pages/EventsRoot";
import Error from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader,
          },
          {
            path: ":eventId",
            id: "event-details",
            loader: loaderForEventDetails,
            children: [
              {
                index: true,
                element: <EventDetailsPage />,
              },
              {
                path: "edit",
                element: <EditEventPage />,
              },
            ],
          },
          { path: "new", element: <NewEventPage />, action: action },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

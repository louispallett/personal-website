import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import Projects from "./Projects";
import CV from "./CV";

export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/", element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "projects",
                    element: <Projects />
                },
                {
                    path: "cv",
                    element: <CV />
                }
            ]
        }
    ]);
    return <RouterProvider router={router} />;
}
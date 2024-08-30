import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import Home from "./Home";
import Projects from "./Projects";
import CV from "./CV";

import BlogApi from "./Projects/BlogApi";
import ChapterNumbering from "./Projects/ChapterNumbering";
import TennisApp from "./Projects/TennisApp";
import WeatherApp from "./Projects/WeatherApp";


export default function Router() {
    const router = createBrowserRouter([
        {
            path: "/", 
            element: <App />,
            children: [
                {
                    index: true,
                    element: <Home />
                },
                {
                    path: "projects",
                    children: [
                        {   
                            index: true,
                            element: <Projects />
                        },
                        {
                            path: "blog-api",
                            element: <BlogApi />
                        },
                        {
                            path: "chapter-numbering",
                            element: <ChapterNumbering />
                        },
                        {
                            path: "lowpal-tennis",
                            element: <TennisApp />
                        },
                        {
                            path: "weather-app",
                            element: <WeatherApp />
                        }
                    ]
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
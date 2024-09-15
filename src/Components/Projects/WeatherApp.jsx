import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

import sonImg from "/assets/images/son-image.svg";

export default function WeatherApp() {
    const [welcome, setWelcome] = useState(true);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const handleWelcome = () => {
                setTimeout(() => {
                    setExiting(true);
                }, 1000);
                setTimeout(() => {
                    setWelcome(false);
                    localStorage.setItem('hasWelcomed', 'true'); 
                }, 2000);
        }
        handleWelcome();
    }, []);
    
    return (
        <>
            {welcome ? (
                <section className="flex items-center justify-center dark:text-slate-100">
                    <div className={exiting ? "font-mania text-4xl sm:text-6xl dark:text-slate-100 animate-ping animate-once animate-duration-[1250ms] animate-ease-in-out" : "font-mania text-4xl sm:text-6xl dark:text-slate-100 animate-fade-down animate-duration-1000 animate-ease-in-out"}>
                        <p className="text-center">YAWA</p>
                    </div>
                </section>
            ) : (
                <section className="my-5 dark:text-slate-50 max-w-maxArticle">
                    <div className="p-2.5 sm:p-5 text-sm sm:text-base">
                        <h1 className="text-center text-2xl sm:text-4xl my-2.5 font-popcorn">YAWA - Yet Another Weather App</h1>
                        <hr  className="mx-15 m-5"/>
                        <div className="md:grid md:grid-cols-2">
                            <div>
                                <p className="my-1.5"><b>Type</b>: frontend</p>
                                <p><b>Short Description</b>: <i>YAWA - Yet Another Weather App</i> is a simple weather frontend application using data fetched from an external API.</p>
                            </div>
                            <div className="flex flex-col items-center md:items-end my-2.5">
                                <div className="flex items-center md:justify-end">
                                    <div className="flex flex-col md:items-end">
                                        <p className="text-xs sm:text-sm my-1 text-center"><b>Frontend</b></p>
                                        <div className="flex gap-2.5 bg-indigo-600 p-1.5 rounded-md">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-8 md:h-10" />
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-8 md:h-10" />
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-8 md:h-10"/>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="h-8 md:h-10"/>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" className="h-8 md:h-10"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2.5 justify-center items-center">
                            <div className="flex justify-center my-2.5">
                                <a href="https://github.com/louispallett/odin-weather-app" target="_blank"><button className="p-1 px-1.5 bg-slate-900 text-slate-50 font-semibold rounded-md hover:bg-slate-700 transition-all mt-5">&gt; GitHub Repo &lt;</button></a>
                            </div>
                            <div className="flex justify-center my-2.5">
                                <a href="https://louispallett.github.io/odin-weather-app/" target="_blank"><button className="p-1 px-1.5 bg-lime-700 text-slate-50 font-semibold rounded-md hover:bg-lime-600 transition-all mt-5">&gt; Live Site &lt;</button></a>
                            </div>
                        </div>
                        <hr  className="mx-15 m-5"/>
                        <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Long Description</h2>
                        <div className="flex my-2.5">
                            <Fade delay={750} triggerOnce>
                                <div className="hidden md:block w-64">
                                    <img src="https://www.svgrepo.com/show/440537/sun.svg" alt="" />
                                </div>
                            </Fade>
                            <div className="flex flex-col gap-2.5 sm:text-right">
                                <p>
                                This is an older application I wrote in mid-2023, before I learned React and server-side programming. It's built using Webpack as a compiler and uses SASS for writing SCSS, but it doesn't use a 
                                CSS framework. 
                                </p>
                                <p>
                                    It utilizes the free tier of the WeatherAPI to fetch and display data following the user's input searching for a location. The positioning and sizing of elements has been designed to work on both larger and smaller screens.
                                </p>
                                <p>
                                    This is an older project and therefore, although it does display my ability to create frontend applications without React and working with external APIs, there are a couple of things in it which do not fairly reflect my skill as of now. One specific point to make is the 
                                    API key, which is actually just inserted into the frontend code (and not hidden or protected). This is due to it being a free tier (which anyone can get), but also because I hadn't learnt any server development at the time - if you 
                                    look at my more recent projects, you'll see that I handle keys properly within the server.
                                </p>
                            </div>
                        </div>
                        <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Video: See it in action</h2>
                        <p className="text-center">- - -Insert Video HERE- - -</p>
                        <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Technical Highlights</h2>
                        <div className="flex flex-col gap-2.5 my-2.5">
                            <p>
                                This application uses a variety of technical tools and libraries. A full list can be found in the package.json file and more extensive list can be found on the repository's README file.
                                However, there are some features I am particularly proud of:
                            </p>
                            <ul className="list-disc ml-5 flex flex-col gap-2">
                                <li>
                                    <b>Dynamic Positioning</b>: This application, via CSS and SCSS, has a responsive layout depending on the size of the users screen.
                                </li>
                                <li>
                                    <b>Personalized styling based on API data</b>: This application uses the WeatherAPI data to determine how elements are presented. This is displayed in the image of the 
                                    weather (sun for sunny, an umbrella for rain, etc.), but also in the rotation of the arrow for the wind direction.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            )}
        </>
    )
}
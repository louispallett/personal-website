import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";

import sonImg from "/assets/images/son-image.svg";
import tennisImg from "/assets/images/rackets.svg";

export default function Projects() {
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
            { welcome ? (
                <section className="flex items-center justify-center dark:text-slate-100">
                    <div className={exiting ? "font-mania text-4xl sm:text-6xl dark:text-slate-100 animate-ping animate-once animate-duration-[1250ms] animate-ease-in-out" : "font-mania text-4xl sm:text-6xl dark:text-slate-100 animate-fade-down animate-duration-1000 animate-ease-in-out"}>
                        <p className="text-center">Projects</p>
                    </div>
                </section>
            ) : (
                <>
                    <div className="grid justify-center max-w-full">
                        <section className="flex flex-col sm:p-5 sm:min-w-minArticle sm:max-w-maxArticle dark:text-slate-100">
                            <Zoom triggerOnce>
                                <h1 className="text-center text-4xl sm:text-6xl my-2.5 font-popcorn">Projects</h1>
                            </Zoom>
                            <div className="flex justify-center">
                                <Fade triggerOnce>
                                    <div className="flex p-2.5">
                                        <ChevronDoubleDownIcon className="h-12 w-12 dark:fill-slate-50 animate-bounce animate-infinite animate-duration-1000 animate-ease-in"/>
                                    </div>
                                </Fade>
                                <p className="text-center text-lg my-5">Click on a project below to find out more!</p>
                                <Fade triggerOnce>
                                    <div className="flex p-2.5">
                                        <ChevronDoubleDownIcon className="h-12 w-12 dark:fill-slate-50 animate-bounce animate-infinite animate-duration-1000 animate-ease-in"/>
                                    </div>
                                </Fade>
                            </div>
                            <div className="md:grid grid-cols-2 grid-row-2 gap-5 mx-1.5 md:m-5">
                                <Zoom triggerOnce>
                                    <TennisCard />
                                </Zoom>
                                <Zoom triggerOnce>
                                    <BlogCard />
                                </Zoom>
                                <Zoom triggerOnce>
                                    <ChapterNumberingCard />
                                </Zoom>
                                <Zoom triggerOnce>
                                    <WeatherAppCard />
                                </Zoom>
                            </div>
                            <Fade triggerOnce>
                                <OtherStuff />
                            </Fade>
                        </section>
                    </div>
                </>
            )}
        </>
    )
}

function TennisCard() {
    return (
        <Link to="lowpal-tennis">
            <section className="hover:opacity-85 transition-all border-4 my-5 border-slate-800 dark:border-slate-100 text-slate-50 rounded-lg bg-indigo-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] min-h-full">
                <div className="p-2.5 sm:p-5">
                    <h1 className="text-center text-xl sm:text-2xl my-2.5 font-bold">Tennis Tournament Application</h1>
                    <Fade delay={250} triggerOnce>
                        <div className="flex justify-center">
                            <img className="w-32" src={tennisImg} alt="" />
                        </div>
                    </Fade>
                    <div>
                    <p className="my-1.5"><b>Type</b>: full-stack</p>
                    <p><b>Short Description</b>: <i>Tennis Tournament by Lowpal</i> is an application where users can host or join a tennis tournament. Built with React and Express, this application has real-world usage and is currently being used as part of my own tennis club's yearly tournament.</p>
                    </div>
                    <div className="mt-5">
                        <div className="flex gap-2.5 my-2.5 justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-8 md:h-10"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-8 md:h-10"/>
                        </div>
                        <div className="flex gap-2.5 my-2.5 justify-center">
                            <svg viewBox="0 0 128 128" className="h-8 md:h-10">
                                    <path fill="#ffffff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                            </svg>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className="h-8 md:h-10"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="h-8 md:h-10"/>
                        </div>
                    </div>
                    <div className="flex gap-2.5 my-2.5 justify-center">
                        <svg viewBox="0 0 128 128" className="h-8 md:h-10">
                            <path fill="#ffffff" d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"></path>
                        </svg>
                    </div>
                </div>
            </section>
        </Link>
    )
}

function BlogCard() {
    return (
        <Link to="blog-api">
            <section className="hover:opacity-85 transition-all border-4 my-5 border-slate-800 dark:border-slate-100 text-slate-50 rounded-lg bg-indigo-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] min-h-full">
                <div className="p-2.5 sm:p-5">
                    <h1 className="text-center text-xl sm:text-2xl my-2.5 font-bold">SON Blog - A Newspaper Application</h1>
                    <Fade delay={250} triggerOnce>
                        <div className="flex justify-center">
                            <img className="w-32" src={sonImg} alt="" />
                        </div>
                    </Fade>
                    <div>
                        <p className="my-1.5"><b>Type</b>: full-stack</p>
                        <p><b>Short Description</b>: <i>Signapore on-Thames</i> is a full-stack newspaper site application written using React and Express.</p>
                    </div>
                    <div className="mt-5">
                        <div className="flex gap-2.5 justify-center my-2.5">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-8 md:h-10"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-8 md:h-10"/>
                        </div>
                        <div className="flex gap-2.5 justify-center my-2.5">
                            <svg viewBox="0 0 128 128" className="h-8 md:h-10">
                                    <path fill="#ffffff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                            </svg>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className="h-8 md:h-10"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="h-8 md:h-10"/>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    )
}

function ChapterNumberingCard() {
    return (
        <Link to="chapter-numbering">
            <section className="hover:opacity-85 transition-all border-4 my-5 border-slate-800 dark:border-slate-100 text-slate-50 rounded-lg bg-indigo-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] min-h-full">
                <div className="p-2.5 sm:p-5">
                    <h1 className="text-center text-xl sm:text-2xl my-2.5 font-bold">Chapter File Renamer - a Small Bash Script</h1>
                    <Fade delay={250} triggerOnce>
                        <div className="flex justify-center">
                            <img className="w-32" src="https://www.svgrepo.com/show/498889/terminal.svg" alt="" />
                        </div>
                    </Fade>
                    <div>
                        <p className="my-1.5"><b>Type</b>: Shell Application</p>
                        <p><b>Short Description</b>: <i>Chapter File Renamer</i> is a simple bash script which takes command-line arguments from the user and renames files accordingly.</p>
                    </div>
                    <div className="mt-5">
                        <div className="flex gap-2.5 my-2.5 justify-center">
                            <svg viewBox="0 0 128 128" className="h-8 md:h-10">
                                <path fill="#ffffff" d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm26.34-60.5l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"></path><path fill="#4FA847" d="M99.12 90.73l-9.4 5.62c-.25.15-.43.31-.43.61v2.46c0 .3.2.43.45.28l9.54-5.8c.25-.15.29-.42.29-.72v-2.17c0-.3-.2-.42-.45-.28z"></path>
                            </svg>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    )
}

function WeatherAppCard() {
    return (
        <Link to="weather-app">
            <section className="hover:opacity-85 transition-all border-4 my-5 border-slate-800 dark:border-slate-100 text-slate-50 rounded-lg bg-indigo-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] min-h-full">
                <div className="p-2.5 sm:p-5">
                    <h1 className="text-center text-xl sm:text-2xl my-2.5 font-bold">YAWA - Yet Another Weather App</h1>
                    <Fade delay={250} triggerOnce>
                        <div className="flex justify-center">
                            <img className="w-32" src="https://www.svgrepo.com/show/440537/sun.svg" alt="" />
                        </div>
                    </Fade>
                    <div>
                        <p className="my-1.5"><b>Type</b>: frontend</p>
                        <p><b>Short Description</b>: <i>YAWA - Yet Another Weather App</i> is a simple weather frontend application using data fetched from an external API.</p>
                    </div>
                    <div className="mt-5">
                        <div className="flex gap-2.5 my-2.5 justify-center">
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-8 md:h-10" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-8 md:h-10"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" className="h-8 md:h-10"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" className="h-8 md:h-10"/>
                        </div>
                    </div>
                </div>
            </section>
        </Link>
    )
}

function OtherStuff() {
    return (
        <section className="dark:text-slate-50">
            <div className="p-2.5 sm:p-5">
                <h1 className="text-xl sm:text-2xl my-2.5 font-montserrat">And a few more...</h1>
                <p>
                    I've just placed here a few projects which show a reasonable breadth of skill and the best of my website/software work so far. However, you can see a more extensive 
                    library of my projects on my <a href=""><b>GitHub</b></a>. Some which might be of interest include: 
                </p>
                <ul className="list-disc ml-8 my-2.5">
                    <li className="my-2.5">
                        <p><b>Odin Inventory Application</b></p>
                        <div className="flex flex-col gap-2.5 ml-4">
                            <p>
                                Part of 'The Odin Project', this application is designed as an tool for storage or shop employers to keep a track of stock.
                                In this particular example, I've made it along the theme of an independant coffee shop.
                            </p>
                            <p className="text-center">This application does <i>not</i> use React, but is instead built with a template language (in this case Pug).</p>
                            <div className="flex justify-center">
                                <a href="https://github.com/louispallett/manuscript_chapter_renaming" target="_blank"><button className="p-1 dark:text-slate-50 font-semibold rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">&gt; GitHub Repo &lt;</button></a>
                            </div>
                        </div>
                    </li>
                    <li className="my-2.5">
                        <p><b>Knight Travails</b></p>
                        <div className="flex flex-col gap-2.5 ml-4">
                            <p>
                                Also part of 'The Odin Project', this is a simple terminal programme and intermediate algorithm to work out the route and shortest possible distance a knight on a chessboard 
                                can travel from one position to another. It uses methods such as queues and breadth-first search.
                            </p>
                            <p className="text-center">This is written in pure JavaScript.</p>
                            <div className="flex justify-center">
                                <a href="https://github.com/louispallett/manuscript_chapter_renaming" target="_blank"><button className="p-1 dark:text-slate-50 font-semibold rounded-md hover:bg-slate-200 dark:hover:bg-slate-800 transition-all">&gt; GitHub Repo &lt;</button></a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    )
}
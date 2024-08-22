import { useEffect, useState } from "react";
import { Fade, Zoom } from "react-awesome-reveal";

import BlogApi from "./Projects/BlogApi";
import ChapterNumbering from "./Projects/ChapterNumbering";
import TennisApp from "./Projects/TennisApp";

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
            {welcome ? (
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
                            <Zoom triggerOnce delay={250}>
                                <TennisApp />
                            </Zoom>
                            <Zoom triggerOnce delay={250}>
                                <BlogApi />
                            </Zoom>
                            <Zoom triggerOnce delay={250}>
                                <ChapterNumbering />
                            </Zoom>
                            <Fade triggerOnce delay={250}>
                                <OtherStuff />
                            </Fade>
                        </section>
                    </div>
                </>
            )}
        
        </>
    )
}

function OtherStuff() {
    return (
        <section className="my-5 dark:text-slate-50">
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
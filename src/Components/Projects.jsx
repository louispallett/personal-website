import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

import TennisApp from "./Projects/TennisApp";
import BlogApi from "./Projects/BlogApi";

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
                        <section className="flex flex-col p-2.5 sm:p-5 sm:min-w-minArticle sm:max-w-maxArticle dark:text-slate-100">
                            <Zoom triggerOnce>
                                <h1 className="text-center text-4xl sm:text-6xl font-popcorn">Projects</h1>
                            </Zoom>
                            <Zoom triggerOnce delay={250}>
                                <TennisApp />
                            </Zoom>
                            <Zoom triggerOnce delay={250}>
                                <BlogApi />
                            </Zoom>
                        </section>
                    </div>
                </>
            )}
        
        </>
    )
}
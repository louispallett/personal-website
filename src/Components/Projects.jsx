import { useEffect, useState } from "react";
import { Zoom } from "react-awesome-reveal";

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
                            <TennisApp />
                        </section>
                    </div>
                </>
            )}
        
        </>
    )
}

function TennisApp() {
    return (
        <Zoom triggerOnce delay={250}>
            <section className="border-4 my-5 border-slate-800 dark:border-slate-100 rounded-lg bg-indigo-200 dark:bg-indigo-600">
                <div className="p-2.5 sm:p-5">
                    <h1 className="text-center text-xl sm:text-2xl font-montserrat font-bold">Tennis Tournament Application</h1>
                    <div className="flex justify-end items-center sm:text-lg gap-2.5 my-1.5 sm:my-2.5">
                        <p><b>Frontend</b>:</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-4 sm:h-6" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-4 sm:h-6" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-4 sm:h-6"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-4 sm:h-6" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" className="h-4 sm:h-6" />
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-4 sm:h-6"/>
                    </div>
                    <div className="flex justify-end items-center sm:text-lg gap-2.5 my-1.5 sm:my-2.5"> 
                        <p><b>Backend</b>:</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" className="h-4 sm:h-6"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className="h-4 sm:h-6"/>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="h-4 sm:h-6"/>
                    </div>
                    <div className="flex justify-end items-center sm:text-lg gap-2.5 my-1.5 sm:my-2.5"> 
                        <p><b>Testing</b>:</p>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" className="h-4 sm:h-6"/>
                    </div>
                    <p><b>GitHub repo</b></p>
                    <p>
                        Organisation has been a key skill I have utilised and developed during my professional history. In my current role as an Editorial Assistant, I have to balance a breadth of work, from drawing up and sending out contracts, finding reviewers for proposals and manuscripts, checking the quality of manuscripts and preparing them for production by the Production Department,
                        and communicating with authors and editors to resolve any queries or issues they have. This demands a that I am highly organised, hardworking, and focused. I ensure that I take effective notes and create clear comments for myself and colleagues to use.
                    </p>
                </div>
            </section>
        </Zoom>
    )
}

function BlogApi() {

}

function InventoryApp() {

}

function WeatherApp() {

}

function PersonalWebsite() {

}

function KnightTravails() {

}

function AlgorithmsInC() {

}
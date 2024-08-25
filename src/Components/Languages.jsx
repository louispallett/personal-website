/*
====================
Refactoring
====================

At the moment the way we do this is a little sloppy and quite verbose. Since JSX is just JS, we might be able to do this in a better way:

    1 Create ONE component ("LanguagePopUp").
    2 This also means we create ONE state hook in Home.jsx
    3 The only thing that differs between each one is content. So, we need to create a conditional based on an argument
    that is passed:

        NOTE: because of the way booleans work in JS, strings are still true, so we can instead set the state hook to the language and 
        still have the Component show under open={isOpen}, because if isOpen == "babel", isOpen is true!

    4 Create a switch statement where the content is changed based on the value of isOpen. Then, we only have one component, one hook, and the 
    content can be changed via variables or js objects.

    I would do this in a new branch.

*/

import { Dialog } from '@headlessui/react'
import { Fade } from 'react-awesome-reveal'

const getLanguageInfo = (language) => {
    
    let languageInfo = "";
    
    switch (language) {
        case "babel":
            languageInfo = {
                name: "Babel",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg",
                usage: `I've used Babel a with a few projects and know how to set up basic .babelrc files. I don't consider myself an expert by any means, 
                        but I understand the fundamentals. I've primarily used it when testing with Jest.`,
                projects: [],
            }
            break;
        case "bootstrap":
            languageInfo = {
                name: "Bootstrap",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
                usage: `The popular CSS framework is great for creating applications quickly and not having to spend time on fairly trivial things like styling different buttons.
                        Whilst this isn't my CSS framework of choice (that would be TailwindCSS), I have used Bootstrap in my To-Do List application.`,
                projects: [
                    {
                        name: "To-Do List",
                        description: `A small application created early on in my web development journey. I used Bootstrap to create a 
                                      centered container with an accordion and accordion-items as children. I created this application before learning React, so it uses pure JS 
                                      DOM.`,
                        repo: "https://github.com/louispallett/odin-todo-list/tree/main",
                        site: "https://louispallett.github.io/odin-todo-list/"
                    },
                ]
            }
            break;
        case "css":
            languageInfo = {
                name: "CSS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
                usage: `I've used CSS extensively over the past couple of years. More recently, I've started to use frameworks such as TailwindCSS, but I still have a strong grasp of pure CSS 
                        (which, regardless, is needed for TailwindCSS). I haven't used pure CSS for projects in quite a while, but I have used SASS more recently.`,
                projects: [
                    {
                        name: "Noughts and Crosses",
                        description: "Part of The Odin Project, this is a very simple site which uses pure CSS.",
                        repo: "https://github.com/louispallett/odin-tic-tac-toe",
                        site: "https://louispallett.github.io/odin-tic-tac-toe/"
                    }
                ]
            }
            break;
        case "html":
            languageInfo = {
                name: "HTML",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
                usage: `HTML is fundamental to web development. I've used it throughout all my projects, but if you want to see it used in practice, 
                        please see 'React' - I've used more advanced HTML extensively in some of these React components.`,
                projects: [],
            }
            break;
        case "javascript":
            languageInfo = {
                name: "JavaScript",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
                usage: `JavaScript is my first all-purpose language and the one I am most confident with. I've used JS for both the frontend with frameworks such as React and the DOM, 
                        but also on the backend with NodeJS. In terms of writing algorithms, I written numerous as part of learning programming, but also when solving issues in my own projects.`,
                projects: [
                    {
                        name: "Tennis Tournament Application",
                        description: `An application currently in use to host and run join a single elimination tennis tournament. I wrote my own algorithm to automate the creation of the matches
                                    and add the players to the matches. You can read more about this on the projects page!`,
                        repo: "https://github.com/louispallett/lowpal-tennis",
                        site: "https://lowpal-tennis.netlify.app"
                    },
                    {
                        name: "Knight Travails",
                        description: "Part of The Odin Project, this is a breadth-first-search algorithm designed to calculate the shortest possible route a knight piece on a chessboard takes to go from one square to another.",
                        repo: "https://github.com/louispallett/knight-travails"
                    }
                ],
            }
            break;
        case "jest":
            languageInfo = {
                name: "Jest",
                img: "https://res.cloudinary.com/divlee1zx/image/upload/v1724593526/languages/jest_abdix9.svg",
                usage: `Test Driven Development has been something I've been working on in my most recent projects. When writing algorithms, this approach is incredibly efficient and I've come 
                        to really appreciate it. Jest is the only testing framework I've used extensively, but I understand how to read and write tests for development.`,
                projects: [
                    {
                        name: "Tennis Tournament Application",
                        description: `In this application, I wrote tests to ensure that my match creation and sorting algorithm returned the expected results. This made it far more efficient in 
                                    identifying bugs and code issues when the tests (often) failed.`,
                        repo: "https://github.com/louispallett/lowpal-tennis",
                        site: "https://lowpal-tennis.netlify.app"
                    },
                ]
            }
            break;
        case "npm":
            languageInfo = {
                name: "NPM",
                img: "https://res.cloudinary.com/divlee1zx/image/upload/v1724593689/languages/npm_oagvy2.svg",
                usage: "I've used Node Package Manager for all my projects. I'm comfortable with the commands on Bash: setting up npm environments, installing both production and development dependencies, etc.",
                projects: []
            }
            break;
        case "react":
            languageInfo = {
                name: "React",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
                usage: `React makes creating frontend sites so much easier and quicker. It has allowed me to create sites which are far more dynamic and powerful than a normal static page, but without the 
                        boilerplate of the JavaScript DOM. I feel very confident with React, having created a few fullstack websites with it.`,
                projects: [
                    {
                        name: "This website",
                        description: `The function that you are using right now - clicking on each language/technology to read more about it in a pop-up - was made posible using React. You can read more about it in the 
                                    section for this website on the projects page.`,
                        repo: "https://github.com/louispallett/personal-website",
                    }, 
                    {
                        name: "Tennis Tournament Application",
                        description: `I used React throughout this application, but two highlights are: the use of react-hook-form, a react library to build a sign-up form with dynamic input elements, as well as handle 
                                    form errors; and the handling of data when both fetching and submitting data.`,
                        repo: "https://github.com/louispallett/lowpal-tennis",
                        site: "https://lowpal-tennis.netlify.app"
                    }
                ]
            }
            break;
        case "react router":
            languageInfo = {
                name: "React Router",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg",
                usage: `In all my recent React applications I've used React Router to better organise my Components and create quick client-side loading without the need to reload the browser between pages. Passing 'global' 
                        hooks, such as some state-hooks, between applications using React Router has allowed me to create dynamic and client-friendly sites.`,
                projects: [
                    {
                        name: "Tennis Tournament Application",
                        description: `Whilst I've used React Router in all my most recent applications, I'm particularly proud of how I've used it here. Specifically, when a user already has a valid JWT (Json Web Token), I've 
                                    set up React Router to default to a 'loading' screen, as it awaits the validation of the JWT from the backend. If the JWT is valid, it redirects them to the dashboard, otherwise it redirects them
                                    to the sign-in page.`,
                        repo: "https://github.com/louispallett/lowpal-tennis",
                        site: "https://lowpal-tennis.netlify.app"
                    }
                ]
            }
            break;
        case "sass":
            languageInfo = {
                name: "SASS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
                usage: `Before I started using TailwindCSS, I used SASS for most of my applications. Learning SASS made it so much easier to organise and maintain CSS, because I could split styling up into files much easier and 
                        organise elements much more effectively by wrapping them where necessary. I tend not to use SASS now that I use TailwindCSS, simply because I don't need to write much CSS and it takes an extra step of 
                        configuration which seems unnecessary.`,
                projects: [
                    {
                        name: "YAWA - Yet Another Weather App",
                        description: "This frontend weather application uses data from the WeatherAPI to display weather in a region. I used SASS in this application to position and style all elements without using any CSS frameworks.",
                        repo: "https://github.com/louispallett/odin-weather-app",
                        site: "https://louispallett.github.io/odin-weather-app/"
                    }
                ]
            }
            break;
        case "tailwindcss":
            languageInfo = {
                name: "TailwindCSS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
                usage: `TailwindCSS is now my go-to CSS framework. In my latest projects, all written using React at the frontend, I've used TailwindCSS to style my components. I still incorporate a little vanilla CSS where numerous children 
                        require the same styling, however. I feel very comfortable using TailwindCSS and it provides the simplicity of Bootstrap without it's opinionated approach.`,
                projects: [
                    {
                        name: "This website",
                        description: "TailwindCSS is used to style the vast majority of the components on this website. I cover everything here from background colours, positions, and user interaction (hover, focus, etc.).",
                        repo: "https://github.com/louispallett/personal-website",
                    },
                    {
                        name: "Blog API",
                        description: "My newspaper site - 'Singapore on-Thames' - utilizes TailwindCSS to display and style forms, articles, and comments.",
                        repo: "https://github.com/louispallett/odin-blog-api",
                        site: "https://son-blog.netlify.app/dashboard/articles/"
                    }
                ]
            }
            break;
        case "webpack":
            languageInfo = {
                name: "Webpack",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
                usage: `Before using React, I used webpack to bundle my code. Although I no longer use it much thanks to using React and ViteJS, I did use it a lot and am therefore
                        relatively familiar with it.`,
                projects: [
                    {
                        name: "YAWA - Yet Another Weather App",
                        description: "A frontend application for finding out the weather in any region, I used and configured Webpack to bundle my code efficiently.",
                        repo: "https://github.com/louispallett/odin-weather-app",
                        site: "https://louispallett.github.io/odin-weather-app/"
                    }
                ]
            }
            break;
        case "vitejs":
            languageInfo = {
                name: "ViteJS",
                img: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
                usage: `I use ViteJS to configure my React applications. Although I don't do complex configurations, I have used ViteJS a fair bit and set up things such as proxies for APIs etc.`,
                projects: []
            }
            break;
        case "express":
            languageInfo = {
                name: "Express",
                img: "https://res.cloudinary.com/divlee1zx/image/upload/v1724593839/languages/express_hwo9is.svg",
                usage: `My go-to backend framework! Express is the framework I've used for all my most recent applications. I feel very confident using it - it's lightweight approach and use of callback functions
                        makes it very easy to use and understand. Please see some of my fullstack applications for examples of my usage of Express.`,
                projects: [
                    {
                        name: "Tennis Tournament Application",
                        description: `In this application, I wrote tests to ensure that my match creation and sorting algorithm returned the expected results. This made it far more efficient in 
                                    identifying bugs and code issues when the tests (often) failed.`,
                        repo: "https://github.com/louispallett/lowpal-tennis",
                        site: "https://lowpal-tennis.netlify.app"
                    },
                ]
            }
        default:
            break;

    }

    return languageInfo;
}

export default function LanguageBox({ isOpen, setIsOpen }) {

    const languageInfo = getLanguageInfo(isOpen);

    return (
        <Dialog as="div" open={isOpen != false ? true : false} onClose={() => setIsOpen(false)} className="relative z-50 m-0 p-0">
            <div className="fixed inset-0 flex w-screen items-center justify-center sm:p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-6 sm:p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">{languageInfo.name}</h2>
                    <div className="flex items-center flex-col gap-1 text-center sm:text-left sm:flex-row sm:justify-between">
                        <p>{languageInfo.usage}</p>
                        <img className="max-w-20 sm:max-w-36" src={languageInfo.img} alt="" />
                    </div>
                    {languageInfo && (
                        languageInfo.projects.length > 0 && (
                            <div className="flex flex-col gap-2.5 p-1">
                                <h3 className="text-lg font-semibold">Projects</h3>
                                <hr />
                                <p>{languageInfo.projectsInto}</p>
                                <div className="flex flex-col gap-2.5">
                                    {languageInfo.projects.map((item, index) => (
                                        <Project key={index} data={item} />
                                    ))}
                                </div>
                            </div>
                        )
                    )}
                    <div className="flex w-full">
                        <button className="rounded-md flex-1 bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsOpen(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Project({ data }) {
    return (
        <div className="border-r-4 border-indigo-600">
            <p className="font-bold">{data.name}</p>
            <p className="text-sm sm:text-base">{data.description}</p>
            <div className="flex justify-center items-center gap-2.5 my-2.5 flex-col sm:flex-row">
                {data.repo && (<p><a href={data.repo} target="_blank"><button className="p-1 px-1.5 text-slate-50 font-semibold rounded-md bg-slate-900 hover:bg-slate-950 transition-all">&gt; GitHub Repo &lt;</button></a></p>)}
                {data.site && (<p><a href={data.site} target="_blank"><button className="p-1 px-1.5 text-slate-50 font-semibold rounded-md bg-lime-600 hover:bg-lime-700 transition-all">&gt; Live Site &lt;</button></a></p>)}
            </div>
        </div>
    )
}
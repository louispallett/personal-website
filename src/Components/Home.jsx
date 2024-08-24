import homeImg from "/assets/images/home-img.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Fade, Slide, JackInTheBox } from "react-awesome-reveal";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import { Babel, Bootstrap, CSS, HTML, JavaScript, Jest, NPM, React, 
    ReactRouter, SASS, TailwindCSS, Webpack, ViteJS, Express, MongoDB, NodeJS, 
    Bash, C, Git, Java, Python } from "./Languages";

export default function Home() {
    const [welcome, setWelcome] = useState(true);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const handleWelcome = () => {
            // const hasWelcomed = localStorage.getItem('hasWelcomed');
    
            // if (!hasWelcomed) {
                setTimeout(() => {
                    setExiting(true);
                }, 1000);
                setTimeout(() => {
                    setWelcome(false);
                    localStorage.setItem('hasWelcomed', 'true'); 
                }, 2000);
            // } else {
            //     setWelcome(false);
            // }
        }
        handleWelcome();
    }, []);

    return (
        <>
            {welcome ? (
                <section className="flex items-center justify-center my-28 mb-48 dark:text-slate-100">
                    <div className={exiting ? "font-mania text-4xl sm:text-6xl dark:text-slate-100 animate-ping animate-once animate-duration-[1250ms] animate-ease-in-out" : "font-mania text-4xl sm:text-6xl dark:text-slate-100 animate-fade-down animate-duration-1000 animate-ease-in-out"}>
                        <p className="text-center">Home</p>
                    </div>
                </section>
            ) : (
                <>
                    <section className="flex items-center justify-center my-28 mb-24 sm:mb-48 md:mb-64 dark:text-slate-100">
                        <div className="flex items-center gap-5">
                            <Fade triggerOnce delay={1000}>
                                <img src={homeImg} className="w-96 rounded-full shadow-[5px_5px_0px_0px_rgba(109,40,217)]" alt="" />
                            </Fade>
                            <div>
                                <div className="flex flex-1 text-3xl sm:text-5xl md:text-7xl">
                                    <div className="flex-1 font-mania">
                                        <p id="name1" className="text-right">Louis</p>
                                        <p id="name2" className="my-5">Nicholson</p>
                                        <p id="name3">Pallett</p>
                                    </div>
                                </div>
                                <p id="name4" className="relative text-xl sm:text-2xl md:text-4xl font-mania text-right py-5">Web Developer</p>
                            </div>
                        </div>
                    </section>
                    <Fade triggerOnce>
                        <div className="flex justify-center items-center p-2.5">
                            <ChevronDoubleDownIcon className="h-12 w-12 dark:fill-slate-50 animate-bounce animate-infinite animate-duration-1000 animate-ease-in"/>
                        </div>
                    </Fade>
                    <JackInTheBox triggerOnce >
                        <AboutMe />
                    </JackInTheBox>
                    <Technical />
                    <SoftSkills />
                </>
            )}
        </>
    )
}

function AboutMe() {
    return (
        <section className="flex flex-col items-center p-2.5 ml-2.5 bg-indigo-500 dark:bg-indigo-600 rounded-ss-2xl lg:rounded-ss-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
            <section className="lg:pl-52 max-w-maxArticle dark:text-slate-100">
                <h3 className="p-5 text-3xl sm:text-5xl font-popcorn text-center">About Me</h3>
                <p className="my-2.5 text-lg">
                    Based in the city of Bristol, UK, I am a History graduate and self-taught web developer. 
                </p>
                <p className="my-2.5 sm:text-lg">
                    In early 2023, I started teaching myself web design. I started off with <a href="" className="hover:text-lime-500 transition-all"><b>The Odin Project</b></a>'s course in full-stack web development, covering a range of topics: 
                    from the basics of HTML, CSS, and JavaScript, to modern frontend frameworks, such as <a href="" className="hover:text-lime-500 transition-all"><b>React</b></a>, and backend frameworks using NodeJS, such as <a href="" className="hover:text-lime-500 transition-all"><b>Express</b></a>, 
                    along with NoSQL data handling with <a href="" className="hover:text-lime-500 transition-all"><b>MongoDB</b></a>.
                </p>
                <p className="my-2.5 sm:text-lg">
                    Along with The Odin Project, I also completed Harvard's <a href="" className="hover:text-lime-500 transition-all"><b>CS50x: An Introduction to Computer Science</b></a>, covering core concepts such as data structures, memory management, algorithms (specific algorithms like bubble sort, 
                    merge sort and binary search, as well as time and space complexity), using both C and Python.
                </p>
                <p className="my-2.5 sm:text-lg">
                    Ensuring that I have a solid foundation in Computer Science, I completed <a href="" className="hover:text-lime-500 transition-all"><b>Code Chef</b></a>'s Data Structures and Algorithms course, which covers more advanced concepts such as Graphs, Bit Manipulation, Number Theory, and Tries. Whilst it's entirely possible to build websites without 
                    knowledge of and practice in these concepts, it's important when creating full-stack applications, especially when manipulating data on the backend. I used these concepts in a couple of my latest projects.
                </p>
                <p className="my-2.5 sm:text-lg">
                    Finally, the most important contribution to teaching myself web development has been building projects. This is the best way to learn and I've been building small projects as part of my web development journey since week 1. You'll find my latest projects on the <Link to="/projects" className="hover:text-lime-500 transition-all"><b>Projects Page</b></Link>.
                </p>
            </section>
        </section>
    )
}

function Technical() {
    const [isBabel, setIsBabel] = useState(false);
    const [isBootstrap, setIsBootstrap] = useState(false);
    const [isCSS, setIsCSS] = useState(false);
    const [isHTML, setIsHTML] = useState(false);
    const [isJavaScript, setIsJavaScript] = useState(false);
    const [isJest, setIsJest] = useState(false);
    const [isNPM, setIsNPM] = useState(false);
    const [isReact, setIsReact] = useState(false);
    const [isReactRouter, setIsReactRouter] = useState(false);
    const [isSASS, setIsSASS] = useState(false);
    const [isTailwindCSS, setIsTailwindCSS] = useState(false);
    const [isWebpack, setIsWebpack] = useState(false);
    const [isViteJS, setIsViteJS] = useState(false);
    const [isExpress, setIsExpress] = useState(false);
    const [isMongoDB, setIsMongoDB] = useState(false);
    const [isNodeJS, setIsNodeJS] = useState(false);
    const [isBash, setIsBash] = useState(false);
    const [isC, setIsC] = useState(false);
    const [isGit, setIsGit] = useState(false);
    const [isJava, setIsJava] = useState(false);
    const [isPython, setIsPython] = useState(false);

    return (
        <section className="flex flex-col items-center p-2.5">
            <section className="dark:text-slate-100 flex flex-col items-center">
                <Slide triggerOnce >
                    <div className="max-w-maxArticle text-center">
                        <h3 className="p-5 text-3xl sm:text-5xl font-popcorn text-center">Technical Skills and Knowledge</h3>
                        <p className="sm:text-lg my-10">
                            I've learned and used a lot of different languages and technologies over the last couple of years. I've listed them below - you can click on any of them to read more about my experience using them and what projects best demonstrate my usage of them.
                        </p>
                    </div>
                </Slide>
                <Fade cascade damping={0.25} triggerOnce delay={100} >
                    <h3 className="text-xl sm:text-2xl my-2.5 font-popcorn">Frontend</h3>
                    <fieldset id="frontend" className="sm:max-w-minArticle shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] border-slate-900 dark:border-slate-200 text-slate-50">
                        <div onClick={() => setIsBabel(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" />
                            <p>Babel</p>
                            <Babel isBabel={isBabel} setIsBabel={setIsBabel} />
                        </div>
                        <div onClick={() => setIsBootstrap(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                            <p>Bootstrap</p>
                            <Bootstrap isBootstrap={isBootstrap} setIsBootstrap={setIsBootstrap} />
                        </div>
                        <div onClick={() => setIsCSS(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                            <p>CSS</p>
                            <CSS isCSS={isCSS} setIsCSS={setIsCSS} />
                        </div>
                        <div onClick={() => setIsHTML(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                            <p>HTML</p>
                            <HTML isHTML={isHTML} setIsHTML={setIsHTML} />
                        </div>
                        <div onClick={() => setIsJavaScript(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                            <p>JavaScript</p>
                            <JavaScript isJavaScript={isJavaScript} setIsJavaScript={setIsJavaScript} />
                        </div>
                        <div onClick={() => setIsJest(true)}>
                            <svg viewBox="0 0 128 128">
                                <path fill="#ffffff" d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"></path>
                            </svg>
                            <p>Jest</p>
                            <Jest isJest={isJest} setIsJest={setIsJest} />
                        </div>
                        <div onClick={() => setIsNPM(true)}>
                            <svg viewBox="0 0 128 128">
                                <path fill="#f22816" d="M2 38.5h124v43.71H64v7.29H36.44v-7.29H2zm6.89 36.43h13.78V53.07h6.89v21.86h6.89V45.79H8.89zm34.44-29.14v36.42h13.78v-7.28h13.78V45.79zm13.78 7.29H64v14.56h-6.89zm20.67-7.29v29.14h13.78V53.07h6.89v21.86h6.89V53.07h6.89v21.86h6.89V45.79z"></path>
                            </svg>
                            <p>npm</p>
                            <NPM isNPM={isNPM} setIsNPM={setIsNPM} />
                        </div>
                        <div onClick={() => setIsReact(true)}>
                            <img id="spinner" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                            <p>React</p>
                            <React isReact={isReact} setIsReact={setIsReact} />
                        </div>
                        <div onClick={() => setIsReactRouter(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
                            <p>React Router</p>
                            <ReactRouter isReactRouter={isReactRouter} setIsReactRouter={setIsReactRouter} />
                        </div>
                        <div onClick={() => setIsSASS(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                            <p>SASS</p>
                            <SASS isSASS={isSASS} setIsSASS={setIsSASS} />
                        </div>
                        <div onClick={() => setIsTailwindCSS(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                            <p>TailwindCSS</p>
                            <TailwindCSS isTailwindCSS={isTailwindCSS} setIsTailwindCSS={setIsTailwindCSS} />
                        </div>
                        <div onClick={() => setIsWebpack(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
                            <p>Webpack</p>
                            <Webpack isWebpack={isWebpack} setIsWebpack={setIsWebpack} />
                        </div>
                        <div onClick={() => setIsViteJS(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                            <p>ViteJS</p>
                            <ViteJS isViteJS={isViteJS} setIsViteJS={setIsViteJS} />
                        </div>
                    </fieldset>
                </Fade>
                <Fade cascade damping={0.25} triggerOnce delay={100} >
                    <h3 className="text-xl sm:text-2xl my-2.5 font-popcorn">Backend</h3>
                    <fieldset id="backend" className="sm:max-w-minArticle shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] border-slate-900 dark:border-slate-200 text-slate-50">
                        <div onClick={() => setIsExpress(true)}>
                            <svg viewBox="0 0 128 128">
                                <path fill="#ffffff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                            </svg>
                            <p>Express</p>
                            <Express isExpress={isExpress} setIsExpress={setIsExpress} />
                        </div>
                        <div onClick={() => setIsMongoDB(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                            <p>MongoDB</p>
                            <MongoDB isMongoDB={isMongoDB} setIsMongoDB={setIsMongoDB} />
                        </div>
                        {/* <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                            <p>MYSQL</p>
                        </div> */}
                        <div onClick={() => setIsNodeJS(true)}>
                            <svg viewBox="0 0 128 128">
                                <path fill="#ffffff" d="M86.072 24.664a.71.71 0 0 0-.351.09.755.755 0 0 0-.375.637v18.93a.564.564 0 0 1-.264.464.549.549 0 0 1-.52 0l-3.066-1.773a1.486 1.486 0 0 0-1.478 0L67.75 50.146a1.48 1.48 0 0 0-.754 1.28v14.238c0 .524.291 1.021.754 1.283l12.27 7.135a1.486 1.486 0 0 0 1.476 0l12.27-7.135c.463-.262.754-.759.754-1.283V30.168c0-.553-.291-1.05-.754-1.31l-7.32-4.104a.836.836 0 0 0-.374-.09zM13.686 42.43c-.23 0-.461.086-.663.2L.753 49.739A1.493 1.493 0 0 0 0 51.047l.03 19.101c0 .263.142.526.374.643a.656.656 0 0 0 .725 0l7.295-4.193a1.48 1.48 0 0 0 .75-1.282v-8.939c0-.524.29-1.021.754-1.283l3.095-1.805a1.39 1.39 0 0 1 .752-.203c.26 0 .522.057.725.203l3.096 1.805c.463.262.754.759.754 1.283v8.94c0 .522.288 1.02.75 1.28l7.236 4.194a.704.704 0 0 0 .752 0 .724.724 0 0 0 .377-.643V51.047c0-.524-.29-1.02-.754-1.283L14.47 42.63a1.763 1.763 0 0 0-.664-.201h-.121zm100.67.207v.002l-.002.002c-.253 0-.505.065-.737.197l-12.271 7.13c-.463.264-.75.759-.75 1.284v14.24c0 .524.287 1.02.75 1.281l12.183 6.989a1.43 1.43 0 0 0 1.448 0l7.38-4.133a.724.724 0 0 0 .375-.643.724.724 0 0 0-.375-.64L110.03 61.21a.76.76 0 0 1-.375-.645V56.11a.72.72 0 0 1 .375-.638l3.854-2.213a.705.705 0 0 1 .752 0l3.845 2.213a.762.762 0 0 1 .377.638v3.494c0 .263.144.525.375.641a.704.704 0 0 0 .754 0l7.291-4.28a1.46 1.46 0 0 0 .727-1.28V51.22c0-.524-.292-1.019-.727-1.282l-12.181-7.101a1.499 1.499 0 0 0-.74-.201zm-67.043.049a1.374 1.374 0 0 0-.682.183l-12.17 7.067 4.258 7.81L47.457 42.7a2 2 0 0 0-.143-.013h-.002zm.566.148 8.607 14.814 4.045-7.445a1.34 1.34 0 0 0-.25-.201l-6.271-3.643-6.037-3.488c-.03-.015-.063-.025-.094-.037zm-.25.06-8.774 15.104 8.702 15.965c.024-.005.048-.007.072-.014l8.719-16.047-8.72-15.007zm-13.377 7.172a1.35 1.35 0 0 0-.576 1.123V65.49c0 .228.062.45.168.647l4.728-8.143-4.32-7.928zm26.45.342-4.071 7.49 4.318 7.434V51.189c0-.28-.092-.553-.248-.78zm20.056 2.865c.065 0 .13.015.19.045l4.193 2.448c.116.058.175.201.175.318v4.893c0 .146-.06.264-.175.322l-4.196 2.445a.431.431 0 0 1-.377 0l-4.195-2.443c-.116-.058-.176-.205-.176-.322v-4.893c0-.146.061-.261.176-.32l4.195-2.448a.425.425 0 0 1 .19-.045zm33.555 1.98a.26.26 0 0 0-.145.046l-2.346 1.369a.3.3 0 0 0-.142.26v2.74c0 .116.055.204.142.262l2.346 1.369a.262.262 0 0 0 .289 0l2.344-1.37a.308.308 0 0 0 .144-.261V56.93a.303.303 0 0 0-.144-.26l-2.344-1.371a.26.26 0 0 0-.144-.043v-.002zm-57.819 2.9-8.512 15.665.014-.007 12.287-7.137c.343-.194.563-.526.637-.903l-4.426-7.619zm-17.783.095-4.715 8.117c.1.123.217.23.35.31L46.5 73.737l.13.075h.003a1.377 1.377 0 0 0 .3.126c.031.01.062.015.092.022.06.013.118.022.178.027.029.003.057.002.086.002l-8.578-15.74zm24.51 13.393c-.427 0-.853.1-1.215.304l-11.55 6.73A2.457 2.457 0 0 0 49.24 80.8v13.42c0 .874.463 1.689 1.215 2.127l3.041 1.746c1.475.728 1.995.724 2.66.724 2.17 0 3.416-1.338 3.416-3.638V81.936a.356.356 0 0 0-.345-.352h-1.475a.356.356 0 0 0-.352.352v13.248c0 1.019-1.066 2.039-2.773 1.166l-3.156-1.834c-.116-.058-.174-.207-.174-.323V80.768c0-.116.058-.263.174-.32l11.545-6.696c.087-.058.232-.058.35 0l11.544 6.695c.115.06.176.176.176.32v13.424c0 .145-.06.265-.176.323l-11.547 6.726c-.087.058-.232.058-.35 0l-2.949-1.777c-.088-.058-.204-.086-.29-.03-.81.468-.953.528-1.735.79-.174.058-.463.172.115.492l3.852 2.303c.376.203.78.318 1.215.318.434 0 .866-.115 1.213-.26L75.98 96.35a2.463 2.463 0 0 0 1.215-2.13V80.8c0-.874-.463-1.686-1.215-2.123l-11.546-6.73a2.488 2.488 0 0 0-1.213-.305zm18.027 6.129a2.236 2.236 0 0 0-2.227 2.244 2.236 2.236 0 0 0 2.227 2.242c1.217 0 2.23-1.02 2.23-2.242a2.254 2.254 0 0 0-2.23-2.243v-.001zm-.03.376h.003a1.86 1.86 0 0 1 1.883 1.868c0 1.02-.841 1.89-1.883 1.89-1.012 0-1.854-.842-1.854-1.89s.87-1.866 1.852-1.868zm-.81.614v2.56h.494v-1.013h.438c.174 0 .23.058.26.203 0 .03.086.669.086.785h.52c-.06-.116-.087-.468-.116-.672-.028-.32-.056-.551-.404-.58.174-.059.46-.145.46-.611 0-.67-.58-.67-.869-.67l-.869-.002zm.438.408h.402c.146 0 .379 0 .379.35 0 .116-.059.35-.379.35h-.402v-.7zm-14.469 2.01c-3.3 0-5.272 1.399-5.272 3.758 0 2.534 1.969 3.228 5.124 3.548 3.79.38 4.08.935 4.08 1.692 0 1.31-1.042 1.861-3.473 1.861-3.068 0-3.735-.757-3.967-2.299 0-.176-.14-.29-.314-.29H61.05a.35.35 0 0 0-.35.35c0 1.98 1.044 4.307 6.11 4.307 3.645 0 5.755-1.456 5.755-4.02 0-2.503-1.68-3.174-5.238-3.64-3.59-.466-3.965-.728-3.965-1.572 0-.699.32-1.629 2.98-1.629 2.375 0 3.272.524 3.62 2.125a.34.34 0 0 0 .316.264h1.534c.087 0 .177-.057.236-.115a.476.476 0 0 0 .086-.264c-.231-2.795-2.053-4.076-5.758-4.076z"></path>
                            </svg>
                            <p>NodeJS</p>
                            <NodeJS isNodeJS={isNodeJS} setIsNodeJS={setIsNodeJS} />
                        </div>
                        {/* <div>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                            <p>SPRING</p>
                        </div> */}
                    </fieldset>
                </Fade>
                <Fade cascade damping={0.25} triggerOnce delay={100} >
                    <h3 className="text-xl sm:text-2xl my-2.5 font-popcorn">Other</h3>
                    <fieldset id="other" className="sm:max-w-minArticle shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] text-slate-50 border-slate-900 dark:border-slate-200">
                        <div onClick={() => setIsBash(true)}>
                            <svg viewBox="0 0 128 128">
                                <path fill="#ffffff" d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm26.34-60.5l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"></path><path fill="#4FA847" d="M99.12 90.73l-9.4 5.62c-.25.15-.43.31-.43.61v2.46c0 .3.2.43.45.28l9.54-5.8c.25-.15.29-.42.29-.72v-2.17c0-.3-.2-.42-.45-.28z"></path>
                            </svg>
                            <p>Bash</p>
                            <Bash isBash={isBash} setIsBash={setIsBash} />
                        </div>
                        <div onClick={() => setIsC(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/>
                            <p className="">C</p>
                            <C isC={isC} setIsC={setIsC} />
                        </div>
                        <div onClick={() => setIsGit(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                            <p>Git</p>
                            <Git isGit={isGit} setIsGit={setIsGit} />
                        </div>
                        <div onClick={() => setIsJava(true)}>
                            <svg viewBox="0 0 128 128">
                                <path fill="#EA2D2E" d="M47.617 98.12c-19.192 5.362 11.677 16.439 36.115 5.969-4.003-1.556-6.874-3.351-6.874-3.351-10.897 2.06-15.952 2.222-25.844 1.092-8.164-.935-3.397-3.71-3.397-3.71zm33.189-10.46c-14.444 2.779-22.787 2.69-33.354 1.6-8.171-.845-2.822-4.805-2.822-4.805-21.137 7.016 11.767 14.977 41.309 6.336-3.14-1.106-5.133-3.131-5.133-3.131zm11.319-60.575c.001 0-42.731 10.669-22.323 34.187 6.024 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.793 15.634-29.58zm9.998 81.144s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.095.171-4.45-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.952-3.487-32.013 6.85-13.742 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM85 77.896c2.395-1.634 5.703-3.053 5.703-3.053s-9.424 1.685-18.813 2.474c-11.494.964-23.823 1.154-30.012.326-14.652-1.959 8.033-7.348 8.033-7.348s-8.812-.596-19.644 4.644C17.455 81.134 61.958 83.958 85 77.896zm5.609 15.145c-.108.29-.468.616-.468.616 31.273-8.221 19.775-28.979 4.822-23.725-1.312.464-2 1.543-2 1.543s.829-.334 2.678-.72c7.559-1.575 18.389 10.119-5.032 22.286zM64.181 70.069c-4.614-10.429-20.26-19.553.007-35.559C89.459 14.563 76.492 1.587 76.492 1.587c5.23 20.608-18.451 26.833-26.999 39.667-5.821 8.745 2.857 18.142 14.688 28.815zm27.274 51.748c-19.187 3.612-42.854 3.191-56.887.874 0 0 2.874 2.38 17.646 3.331 22.476 1.437 57-.8 57.816-11.436.001 0-1.57 4.032-18.575 7.231z"></path>
                            </svg>
                            <p>Java</p>
                            <Java isJava={isJava} setIsJava={setIsJava} />
                        </div>
                        <div onClick={() => setIsPython(true)}>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
                            <p>Python</p>
                            <Python isPython={isPython} setIsPython={setIsPython} />
                        </div>
                    </fieldset>
                </Fade>
                <Fade triggerOnce >
                    <div className="max-w-maxArticle text-center">
                        <p className="sm:text-lg my-10">
                            To see these languages and technologies used in action, please see my recent projects in the Projects section.
                        </p>
                    </div>
                </Fade>
            </section>
        </section>
    )
}

function SoftSkills() {
    return (
        <section className="flex flex-col items-center mr-2.5 p-2.5 bg-lime-500 dark:bg-lime-700 rounded-se-3xl lg:rounded-se-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
            <section>
                <div className="max-w-maxArticle dark:text-slate-100 lg:pr-52">
                    <Slide triggerOnce >
                        <h3 className="p-5 text-3xl sm:text-5xl font-popcorn text-center">Soft Skills and Experience</h3>
                        <p className="sm:text-lg">
                            Whilst I want to show off the projects I have built and my technical knowledge in web development and software, I also have experience in other industries which has allowed me to develop and improve various soft skills. These skills have been vital in my professional experience
                            and have allowed me to be successful in the roles I've held. I currently work as an Editorial Assistant for the publishing house Routledge/Taylor & Francis, and previously worked as an Indexer and Customer Service Assistant at the same company, as well as a Data Analyst at the
                            Office for Students (OfS).
                        </p>
                        <div className="text-right my-5 sm:ml-10">
                            <h5 className="font-popcorn font-bold text-2xl sm:text-3xl my-2.5">Organisation</h5>
                            <p>
                                Organisation has been a key skill I have utilised and developed during my professional history. In my current role as an Editorial Assistant, I have to balance a breadth of work, from drawing up and sending out contracts, finding reviewers for proposals and manuscripts, checking the quality of manuscripts and preparing them for production by the Production Department,
                                and communicating with authors and editors to resolve any queries or issues they have. This demands a that I am highly organised, hardworking, and focused. I ensure that I take effective notes and create clear comments for myself and colleagues to use.
                            </p>
                        </div>
                        <div className="my-5 sm:mr-10">
                            <h5 className="font-popcorn font-bold text-2xl sm:text-3xl my-2.5">Attention to Detail</h5>
                            <p>
                                Whilst I have a breadth and diversity of work, my current and previous roles require/required me to pay close attention to any rules, guidelines, and nuances I would encounter during my work.
                            </p>
                        </div>
                        <div className="text-right my-5 sm:ml-10">
                            <h5 className="font-popcorn font-bold text-2xl sm:text-3xl my-2.5">Problem Solving</h5>
                            <p>
                                Problem solving has been a critical part of all my professional roles and has obviously been an extremely useful skill to utilise and develop when building technical projects since I started teaching myself how to code.
                            </p>
                        </div>
                        <div className="my-5 sm:mr-10">
                            <h5 className="font-popcorn font-bold text-2xl sm:text-3xl my-2.5">Independant Working</h5>
                            <p>
                                My current role as an Editorial Assistant - as well as both my previous roles as an Indexer and a Data Analyst for the OfS - have all required me to work independantly on tasks, learning guidelines, methods, and approaches quickly. In my current role, I am in charge of the administrative side of a book list, handling author queries, manuscript submissions, contract signings, etc.
                                I am required to work independantly to hit challanging targets and short deadlines.
                            </p>
                        </div>
                        <div className="text-right my-5 sm:ml-10">
                            <h5 className="font-popcorn font-bold text-2xl sm:text-3xl my-2.5">Teamwork</h5>
                            <p>Although my professional experience has involved a lot of independant work, I have always had to work collabratively with colleagues and across departments to ensure </p>
                        </div>
                    </Slide>
                </div>
            </section>
        </section>
    )
}
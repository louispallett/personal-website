import homeImg from "/assets/images/home-img.jpg";
import { ChevronDoubleDownIcon } from "@heroicons/react/16/solid";
import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <section className="flex items-center justify-center my-28 mb-48 dark:text-slate-100">
                <div className="flex items-center gap-5">
                    <img src={homeImg} className="w-96 rounded-full shadow-[5px_5px_0px_0px_rgba(109,40,217)]" alt="" />
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
            <img src={ChevronDoubleDownIcon} className="h-10 fill-white" alt="" />
            <AboutMe />
            <Technical />
            <SoftSkills />
        </>
    )
}

function AboutMe() {
    return (
        <section className="flex flex-col items-center p-2.5 ml-2.5 bg-indigo-600 rounded-ss-2xl lg:rounded-ss-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
            <section className="lg:pl-52 max-w-maxArticle text-slate-100">
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
    return (
        <section className="flex flex-col items-center p-2.5">
            <section className="dark:text-slate-100 flex flex-col items-center">
                <div className="max-w-maxArticle text-center">
                    <h3 className="p-5 text-3xl sm:text-5xl font-popcorn text-center">Technical Skills and Knowledge</h3>
                    <p className="sm:text-lg my-10">
                        I've learned and used a lot of different languages and technologies over the last couple of years. I've listed them below - you can click on any of them to read more about my experience using them and what projects best demonstrate my usage of them.
                    </p>
                </div>
                <h3 className="text-xl sm:text-2xl my-2.5 font-popcorn">Frontend</h3>
                <fieldset id="frontend" className="sm:max-w-minArticle">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" />
                        <p className="text-slate-50">BABEL</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" />
                        <p className="text-slate-50">BOOTSTRAP</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
                        <p className="text-slate-50">CSS</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"/>
                        <p className="text-slate-50">HTML</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
                        <p className="text-slate-50">JAVASCRIPT</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" />
                        <p className="text-slate-50">JEST</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg" />
                        <p className="text-slate-50">NPM</p>
                    </div>
                    <div>
                        <img id="spinner" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
                        <p className="text-slate-50">REACT</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" />
                        <p className="text-slate-50">REACT ROUTER</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" />
                        <p className="text-slate-50">SASS</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" />
                        <p className="text-slate-50">TAILWINDCSS</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg" />
                        <p className="text-slate-50">WEBPACK</p>
                    </div>
                    <div> 
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg" />
                        <p className="text-slate-50">VITEJS</p>
                    </div> 
                </fieldset>
                <h3 className="text-xl sm:text-2xl my-2.5 font-popcorn">Backend</h3>
                <fieldset id="backend" className="sm:max-w-minArticle">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" />
                        <p className="text-slate-50">MONGODB</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" />
                        <p className="text-slate-50">MYSQL</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
                        <p className="text-slate-50">NODEJS</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg" />
                        <p className="text-slate-50">SPRING</p>
                    </div>
                </fieldset>
                <h3 className="text-xl sm:text-2xl my-2.5 font-popcorn">Other</h3>
                <fieldset id="other" className="sm:max-w-minArticle">
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg"/>
                        <p className="text-slate-50">C</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"/>
                        <p className="text-slate-50">GIT</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" />
                        <p className="text-slate-50">JAVA</p>
                    </div>
                    <div>
                        <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"/>
                        <p className="text-slate-50">PYTHON</p>
                    </div>
                </fieldset>
                <div className="max-w-maxArticle text-center">
                    <p className="sm:text-lg my-10">
                        To see these languages and technologies used in action, please see my recent projects in the Projects section.
                    </p>
                </div>
            </section>
        </section>
    )
}

function SoftSkills() {
    return (
        <section className="flex flex-col items-center mr-2.5 p-2.5 bg-lime-600 rounded-se-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
            <section>
                <div className="max-w-maxArticle text-slate-100 lg:pr-52">
                    <h3 className="p-5 text-3xl sm:text-5xl font-popcorn text-center">Soft Skills and Experience</h3>
                    <p className="sm:text-lg">
                        Whilst I want to show off the projects I have built and my technical knowledge in web development and software, I also have experience in other industries which has allowed me to develop and improve various soft skills. These skills have been vital in my professional experience 
                        and have allowed me to be successful in the roles I've held. These are skills such as:
                    </p>
                    <div className="text-right my-2.5 ml-10">
                        <h5 className="font-popcorn text-2xl sm:text-3xl">Organisation</h5>
                        <p>Whilst I want to show off the projects I have built and my technical knowledge in web development and software, I also have experience in other industries which has allowed me to develop and improve various soft skills. These skills have been vital in my professional experience and have allowed me to be successful in the roles I've held. These are skills such as:</p>
                    </div>
                    <div className="my-2.5 mr-10">
                        <h5 className="font-popcorn text-2xl sm:text-3xl">Attention to Detail</h5>
                        <p>Whilst I want to show off the projects I have built and my technical knowledge in web development and software, I also have experience in other industries which has allowed me to develop and improve various soft skills. These skills have been vital in my professional experience and have allowed me to be successful in the roles I've held. These are skills such as:</p>
                    </div>
                    <div className="text-right my-2.5 ml-10">
                        <h5 className="font-popcorn text-2xl sm:text-3xl">Problem Solving</h5>
                        <p>Whilst I want to show off the projects I have built and my technical knowledge in web development and software, I also have experience in other industries which has allowed me to develop and improve various soft skills. These skills have been vital in my professional experience and have allowed me to be successful in the roles I've held. These are skills such as:</p>
                    </div>
                    <div className="my-2.5 mr-10">
                        <h5 className="font-popcorn text-2xl sm:text-3xl">Independant Working</h5>
                        <p>Whilst I want to show off the projects I have built and my technical knowledge in web development and software, I also have experience in other industries which has allowed me to develop and improve various soft skills. These skills have been vital in my professional experience and have allowed me to be successful in the roles I've held. These are skills such as:</p>
                    </div>
                    <div className="text-right my-2.5 ml-10">
                        <h5 className="font-popcorn text-2xl sm:text-3xl">Teamwork</h5>
                        <p>Whilst I want to show off the projects I have built and my technical knowledge in web development and software, I also have experience in other industries which has allowed me to develop and improve various soft skills. These skills have been vital in my professional experience and have allowed me to be successful in the roles I've held. These are skills such as:</p>
                    </div>
                </div>
            </section>
        </section>
    )
}
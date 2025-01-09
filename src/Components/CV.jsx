import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import cv from "/documents/CV.pdf";

export default function CV() {
    const [welcome, setWelcome] = useState(true);
    const [exiting, setExiting] = useState(false);

    useEffect(() => {
        const handleWelcome = () => {
            setTimeout(() => {
                setExiting(true);
            }, 1000);
            setTimeout(() => {
                setWelcome(false);
            }, 2000);
        }
        handleWelcome();
    }, []);

    return (
        <>
            {welcome ? (
                <section id="flex-center" className="my-28 mb-48">
                    <div 
                        id="welcome-element" 
                        className={exiting ? "animate-ping animate-once animate-duration-[1250ms] animate-ease-in-out" : "animate-fade-down animate-duration-1000 animate-ease-in-out"}
                    >
                        <p className="text-center">CV</p>
                    </div>
                </section>
            ) : (
                <section className="my-5 dark:text-slate-50 max-w-6xl">
                    <div className="p-2.5 sm:p-5 text-sm sm:text-base">
                        <h1 className="arch-headers italic text-4xl">Curriculum Vitae</h1>
                        <div className="flex justify-center my-5">
                            <DownloadCV />
                        </div>
                        <h2 className="text-xl sm:text-3xl text-center font-bold my-5">Louis Nicholson-Pallett</h2>
                        <div className="text-center my-2.5">
                            <p>louis.pallett@outlook.com</p>
                            <p>Bristol</p>
                        </div>
                        <hr  className="mx-8 sm:mx-16 md:mx-24"/>
                        <div className="flex flex-col md:grid md:grid-cols-2 my-5 gap-5 md:gap-2.5">
                            <About />
                            <Projects />
                        </div>
                        <div className="flex flex-col lg:grid lg:grid-cols-2 my-5 gap-5 md:gap-2.5">
                            <TechSkills />
                            <SoftSkills />
                        </div>
                        <div className="flex flex-col gap-5">
                            <CareerHistory />
                            <Education />
                        </div>
                    </div>
                </section>    
            )}
        </>
    )
}

function DownloadCV() {
    return (
        <a 
            href={cv} download="louis_nicholson_pallett_cv.pdf" 
            className="flex justify-center items-center gap-2.5 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-md border-2 border-slate-950 dark:border-slate-100 transition-all">
            <p>Download CV</p>
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path>
                </g>
            </svg>
        </a>
    )
}

function About() {
    return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-pink-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <h2 className="cv-subheaders">About Me</h2>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <p>
                    I am a resourceful and accomplished professional with over five years of experience in customer-facing, administrative, and high-pressure roles. 
                    Over the last two years, I have pivoted towards a career in technology by studying software and web development while working full-time. 
                    My training includes The Odin Project’s full-stack web development course (Node.js, React, and MongoDB) and Harvard University’s CS50X: Introduction to Computer Science (C and Python).
                </p>
                <p>
                    I am seeking a role that allow me to combine my technical and problem-solving skills with my strong organizational abilities. My personal site features detailed information about my technical 
                    expertise and portfolio of projects, including a full-stack tennis tournament web application.
                </p>
            </div>
        </div>
    )
}

function Projects() {
	return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-indigo-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <h2 className="cv-subheaders">Projects</h2>
            </div>
            <div className="flex flex-1 flex-col gap-2.5 p-2.5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <p>
                    Creating projects has been a key part of my learning of web development and I learned through that process. My largest project is LowPal Tennis Tournament, a full-stack web application 
                    with real-world usage – it allows a club to run a tennis tournament through allowing users to sign up, view matches, and update match results, as well as automating the process of assigning 
                    players to teams and matches through a ‘unique’ server-side algorithm.
                </p>
                <p>
                    You can read more about this project and others on my <Link to="/projects">personal site</Link>. You'll find a video demonstration there, but if you would like to log into a 'dummy' account, please 
                    get in contact with me and I can provide you with login details.
                </p>
            </div>
        </div>
	)
}

function TechSkills() {
	return (
        <div className="flex flex-1 flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-pink-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] md:bg-indigo-500">
                <h2 className="cv-subheaders">Technical Skills</h2>
            </div>
            <div className="flex flex-1 flex-col gap-2.5">
                <div className="flex flex-col flex-1 flex-wrap justify-between gap-2.5">
                    <div className="flex flex-col lg:flex-row gap-2.5">
                        <div className="flex-1 flex flex-col gap-2.5">
                            <div className="border-2 border-slate-950 dark:border-slate-50 bg-green-600 p-2.5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                                <p className="text-center"><b>Frontend</b></p>
                            </div>
                            <div className="border-2 border-slate-950 dark:border-slate-50 p-2.5 rounded-md flex-1 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                                <ul className="cv-language-list lg:flex-col lg:text-center">
                                    <li>Bootstrap</li>
                                    <li>CSS</li>
                                    <li>HTML</li>
                                    <li>JavaScript</li>
                                    <li>Jest</li>
                                    <li>NPM</li>
                                    <li>React</li>
                                    <li>TailwindCSS</li>
                                    <li>Webpack</li>
                                    <li>ViteJS</li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex-1 flex flex-col gap-2.5">
                            <div className="border-2 border-slate-950 dark:border-slate-50 bg-blue-500 dark:bg-blue-600 p-2.5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                                <p className="text-center"><b>Backend</b></p>
                            </div>
                            <div className="border-2 border-slate-950 dark:border-slate-50 p-2.5 rounded-md flex-1 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                                <ul className="cv-language-list lg:flex-col lg:text-center">
                                    <li>Express</li>
                                    <li>MongoDB</li>
                                    <li>MySQL</li>
                                    <li>Node.js</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2.5">
                        <div className="border-2 border-slate-950 dark:border-slate-50 bg-yellow-600 p-2.5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                            <p className="text-center"><b>Other</b></p>
                        </div>
                        <div className="border-2 border-slate-950 dark:border-slate-50 p-2.5 rounded-md flex-1 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                            <ul className="cv-language-list">
                                <li>Bash</li>
                                <li>C</li>
                                <li>Git</li>
                                <li>Java</li>
                                <li>Linux</li>
                                <li>Python</li>
                                <li>VS Code</li>
                                <li>Windows</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
	)
}

function SoftSkills() {
	return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-indigo-500 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] md:bg-pink-600">
                <h2 className="cv-subheaders">Soft Skills</h2>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <div>
                    <h4 className="font-semibold">Problem Solving</h4>
                    <p className="text-sm">
                        My current and previous roles have required me to identify and work on problems. I have always done this by breaking down large problems into smaller steps: thinking about what the actual problem is, 
                        running through the problem step-by-step, and then planning a solution. I have taken this approach to learning website and software development and when building projects.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold">Exceptional Written and Oral Communication</h4>
                    <p className="text-sm">Experience writing and presenting in both academic and professional environments, including at conferences and technical training for new colleagues.</p>
                </div>
                <div>
                    <h4 className="font-semibold">Highly Organised and Motiviated</h4>
                    <p className="text-sm">
                        My current role involves balancing a large breadth of tasks. It requires me to organise my work strategically and maintain motivation consistently. I have also utilised this
                        when teaching myself web and software development; planning my days and weeks well in order to fit around a full-time job.                        
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold">Ability to learn and work independently</h4>
                    <p className="text-sm">
                        The ability to learn new systems, skills, and guidelines as well as use this knowledge to work independently - has been crucial throughout my professional career.
                        My ability to learn stretches all the way back to my university education and I have most recently implemented it to teach myself website and software development along
                        with some basic computer science.
                    </p>
                </div>
                <div>
                    <h4 className="font-semibold">Teamwork</h4>
                    <p className="text-sm">
                        I've worked as part of different teams both within my own and across departments, completing numerous tasks and working together towards shared targets and aims. I am quick to 
                        create professional relationships with team members and have successfully been part of several teams.
                    </p>
                </div>
            </div>
        </div>
	)
}

function CareerHistory() {
	return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-green-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <h2 className="cv-subheaders">Career History</h2>
            </div>
            <div className="flex flex-col p-2.5 sm:p-5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <div>
                    <div className="md:flex justify-between">
                        <h4 className="font-semibold">Editorial Assistant</h4>
                        <p>June 2021 - (current)</p>
                    </div>
                    <div className="text-sm">
                        <p><i>Taylor & Francis</i>, Informa PLC</p>
                        <ul className="list-disc pl-2.5">
                            <li>Preparing manuscripts for production, drawing up and negotiating contracts, collecting reviews for books, answering client questions.</li>
                            <li>Working closely with a team to achieve collective targets and goals within strict time limits.</li>
                            <li>Working across departments on large projects at every stage of development.</li>
                            <li>Experience using SharePoint, SAP, and Excel.</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="md:flex justify-between">
                        <h4 className="font-semibold">Indexer</h4>
                        <p>March 2020 - June 2021</p>
                    </div>
                    <div className="text-sm">
                        <p><i>Taylor & Francis</i>, Informa PLC</p>
                        <ul className="list-disc pl-2.5">
                            <li>Employing excellent time-management skills whilst inserting a variety of metadata into Microsoft Access.</li>
                            <li>Consistently received positive feedback for accuracy and attention to detail.</li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div>
                    <div className="md:flex justify-between">
                        <h4 className="font-semibold">Data Analyst</h4>
                        <p>November 2019 - February 2020</p>
                    </div>
                    <div className="text-sm">
                        <p><i>The Office for Students</i></p>
                        <ul className="list-disc pl-2.5">
                            <li>Using Microsoft Excel to interpret, verify, and analyse large sets of qualitative data sent in by universities and colleges and assisting these institutions in recording funding allocations.</li>
                            <li>Liasing with both internal departments and external organisations.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
	)
}

function Education() {
	return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-blue-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <h2 className="cv-subheaders">Formal Education</h2>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 sm:p-5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                <div>
                    <div className="md:flex justify-between">
                        <h4 className="font-semibold">University of Oxford</h4>
                        <p>October 2018 - August 2019</p>
                    </div>
                    <div className="flex gap-5 text-sm">
                        <p>MA in Late Antiquity and Byzantine Studies</p>
                        <p><i>Merit</i></p>
                    </div>
                </div>
                <div>
                    <div className="md:flex justify-between">
                        <h4 className="font-semibold">Royal Holloway, University of London</h4>
                        <p>September 2015 - July 2018</p>
                    </div>
                    <div className="flex gap-5 text-sm">
                        <p>BA in History</p>
                        <p><i>First (Hons)</i></p>
                    </div>
                </div>
            </div>
        </div>
	)
}
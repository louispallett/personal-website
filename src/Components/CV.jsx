import cv from "/documents/cv.pdf"

export default function CV() {
    return (
        <section className="my-5 dark:text-slate-50">
            <div className="p-2.5 sm:p-5 text-sm sm:text-base">
                <h1 className="text-center text-2xl sm:text-4xl my-2.5 font-bold italic">Curriculum Vitae</h1>
                <div className="flex justify-center my-5">
                    <DownloadCV />
                </div>
                <h2 className="text-xl sm:text-3xl text-center font-bold my-5">Louis Nicholson-Pallett</h2>
                <div className="text-center my-2.5">
                    <p>+44 7513646798</p>
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
    )
}

function DownloadCV() {
    return (
        <a href={cv} download="louis_nicholson_pallett_cv.pdf" className="flex justify-center items-center gap-2.5 bg-blue-500 hover:bg-blue-700 text-white font-semibold text-sm py-2 px-4 rounded-md border-2 border-slate-950 dark:border-slate-100 transition-all">
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
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-pink-600 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <h2 className="text-xl sm:text-3xl text-center my-2.5 font-popcorn">About Me</h2>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <p>
                    I am a resourceful and accomplished Editorial Assistant seeking a change in career. I have over four years of experience
                    working in administrative, customer-facing, target-driven, and high demanding roles. Over the last 20 months, I have been
                    studying towards a career change in a technology related role – completing, whilst working full-time, The Odin Project’s
                    course in web development (full-stack with NodeJS) and Harvard University’s <i>CS50X: Introduction to Computer Science</i> (C and Python).
                </p>
                <p>
                    <a href="https://github.com/louispallett" className="hover:text-lime-500 transition-all font-semibold">My GitHub</a> has some great examples of the work I’ve done towards my retraining. You will find six
                    repositories pinned, each with their own ReadMe files describing what they do and what skills and knowledge I utilised to create them.
                </p>
            </div>
        </div>
    )
}

function Projects() {
	return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-indigo-500 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <h2 className="text-xl sm:text-3xl text-center my-2.5 font-popcorn">Projects</h2>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <p>
                    You can find a list of highlighted projects on <a href="">my website</a>. These range from fullstack websites using NodeJS and Express to smaller programmes with 
                    specific uses in other languages (such as Bash and Python). Each project page has a detailed description, technical highlights, and a video demonstration (as well 
                    as links to the repositories and, if applicable, live site).
                </p>
                <p>
                    My most recent project is a web application to help run a large tennis tournament for my tennis club. It combines a great deal of my knowledge 
                    of web development and algorithms to generate a full-stack application with real-world usage. Click <a href="" className="hover:text-lime-500 transition-all font-semibold">here</a> to 
                    go to the project's page on my website.
                </p>
            </div>
        </div>
	)
}

function TechSkills() {
	return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-pink-600 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] md:bg-indigo-500">
                <h2 className="text-xl sm:text-3xl text-center my-2.5 font-popcorn">Technical Skills</h2>
            </div>
            <div className="flex flex-col gap-2.5">
                <div className="flex md:flex-col flex-wrap justify-between gap-2.5">
                    <div className="flex-1 flex flex-col gap-2.5">
                        <div className="border-2 border-slate-950 dark:border-slate-50 bg-green-600 p-2.5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="text-center"><b>Frontend</b></p>
                        </div>
                        <div className="border-2 border-slate-950 dark:border-slate-50 p-2.5 rounded-md flex-1 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <ul className="flex flex-wrap justify-center gap-2.5">
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
                        <div className="border-2 border-slate-950 dark:border-slate-50 bg-blue-600 p-2.5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="text-center"><b>Backend</b></p>
                        </div>
                        <div className="border-2 border-slate-950 dark:border-slate-50 p-2.5 rounded-md flex-1 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <ul className="flex flex-wrap justify-center gap-2.5">
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>MySQL</li>
                                <li>NodeJS</li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex-1 flex flex-col gap-2.5">
                        <div className="border-2 border-slate-950 dark:border-slate-50 bg-yellow-600 p-2.5 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <p className="text-center"><b>Other</b></p>
                        </div>
                        <div className="border-2 border-slate-950 dark:border-slate-50 p-2.5 rounded-md flex-1 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <ul className="flex flex-wrap justify-center gap-2.5">
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
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-indigo-500 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] md:bg-pink-600">
                <h2 className="text-xl sm:text-3xl text-center my-2.5 font-popcorn">Soft Skills</h2>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
            <div className="pr-2.5 sm:pr-5">
                    <h4 className="font-semibold">Problem Solving</h4>
                    <p className="text-sm">
                        My current and previous roles have required me to identify and work on problems. I have always done this by breaking down large problems into smaller steps: thinking about what the actual problem is, 
                        running through the problem step-by-step, and then planning a solution. I have taken this approach to learning website and software development and when building projects.
                    </p>
                </div>
                <div className="text-right pl-2.5 sm:pl-5">
                    <h4 className="font-semibold">Exception Written and Oral Communication skills</h4>
                    <p className="text-sm">Experience writing and presenting in both academic and professional environments, including at conferences and technical training for new colleagues.</p>
                </div>
                <div className="pr-2.5 sm:pr-5">
                    <h4 className="font-semibold">Highly Organised and Motiviated</h4>
                    <p className="text-sm">
                        My current role involves balancing a large breadth of tasks. It requires me to organise my work strategically and maintain motivation consistently. I have also utilised this
                        when teaching myself web and software development; planning my days and weeks well in order to fit around a full-time job.                        
                    </p>
                </div>
                <div className="text-right pl-2.5 sm:pl-5">
                    <h4 className="font-semibold">Ability to learn and work independently</h4>
                    <p className="text-sm">
                        The ability to learn new systems, skills, and guidelines as well as use this knowledge to work independently - has been crucial throughout my professional career.
                        My ability to learn stretches all the way back to my university education and I have most recently implemented it to teach myself website and software development along
                        with some basic computer science.
                    </p>
                </div>
                <div className="pr-2.5 sm:pr-5">
                    <h4 className="font-semibold">Teamwork</h4>
                    <p className="text-sm"></p>
                </div>
            </div>
        </div>
	)
}

function CareerHistory() {
	return (
        <div className="flex flex-col gap-2.5">
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-green-600 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <h2 className="text-xl sm:text-3xl text-center my-2.5 font-popcorn">Career History</h2>
            </div>
            <div className="flex flex-col gap-5 p-2.5 sm:p-5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <div>
                    <div className="flex justify-between">
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
                <hr className="mx-5 sm:mx-10"/>
                <div>
                    <div className="flex justify-between">
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
                <hr className="mx-5 sm:mx-10"/>
                <div>
                    <div className="flex justify-between">
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
            <div className="flex flex-col gap-2.5 p-2.5 border-2 border-slate-950 dark:border-slate-100 bg-blue-600 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <h2 className="text-xl sm:text-3xl text-center my-2.5 font-popcorn">Formal Education</h2>
            </div>
            <div className="flex flex-col gap-2.5 p-2.5 sm:p-5 rounded-md border-2 border-slate-950 dark:border-slate-100 bg-slate-100 dark:bg-slate-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                <div>
                    <div className="flex justify-between">
                        <h4 className="font-semibold">University of Oxford</h4>
                        <p>October 2018 - August 2019</p>
                    </div>
                    <div className="flex gap-5 text-sm">
                        <p>MA in Late Antiquity and Byzantine Studies</p>
                        <p><i>Merit</i></p>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between">
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
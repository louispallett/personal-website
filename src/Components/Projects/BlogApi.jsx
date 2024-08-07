import { Fade } from "react-awesome-reveal";

import sonImg from "/assets/images/son-image.svg";

export default function BlogApi() {
    return (
        <section className="border-4 my-5 border-slate-800 dark:border-slate-100 text-slate-50 rounded-lg bg-indigo-600 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
            <div className="p-2.5 sm:p-5">
                <h1 className="text-center text-xl sm:text-2xl my-2.5 font-montserrat">SON Blog - A Newspaper Application</h1>
                <hr  className="mx-15 m-5"/>
                <div className="md:grid md:grid-cols-2">
                    <div>
                        <p className="my-1.5"><a href="https://github.com/louispallett/lowpal-tennis/" className="hover:text-lime-400 transition-all"><b>GitHub repo</b></a></p>
                        <p className="my-1.5"><b>Type</b>: full-stack</p>
                        <p><b>Short Description</b>: <i>Signapore on-Thames</i> is a newspaper site application.</p>
                    </div>
                    <div className="self-center">
                        <div className="flex items-center md:justify-end gap-2.5 my-1.5 sm:my-2.5">
                            <p><b>Frontend</b>:</p>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-4 sm:h-6" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-4 sm:h-6" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-4 sm:h-6"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-4 sm:h-6" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" className="h-4 sm:h-6" />
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-4 sm:h-6"/>
                        </div>
                        <div className="flex items-center md:justify-end gap-2.5 my-1.5 sm:my-2.5">
                            <p><b>Backend</b>:</p>
                            <svg viewBox="0 0 128 128" className="h-4 sm:h-6">
                                    <path fill="#ffffff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                            </svg>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className="h-4 sm:h-6"/>
                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="h-4 sm:h-6"/>
                        </div>
                    </div>
                </div>
                <hr  className="mx-15 m-5"/>
                <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center text-semibold">Long Description</h2>
                <div className="flex gap-2.5">
                    <div className="flex flex-col gap-2.5 text-sm sm:text-base">
                        <p>
                            This application is an ideal site for a small, opinion-based news/newspaper organisation. In its current form, it is styled as a political-opinion site, with articles about current affairs. 
                            It has two frontends - one for members of the public to read articles, sign up accounts, and post comments, and another site designed for writers, where approved writers (who require a 
                            special code to sign-up) can write their own articles, edit, and publish/unpublish them.
                        </p>
                        <p>

                        </p>
                    </div>
                    <Fade delay={1000} triggerOnce>
                        <div className="hidden md:block w-64">
                            <img src={sonImg} alt="" />
                        </div>
                    </Fade>
                </div>
                <p></p>
            </div>
        </section>
    )
}
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

import sonImg from "/assets/images/son-image.svg";

export default function BlogApi() {
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
                        <p className="text-center">SON Blog</p>
                    </div>
                </section>
            ) : (
                <section className="my-5 dark:text-slate-50 max-w-maxArticle">
                    <div className="p-2.5 sm:p-5 text-sm sm:text-base">
                        <h1 className="text-center text-2xl sm:text-4xl my-2.5 font-popcorn">SON Blog - A Newspaper Application</h1>
                        <hr  className="mx-15 m-5"/>
                        <div className="flex flex-col md:grid md:grid-cols-2 md:justify-around">
                            <div>
                                <p className="my-1.5"><b>Type</b>: full-stack</p>
                                <p><b>Short Description</b>: <i>Signapore on-Thames</i> is a full-stack newspaper site application written using React and Express.</p>
                            </div>
                            <div className="flex flex-col items-center md:items-end my-2.5">
                                <div className="flex items-center md:justify-end">
                                    <div className="flex flex-col md:items-end">
                                        <p className="text-xs sm:text-sm my-1 text-center"><b>Frontend</b></p>
                                        <div className="flex gap-2.5 bg-indigo-600 p-1.5 rounded-md">
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" className="h-8 md:h-10" />
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" className="h-8 md:h-10" />
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" className="h-8 md:h-10"/>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="h-8 md:h-10" />
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/reactrouter/reactrouter-original.svg" className="h-8 md:h-10" />
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" className="h-8 md:h-10"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex items-center md:justify-end">
                                    <div className="flex flex-col md:items-end">
                                        <p className="text-xs sm:text-sm my-1 text-center"><b>Backend</b></p>
                                        <div className="flex gap-2.5 bg-indigo-600 p-1.5 rounded-md">
                                            <svg viewBox="0 0 128 128" className="h-8 md:h-10">
                                                    <path fill="#ffffff" d="M126.67 98.44c-4.56 1.16-7.38.05-9.91-3.75-5.68-8.51-11.95-16.63-18-24.9-.78-1.07-1.59-2.12-2.6-3.45C89 76 81.85 85.2 75.14 94.77c-2.4 3.42-4.92 4.91-9.4 3.7l26.92-36.13L67.6 29.71c4.31-.84 7.29-.41 9.93 3.45 5.83 8.52 12.26 16.63 18.67 25.21 6.45-8.55 12.8-16.67 18.8-25.11 2.41-3.42 5-4.72 9.33-3.46-3.28 4.35-6.49 8.63-9.72 12.88-4.36 5.73-8.64 11.53-13.16 17.14-1.61 2-1.35 3.3.09 5.19C109.9 76 118.16 87.1 126.67 98.44zM1.33 61.74c.72-3.61 1.2-7.29 2.2-10.83 6-21.43 30.6-30.34 47.5-17.06C60.93 41.64 63.39 52.62 62.9 65H7.1c-.84 22.21 15.15 35.62 35.53 28.78 7.15-2.4 11.36-8 13.47-15 1.07-3.51 2.84-4.06 6.14-3.06-1.69 8.76-5.52 16.08-13.52 20.66-12 6.86-29.13 4.64-38.14-4.89C5.26 85.89 3 78.92 2 71.39c-.15-1.2-.46-2.38-.7-3.57q.03-3.04.03-6.08zm5.87-1.49h50.43c-.33-16.06-10.33-27.47-24-27.57-15-.12-25.78 11.02-26.43 27.57z"></path>
                                            </svg>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg" className="h-8 md:h-10"/>
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" className="h-8 md:h-10"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-2.5 justify-center items-center">
                            <div className="flex justify-center my-2.5">
                                <a href="https://github.com/louispallett/odin-blog-api" target="_blank"><button className="p-1 px-1.5 bg-slate-900 text-slate-50 font-semibold rounded-md hover:bg-slate-700 transition-all mt-5">&gt; GitHub Repo &lt;</button></a>
                            </div>
                            <div className="flex justify-center my-2.5">
                                <a href="https://son-blog.netlify.app/dashboard/articles/" target="_blank"><button className="p-1 px-1.5 bg-lime-700 text-slate-50 font-semibold rounded-md hover:bg-lime-600 transition-all mt-5">&gt; Live Site &lt;</button></a>
                            </div>
                        </div>
                        <hr  className="mx-15 m-5"/>
                        <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Long Description</h2>
                        <div className="flex my-2.5">
                            <Fade delay={750} triggerOnce>
                                <div className="hidden md:block w-64">
                                    <img src={sonImg} alt="" />
                                </div>
                            </Fade>
                            <div className="flex flex-col gap-2.5 sm:text-right">
                                <p>
                                    This application is an ideal site for a small, opinion-based news/newspaper organisation. In its current form, it is styled as a political-opinion site, with articles about current affairs. 
                                    It has two frontends - one for members of the public to read articles, sign up accounts, and post comments, and another site designed for writers, where approved writers (who require a 
                                    special code to sign-up) can write their own articles, edit, and publish/unpublish them.
                                </p>
                                <p>
                                    The 'public' facing application displays articles in a grid display for larger screens and a flex column display for smaller ones. Each article can be selected to take the user to the article specific 
                                    page - the address of which is '/articles/:articleId', making use of useParams hook with React Router. Each article has a title, a banner image (optional), date of publication, author, synopsis and, of course, the 
                                    actual content.
                                </p>
                                <p>The public facing site also allows for user sign up and login. Logged in users can add comments to articles.</p>
                            </div>
                        </div>
                        <p>The 'writers' site is another frontend site which makes requests to the same server. This is site is for the 'writers' of the news site, where they can create, update, publish/unpublish, and delete their own articles.</p>
                        <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Video: See it in action</h2>
                        <p className="text-center">- - -Insert Video HERE- - -</p>
                        <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Technical Highlights</h2>
                        <div className="flex flex-col gap-2.5 sm:text-base my-2.5">
                            <p>
                                This application uses a variety of technical tools and libraries. A full list can be found in the client/package.json and server/package.json files and more extensive list can be found on the repository's README file.
                                However, there are some features I am particularly proud of:
                            </p>
                            <ul className="list-disc ml-5 flex flex-col gap-2">
                                <li><b>Filtered articles</b>: On the 'writers site', when the GET request is made to get articles, they are filtered so only the user's articles are shown, meaning they can only edit their <i>own</i> publications.</li>
                                <li>
                                    <b>Rich Text Editor</b>: Because this site is supposed to be used by writers (and not people who understand how to write HTML etc.), I utilize the <a href="https://www.tiny.cloud" className="font-semibold text-lime-500 hover:text-lime-400 transition-all">TinyMCE</a> rich text editor. 
                                    This allows writers to create articles using headers, subheaders, and other styled text with a friendly UI. Obviously, this involved having to learn how to import and use the library, as well as save the content to the database once the user clicked save.
                                </li>
                                <li>
                                    <b>Image Uploads</b>: In order for writers to add their own banner images to their articles, I had to use some form of image platform. In this application, I used node file system (import 'fs') to temporarily save the file
                                    and then the <a href="" className="font-semibold text-lime-500 hover:text-lime-400 transition-all" >Cloudinary API</a> and module to upload the file to a cloudinary account. This would then return the source URL for the image, which
                                    was then saved to the database document. This ensured I wasn't wasting valuable memory on the database (had I saved it as machine code)! After this, the local file would, of course, be deleted (through the fs.unlinkFile() method).
                                </li>
                                <li>
                                    <b>Comment posting</b>: When comments are loaded, they are of course done so through a GET request to the server. If you post a comment, the database updates but, of course, the frontend page has already requested the information to display the comments.
                                    Through the useEffect() hook and its array of dependancies, I was able to design this feature to dynamically re-load the comments section every time a comment is posted by the user.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

            )}
        </>
    )
}
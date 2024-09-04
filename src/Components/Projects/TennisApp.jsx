import { Fade } from "react-awesome-reveal";
import { useState } from "react";

import tennisImg from "/assets/images/rackets.svg";

export default function TennisApp() {
    return (
        <section className="my-5 dark:text-slate-50 max-w-maxArticle">
            <div className="p-2.5 sm:p-5 text-sm sm:text-base">
                <h1 className="text-center text-2xl sm:text-4xl my-2.5 font-popcorn">Tennis Tournament Application</h1>
                <hr  className="mx-15 m-5"/>
                <div className="flex flex-col md:grid md:grid-cols-2 md:justify-around">
                    <div>
                        <p className="my-1.5"><b>Type</b>: full-stack</p>
                        <p><b>Short Description</b>: <i>Tennis Tournament by Lowpal</i> is an application where users can host or join a tennis tournament. Built with React and Express, this application has real-world usage and is currently being used as part of my own tennis club's yearly tournament.</p>
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
                        <div className="flex items-center md:justify-end">
                            <div className="flex flex-col md:items-end">
                                <p className="text-xs sm:text-sm my-1 text-center"><b>Testing</b></p>
                                <div className="flex gap-2.5 bg-indigo-600 p-1.5 rounded-md">
                                    <svg viewBox="0 0 128 128" className="h-8 md:h-10">
                                        <path fill="#ffffff" d="M124.129 63.02c0-7.692-5.828-14.165-13.652-16.012L128 .113H41.16l17.563 47.043c-7.578 1.996-13.164 8.356-13.164 15.903 0 5.546 3.058 10.464 7.703 13.496-1.832 2.367-3.953 4.55-6.356 6.62-4.523 3.848-9.539 6.805-14.957 8.766-4.89-2.996-7.008-8.285-5.094-13.02 7.457-2.07 12.88-8.394 12.88-15.827 0-9.133-8.192-16.532-18.22-16.532-10.066 0-18.253 7.434-18.253 16.57 0 4.513 2.035 8.653 5.297 11.61-.286.52-.57 1.035-.856 1.59C4.973 81.438 1.875 87.207.691 93.68c-2.363 12.941 1.508 23.336 10.84 29.215 5.258 3.293 11.047 4.957 17.282 4.957 10.714 0 21.597-4.883 32.109-9.618 7.5-3.363 15.242-6.879 22.863-8.578 2.813-.629 5.746-1 8.844-1.406 6.273-.813 12.754-1.664 18.582-4.734 6.805-3.586 11.45-9.579 12.797-16.457 1.015-5.29 0-10.614-2.61-15.274a15.35 15.35 0 002.73-8.765zm-7.945 0c0 5.14-4.606 9.32-10.27 9.32s-10.27-4.18-10.27-9.32c0-1.665.489-3.254 1.344-4.622.325-.52.735-1.035 1.14-1.48a8.517 8.517 0 011.427-1.219l.043-.039c.324-.222.691-.445 1.058-.664 0 0 .04 0 .04-.039.163-.074.327-.184.492-.258.039 0 .078-.039.12-.039.165-.07.368-.144.57-.219a8.78 8.78 0 00.571-.222c.04 0 .082-.04.121-.04.164-.034.328-.109.489-.144.043 0 .125-.039.164-.039.203-.035.367-.074.57-.11h.043l.61-.113c.042 0 .12 0 .163-.035.164 0 .325-.039.489-.039h.203c.203 0 .41-.035.652-.035h.531c.16 0 .286 0 .446.035h.082c.328.04.652.074.98.149 4.645.886 8.192 4.66 8.192 9.172zM52.527 7.508h64.102l-14.711 39.387c-.61.113-1.223.296-1.832.48l-15.484-28.66L69.074 47.19c-.613-.183-1.265-.296-1.914-.406zM81.664 59.8c-.773-3.477-2.73-6.582-5.5-8.875l8.438-15.457 8.515 15.789c-2.527 2.293-4.36 5.215-5.094 8.543zM61.25 53.96c.203-.04.367-.074.57-.113h.121c.164-.035.329-.035.489-.075h.164c.164 0 .285-.035.449-.035h1.59c.16 0 .285.035.406.035.082 0 .121 0 .203.04.164.035.285.035.45.074.038 0 .081 0 .163.035.204.039.407.074.57.113h.04c.164.035.328.07.488.145.043 0 .082.039.164.039.121.035.285.074.406.148.043 0 .082.035.125.035.16.075.325.114.489.188h.039c.203.07.367.144.531.258h.04c.163.074.327.183.491.257.04 0 .04.04.078.04.164.07.286.183.45.257l.043.035c.488.333.937.704 1.382 1.075l.043.035c.407.406.813.851 1.141 1.332 1.059 1.48 1.672 3.219 1.672 5.105 0 5.141-4.606 9.317-10.27 9.317s-10.27-4.176-10.27-9.317c-.042-4.328 3.259-7.988 7.743-9.023zm-40.102-.262c5.665 0 10.27 4.18 10.27 9.32 0 5.141-4.605 9.32-10.27 9.32-5.664 0-10.27-4.179-10.27-9.32 0-5.14 4.606-9.32 10.27-9.32zm94.79 32.067c-.895 4.73-4.118 8.875-8.844 11.351-4.442 2.332-9.903 3.07-15.649 3.809-3.136.406-6.437.851-9.617 1.554-8.476 1.887-16.625 5.586-24.531 9.133-10.106 4.551-19.645 8.84-28.484 8.84-4.606 0-8.723-1.183-12.633-3.66-8.965-5.621-8.52-16.16-7.457-21.93.976-5.402 3.707-10.468 6.316-15.312.16-.297.285-.555.445-.852.899.297 1.836.52 2.813.668-1.547 7.84 2.851 15.938 11.41 19.934l1.55.738 1.669-.555c7.133-2.293 13.734-6.027 19.562-11.02 3.301-2.812 6.114-5.843 8.477-9.136.937.149 1.875.188 2.812.188 8.477 0 15.606-5.29 17.645-12.391h6.844c2.039 7.137 9.171 12.39 17.648 12.39 3.383 0 6.52-.85 9.207-2.292 1.063 2.773 1.387 5.656.817 8.543zm0 0"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2.5 justify-center items-center my-1.5">
                    <div className="flex justify-center">
                        <a href="https://github.com/louispallett/lowpal-tennis" target="_blank"><button className="p-1 px-1.5 bg-slate-900 text-slate-50 font-semibold rounded-md hover:bg-indigo-600 transition-all">&gt; GitHub Repo &lt;</button></a>
                    </div>
                    <div className="flex items-center">
                        <div className="flex justify-center">
                            <a href="https://lowpal-tennis.netlify.app/users/sign-in" target="_blank"><button className="p-1 px-1.5 bg-lime-700 text-slate-50 font-semibold rounded-md hover:bg-lime-600 transition-all">&gt; Live Site &lt;</button></a>
                        </div>
                        <p><i>*</i></p>
                    </div>
                </div>
                <p className="text-sm italic">* Note: this is currently being used as part of a tournament and, whilst live, you won't be able to access most pages, as they are behind a login screen.</p>
                <hr  className="mx-15 m-5"/>
                <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Long Description</h2>
                <div className="flex flex-col sm:flex-row gap-2.5">
                    <Fade delay={750} triggerOnce>
                    <div className="w-64 flex flex-1 justify-center items-center sm:block hidden">
                        <img src={tennisImg} alt="" />
                    </div>
                    </Fade>
                    <div className="flex sm:text-right flex-col gap-2.5">
                        <p>This application represents the sum of my learning in web development. It is a full-stack application handling user accounts (sign-up and sign-in), CRUD operations, and much more.</p>
                        <p>
                            Every year, my tennis club hosts an 'In-House Tournament', which runs over several months in the summer. There are five categories: Mens Singles, Womens Singles, Mens Doubles, Womens Doubles, and Mixed Doubles. In previous years, the way this has been run is very hands-on: email the organiser expressing interest 
                            (and the categories you wish to sign up in), wait for your name and match to be drawn (this was done literally via names in a hat), and then receive the tournament brackets. You would then get in contact with your opponent (by finding the number on a single PDF with everyone's number) and organise your match, 
                            afterwhich you would email your score to the organisor who would write it down. 
                        </p>
                        <p>It's was a demanding and very 'hands-on' role</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5 my-2.5">
                    <p>
                        <i>Tennis Tournament by LowPal</i> fixes this issue by moving sign-up, viewing your next matches (with information regarding deadlines, match categories, players, and each player's contact details), and submitting your match results to an application. It also automates team 
                        selection, match creation, and participant allocation (to each match) via an algorithm written entirely by me.
                    </p>
                    <p>Advantages brought by this application:</p>
                    <ul className="list-disc pl-2.5">
                        <li>Significantly reduces the workload on the organiser:</li>
                        <ul className="list-[square] pl-5">
                            <li>They no longer have to receive and reply to numerous emails on sign up.</li>
                            <li>They no longer have to chase after missing information at sign up (many people would forget contact numbers, for example), since this information was validated both on the frontend (via react-hook-form) and the backend (via express-validator).</li>
                            <li>Doubles pairings, creation of matches, and player allocation to matches are automated and completed in the click of a button via the generateMatchesForTournament() function.</li>
                            <li>Players submit their own scores and matches are updated accordingly. This virtually eliminates any work for the organiser on this front, as they no longer have to update the brackets manually or chase players for match results.</li>
                        </ul>
                        <li className="mt-2.5">Creates a better user experience for players:</li>
                        <ul className="list-[square] pl-5">
                            <li>Players can now immediately see who their next match is up against on the dashboard.</li>
                            <li>Critical information such as the deadline for the match, as well as the contact information for <i>just the players in that match</i> are displayed, meaning players no longer have to search through the tournament brackets to see their next match or through a long list of contact numbers to find the numbers of players they are playing against.</li>
                            <li>Players can see the 'live' brackets, as these are synchronised with the database, which is updated when a user submits their score. Before this application, players would have to wait for the organisor to email updated brackets (usually at the end of each round, which tends to last around 4 weeks). Now, with this application, players can keep up to date with matches in other categories.</li>
                        </ul>
                    </ul>
                </div>
                <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Video: See it in action</h2>
                <p className="text-center">- - -Insert Video HERE- - -</p>
                <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Technical Highlights</h2>
                <div className="flex flex-col gap-2.5 my-2.5">
                <p>
                    This application uses a variety of technical tools and libraries. A full list can be found in the client/package.json and server/package.json files and more extensive list can be found on the repository's README file.
                    However, there are some features I am particularly proud of:
                </p>
                <ul className="list-disc ml-5 flex flex-col gap-2">
                    <li>
                        <b>Frontend form design and validation</b>: Using <a href="https://react-hook-form.com/" className="font-semibold text-lime-500 hover:text-lime-400 transition-all">React Hook Form</a>, I created several forms on the site which allow users to sign up, sign in, and submit match scores. One of the longer forms was the 
                        sign up form, which had to collect and validate a decent amount of information, including: name, email, mobile, gender (for selecting tournaments), tournament choices (Men's and Women's Singles and Doubles, and Mixed Doubles), and password. Using React Hook Form, I was able to validate data on the frontend and show 
                        error messages if data is missing - this included: checking if the 'password' and 'confirm password' inputs matched, checking if all required field have been completed, and checking if the mobile number provided is valid. I also set up React state to only show tournaments once a user has selected their gender.
                    </li>
                    <li>
                        <b>Error handling</b>: When common errors occur, I give proper feedback to the client. There are some more general errors messages I implement - such as login errors ("User not found" or "Incorrect Password") and server errors - where I try to return messages if something specific has gone wrong and general errors if 
                        the server connection has failed. However, there are some application-specific errors I've implemented too. For example, your matches only show your current ones, so if you submit the results for a match and return to your dashboard, you will no longer see that match listed. However, in theory, two users may login and 
                        go to the match page at the same time. One user may submit the match results before the other, leaving the second player unaware of this and they may submit their match results a few seconds after. Without proper error handling, this would result in the winning player being added to the next match <i>twice</i>. The way 
                        I handled this was to issue a counter to the match, which increments every time a score is added. If this counter is greater than 0, it returns an error to the client ("Results already submitted").
                    </li>
                    <li>
                        <b>Simple, clear design</b>: The frontend of this application is designed to be simple and easy to use. I ensure that each page is not cluttered with too much information - things like matches have their own page where users can see all information. It was designed to be used by adults of all ages with varying technological
                        skills.
                    </li>
                    <li>
                        <b>Email automation</b>: When users sign up, they receive an automated email confirming their sign up and the categories they signed up to. This was achieved using <a href="https://nodemailer.com/" className="font-semibold text-lime-500 hover:text-lime-400 transition-all">NodeMailer</a>. This is also used when 
                        reseting passwords.
                    </li>
                    <li>
                        <b>Create Tournament Algorithm</b>: In order to automate the creation of the matches (including adding the players to the starting matches) in the pattern I wanted, I had to write a (fairly) complex algorithm. You can read more about it below.
                    </li>
                </ul>
                </div>
                <CreateTournament />
            </div>
        </section>
    )
}

function CreateTournament() {
    const [showLogic, setShowLogic] = useState(false);

    const handleShowLogic = () => {
        setShowLogic(!showLogic);
    }

    return (
        <div className="text-sm sm:text-base">
            <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Create Tournament Algorithm</h2>
            <p>One of the more complex 'logic' aspects of this application is the createTournament.js file, which contains the generateMatchesForTournament() function.</p>
            <p>It solves two problems:</p>
            <ul className="list-disc ml-2.5 my-1.5">
                <li>Creating the correct number of matches and setting their 'pointers' to their next match.</li>
                <li>
                    Assigning players/teams to each match accordingly. This is <i>not</i> done at random and is instead done in order to ensure that (if everyone 
                    played according to their ability), the top two ranked players would play each other in the finals, the top four in the semi-finals, and so on.
                </li>
            </ul>
            <div className="flex gap-1.5 items-center">
                <p>I've written a (fairly long) walkthrough of this function. Click
                {showLogic ? (
                    <span onClick={handleShowLogic} className="text-lime-600 dark:text-lime-500 font-semibold hover:text-slate-950 dark:hover:text-slate-50 cursor-pointer transition-all"> here to <u>hide</u> it</span>
                ) : (
                    <span onClick={handleShowLogic} className="text-lime-600 dark:text-lime-500 font-semibold hover:text-slate-950 dark:hover:text-slate-50 cursor-pointer transition-all"> here to <u>show</u> it</span>
                )}
                </p>
            </div>
            <div className={showLogic ? "block" : "hidden"}>
                <div className="flex flex-col gap-2.5 text-sm sm:text-base my-2.5">
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <p>
                                const generateMatchesForTournament = (category, teams) =&gt; &#123;
                            </p>
                            <div className="ml-5">
                                <p>&nbsp;</p>
                                <p>const numOfPlayers = teams.length;</p>
                                <p>const totalRounds = Math.ceil(Math.log2(numOfPlayers)); <span className="text-slate-400 font-bold italic">// Equation A</span></p>
                                <p>const matchesByRound = [];</p>
                                <p>const numberOfQualPlayers = numOfPlayers - calculateByes(numOfPlayers); <span className="text-slate-400 font-bold italic">// Equation B</span></p>
                                <p>&nbsp;</p>
                                <p>const finalMatch = createMatch(category, totalRounds);</p>
                                <p>matchesByRound.push([finalMatch])</p>
                                <p>&nbsp;</p>
                                <p><span className="text-slate-400 font-bold italic">// ...</span></p>
                            </div>
                            <p>
                                &#125;
                            </p>
                        </div>
                    </Fade>
                    <p>The algorithm begins by establishing a few important variables. Some of these are self-explanatory. I've marked out two equations - A and B - which are a little more complex:</p>
                    <ul className="list-disc pl-5">
                        <li><b>Equation A</b>: A perfectly 'clean' tournament bracket has <i>n = 2<sup>x</sup></i>, where n is the number of players (or teams in doubles). This is simply because a <i>2<sup>x</sup></i> value can be halved into an integer until it reaches 1 (64 &gt; 32 &gt; 16 &gt; 8 &gt; 4 &gt; 2 &gt; 1). Therefore, if <i>R</i> is the number of rounds,
                        we can say that <i>n = 2<sup>R</sup></i> and or <i>R = log<sub>2</sub>(n)</i>. So, with 16 players:</li>
                        <div className="text-center my-2.5">
                            <p><i>16 = 2<sup>R</sup></i></p>
                            <p><i>R = log<sub>2</sub>(16)</i></p>
                            <p><i>R = 4</i></p>
                        </div>
                        <p>Therefore, we have 4 rounds. Let's step through them: with 16 players, that's 8 matches in the first round (each player plays another player), which goes down to 4 matches (8 players) in the second round, as one person is knocked out of each match, which goes to 2 matches in the third round (4 players), and finally one match in the fourth and final round (2 players).</p>
                        <p>However, we have to ceil this value, since with 18 players we would have a non-integer value. In this case we would have a qualifying round, so we need to make sure that <i>R</i> is always rounded up, so the corrected equation is:</p>
                        <div className="text-center my-2.5">
                            <p>&lceil; <i>R = log<sub>2</sub>(n)</i> &rceil;</p>
                        </div>
                        <li><b>Equation B</b>: This equation returns the number of qualifying round players <i>(Q)</i>, by getting the lowest <i>2<sup>x</sup></i> value closest to the number of players and then subtracting the number of players from that value:</li>
                        <div className="text-center my-2.5">
                            <p><i>Q = 2<sup>x</sup> - N</i></p>
                        </div>
                    </ul>
                    <p>After which, we create the finalMatch and then create the rest of the matches.</p>
                    <h2 className="sm:text-lg font-semibold text-center">Creating Matches</h2>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <p>let round = 1;</p>
                            <p>
                                while(round &lt; (numOfQualPlayers == numOfPlayers ? totalRounds : totalRounds - 1)) &#123;
                            </p>
                            <div className="ml-5">
                                <p>&nbsp;</p>
                                <p>const currentRoundMatches = [];</p>
                                <p>for (let i = 0; i &lt; matchesByRound.at(-1).length * 2; i++) &#123; </p>
                                <div className="ml-5">
                                    <p>const nextMatchId = matchesByRound[round - 1][Math.floor(i / 2)]._id;</p>
                                    <p>const match = createMatch(category, totalRounds - round, nextMatchId);</p>
                                </div>
                                <p>&#125;</p>
                                <p>matchesByRound.push(currentRoundMatches);</p>
                                <p>round++;</p>
                            </div>
                            <p>&#125;</p>
                        </div>
                    </Fade>
                    <p>This creates our matches. Each match effectively has a "pointer" to it's next match. In Computer Science, we might call this an inverted binary tree:</p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <div className="flex justify-center items-center gap-5">
                                <div>
                                    <p>F</p>
                                </div>
                                <div>
                                    <p>&lt;- SF</p>
                                    <hr className="my-2.5" />
                                    <p>&lt;- SF</p>
                                </div>
                                <div>
                                    <p>&lt;- QF</p>
                                    <p>&lt;- QF</p>
                                    <p>&lt;- QF</p>
                                    <p>&lt;- QF</p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <p>
                        After this, we'll want to add any qualifying rounds. This is based on a conditional, however - and that is if the number of qualifyingPlayers != numOfPlayers. I won't go into detail in how this part works, however it simply adds the matches
                        from the 'inside-out', starting with the Math.ceil(mid) point. So, in the case of 10 players, we would have 2 qualifying matches leading to the [2] index and then the [1] index. Like so:
                    </p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <div className="flex justify-center items-center gap-5">
                                <div>
                                    <p>F</p>
                                </div>
                                <div>
                                    <p>&lt;- SF</p>
                                    <hr className="my-2.5" />
                                    <p>&lt;- SF</p>
                                </div>
                                <div>
                                    <p>&lt;- QF [index 0]</p>
                                    <p>&lt;- QF [index 1]</p>
                                    <p>&lt;- QF [index 2]</p>
                                    <p>&lt;- QF [index 3]</p>
                                </div>
                                <div>
                                    <p>&lt;- Qual <i>Added second</i></p>
                                    <p>&lt;- Qual <i>Added first</i></p>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <p>This ensures that the last match has a nextMatchId of the match at index 0. This is because this is where our number 1 ranked player will be, and we want that player to be the last person to be put in a qualification match.</p>
                    <p>
                        In fact, because of the way this works, the maximum number of qualifying matches we can have is the number of matches in the next round * 2 - 1. For example, in the tournament above, we could not have more than 7  qualifying matches, because once we get to
                        8 qualifying matches, we've reached the next <i>2<sup>x</sup></i> players <i>(2<sup>4</sup> = 16)</i>, so in this case there would be NO qualifying matches.
                    </p>
                    <p>This system prioritizes high ranking players to automatically qualify. In the case of 14 players, players 1 and 2 would qualify whilst the rest would be in the qualifying round. In the case of 13 players: 1, 2, and 3 would qualify, and so on.</p>
                    <h2 className="sm:text-lg font-semibold text-center">Adding Players</h2>
                    <p>
                        I'm going to skip over the allocation of participants to qualifying matches, but you can see the full code in the repository. The important part of this is that we create a copy of the teams (players) array called _teams and use this to add the participants. The index which we start at to
                        add participants is index[matchesByRound.at(-1).length] - in other words, in the example above where we had 4 matches in the first (non-qualifying round) - i.e. the QFs - we would have this as index[4], because the length of the QF matches is 4. In the case of 9 players, this would start at
                        index[4], which is "player 5". The reason we do this is it ensures we still have the top players in our non-qualifying round. In the case of 9 players, we have 1 qualifying match and 4 first round matches (quater finals), so we want to ensure that the first 4 players are not added to the
                        qualifying round.
                    </p>
                    <p>
                        <i>However</i>, if we have double qualifying rounds, as is the case with 13 players, we need to alter this. In this scenario, there are actually 5 qualifying matches leading to 4 QF matches. In this case, 1 of the qualifying matches (at index [2], in this case) has two qualifying matches and Therefore
                        no players will be added to QF match at index [2], since two matches before this one are leading to it. Thus, for each double qualifying match, we have to decrement this player index (the index[matchesByRound.at(-1).length]) by 1. So, in the case of 13 players, we would actually start from index[4 - 1],
                        which is index[3], which is "player 4".
                    </p>
                    <p>Now, let's move on to qualifying players and how the algorithm adds them to their matches in the first non-qualifying round.</p>
                    <p>In the case of 9 players, we will have 4 QF matches with 1 qualifying match, which would lead to match[2]. Because we have already added our qualifying players, our _teams array looks like this:</p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <p>_teams = ["player1", "player2", "player3", "player4", "player7", "player8", "player9"];</p>
                        </div>
                    </Fade>
                    <p>At this point, we could quite simply add the players in a staggered method, going outside in, starting at 1:</p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <div className="flex gap-10">
                                <div>
                                    <p className="mx-1.5">Q1</p>
                                    <div className="flex gap-2.5">
                                        <p>1</p>
                                        <p>7</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">Q2</p>
                                    <div className="flex gap-2.5">
                                        <p>3</p>
                                        <p>9</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">Q3</p>
                                    <div className="flex gap-2.5">
                                        <p>4</p>
                                        <p>&nbsp;</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">Q4</p>
                                    <div className="flex gap-2.5">
                                        <p>2</p>
                                        <p>8</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <p><b>However</b>, this does not work in the case of 16 players. Here's why:</p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <div className="flex gap-10">
                                <div>
                                    <p className="mx-1.5">m1</p>
                                    <div className="flex gap-2.5">
                                        <p>1</p>
                                        <p>9</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">m2</p>
                                    <div className="flex gap-2.5">
                                        <p>3</p>
                                        <p>11</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">m3</p>
                                    <div className="flex gap-2.5">
                                        <p>5</p>
                                        <p>13</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">m4</p>
                                    <div className="flex gap-2.5">
                                        <p>7</p>
                                        <p>15</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">m5</p>
                                    <div className="flex gap-2.5">
                                        <p>8</p>
                                        <p>16</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">m6</p>
                                    <div className="flex gap-2.5">
                                        <p>6</p>
                                        <p>14</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">m7</p>
                                    <div className="flex gap-2.5">
                                        <p>4</p>
                                        <p>12</p>
                                    </div>
                                </div>
                                <div>
                                    <p className="mx-1.5">m8</p>
                                    <div className="flex gap-2.5">
                                        <p>10</p>
                                        <p>2</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Fade>
                    <p>
                        The issue here is that if everyone played according to their ranking, 1 would win m1 and 3 would win m2. This means they play each other in the QF.
                        5 and 7 both win their matches, which means they face each other in the QF. But, this then leads to 1 and 5 playing against one another in the SF, when it really should be 1 and 3 (because, remember, we want
                        our top 4 players able to play in the semi-finals), otherwise player 1 has a pretty tough match in the QF against player 3, but an easier match in the SF against player 5.
                    </p>
                    <p>The solution is to divide the match array into two arrays, like so:</p>
                    <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                        <p>[m1, m2, m3, m4], [m5, m6, m7, m8]</p>
                    </div>
                    <p>Thankfully, the job is made a little simpler by the fact that all players in the left hand side array are the odd ranking players, whilst those in the right are the even ranking players.</p>
                    <p>So, we loop through an index value <i>(i)</i> and start at either 0 (for the left array) or 1 (for the right array) and increment by 2:</p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <p>const leftRound1Matches = round1Matches.splice(0, round1Matches.length / 2);</p>
                            <p>const rightRound1Matches = round1Matches.splice(0);</p>
                            <p>let leftIndex = 0;</p>
                            <p>&nbsp;</p>
                            <p>for (let i = 0; i &lt; _teams.length; i+=2) &#123;</p>
                            <div className="ml-5">
                                <p className="text-slate-400 font-bold italic">// This conditional just ensures that we don't add players to matches which can't fit them.</p>
                                <p className="text-slate-400 font-bold italic">// For example, if the match already has 2 previousMatchIds or 1 previousMatchId and a participant.</p>
                                <p>while ((leftIndex % 2 == 0 && leftRound1Matches[Math.floor(leftIndex / 2)].previousMatchId) || (leftIndex % 2 != 0 && leftRound1Matches[leftRound1Matches.length - Math.ceil(leftIndex / 2)].previousMatchId)) &#123;</p>
                                <p className="ml-10">if (Math.floor(leftIndex / 2) &gt; leftRound1Matches.length - 1 || leftRound1Matches.length - Math.ceil(leftIndex / 2) &lt; 0) break;</p>
                                <p className="ml-10">if ((leftIndex % 2 == 0 && leftRound1Matches[Math.floor(leftIndex / 2)].participants &gt; 1) || (leftIndex % 2 != 0 && leftRound1Matches[leftRound1Matches.length - Math.ceil(leftIndex / 2)].participants &gt; 1)) &#123;</p>
                                <p className="ml-16">leftIndex++;</p>
                                <p className="ml-10">&#125; else &#123;</p>
                                <p className="ml-16">break;</p>
                                <p className="ml-10">&#125;</p>
                                <p>&#125;</p>
                                <p>&nbsp;</p>
                                <p>if (leftIndex % 2 == 0) &#123;</p>
                                <p className="ml-10">leftRound1Matches[Math.floor(leftIndex / 2)].participants.push(&#123; <span className="text-slate-400 font-bold italic"> /* Our participant object */ </span> &#125;);</p>
                                <p>&#125; else &#123;</p>
                                <p className="ml-10">leftRound1Matches[leftRound1Matches.length - Math.ceil(leftIndex / 2)].participants.push(&#123; <span className="text-slate-400 font-bold italic"> /* Our participant object */ </span> &#125;);</p>
                                <p>&#125;</p>
                            </div>
                        </div>
                    </Fade>
                    <p>We then loop through the even players, starting our index at 1 (player 2), incrementing by 2 again, but ensuring we add players staggered yet starting from the <i>last</i> match first:</p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <p>let rightIndex = 0;</p>
                            <p>&nbsp;</p>
                            <p>for (let i = 1; i &lt; _teams.length; i+=2) &#123;</p>
                            <div className="ml-5">
                                <p className="text-slate-400 font-bold italic">// Our conditional - not repeated here.</p>
                                <p>&nbsp;</p>
                                <p>if (right % 2 == 0) &#123;</p>
                                <p className="ml-10">rightRound1Matches[rightRound1Matches.length - Math.ceil(rightIndex / 2) - 1].participants.push(&#123; <span className="text-slate-400 font-bold italic"> /* Our participant object */ </span> &#125;);</p>
                                <p>&#125; else &#123;</p>
                                <p className="ml-10">rightRound1Matches[Math.floor(rightIndex / 2)].participants.push(&#123; <span className="text-slate-400 font-bold italic"> /* Our participant object */ </span> &#125;);</p>
                                <p>&#125;</p>
                            </div>
                        </div>
                    </Fade>
                    <p>We now have all our matches with their players assigned. However, they are divided into different arrays, so we now need to join them. Arrays are not primitive, so we use the spread operator here:</p>
                    <Fade triggerOnce>
                        <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                            <p>result = [...leftRound1Matches, ...rightRound1Matches];</p>
                            <p>matchesByRound.splice(matchesByRound.length - 1, 0, result);</p>
                            <p>return matchesByRound;</p>
                            <p>&nbsp;</p>
                            <p className="text-slate-400 font-bold italic">// The array in the case of a 9 players would look like this (simplified to just match names, rather than full objects):</p>
                            <p>matchesByRound = [F, SF1, SF2, QF1, QF2, QF3, QF4, Qual1];</p>
                        </div>
                    </Fade>
                    <p>
                        And voila, we have all the match objects created for a category with their players assigned. In this file, there are effectively two problems and two algorithms. The first is to create the correct number of matches, the
                        second is to assign the correct participants to the matches. It works based on two assumptions:
                    </p>
                    <ul className="list-disc ml-5 my-2.5">
                        <li>There are at least 4 teams competing (since a tennis tournament with only 3 teams seems unlikely, I believe this to be a fair rule).</li>
                        <li>
                            Players are ranked according to their ability. Although the function works perfectly fine without this rule, the reason it is a more complex function is because it wants to assign the first player as far away from the second player as possible. It then wants
                            to assign the 3rd player as far away from both the second and first player, and so on. When the function is called, it is done so in an asynchronous post request, in which the players are collected and sorted <i>by ranking</i>. Hence, we don't have to sort them
                            in this function.
                        </li>
                    </ul>
                    <p>
                        Finally, to summarise: the problems faced were: to create the correct number of matches with their correct 'pointers' (nextMatchId values); and to assign the correct participants to matches in the first and qualifying round.
                        This algorithm solves this problem through a series of loops and conditionals. I'm sure there may be a less verbose way of achieving this, however this algorithm is entirely my own work. Many pages of grid paper were used to
                        go through the logic step by step!
                    </p>
                    {/* <div id="code" className="text-xs sm:text-sm p-5 text-slate-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)] my-2.5">
                        <pre>{code}</pre>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

const code = `body {
    format: "text";
}`;
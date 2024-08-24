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

export { Babel, Bootstrap, CSS, HTML, JavaScript, Jest, NPM, React, 
    ReactRouter, SASS, TailwindCSS, Webpack, ViteJS, Express, MongoDB, NodeJS, 
    Bash, C, Git, Java, Python };

function Babel({ isBabel, setIsBabel }) {
    return (
        <Dialog as="div" open={isBabel} onClose={() => setIsBabel(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsBabel(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Bootstrap({ isBootstrap, setIsBootstrap }) {
    return (
        <Dialog as="div" open={isBootstrap} onClose={() => setIsBootstrap(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsBootstrap(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function CSS({ isCSS, setIsCSS }) {
    return (
        <Dialog as="div" open={isCSS} onClose={() => setIsCSS(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsCSS(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function HTML({ isHTML, setIsHTML }) {
    return (
        <Dialog as="div" open={isHTML} onClose={() => setIsHTML(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsHTML(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function JavaScript({ isJavaScript, setIsJavaScript }) {
    return (
        <Dialog as="div" open={isJavaScript} onClose={() => setIsJavaScript(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsJavaScript(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}


function Jest({ isJest, setIsJest }) {
    return (
        <Dialog as="div" open={isJest} onClose={() => setIsJest(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsJest(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function NPM({ isNPM, setIsNPM }) {
    return (
        <Dialog as="div" open={isNPM} onClose={() => setIsNPM(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsNPM(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function React({ isReact, setIsReact }) {
    return (
        <Dialog as="div" open={isReact} onClose={() => setIsReact(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsReact(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function ReactRouter({ isReactRouter, setIsReactRouter }) {
    return (
        <Dialog as="div" open={isReactRouter} onClose={() => setIsReactRouter(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsReactRouter(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function SASS({ isSASS, setIsSASS }) {
    return (
        <Dialog as="div" open={isSASS} onClose={() => setIsSASS(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsSASS(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function TailwindCSS({ isTailwindCSS, setIsTailwindCSS }) {
    return (
        <Dialog as="div" open={isTailwindCSS} onClose={() => setIsTailwindCSS(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsTailwindCSS(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Webpack({ isWebpack, setIsWebpack }) {
    return (
        <Dialog as="div" open={isWebpack} onClose={() => setIsWebpack(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsWebpack(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function ViteJS({ isViteJS, setIsViteJS }) {
    return (
        <Dialog as="div" open={isViteJS} onClose={() => setIsViteJS(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsViteJS(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Express({ isExpress, setIsExpress }) {
    return (
        <Dialog as="div" open={isExpress} onClose={() => setIsExpress(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsExpress(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function MongoDB({ isMongoDB, setIsMongoDB }) {
    return (
        <Dialog as="div" open={isMongoDB} onClose={() => setIsMongoDB(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsMongoDB(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function NodeJS({ isNodeJS, setIsNodeJS }) {
    return (
        <Dialog as="div" open={isNodeJS} onClose={() => setIsNodeJS(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsNodeJS(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Bash({ isBash, setIsBash }) {
    return (
        <Dialog as="div" open={isBash} onClose={() => setIsBash(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsBash(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function C({ isC, setIsC }) {
    return (
        <Dialog as="div" open={isC} onClose={() => setIsC(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsC(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Git({ isGit, setIsGit }) {
    return (
        <Dialog as="div" open={isGit} onClose={() => setIsGit(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsGit(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Java({ isJava, setIsJava }) {
    return (
        <Dialog as="div" open={isJava} onClose={() => setIsJava(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsJava(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}

function Python({ isPython, setIsPython }) {
    return (
        <Dialog as="div" open={isPython} onClose={() => setIsPython(false)} className="relative z-50">
            <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
                <Dialog.Panel as="div" className="max-w-2xl space-y-4 p-12 bg-slate-100 rounded-lg shadow-[5px_5px_0px_0px_#4f46e5] dark:bg-slate-800 dark:text-slate-50">
                    <h2 className="font-mania text-2xl text-center">Language</h2>
                    <div>
                        <img className="float-right max-w-36" src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/babel/babel-original.svg" alt="" />
                        <div className="">
                            <p>
                                Content
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-cols gap-2.5">
                        <h3 className="text-lg font-semibold">Projects</h3>
                        <p>projects info</p>
                        <p>project list</p>
                    </div>
                    <div className="flex gap-4">
                        <button className="rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 transition-all" onClick={() => setIsPython(false)}><b>Close</b></button>
                    </div>
                </Dialog.Panel>
                </div>
        </Dialog>
    )
}
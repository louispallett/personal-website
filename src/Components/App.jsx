import { BackgroundContainer, HeaderContainer, HeaderContainerInner } from "./tailwind_components/tailwind-containers";
import { Link, Outlet } from "react-router-dom";

export default function App() {
    return (
        <BackgroundContainer >
            <Header />
            <div className="flex flex-1 justify-center">
                <div className="grid flex-1 max-w-full justify-center max-w-screen-3xl md:mt-24 font-roboto">
                    <Outlet />
                </div>
            </div>  
            <Footer />
        </BackgroundContainer>
    )
}

function Header() {
    return (
        <HeaderContainer>
            <HeaderContainerInner>
                <div className="font-semibold p-2.5 px-5">
                    <Link to="/dashboard" >
                        <div className="flex flex-col">
                            <h1 id="subtitle" className="relative text-xl sm:text-2xl dark:text-slate-100">Louis Nicholson-Pallett</h1>
                        </div>
                        <h1 id="main-title" className="text-sm sm:text-lg dark:text-slate-100">Web Developer</h1>
                    </Link>
                </div>
                <div className="flex h-full justify-end font-semibold dark:text-slate-100">
                    <Link className="h-full flex items-center px-2.5 sm:px-10 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all" to="/">
                        <p>Home</p>
                    </Link>
                    <Link className="h-full flex items-center px-2.5 sm:px-10 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all" to="/projects">
                        <p>Projects</p>
                    </Link>
                    <Link className="h-full flex items-center px-2.5 sm:px-10 hover:bg-slate-300 dark:hover:bg-slate-700 transition-all" to="/cv">
                        <p>CV</p>
                    </Link>
                </div>
            </HeaderContainerInner>
        </HeaderContainer>
    )
}

function Footer() {
    return (
      <footer className="relative flex px-3 py-3 justify-between items-center rounded-lg m-1 my-2 bg-slate-200 dark:bg-slate-800 dark:text-slate-100 sm:px-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
        <div>          
            <p className="font-bold text-xs py-5 sm:text-sm">© 2024 LowPal/Louis Nicholson-Pallett</p>
        </div>
        <a href="https://github.com/louispallett/personal-website/">
            <p className="font-bold text-xs py-5 sm:text-sm hover:text-slate-700 dark:hover:text-slate-300 transition-all">See it on GitHub</p>
        </a>
      </footer>
    )
  }
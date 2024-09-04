import { Fade } from "react-awesome-reveal";
import terminalSvg from "/assets/images/terminal.svg";

const code = `
# Get variables from command line
directory="$1"
startingValue="$2"

cd "$directory" || exit

# This is the chapter number to start renaming from
i="$startingValue"

# Loop through each file
for file in *; do
    # Check if item is a file
    if [ -f "$file" ]; then
        # Get the extension
        extension="\${file##*.}"

        # Generate the new name and rename
        new_name=$(printf "%02d_Chapter %d.%s" "$i" "$i" "$extension")
        mv "$file" "$new_name"

        ((i++))
    fi
done`;

export default function ChapterNumbering() {
    return (
        <section className="my-5 dark:text-slate-50 max-w-maxArticle">
            <div className="p-2.5 sm:p-5 text-sm sm:text-base">
                <h1 className="text-center text-2xl sm:text-4xl my-2.5 font-popcorn">Chapter File Renamer - a Small Bash Script</h1>
                <hr  className="mx-15 m-5"/>
                <div className="md:grid md:grid-cols-2">
                    <div>
                        <p className="my-1.5"><b>Type</b>: Shell Application</p>
                        <p><b>Short Description</b>: <i>Chapter File Renamer</i> is a simple bash script which takes command-line arguments from the user and renames files accordingly.</p>
                    </div>
                    <div className="flex flex-col items-center md:items-end my-2.5">
                        <div className="flex items-center md:justify-end">
                            <div className="flex flex-col md:items-end">
                                <p className="text-xs sm:text-sm my-1 text-center"><b>Language</b></p>
                                <div className="flex gap-2.5 bg-indigo-600 p-1.5 justify-center rounded-md">
                                    <svg viewBox="0 0 128 128" className="h-8 md:h-10">
                                        <path fill="#ffffff" d="M109.01 28.64L71.28 6.24c-2.25-1.33-4.77-2-7.28-2s-5.03.67-7.28 2.01l-37.74 22.4c-4.5 2.67-7.28 7.61-7.28 12.96v44.8c0 5.35 2.77 10.29 7.28 12.96l37.73 22.4c2.25 1.34 4.76 2 7.28 2 2.51 0 5.03-.67 7.28-2l37.74-22.4c4.5-2.67 7.28-7.62 7.28-12.96V41.6c0-5.34-2.77-10.29-7.28-12.96zM79.79 98.59l.06 3.22c0 .39-.25.83-.55.99l-1.91 1.1c-.3.15-.56-.03-.56-.42l-.03-3.17c-1.63.68-3.29.84-4.34.42-.2-.08-.29-.37-.21-.71l.69-2.91c.06-.23.18-.46.34-.6.06-.06.12-.1.18-.13.11-.06.22-.07.31-.03 1.14.38 2.59.2 3.99-.5 1.78-.9 2.97-2.72 2.95-4.52-.02-1.64-.9-2.31-3.05-2.33-2.74.01-5.3-.53-5.34-4.57-.03-3.32 1.69-6.78 4.43-8.96l-.03-3.25c0-.4.24-.84.55-1l1.85-1.18c.3-.15.56.04.56.43l.03 3.25c1.36-.54 2.54-.69 3.61-.44.23.06.34.38.24.75l-.72 2.88c-.06.22-.18.44-.33.58a.77.77 0 01-.19.14c-.1.05-.19.06-.28.05-.49-.11-1.65-.36-3.48.56-1.92.97-2.59 2.64-2.58 3.88.02 1.48.77 1.93 3.39 1.97 3.49.06 4.99 1.58 5.03 5.09.05 3.44-1.79 7.15-4.61 9.41zm26.34-60.5l-35.7 22.05c-4.45 2.6-7.73 5.52-7.74 10.89v43.99c0 3.21 1.3 5.29 3.29 5.9-.65.11-1.32.19-1.98.19-2.09 0-4.15-.57-5.96-1.64l-37.73-22.4c-3.69-2.19-5.98-6.28-5.98-10.67V41.6c0-4.39 2.29-8.48 5.98-10.67l37.74-22.4c1.81-1.07 3.87-1.64 5.96-1.64s4.15.57 5.96 1.64l37.74 22.4c3.11 1.85 5.21 5.04 5.8 8.63-1.27-2.67-4.09-3.39-7.38-1.47z"></path><path fill="#4FA847" d="M99.12 90.73l-9.4 5.62c-.25.15-.43.31-.43.61v2.46c0 .3.2.43.45.28l9.54-5.8c.25-.15.29-.42.29-.72v-2.17c0-.3-.2-.42-.45-.28z"></path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex gap-2.5 justify-center items-center">
                    <div className="flex justify-center my-2.5">
                        <a href="https://github.com/louispallett/manuscript_chapter_renaming" target="_blank"><button className="p-1 px-1.5 bg-slate-900 text-slate-50 font-semibold rounded-md hover:bg-slate-700 transition-all mt-5">&gt; GitHub Repo &lt;</button></a>
                    </div>
                </div>
                <hr  className="mx-15 m-5"/>
                <h2 className="font-montserrat text-lg my-5 sm:text-xl text-center font-semibold">Long Description</h2>
                <div className="flex gap-2.5 my-2.5">
                    <Fade delay={750} triggerOnce>
                        <div className="hidden md:block w-64">
                            <img src={terminalSvg} alt="" />
                        </div>
                    </Fade>
                    <div className="flex flex-1 flex-col gap-2.5">
                        <p>In my current role as an editorial assistant, one of the key responsibilities is preparing finished projects submitted by authors/editors for production. In order to streamline the whole production process, a great deal has to be standardised.</p>
                        <p>
                            One such standardisation is the naming of chapter files. Authors have to submit their books seperated by chapters in Microsoft Word files. The naming of these files has to follow a certain rule, which understandably most authors don't follow.
                            The rule is (if <i>i</i> was the chapter number): <i>i_Chapter i</i>.
                        </p>
                        <p>Often, this isn't a huge problem, as renaming 8 or 9 chapters doesn't take too long. However, some very large books may contain 35 or 40 chapters and, if I am working on 3 or 4 books, renaming all the files can be quite time consuming.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-2.5">
                    <p>
                        This script solves this issue by renaming all files in a directory according to the rule already set out. The only condition is that the files have to already be in order otherwise, of course, there is no way of knowing which chapter to do first.
                        The primary body of the programme is this, written in Bash:
                    </p>
                    <div id="code" className="border-2 border-slate-900 dark:border-slate-50 text-xs sm:text-sm shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.2)]">
                        <pre>{code}</pre>
                    </div>
                    <p>
                        Although this is not a particularly complex programme by any measure, it has real-world use and has saved me - as well as many of my colleagues - a great deal of precious time. It also represents some of my knowledge in Bash, which I use on an almost
                        daily basis on my own operating system when creating project files etc.
                    </p>
                    <p>The GitHub's ReadMe has instructions on how to run it and where to make edits to update aspects such as file names.</p>
                </div>
            </div>
        </section>
    )
}
import StackIcon from "tech-stack-icons";

export default function About() {
    return (
        <div className="Container w-screen h-screen">
            <div className="main-content flex w-screen h-[80vh] justify-evenly items-center gap-10">

                <div className="content w-1/4 text-wrap flex flex-col h-full gap-10 justify-center items-center">
                    <h1 className="text-center">ABOUT ME</h1>
                    <p className="">Hello! I’m Keith Clarence Sison, a Computer Science graduate
                        and a Front-End Developer with a passion for crafting
                        engaging and responsive web experiences. I love turning
                        creative ideas into functional and visually appealing websites.
                        Though my expertise lies in front-end technologies, I also have
                        some back-end experience, which helps me build more
                        seamless and interactive applications. Whether it’s optimizing
                        performance, experimenting with new frameworks, or learning new design trends, I’m always up for a challenge!
                    </p>
                </div>

                <div className="about-ImgProfile flex justify-center items-center">
                    <img className="size-3/4" src="/about-profile.png" alt="Profile"/>
                </div>

            </div>

            <div className="tech-stacks flex flex-col justify-center items-center gap-10">
                <h1 className="text-center !font-bold text-6xl">TECH STACKS</h1>
                <div className="grid grid-cols-5 gap-y-4 w-1/4">
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="html5"/></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="css3" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="js" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="nodejs" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="bootstrap5" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="jquery" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="tailwindcss" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="react" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="threejs" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="python" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="typescript" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="php" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="mysql" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="git" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="npm2" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="vercel" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="chakraui" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="visualbasic" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="csharp" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2" name="visualbasic" /></div>
                </div>
            </div>

        </div>
    )
}
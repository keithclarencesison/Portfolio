import StackIcon from "tech-stack-icons";
import { Tooltip, Button, ChakraProvider } from "@chakra-ui/react";

export default function About() {
    return (
        <div className="Container w-screen h-screen flex flex-col flex-wrap bg-[#1E1E1E]">
            <div className="main-content relative flex flex-wrap w-screen h-[70%] justify-evenly items-center gap-10">

                <div className="content w-1/4 flex flex-col h-full gap-10 justify-center items-center">
                    <h1 className="text-center text-white !text-6xl !font-bold">ABOUT ME</h1>
                    <p className="text-white">Hello! I’m Keith Clarence Sison, a Computer Science graduate
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

            <div className="tech-stacks flex flex-col justify-center items-center gap-10 bg-[#1E1E1E] ">
                <h1 className="text-center !font-bold text-6xl text-white">TECH STACKS</h1>
                <div className="grid grid-cols-5 gap-y-4 w-1/4">
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="html5"/></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="css3" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="js" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="nodejs" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="bootstrap5" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="jquery" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="tailwindcss" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="react" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="threejs" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="python" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="typescript" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="php" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="mysql" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="git" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="npm2" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="vercel" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="chakraui" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="visualbasic" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="csharp" /></div>
                    <div className="w-full flex items-center justify-center"><StackIcon className="w-1/2 hover:scale-125 transition-transform duration-300" name="visualbasic" /></div>
                </div>
            </div>

        </div>
    )
}
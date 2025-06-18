
export default function About() {
    return (
        <div className="Container w-screen bg-[#1E1E1E] h-screen">
            <div className="main-content flex justify-evenly items-center">
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
                <div className="about-ImgProfile w-1/4">
                    <img className="" src="/about-profile.png" alt="Profile"/>
                </div>
            </div>

            <div className="tech-stacks flex justify-center">
                <h1>TECH STACKS</h1>
            </div>

        </div>
    )
}
export default function Home() {
    return (
        <div className="main w-screen h-[90vh]">
            <div className="main-container w-full h-full">
                <div className="main-content h-3/4 flex justify-evenly items-center">

                    <div className="left-content w-1/2 flex flex-col items-center">
                        <p className="text-2xl">Hi I'm </p>
                        <p className="text-6xl text-[#2810FF] font-bold">Keith Clarence Sison</p>
                        <p className="text-4xl text-[#EDA024] font-bold">Web Developer</p>
                        <div className="btn my-5">
                            <button className="mr-5"><a href="#about">Contact Me</a></button>
                            <button className="">Download CV</button>
                        </div>
                    </div>

                    <div className="right-content w-1/4 flex justify-center items-center">
                        <div className="ProfileImg size-3/4">
                            <img className="rounded-[50%]" src="/keith.jpg" alt="Profile"/>
                        </div>
                    </div>
                </div>
                <div className="addition-features h-1/4 gap-6 flex justify-center">
                    <div className="feature-one w-1/4 h-1/4 flex gap-x-2 justify-center border items-center"><span className="border rounded-full bg-[#AD46FF] p-1 mr-1">20+</span> Libraries Used</div>
                    <div className="feature-two w-1/4 h-1/4 flex justify-center border items-center"><span className="border rounded-full bg-[#AD46FF] p-1 mr-1">50+</span> Video Games Played</div>
                    <div className="feature-three w-1/4 h-1/4 flex justify-center border items-center"><span className="border rounded-full bg-[#AD46FF] p-1 mr-1">1k+</span> Ice Cream Consumed</div>
                </div>

            </div>
            
        </div>
    )
}
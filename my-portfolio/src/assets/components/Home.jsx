

export default function Home() {
    return (
        <div className="main w-screen h-[60vh] flex justify-evenly items-center">
            <div className="main-container">
                <div className="main-content">
                    <p className="text-2xl">Hi I'm </p>
                    <p className="text-6xl text-[#2810FF] font-bold">Keith Clarence Sison</p>
                    <p className="text-4xl text-[#EDA024] font-bold">Web Developer</p>
                    <div className="btn my-5">
                        <button className="mr-5">About</button>
                        <button>Portfolio</button>
                    </div>
                </div>

            </div>
            <div className="ProfileImg w-[24rem]">
                <img className="rounded-[50%]" src="/public/keith.jpg" alt="Profile"/>
            </div>
            
            <div class="social-icons fixed bottom-10 left-10 flex flex-col justify-evenly items-center h-1/4">
                <a href="https://www.facebook.com/keithclarence13" target="_blank" aria-label="Facebook">
                    <i class="fab fa-facebook-f text-3xl text-white"></i>
                </a>
                <a href="https://github.com/keithclarencesison" target="_blank" aria-label="Twitter">
                    <i class="fab fa-github text-3xl text-white"></i>
                </a>
                <a href="https://www.instagram.com/keyssiieee/" target="_blank" aria-label="LinkedIn">
                    <i class="fab fa-instagram text-3xl text-white"></i>
                </a>
                <a href="https://www.linkedin.com/in/keith-clarence-sison-19994627a/" target="_blank" aria-label="GitHub">
                    <i class="fab fa-linkedin-in text-3xl text-white"></i>
                </a>
            </div>
        </div>
    )
}
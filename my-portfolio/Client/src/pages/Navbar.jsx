
export default function Navbar () {
    return (
        <div className="navbar w-full h-20 fixed top-0 bg-[#353535] flex justify-between items-center m-0 p-0">
            <div className="header-title w-1/4 !mx-7">
            <p className='!text-4xl'><a className="!text-white !font-bold" href="/">PORTFOLIO</a></p>
            </div>
            <div className="navbar-content w-1/2">
                <ul className='flex justify-evenly items-center'>
                    <li><a className="!text-2xl !text-white !font-bold" href="#about">About</a></li>
                    <li><a className="!text-2xl !text-white !font-bold" href="">Portfolio</a></li>
                    <li><a className="!text-2xl !text-white !font-bold" href="">Contact</a></li>
                </ul>
            </div>
        </div>
    )
}
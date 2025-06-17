
export default function Navbar () {
    return (
        <div className="navbar w-full h-20 flex justify-between items-center m-0 p-0">
            <div className="header-title w-1/4 mx-7">
            <p className=' text-2xl font-bold'>Portfolio</p>
            </div>
            <div className="navbar-content w-1/2">
            <ul className='flex justify-evenly items-center'>
                <li>ABOUT</li>
                <li>PORTFOLIO</li>
                <li>CONTACT</li>
            </ul>
            </div>
        </div>
    )
}
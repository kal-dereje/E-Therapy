import {AiFillCaretDown} from 'react-icons/ai';
function Header() {
    return ( <div className="flex justify-between items-center px-10 h-20">
        <div className="h-full w-14 flex justify-center items-center bg-green-700 text-white">Logo</div>
        <div>
            <nav  className="flex justify-between items-center gap-10">
                <ul className='hover:cursor-pointer'>Homepage</ul>
                <ul className='hover:cursor-pointer'>About Us</ul>
                <ul className="hover:cursor-pointer group flex items-center gap-4 relative">
                        Servives 
                        <AiFillCaretDown/>
                        <div className='absolute -bottom-[140px]   bg-white w-32 hidden group-hover:flex  flex-col  '>
                            <a href="" className='mt-5 py-2 px-2 hover:bg-green-700 hover:text-white w-full'>Single Services</a>
                            <a href="" className='py-2 px-2 hover:bg-green-700 hover:text-white w-full'>Price plan</a>
                            <a href="" className='py-2 px-2 hover:bg-green-700 hover:text-white w-full'>Appointment</a>
                        </div>
                 </ul>
                <ul className="hover:cursor-pointer">Contact Us</ul>
                <ul className="hover:cursor-pointer flex items-center  gap-4 relative group">
                    Page
                    <AiFillCaretDown />
                    <div className='absolute -bottom-[180px]   bg-white w-32 hidden group-hover:flex  flex-col  '>
                            <a href="" className='mt-5 py-2 px-2 hover:bg-green-700 hover:text-white w-full'>Team</a>
                            <a href="" className='py-2 px-2 hover:bg-green-700 hover:text-white w-full'>FAQ</a>
                            <a href="" className='py-2 px-2 hover:bg-green-700 hover:text-white w-full'>Blog</a>
                            <a href="" className='py-2 px-2 hover:bg-green-700 hover:text-white w-full'>Single Post</a>
                        </div>
                 </ul>
                <ul className=" hover:cursor-pointer px-10 py-3 bg-green-700 text-white">Get Appointment</ul>
            </nav>
        </div>
    </div> );
}

export default Header;
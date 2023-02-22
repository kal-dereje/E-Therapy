import {AiFillCaretDown} from 'react-icons/ai';
function Header() {
    return ( <div className="flex justify-between items-center px-10 h-20">
        <div className="h-full w-14 flex justify-center items-center bg-green-700 text-white">Logo</div>
        <div>
            <nav  className="flex justify-between items-center gap-10">
                <ul className='hover:cursor-pointer'>Homepage</ul>
                <ul className='hover:cursor-pointer'>About Us</ul>
                <ul className="hover:cursor-pointer flex items-center gap-4">Servives <AiFillCaretDown /> </ul>
                <ul className="hover:cursor-pointer">Contact Us</ul>
                <ul className="hover:cursor-pointer flex items-center  gap-4">Page<AiFillCaretDown /> </ul>
                <ul className=" hover:cursor-pointer px-10 py-3 bg-green-700 text-white">Get Appointment</ul>
            </nav>
        </div>
    </div> );
}

export default Header;
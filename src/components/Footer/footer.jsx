import {RiPhoneFill} from 'react-icons/ri'
import {IoMdMail} from 'react-icons/io'
import {BsClock} from 'react-icons/bs'
import {GrFacebookOption,GrLinkedinOption,GrInstagram,GrTwitter} from 'react-icons/gr'
function Footer() {
    return ( 
        <div className='grid grid-cols-4 gap-10 p-20 bg-green-100'>
            <div className='flex flex-col gap-5 '>
                <p className='text-green-700 text-3xl font-bold'>Logo</p>
                <p>Rhoncus aenean lacus consectetur neque facilisi pulvinar vitae interdum nam porttitor viverra</p>
            </div>

            <div className='flex flex-col gap-2'>
                <p className='text-green-700 text-2xl font-bold '>Office</p>
                <p>Jln Cempaka Wangi No 22, Jakaarta</p>
                <p>- Indonesia</p>
                <p className='flex items-center gap-2'>
                    <RiPhoneFill />
                    +(62) 21 2002-2012
                </p>
                <p className='flex items-center gap-2'>
                    <IoMdMail />
                    support@yourdomain.tld
                </p>
            </div>

            <div className='flex flex-col gap-2'>
                <p  className='text-green-700 text-2xl font-bold'>Office Hour</p>
                <p>Monday-Friday</p>
                <p className='flex items-center gap-2'> <BsClock /> 9:00 AM - 7:00 PM</p>
                <p>Saturday</p>
                <p className='flex items-center gap-2'> <BsClock /> 9:00 AM - 5:00 PM</p>
            </div>

            <div className='flex flex-col gap-3'>
                <p className='text-green-700 text-2xl font-bold'>Follow Us</p>
                <div className='flex gap-2'>
                    <div className='p-2 bg-green-200 w-fit'><GrFacebookOption size={20} /></div>
                    <div className='p-2 bg-green-200 w-fit'><GrLinkedinOption size={20} /></div>
                    <div className='p-2 bg-green-200 w-fit'><GrInstagram size={20} /></div>
                    <div className='p-2 bg-green-200 w-fit'><GrTwitter size={20} /></div>
                </div>
            </div>
        </div>
     );
}

export default Footer;
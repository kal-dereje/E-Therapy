import {BsPlayCircle, BsCheck2} from  'react-icons/bs';
import {BiPlay} from  'react-icons/bi';

function Home2() {
    return ( 
        <div className="grid grid-cols-2 h-screen ">
            <div className=" flex flex-col justify-start lg:p-20 gap-8 ">
                <p className="text-green-500 font-bold tracking-wider">WHO WE ARE</p>
                <h1 className="text-5xl font-serif text-green-700">No more feeling uncomfortable.</h1>
                <p className="font-medium text-slate-500">Sit nam urna lobortis cubilia feugiat sagittis letius. Netus dignissim pharetra facilisi malesuada hac dolor orci fringilla lectus odio nibh. Aliquet taciti suscipit consectetur condimentum porttitor phasellus neque. Nisl a pulvinar suspendisse amet lacinia curabitur tellus si penatibus congue bibendum.</p>
                <div className='flex justify-between items-center'>
                    <ul className='font-medium text-green-700'>
                        <li className='flex items-center gap-2'><BsCheck2/> Certified Expert</li>
                        <li className='flex items-center gap-2'><BsCheck2/> Professional & Experience</li>
                        <li className='flex items-center gap-2'> <BsCheck2/> Smart Solutions</li>
                        <li className='flex items-center gap-2'> <BsCheck2/> 25/7 Support</li>
                    </ul>

                    <div>
                        <button className='p-5 rounded-full'><BiPlay size={30}/></button>
                        <p>PLAY INTRO</p>
                    </div>
                </div>
            </div>
            <div className="bg-yellow-400"></div>
        </div>
     );
}

export default Home2;
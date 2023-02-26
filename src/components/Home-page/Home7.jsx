import {BsCheckCircleFill} from 'react-icons/bs'

function Home7() {
    return ( 
        <div className="min-h-screen grid grid-cols-2">
            <div className="flex flex-col gap-7 p-20">
                <p className='tracking-widest font-bold '>WHY CHOOSE US</p>
                <p className='text-4xl font-serif'>Focusing on you , with the best therapeutic care.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <Info icon={<BsCheckCircleFill size={30}/>} title="Confidentiality" body={"Odio dis lacinia vulputate nulla malesuada aptent consectetur vivamus orci mollis aliquet"}/>
                <Info icon={<BsCheckCircleFill size={30}/>} title="Reliability" body={"Odio dis lacinia vulputate nulla malesuada aptent consectetur vivamus orci mollis aliquet"}/>
                <Info icon={<BsCheckCircleFill size={30}/>} title="Support 24/7" body={"Odio dis lacinia vulputate nulla malesuada aptent consectetur vivamus orci mollis aliquet"}/>
            </div>
            <div className="bg-[url('assets/Images/Home-page/home7.jpg')] bg-cover"></div>
        </div>
     );
}

export default Home7;

function Info({icon,title, body}) {
    return(
        <div className="flex gap-2  text-green-700">
            <div className='p-3 h-fit  rounded-full bg-green-700 bg-opacity-10 '>{icon}</div>
            <div className="flex flex-col gap-2">
                <p className='text-2xl font-semibold'>{title}</p>
                <p className='text-black'>{body}</p>
            </div>
        </div>
    )
}
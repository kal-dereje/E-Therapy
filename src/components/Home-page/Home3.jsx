import { BiCompass } from 'react-icons/bi';
// import image from '../../assets/Images/Home-page/home3.jpg'

function Home3() {
    return (
        <div className="relative  bg-[url('assets/Images/Home-page/home3.jpg')] bg-cover  text-white">
            <div className="h-full w-[36%] bg-green-700 ml-14 flex flex-col gap-10 items-start p-10">
                <h1 className='font-serif font-bold text-6xl'>Quality care from quality experts.</h1>
                <p className='fotn-serif font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                <Info icon={<BiCompass size={50} />} title="Vision" body={"Imperdiet lacinia primis commodo risus sem porttitor ultricies maecenas natoque congue lorem nisl"}/>
                <Info icon={<BiCompass size={50}/>} title="Mission" body={"Accumsan condimentum quis facilisis auctor rutrum viverra ultrices cubilia proin urna tristique aliquet"}/>
                <Info icon={<BiCompass size={50}/>} title="Motto" body={"Imperdiet lacinia primis commodo risus sem porttitor ultricies maecenas natoque congue lorem nisl"}/>
            </div>
        </div>
      );
}

export default Home3;

function Info({icon , title, body}) {
    return (
        <div className="flex justify-between gap-4  ">
          <div className='rounded-full bg-opacity-10 bg-white h-fit p-2'>{icon}</div>
          <div>
            <h2 className='font-medium font-serif text-3xl mb-4'>{title}</h2>
            <p className=' font-serif'>{body}</p>
          </div>
        </div>
      );
}


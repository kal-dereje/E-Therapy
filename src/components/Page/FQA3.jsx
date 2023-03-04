import { BsCheckLg} from  'react-icons/bs';
function FQA3() {
  return (
      <>
      <div className=" flex flex-col w-full bg-white  h-[85vh] px-20  ">
        <div className="w-full h-[85vh] bg-[url('assets/Images/FQA/FQA2.jpg')] bg-cover  bg-fixed ">
          <div className="bg-green-700 bg-opacity-40 w-full h-[85vh] p-20 ">
                       <div className=" flex flex-col justify-start  gap-8 ">
                <h1 className="text-6xl font-medium font-sans text-white w-[45%]">We help you get another chance at life.</h1>
                <p className="text-lg  mt-4 w-[55%] text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
                <div className='flex justify-between items-center'>
                    <ul className='font-medium text-white'>
                        <li className='flex items-center gap-2'><BsCheckLg className='text-green-700 font-extrabold' size='17'/> Nibh ultrices tempus commodo</li>
                        <li className='flex items-center gap-2'><BsCheckLg className='text-green-700 font-extrabold' size='17'/> Bibendum interdum malesuada integer</li>
                        <li className='flex items-center gap-2'> <BsCheckLg className='text-green-700 font-extrabold' size='17'/> Sodales lorem porta platea</li>
                        <li className='flex items-center gap-2'> <BsCheckLg className='text-green-700 font-extrabold' size='17'/> Et odio consectetuer habitant</li>
                         <li className='flex items-center gap-2'> <BsCheckLg className='text-green-700 font-extrabold' size='17'/> Et odio consectetuer habitant</li>
                    </ul>
                    </div>
                    </div>
              </div>
              </div>
              </div>
              </>)}


export default FQA3;

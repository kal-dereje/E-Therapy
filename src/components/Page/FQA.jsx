import { AiOutlineSearch  } from "react-icons/ai";
import FQA1 from './FQA1'
import FQA3 from './FQA3'
import FQA4 from './FQA4'
function FQA() {
  return (
    <>
      <div className=" flex flex-col w-full  h-auto ">
        <div className="w-full h-[50vh] bg-[url('assets/Images/Home-Page/Home8.jpg')]  bg-cover ">
          <div className="bg-black bg-opacity-60 w-full h-full">
            <h2 className="text-6xl w-[45%] ml-28 p-28 pt-32 text-white font-medium">
              FQA </h2>
              </div>
              </div>
           
            <div className="flex flex-col items-center justify-center gap-6 w-full h-auto bg-white" >
           <h2 className="text-5xl ml-60 pt-12 text-green-700 font-semibold w-[50%] ">
              Find the answer
            </h2>
            <div className="flex  h-auto w-[50%] bg-green-50 ">
            <input className="bg-green-50 h-14 w-[100%]" placeholder='Search... 'type='search'/>
            <AiOutlineSearch size='25' className="text-green-700  mt-5"/>
            </div>
            </div>
          <FQA1/>
          <FQA3/>
          <FQA4/>
          </div>
          </>
          )}

export default FQA;








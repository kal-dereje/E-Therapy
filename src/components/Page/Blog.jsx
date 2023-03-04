import { useState } from "react";
import { data } from "./data"
import { AiOutlineSearch , AiOutlineMail  } from "react-icons/ai";
import { BsCheck2} from  'react-icons/bs';
import image from '../../assets/Images/Blog/Blog.jpg'
function Blog() {
   const [blog, setBlog] = useState("All");
    const Blog = document.getElementById("blog");
  const handelBlogClick = (e) => {
    setBlog(e.target.textContent);
      setMenu(e.target.textContent);
    if (Blog.classList.contains(" scale-0 ")) {
      Blog.classList.remove("scale-0 ");
      Blog.classList.add("scale-100 ");
    }
  }
  return (
      <>
      <div className=" flex flex-col justify-center items-center w-full  bg-gray-100">
        <div className="w-full  h-[60vh] bg-[url('assets/Images/Blog/Blog.jpg')]  bg-cover ">
          <div className="bg-black bg-opacity-80 w-full h-full flex flex-col items-center justify-center">
            <h2 className="text-6xl  text-white font-bold">
              Blog
            </h2>
             <h2 className="text-5xl mt-5 text-white font-medium">
              Archives
            </h2>
          </div>
        </div>
< div className=" w-[90%] self-center bg-gray-100 flex h-auto mt-10">
 <div  id="blog" className='w-[65%] grid grid-cols-2 scale-100' >
  {data.filter((item) => (blog == "All" ? true : blog == item.type))
            .map((item) => {
                return ( 
        <div className="flex flex-col bg-white  items-center w-[90%]  h-[90%] justify-center"key={item.id}>
          <p className='p-2 w-auto h-14 bg-green-500 text-white mt-5 ml-72 z-10'>{item.type}</p>
            <img src={image} alt="" />
            <h2 className="font-serif text-2xl mt-7 text-green-700">{item.title}</h2>
            <p className="font-serif text-center mt-9 px-5 ">{item.body}</p>
            <a className="w-full bg-gray-50  mt-10 pl-16 text-pink-600  pt-4" href="">Barbara Melton  March 13, 2022</a>
        </div>
     
        );
            })}
            </div>
<div className=' flex flex-col w-[30%] h-[160vh] bg-white items-center '>
 <div className="flex   w-[90%]  mt-14  ml-5 ">
            <input className="bg-green-50 h-10 w-[100%]" placeholder='Search... 'type='search'/>
            <AiOutlineSearch size='30' className="text-green-50 h-10 p-1 bg-green-700 "/>
            </div>
            < h3 className=' text-green-700 text-4xl pt-14 font-semibold'>Newsletter</h3>
            <p className="text-lg mt-4 ml-10 text-black  w-[90%]" >Sign up our newsletter to get updated information, promo or insight for free.</p>

<input className="h-14 w-[80%] bg-green-50 mt-14" type="Email " placeholder="Email " ></input>
<div className=" flex justify-center  items-center h-14 w-[80%] bg-green-700 mt- 1gap-2 text-white text-lg">
  <AiOutlineMail size="20"/>
<button className="">Sign-up</button>
</div>
   < h3 className=' text-green-700 text-4xl pt-14 font-semibold'>Categories</h3>
    <div className='font-medium text-green-700 gap-1 flex flex-col mt-10'>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}><BsCheck2/>  Psychologists</button>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}><BsCheck2/> Therapy</button>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/> Love</button>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/>Depression</button>
                           <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/>Anxiety</button>
                              <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/>All</button>
                    </div>
                     <div className="w-full mt-10  h-[70vh] bg-[url('assets/Images/Contact/contact.jpg')]  bg-cover ">
          <div className="bg-black bg-opacity-60 w-full h-full flex flex-col  justify-center gap-4 ">
            <p className="text-white ml-10 font-thin text-3xl">Need help?</p>
               <p className="text-white ml-10 font-medium text-3xl w-[80%]">Get The Support You Need From One Of Our Therapists</p>
               <a  className=" pl-5 p-2 rounded-md ml-14 border-[1px] w-[35%] border-white text-white text-lg">Contact-us</a>
          </div>
          </div>


</div>
  </div>
         </div>
              </>)}


export default Blog;



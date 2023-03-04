import { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import {
  AiOutlineInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import { AiOutlineSearch , AiOutlineMail  } from "react-icons/ai";
import { BsCheck2} from  'react-icons/bs';
import image from '../../assets/Images/Blog/Blog.jpg'
import image2 from "../../assets/Images/Home-page/home4.jpg";
import image1 from "../../assets/Images/Team/Team2.jpg";
import image4 from '../../assets/Images/Home-page/home7.jpg'
import image5 from '../../assets/Images/Home-page/home8.jpg'
function Singlepost() {
   const [post, setPost] = useState("love");
    const Posts = document.getElementById("post");
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
        
< div className=" w-[90%] self-center bg-gray-100  gap-6 flex h-auto mt-10">
 <div  id="blog" className='w-[65%]  bg-white scale-100' >
   <img className="w-full flex flex-col h-[80vh] p-7" src={image} alt="" />
          <h2 className="text-green-700 text-5xl font-serif font-[500] ml-6 ">Reasons To Try Online Psychiatry For Mental Health</h2>
          <div className="flex gap-5 m-5 ml-5">
             <a className="w-full text-sm   text-green-600" href="">Barbara Melton </a>
              <a className="w-full text-sm   text-green-600" href="">
March 13, 2022 </a>
              <a className="w-full text-sm   text-green-600" href="">No comment</a>
              <div className="flex gap-2">
                 <FaFacebookF size="25" className= "bg-green-700 p-1 text-green-50" />
              <AiOutlineInstagram
                size="25"
                className="bg-green-700 text-green-50 p-1"
              />
              <AiFillLinkedin
                size="25"
                className="bg-green-700 text-green-50 p-1"
              />
              </div>

          </div>
          <p className="w-[95%] m-7 text-gray-600">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
<br></br>
Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
<br></br>
Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
          </p>
           <div className="flex gap-3 ">
               <img className="w-[30%]  h-[30%] p-3" src={image} alt="" />
               <p className=" text-gray-600">
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.

Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.

Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
               </p>
            </div>
            <p className=" text-gray-600">
                 Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
<br></br>
Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.

Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. 
               </p>

<div className="bg-green-50">


</div>

            </div>
           
<div className=' flex flex-col w-[30%] h-auto bg-white items-center '>
 <div className="flex   w-[90%]  mt-14  ml-5 ">
            <input className="bg-green-50 h-10 w-[100%]" placeholder='Search... 'type='search'/>
            <AiOutlineSearch size='30' className="text-green-50 h-10 p-1 bg-green-700 "/>
            </div>
            < h3 className=' text-green-700 text-4xl pt-14 font-semibold'>Newsletter</h3>
            <p className="text-lg mt-4 ml-10 text-black  w-[90%]" >Sign up our newsletter to get updated information, promo or insight for free.</p>

<input className="h-14 w-[80%] bg-green-50 mt-14" type="Email " placeholder="Email " ></input>
<div className=" flex justify-center  items-center h-14 w-[80%] bg-green-700 mt- 1gap-2 text-white text-lg  hover:bg-black">
  <AiOutlineMail size="20"/>
<button className=" ">Sign-up</button>
</div>
<div>
   < h3 className=' text-green-700 text-4xl pl-10 pt-14 font-semibold'>Latest Post</h3>
<Post image={image} title="
How To Know When It’s Time To Walk Away From Love" />
       <Post image={image1} title="
Behavior Therapy Vs. Psychoanalysis" />
    <Post image={image2} title="
How To Get Rid Of Social Anxiety: Tips And Tricks" />
    <Post image={image1} title="
Reasons To Try Online Psychiatry For Mental Health" />
      <Post image={image4} title="
Discover The Difference Between A Therapist And A Psychologist In 2022" />
    <Post image={image5} title="How To Know When It’s Time To Walk Away From Love" />
</div>
<div>
   < h3 className=' text-green-700 text-4xl pt-14 font-semibold'>Categories</h3>
    <div className='font-medium text-green-700 gap-1 flex flex-col mt-6'>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}><BsCheck2/>  Psychologists</button>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}><BsCheck2/> Therapy</button>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/> Love</button>
                        <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/>Depression</button>
                           <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/>Anxiety</button>
                              <button className='flex items-center gap-2' onClick={handelBlogClick}> <BsCheck2/>All</button>
                    </div>
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


export default Singlepost;

function Post({ image, title }) {
     return (   <div className="  w-[85%]  h-autojustify-center mt-6">
        <div className="flex  gap-3 items-center w-full  h-auto justify-center">
            <img className="w-24 h-20 pl-3" src={image} alt="" />
            <div className="flex flex-col gap-3">
            <h2 className=" text-base mt-2 font-medium font-sans hover:text-pink-600 text-green-700">{title}</h2>
            <a className="w-full text-sm   text-gray-600" href="">Barbara Melton  March 13, 2022</a>
            </div>
        </div></div>
     
    
    
  
  );
}

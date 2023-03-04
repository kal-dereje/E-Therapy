import { AiFillCaretDown } from "react-icons/ai";
import Team2 from "./Team2";
import Team3 from "./Team3";
function Team() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center ">
        <div className="w-full  h-[50vh] bg-[url('assets/Images/Blog/Blog.jpg')]  bg-cover ">
          <div className="bg-black bg-opacity-80 w-full h-full">
            <h2 className="text-6xl w-[45%] ml-28 p-28 pt-32 text-white font-medium">
              Team
            </h2>
          </div>
        </div>
        <div className="w-full h-auto  mb-10">
          <div className="flex flex-col items-center justify-center ">
            <h2 className="text-5xl ml-28 p-10 mt-16 text-green-700 text-extrabold w-[65%] ">
              The professional, licensed, and vetted
              <span className="ml-16"> Psychologist who you can trust</span>
            </h2>
            <div className=""></div>
          </div>
          <div className="flex gap-20 p-8">
            <p className="text-xl mt-4 w-[35%] ml-32 text-black ">
              Aliquet cras interdum ac adipiscing morbi ornare ligula porttitor
              vivamus venenatis erat. Libero lectus si rhoncus cras parturient.
              Lobortis ipsum torquent pede tellus iaculis leo blandit natoque
              odio. Platea vitae condimentum enim eu dignissim scelerisque
              ullamcorper.
            </p>
            <p className="text-xl mt-4 w-[35%] ml-32 text-black ">
              Aliquet cras interdum ac adipiscing morbi ornare ligula porttitor
              vivamus venenatis erat. Libero lectus si rhoncus cras parturient.
              Lobortis ipsum torquent pede tellus iaculis leo blandit natoque
              odio. Platea vitae condimentum enim eu dignissim scelerisque
              ullamcorper.
            </p>
          </div>
        </div>
       <Team3/>
        <Team2 />
        <div className="w-full  h-[85vh] bg-[url('assets/Images/Team/Team3.jpg')] bg-cover ">
          <div className="bg-black bg-opacity-40 w-full h-full">
            <h2 className="text-6xl w-[45%] ml-28 p-10 pt-40 text-white text-extrabold">
              {" "}
              Interested In joining our team?
            </h2>
            <p className="text-xl mt-4 w-[40%] ml-32 text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="m-10 ml-40 hover:cursor-pointer px-14 py-3 bg-green-700 text-white text-lg flex justify items-center">
              Join Us
              <AiFillCaretDown className="ml-2 mt-1" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Team;


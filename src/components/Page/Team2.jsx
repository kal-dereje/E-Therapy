import { BsPlayCircle, BsCheck2 } from "react-icons/bs";
import { BiPlay } from "react-icons/bi";
import image from "../../assets/Images/Team/Team2.jpg";

function Team2() {
  return (
    <div className="grid grid-cols-2 h-screen ">
      <div className=" flex flex-col justify-start p-20 gap-8 ml-10 ">
        <h1 className="text-6xl font-serif text-green-700 w-[80%] font-medium">
          If you can laugh together,you can work together
        </h1>
        <p className="text-lg mt-4  text-black ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
        </p>
        <div>
          <Progress title="Problem solved" percentage="75%" />
          <Progress title="Case Analystics" percentage="95%" />
          <Progress title="Therapy" percentage="85%" />
        </div>
      </div>

      <div className="  pt-24 px-10">
        <div className="relative font-serif">
          <img src={image} alt="" />
          <div className="absolute bottom-0 bg-white w-44 h-28 flex flex-col gap-2 justify-end items-start">
            <h1 className="font-bold text-green-700 text-7xl">5+</h1>
            <p className=" text-green-600 text-2xl font-semibold">
              Happy Client
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team2;

function Progress({ title, percentage }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex justify-between gap-20  ">
        <div className="text-green-700 text-lg ">{title}</div>
        <div className="text-green-700 text-lg font-medium">{percentage}</div>
      </div>
      <div className="w-[550px] bg-green-50 rounded-full h-1 ">
        <div className="bg-gradient-to-r from-green-50 to-green-700 h-[5px]  w-[90%]"></div>
      </div>
    </div>
  );
}

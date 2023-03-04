import image from "../../assets/Images/Home-page/home4.jpg";
import { MdEmail} from "react-icons/md";
import {  AiFillLinkedin,AiFillFacebook } from "react-icons/ai";

function Team3() {
  return (
    <div className="flex flex-col items-center gap-2 bg-green-50 h-auto w-full pb-16">
      <p className="text-green-900 text-lg mt-4  ">MEET THE TEAM</p>
      <h2 className="text-6xl ml-28 p-5 text-green-700 font-semibold w-[50%] ">
        Teamwork makes the <span className="ml-24">dream work</span>
      </h2>
     < div className=" md:w[90%] self-center h-auto ">
      <div className=" grid grid-cols-4  gap-9  justify-items-center">
        <Fields image={image} field="Founder" name="kalab dereje" />
        <Fields image={image} field="psychology" name="Hilina mastewal" />
        <Fields image={image} field="Founder" name="kidus dawit" />
        <Fields image={image} field="psychology" name="meklit engda" />
        <Fields image={image} field="counseler" name="eyuel g/amanuel" />
        <Fields image={image} field="psychology" name="haileyesus getenet" />
        <Fields image={image} field="counseler" name="Mastewal mekonnen" />
        <Fields image={image} field="founder" name="Mikiyas Mastewal" />
      </div>
    </div>
    </div>
  );
}

export default Team3;

function Fields({ image, field, name }) {
  return (
      <div className="w-[35vh] h-[45vh]  bg-[url('assets/Images/Contact/contact.jpg')] bg-cover ">
        {/* <img src={image} alt="" className="h-full w-full " /> */}
            <div className="bg-gradient-to-b from-transparent to-green-600 w-full h-full bg-opacity-20 justify-items-center flex flex-col">
              <div className="pl-16 mt-40">
        <h2 className="font-serif text-2xl text-white  font-semibold  ">{field}</h2>
        <p className="font-serif text-center text-3xl  text-white w-[30%]">{name}</p>
        <div className="flex gap-3 mt-5 ">
          <AiFillFacebook size="20" className="bg-transparent opacity-80 text-white" />
          <MdEmail size="20" className="bg-transparent text-white opacity-80" />
          <AiFillLinkedin size="20" className="bg-transparent text-white opacity-80" />
        </div>
        </div>
        </div>
      
      </div>
  
  );
}
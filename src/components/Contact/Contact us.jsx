import { IoLocation } from "react-icons/io5";
import {
  AiOutlineMail,
  AiFillYoutube,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import { MdWifiCalling3 } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";

function Contact_us() {
  return (
    <>
      <div className=" flex flex-col justify-center items-center ">
        <div className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d1970.3985538092315!2d38.75783315797226!3d8.990808898386843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x164b84483f25d8a1%3A0x6172cf3b1f972cda!2zWFFSNSs4SEYgQmlsb3MgQ2FmZSB8IExhbmNoYSB8IOGJouGIjuGItSDhiqvhjYwgfCDhiIvhipXhibssIEFkZGlzIEFiYWJh!3m2!1d8.9908089!2d38.7589275!5e0!3m2!1sen!2set!4v1670314776769!5m2!1sen!2set"
            className=" w-full  h-[60vh]  mb-20  "
          ></iframe>
        </div>
        <div className="flex flex-row w-full  gap-10  ">
          <div className="ml-24 w-[50%]  p-9 bg-green-50 mb-10">
            <h2 className="text-green-700 text-4xl font-bold">
              Send Us Message here
            </h2>
            <p className="text-lg mt-10 font-extralight ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <form>
              <div className=" grid grid-cols-2  gap-4 ">
                <div>
                  <label for="Name">Name</label>
                  <input
                    className="w-56 h-10 mt-10 ml-3 rounded-sm bg-transparent border-[0.2px]  border-opacity-60 pl-4"
                    type="text"
                    required
                    placeholder="Name"
                  />
                </div>
                <div>
                  <label for="Email">Email</label>
                  <input
                    className="w-56 h-10 mt-10  ml-3 rounded-sm bg-transparent border-[0.2px] border-opacity-60 pl-4"
                    type="text"
                    required
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label for="subject">Subject</label>
                  <input
                    className=" w-56 ml-3  h-10 mt-5  rounded-sm bg-transparent border-[0.2px] border-opacity-60 pl-4"
                    type="text"
                    required
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label for="Name">Phone</label>
                  <input
                    className="w-56 ml-3  h-10 mt-5 rounded-sm bg-transparent border-[0.2px] border-opacity-60 pl-4"
                    type="text"
                    required
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div className="flex flex-col mt-8 gap-2">
                <label className="  " for="message">
                  Message
                </label>
                <textarea
                  className="md:w-[700px] w-96 h-[150px]   rounded-sm bg-transparent   border-[0.2px] border-opacity-60 pl-4"
                  type="text"
                  placeholder="Message"
                ></textarea>
              </div>

              <div className=" mt-4  h-auto flex justify-center  mb-6">
                <button
                  className="text-white px-64 py-2 text-lg border-2 hover:bg-green-900 transform bg-green-700  opacity-90"
                  type="submit"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          <div className="ml-28 w-auto">
            <h2 className="text-green-700 text-5xl font-medium mt-12">
              Get in touch
            </h2>
            <p className=" text-bold  font-[350] w-72 mt-5  ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
            </p>
            <div className="flex flex-col w-80 gap-6 mt-10">
              <div className="flex gap-5">
                <IoLocation size="55" className="bg-green-50 text-green-700" />
                <div className="flex flex-col">
                  <h2 className="text-green-700 text-normal text-2xl">
                    Location
                  </h2>
                  <p className="font-[350] text-base ">
                    Jln Cempaka Wangi No 22, Jakarta - Ethiopia
                  </p>
                </div>
              </div>

              <div className="flex gap-5">
                <AiOutlineMail
                  size="55"
                  className="bg-green-50 text-green-700"
                />
                <div className="flex flex-col">
                  <h2 className="text-green-700 text-normal text-2xl">
                    Email Us
                  </h2>
                  <p className="font-[350] text-base ">suppory@E-therapy.tld</p>
                </div>
              </div>
              <div className="flex gap-5">
                <MdWifiCalling3
                  size="55"
                  className="bg-green-50 text-green-700"
                />
                <div className="flex flex-col">
                  <h2 className="text-green-700 text-normal text-2xl">
                    Call Us
                  </h2>
                  <p className="font-[350] text-normal  ">+251-912-34-56-78</p>
                </div>
              </div>
            </div>
            <p className="mt-10 text-green-700 text-bold text-2xl">
              Follow Our social network
            </p>
            <div className="flex gap-4 mt-5">
              <FaFacebookF size="40" className="bg-green-50 text-green-700" />
              <AiOutlineInstagram
                size="40"
                className="bg-green-50 text-green-700"
              />
              <AiFillLinkedin
                size="40"
                className="bg-green-50 text-green-700"
              />
              <AiOutlineTwitter
                size="40"
                className="bg-green-50 text-green-700"
              />
              <AiFillYoutube size="40" className="bg-green-50 text-green-700" />
            </div>
          </div>
        </div>
        <div className="w-full  h-[100vh] bg-[url('assets/Images/Contact/contact.jpg')] bg-cover ">
          <div className="bg-black bg-opacity-50 w-full h-full">
            <h2 className="text-6xl w-[45%] ml-28 p-10 pt-40 text-white font-semibold">
              {" "}
              The best counseling from the best psychologists.
            </h2>
            <p className="text-xl mt-4 w-[40%] ml-32 text-white ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <button className="m-10 ml-40 hover:cursor-pointer px-10 py-3 bg-green-700 text-white">
              Get Appointment
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact_us;

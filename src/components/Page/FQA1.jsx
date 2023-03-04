import {AiFillCaretDown  } from "react-icons/ai";

function FQA1() {
  return (
    
      <div className=" pl-24 pt-20 w-[90%]   h-[90vh] ">
           < div className=" md:w[90%] self-center h-auto ">
                    <div className=" grid grid-cols-2  gap-12  justify-items-center">
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst." body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper" />
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst."  body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper" />
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst."  body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper"/>
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst."  body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper"/>
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst."  body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper"  />
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst." body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper"  />
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst."  body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper"  />
        <Items title="Nulla penatibus ex nec justo sociosqu dictumst."  body="Nulla penatibus ex nec justo sociosqu dictumst. Aliquet platea feugiat etiam luctus cras. Egestas nulla nibh auctor eros pulvinar quisque lorem efficitur blandit. Dictumst maximus tortor nullam fermentum cursus ullamcorper"  />
      </div>         
          </div>
          </div>
          
          )}

export default FQA1;



function Items({ title, body }) {
  return (
    <div className=" w-full  bg-green-50 h-[68px] ">
      <ul className="hover:cursor-pointer hover:bg-green-100 group flex   text-base font-medium justify-between gap-4 relative text-green-900">
              <p className='m-5'>{title }</p>
              <AiFillCaretDown  size='20'className="text-green-700 m-5" />
              <div className="absolute  top-14  bg-white     hidden group-hover:block   ">
                <p className="bg-green-200 hover:text-black w-full h-[110px] flex justify-center items-center"> {body}
                </p>
                </div>
                </ul>
    </div>
  );
}







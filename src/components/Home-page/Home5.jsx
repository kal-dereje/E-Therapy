import {BsBookmarkCheckFill,BsListCheck,BsShieldFillPlus} from "react-icons/bs"

function Home5() {
    return ( 
        <div className="flex flex-col gap-10 items-center min-h-screen pt-14" >
            <p className="tracking-wider font-bold font-sans">HOW IT WORKS</p>  
            <p className="font-serif font-bold text-5xl text-center w-[35%]">Easy step to get awesome service</p>
            <p className="font-serif font-sem w-[40%] text-center" >Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <div className="flex gap-7 p-10 mb-32 ">
                <Options number={1} icon={<BsBookmarkCheckFill size={40} />} title={"Consultations"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                <Options number={2} icon={<BsListCheck size={40}/>}title={"Choose Package"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
                <Options number={3} icon={<BsShieldFillPlus size={40} />} title={"Get Service"} body={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."} />
            </div>
        </div>
     );
}

export default Home5;


function Options({number, icon, title, body}) {
    return(
        <div className="relative flex flex-col items-center gap-5 p-8 bg-green-500 bg-opacity-30">
            <div className="text-green-700">{icon}</div>
            <p className="font-bold font-serif text-2xl text-green-700" >{title}</p>
            <p className="text-center mb-5">{body}</p>
            <div className="absolute  w-16 h-16 flex items-center justify-center bg-green-500  rounded-full -top-5 -left-5 text-2xl font-bold ">{number}</div>
        </div>
    )
}
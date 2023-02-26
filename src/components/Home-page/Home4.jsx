import image from '../../assets/Images/Home-page/home4.jpg'


function Home4() {
    return (  
        <div className="flex flex-col items-center gap-6 bg-green-50">
            <p className='font-semibold tracking-widest text-xl mt-16'>WHAT WE OFFER</p>
            <h1 className='text-5xl font-sans font-bold text-green-700 text-center w-[35%]  ' >Getting you back in shape.</h1>
            <div className='w-full grid grid-cols-3 p-14 gap-5' >
                <Therapy image={image} title="Family Counseling"  body={"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"}/>
                <Therapy image={image} title="Individual Therapy"  body={"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"}/>
                <Therapy image={image} title="Group Therapy"  body={"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"}/>
                <Therapy image={image} title="Couples Therapy"  body={"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"}/>
                <Therapy image={image} title="Depression Therapy"  body={"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"}/>
                <Therapy image={image} title="Anxiety Treatment"  body={"Lorem ipsum dolor sit amet consectetur adipiscing elit dolor"}/>
                
            </div>
            </div>
    );
}

export default Home4;


function Therapy({image, title, body}) {
    return ( 
        <div className="flex flex-col gap-6 items-center  pb-14 mb-14 bg-white">
            <img src={image} alt="" />
            <h2 className="font-serif text-3xl text-green-700">{title}</h2>
            <p className="font-serif text-center px-5">{body}</p>
            <a className="px-10 py-3 bg-green-700 text-white" href="">Learn more</a>
        </div>
     );
}


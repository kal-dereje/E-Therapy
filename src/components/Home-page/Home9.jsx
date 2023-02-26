function Home9() {
    return ( 
        <div className="h-screen flex flex-col gap-8 items-center p-20">
            <p className="font-semibold text-xl tracking-widest font-serif">TESTIMONIAL</p>
            <p className="font-bold text-5xl text-green-700">What They Say About Us</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
             <div className="flex gap-10 p-3 ">
                <Testimonial name={"Michale barker"} city={"New York"} body={"Ut aenean ipsum pharetra risus ultirices rhoncus imperdied. temport velit nullambalndit leo aliquet vupluate habitasse tincidunt. dictumst placreat ac donec curabitu ante nterf natoque sed lacus lorem bvel pretium ut dapibus lobortis orci phareta auctor lacin gne"} />
                <Testimonial name={"Michale barker"} city={"New York"} body={"Ut aenean ipsum pharetra risus ultirices rhoncus imperdied. temport velit nullambalndit leo aliquet vupluate habitasse tincidunt. dictumst placreat ac donec curabitu ante nterf natoque sed lacus lorem bvel pretium ut dapibus lobortis orci phareta auctor lacin gne"} />
             </div>
        </div>
     );
}

export default Home9;


function Testimonial({name , city, body, image}) {
    return(
        <div className="flex flex-col gap-3 p-3 bg-green-500 bg-opacity-25 " >
            <p className="">{body}</p>
            <div>
                <img src={image}alt="" />
                <div>
                    <p className="font-semibold text-green-700">{name}</p>
                    <p>{city}</p>
                </div>
            </div>

        </div>
    )
    
}
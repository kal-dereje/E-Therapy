import Home2 from "./Home2";

function Home() {
    return (
    <>
    <div className="h-screen bg-green-700 bg-opacity-25 flex justify-center items-center ">
        <div className="flex items-center justify-center flex-col gap-14 w-[50%]">
            <h1 className="text-6xl font-serif font-bold text-center">Get care from the people who care.</h1>
            <p className="text-center font-semibold  font-sans text-slate-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
            <a className="px-10 py-3 bg-green-700 text-white" href="">Get Started</a>
        </div>
    </div> 
    
    <Home2 />
    </> );
}

export default Home;
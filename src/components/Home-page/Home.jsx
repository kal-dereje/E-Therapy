import Home2 from "./Home2";
import Home3 from "./Home3";
import Home4 from "./Home4";
import Home5 from "./Home5";
import Home6 from "./Home6";
import Home7 from "./Home7";
import Home8 from "./Home8";
import Home9 from "./Home9";

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
    <Home3 />
    <Home4 />
    <Home5 />
    <Home6 />
    <Home7 />
    <Home8 />
    <Home9 />
    </> );
}

export default Home;
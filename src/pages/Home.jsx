
import { Link } from "react-router-dom";



function Home() {
    return(
        <div className="h-screen bg-cover bg-center bg-[url('/BreadHome.jpg')]"> 
            <div className="flex justify-between bg-transparent px-6 py-4 text-white-100">
                
                <nav className="flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/gallery">Gallery</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <div className="col-span-4" >
                <h1 className="text-white ">Kabayans</h1>
            </div>
            
        </div>
    );
}
export default Home;
import { 
        HomeIcon ,
        FlagIcon  , 
        ArrowTrendingUpIcon , 
        } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'   


export default function AboutUsNavigationSection(){

const navigate = useNavigate();

    return(
        <>
            <nav className="flex gap-5 md:gap-10 ">
                <div className='flex flex-col items-center'>
                    <HomeIcon className='h-6 w-6'/>
                    <a onClick={()=> navigate('/home')} className=' hover:text-amber-300 hover:text-lg' >Home</a> 
                </div>
                <div className='flex flex-col items-center'>
                    <FlagIcon className='h-6 w-6'/>
                    <a onClick={()=> navigate('/our-story')} className=' hover:text-amber-300 hover:text-lg' >Our Story</a> 
                </div>
                <div className='flex flex-col items-center'>
                    <FlagIcon className='h-6 w-6'/>
                    <a onClick={()=> navigate('/our-mission')} className=' hover:text-amber-300 hover:text-lg' >Mission</a> 
                </div>
                <div className='flex flex-col items-center'>
                    <ArrowTrendingUpIcon  className='h-6 w-6'/>
                    <a onClick={()=> navigate('/our-vision')} className=' hover:text-amber-300 hover:text-lg' >Vision</a> 
                </div>
            </nav>
        </>
    )
}
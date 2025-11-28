
import Icon from '@mdi/react';
import {
  mdiBreadSlice,
  mdiCookie,
  mdiCakeVariant,
  mdiViewList,        // as “Pastries”
  mdiBreadSliceOutline,    // as “Sandwiches”
  mdiCup,             // as “Beverages”
} from '@mdi/js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import BreadMenuSection from "./BreadMenuTrial";
import CookiesMenuSection from "./CookiesMenu";
import CakesMenuSection from "./CakesMenu";
import PastriesMenuSection from "./PastriesMenu";
import SandwichesMenuSection from "./SandwichesMenu";
import BeveragesMenuSection from "./BeveragesMenu";
import BottomBar from "./BottomBar";
import { useState } from 'react';


export default function ListOfMnenuSection() {
    

const MenuArray = [
  { name: 'Breads',      content: <BreadMenuSection />,      icon: mdiBreadSlice },
  { name: 'Cookies',     content: <CookiesMenuSection />,    icon: mdiCookie },
  { name: 'Cakes',       content: <CakesMenuSection />,      icon: mdiCakeVariant },
  { name: 'Pastries',    content: <PastriesMenuSection />,   icon: mdiViewList },
  { name: 'Sandwiches',  content: <SandwichesMenuSection />, icon: mdiBreadSliceOutline },
  { name: 'Beverages',   content: <BeveragesMenuSection />,  icon: mdiCup },
];

const [selectedMenu ,setSelectedMenu ]=useState(0)

    return (
        <section className="scroll-smooth ">

            <div className='flex gap-5 p-5  h-screen'>

                {/* Left Page Component */}
                <div className='w-1/4 bg-transparent grid grid-row-5 p-2 gap-1'>
                    <div className="bg-transparent row-span-1 p-2 flex items-center">
                        <div className="relative w-full">
                            <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-3 py-2 rounded-md border border-blue-400-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <MagnifyingGlassIcon className="w-5 h-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                
                    <div className='bg-transparent  flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold font-serif'>Menu</h1>
                        <div className='flex flex-col gap-1 '>
                        {MenuArray.map((item, index) => (
                            <button 
                            key={index}
                            onClick={()=>setSelectedMenu(index)}
                            className='w-full h-16 flex items-center justify-start bg-amber-100 hover:bg-amber-700 p-4 gap-5'
                            >
                            <Icon path={item.icon} size={1} className="text-gray-700" />
                                <span className="ttext-lg ">{item.name}</span>
                            </button>
                        ))}
                        </div>
                    </div>

                    <div className=' bg-blue-600 row-span-3 '></div>
                </div> 


                {/*Center Page Component  */}
                <div className=' w-1/2 bg-amber-500'>
                       {MenuArray[selectedMenu].content}
                </div> 


                {/* Right Page Component */}
                <div className='w-1/4 bg-amber-300 grid grid-rows-5 p-2'>
                    <div className='bg-red-200 row-span-2'></div>
                    <div className='bg-red-300 row-span-3 '></div>
                </div>
            </div>
            <BottomBar/>
            
        </section>
    );
}


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
import BreadMenuSection from "./BreadMenu";
import CookiesMenuSection from "./CookiesMenu";
import CakesMenuSection from "./CakesMenu";
import PastriesMenuSection from "./PastriesMenu";
import SandwichesMenuSection from "./SandwichesMenu";
import BeveragesMenuSection from "./BeveragesMenu";
import BottomBar from "./BottomBar";
import { useState } from 'react';


export default function ListOfMnenuSection({}) {
    

const MenuArray = [
  { name: 'Breads',      content: () => (<BreadMenuSection orderedProduct={orderedProduct} setOrderedProduct={setOrderedProduct}/>),  icon: mdiBreadSlice },
  { name: 'Cookies',     content: <CookiesMenuSection />,    icon: mdiCookie },
  { name: 'Cakes',       content: <CakesMenuSection />,      icon: mdiCakeVariant },
  { name: 'Pastries',    content: <PastriesMenuSection />,   icon: mdiViewList },
  { name: 'Sandwiches',  content: <SandwichesMenuSection />, icon: mdiBreadSliceOutline },
  { name: 'Beverages',   content: <BeveragesMenuSection />,  icon: mdiCup },
];


const [selectedMenu ,setSelectedMenu ]=useState(0)
const [orderedProduct, setOrderedProduct] = useState([]);

    return (
        <section className="scroll-smooth  md:bg-[url('/bakeryDim.jpg')] bg-cover bg-center  ">

            <div className='flex gap-2 p-5  h-screen'>

                {/* Left Page Component */}
                <div className='w-1/4 bg-transparent grid grid-row-5 p-2 gap-1'>
                    <div className="bg-transparent row-span-1 p-2 flex items-center">
                        <div className="relative w-full">
                            <input
                            type="text"
                            placeholder="Search..."
                            className="w-full pl-10 pr-3 py-2 rounded-md border text-white border-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <MagnifyingGlassIcon className="w-5 h-5 text-white absolute left-3 top-1/2 transform -translate-y-1/2" />
                        </div>
                    </div>
                
                    <div className='bg-transparent  flex flex-col gap-2'>
                        <h1 className='text-3xl font-bold font-sans text-white'>Menu</h1>
                        <div className='flex flex-col gap-1 '>
                        {MenuArray.map((item, index) => (
                            <button 
                            key={index}
                            onClick={()=>setSelectedMenu(index)}
                            className='w-full h-16 flex items-center justify-start bg-white hover:bg-amber-500 p-4 gap-5 hover:text-white hover:scale-102 hover:text-lg'
                            >
                            <Icon path={item.icon} size={1} className="text-black" />
                                <span>{item.name}</span>
                            </button>
                        ))}
                        </div>
                    </div>

                    <div className=' bg-blue-600 row-span-3 '></div>
                </div> 


                {/*Center Page Component  */}
                <div className=' flex flex-col gap-2 w-1/2 bg-transparent p-5 h-full overflow-y-auto hide-scrollbar'>
                        <div className='text-4xl text-white'>{MenuArray[selectedMenu].name}</div>
                        <div className='w-full'>
                            {MenuArray[selectedMenu].content()}
                        </div>
                       
                </div> 


                {/* Right Page Component */}
                <div className='w-1/4 bg-transparent grid grid-rows-12 p-2'>
                    <div className='bg-gray-100 rounded-t-2xl row-span-1 flex justify-center items-center'>
                        <h1 className='text-2xl font-bold font-sans text-black'>MY ORDER</h1>
                    </div>
                    <div className='bg-gray-300 row-span-6 '>
                        <div></div>

                    </div>
                    <div className='bg-gray-200 row-span-3 rounded-b-2xl '>

                    </div>
                </div>
            </div>
            <BottomBar/>
            
        </section>
    );
}

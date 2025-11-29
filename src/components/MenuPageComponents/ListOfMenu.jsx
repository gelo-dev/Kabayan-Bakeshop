
import Icon from '@mdi/react';
import {mdiBreadSlice,mdiCookie,mdiCakeVariant, mdiViewList, mdiBreadSliceOutline, mdiCup,} from '@mdi/js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import BreadMenuSection from "./BreadMenu";
import CookiesMenuSection from "./CookiesMenu";
import CakesMenuSection from "./CakesMenu";
import PastriesMenuSection from "./PastriesMenu";
import SandwichesMenuSection from "./SandwichesMenu";
import BeveragesMenuSection from "./BeveragesMenu";
import { CartContext } from '../../pages/CartContext';
import BottomBar from "./BottomBar";
import { useContext, useEffect, useState } from 'react';


export default function ListOfMnenuSection({}) {
    

const MenuArray = [
  { name: 'Breads',      content: <BreadMenuSection/>,  icon: mdiBreadSlice },
  { name: 'Cookies',     content: <CookiesMenuSection />,    icon: mdiCookie },
  { name: 'Cakes',       content: <CakesMenuSection />,      icon: mdiCakeVariant },
  { name: 'Pastries',    content: <PastriesMenuSection />,   icon: mdiViewList },
  { name: 'Sandwiches',  content: <SandwichesMenuSection />, icon: mdiBreadSliceOutline },
  { name: 'Beverages',   content: <BeveragesMenuSection />,  icon: mdiCup },
];

const { orderedProduct } = useContext(CartContext);
const [selectedMenu ,setSelectedMenu ]=useState(0)
const [totalPrice, setTotalPrice] = useState(0);

useEffect(() => {
    const total = orderedProduct.reduce((acc, item) => acc + Number(item.price), 0);
    setTotalPrice(total);
  }, [orderedProduct]);


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
                            {MenuArray[selectedMenu].content}
                        </div>
                       
                </div> 


                {/* Right Page Component */}
                <div className='w-1/4 bg-transparent grid grid-rows-12 p-2 gap-1'>
                    <div className='bg-gray-100 rounded-t-2xl row-span-1 flex justify-center items-center'>
                        <h1 className='text-2xl font-bold font-sans text-black'>MY ORDER</h1>
                    </div>
                    {orderedProduct.length > 0 && 
                    <div className='bg-white row-span-6 overflow-y-auto '>
                        <ul className='flex flex-col'>
                            {orderedProduct.map((item, i) => (
                            <li className='p-2 font-bold bg-linear-to-t from-green-400 to-green-300 h-15 outline-1 outline-amber-50'
                            key={i}>{item.name} - ₱{item.price}</li>
                            ))}
                        </ul>

                    </div>}
                    <div className='bg-gray-100 row-span-4 flex flex-col justify-center items-center gap-5 rounded-b-3xl'>
                        <h1 className=''>{orderedProduct.length > 1 ? 'Total Items: ' : 'Total Item: '}
                            <span className='font-bold text-lg'>{orderedProduct.length}</span>
                        </h1>
                        <div className=' flex flex-col items-center'>
                            <h1 className='font-bold text-4xl'>{"₱ " +  totalPrice}</h1>
                            <h6 className=''>Amount to Pay</h6>

                        </div>
                        <button className=' bg-green-500 px-15 py-3 rounded-2xl hover:bg-green-700 hover:shadow-xs hover:text-white '>Confirm Order</button>
                        

                    </div>
                </div>
            </div>
            <BottomBar/>
            
        </section>
    );
}

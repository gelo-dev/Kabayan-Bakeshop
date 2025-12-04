
import Icon from '@mdi/react';
import {mdiBreadSlice,mdiCookie,mdiCakeVariant, mdiViewList, mdiBreadSliceOutline, mdiCup,} from '@mdi/js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PlusIcon , MinusIcon ,TrashIcon  } from '@heroicons/react/24/outline'
import ListOfProductsSection from "./ListOfProducts";
import menuData from './sampleMenuArray';
import { CartContext } from '../../pages/CartContext';
import BottomBar from "./BottomBar";
import { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

export default function ListOfMnenuSection({}) {
    

const MenuArray = [
  { name: "Breads", category: "breads", icon: mdiBreadSlice },
  { name: "Cookies", category: "cookies", icon: mdiCookie },
  { name: "Cakes", category: "cakes", icon: mdiCakeVariant },
  { name: "Pastries", category: "pastries", icon: mdiViewList },
  { name: "Sandwiches", category: "sandwiches", icon: mdiBreadSliceOutline },
  { name: "Beverages", category: "beverages", icon: mdiCup },
];

const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: -50 }}   // start 50px above
    animate={{ opacity: 1, y: 0 }}    // slide into place
    exit={{ opacity: 0, y: 50 }}      // exit by sliding down
    transition={{ duration: 1 }}
  >
    {children}
  </motion.div>
);

const { orderedProduct ,increaseQty :addQuantity , decreaseQty : decQuantity}  = useContext(CartContext);
const [selectedIndex, setSelectedIndex] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);





const selectedCategory = MenuArray[selectedIndex].category;
const categoryData = menuData[selectedCategory];


;







useEffect(() => {
  const total = orderedProduct.reduce((acc, item) =>
    acc + Number(item.price) * item.quantity
  , 0);

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
                            onClick={()=>setSelectedIndex(index)}
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
                <div className=' flex flex-col gap-6 w-1/2 bg-transparent p-5 h-full overflow-y-auto hide-scrollbar'>
                        <div className='text-4xl text-white flex items-center justify-center'>{MenuArray[selectedIndex].name}</div>
                        <div className='w-full'>
                            <AnimatePresence>
                                <PageWrapper >
                                          <ListOfProductsSection category={categoryData} categoryName = {selectedCategory} />
                                </PageWrapper>
                              
                            </AnimatePresence>
                            
                        </div>
                       
                </div> 
 

                {/* Right Page Component */}
                <div className='w-1/4 bg-transparent grid grid-rows-12 p-2 gap-1'>
                    <div className='bg-gray-100 rounded-t-2xl row-span-1 flex justify-center items-center'>
                        <h1 className='text-2xl font-bold font-sans text-black'>MY ORDER</h1>
                    </div>
                    {orderedProduct.length > 0 && 
                    <div className='bg-white row-span-6 overflow-y-auto '>
                        <ul className='flex flex-col outline-1'>
                            <div className='bg-transparent'>
                                <table className='w-full text-sm  '>
                                    <thead>
                                        <tr>
                                            <th  className="px-2 py-1 "></th>
                                            <th className="px-2 py-1 "></th>
                                            <th className="px-4 py-2 ">Item Name</th>
                                            
                                            <th className="px-4 py-2 ">Price</th>
                                            <th className="px-4 py-2 ">Qty</th>
                                        </tr>
                                    </thead>
                                </table>
                            </div>
                            {orderedProduct.map((item, i) => (
                            <li className='p-2 font-bold  h-15 mt-2 outline-1 outline-amber-50 justify-between items-center flex'
                            key={i}>
                                    
                                    <div className='hover:bg-gray-200 h-8 w-8 flex items-center justify-center rounded-full text-red-400'>
                                        <TrashIcon
                                        data-tooltip-id="remove-tooltip" 
                                        data-tooltip-content={`Remove ${ item.name } from order?`} 
                                        className="hover:scale-110 h-5 w-5"/> 
                                        <Tooltip 
                                        id="remove-tooltip"
                                        place="top"
                                        className="red-tooltip"
                                        />
                                    </div> 
                                    <span>{item.name}</span><span className='text-green-600 text-sm'> ₱{item.price}</span>
                                <div className="flex items-center gap-1 bg-transparent ">                                  
                                        {item.quantity > 1 && (
                                            <>
                                                <MinusIcon
                                                data-tooltip-id="minus-tooltip"
                                                data-tooltip-content="-1 "
                                                onClick={() => decQuantity(item)}
                                                className="h-6 w-6 text-red-400 font-bold cursor-pointer hover:border rounded"
                                                />

                                                {/* Tooltip only rendered once per page or component */}
                                                <Tooltip
                                                id="minus-tooltip"
                                                place="top"
                                                className="red-tooltip "
                                                />
                                            </>
                                            )}                                   
                                        <input disabled placeholder={item.quantity}  className='w-10 bg-amber-50 text-center'></input>

                                
                                            <PlusIcon
                                            data-tooltip-id="add-tooltip"
                                            data-tooltip-content="+1 "
                                            onClick={()=>addQuantity(item)} 
                                            className="h-6 w-6 font-bold text-green-500 hover:border"/>
                                            <Tooltip
                                            id="add-tooltip"
                                            place="top"
                                            className="green-tooltip"
                                            />
                                    
                                </div>
                            </li>
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

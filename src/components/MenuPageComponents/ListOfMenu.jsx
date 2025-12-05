
import Icon from '@mdi/react';
import {mdiBreadSlice,mdiCookie,mdiCakeVariant, mdiViewList, mdiBreadSliceOutline, mdiCup,} from '@mdi/js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PlusIcon , MinusIcon ,TrashIcon , HomeIcon ,ShoppingCartIcon , UserIcon, } from '@heroicons/react/24/outline'
import ListOfProductsSection from "./ListOfProducts";
import menuData from './sampleMenuArray';
import { CartContext } from '../../pages/CartContext';
import { useContext, useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useNavigate } from 'react-router-dom';
import Home from "../../pages/Home"

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
const navigate = useNavigate()
const { orderedProduct ,increaseQty :addQuantity , decreaseQty : decQuantity , deleteItem}  = useContext(CartContext);
const [selectedIndex, setSelectedIndex] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
const [showDialog, setShowDialog] = useState(false);





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
        <section className="scroll-smooth bg-amber-700 md:bg-[url('/bakeryDim.jpg')] bg-cover bg-center  ">
            <Home/>
            <div className='flex gap-2 p-5  h-screen'>
{/*ANCHOR Left Page Component */}
                <div className='w-1/5 bg-transparent hidden md:grid grid-row-5 p-2 gap-1'>
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

                    <div className=' bg-transparent row-span-3 flex items-center justify-center '>
                        <button
                        onClick={() => navigate("/")} 
                        className='outline-2 hover:bg-white text-white hover:text-black outline-white rounded-full h-15 w-15 flex justify-center items-center'>
                            <HomeIcon className="h-6 w-6  cursor-pointer" />
                        </button>
                            
                    </div>
                </div> 

{/* ANCHOR Center Page Component  */}
                <div className=' flex flex-col gap-6 w-full md:w-1/2  md:bg-transparent p-2  md:p-5 h-full overflow-y-auto hide-scrollbar'>
                        <div className='hidden md:text-4xl text-white md:flex items-center justify-center'>{MenuArray[selectedIndex].name}</div>
                   
                        <div className='w-full'>
                            <AnimatePresence>
                                <PageWrapper >
                                          <ListOfProductsSection category={categoryData} categoryName = {selectedCategory} />
                                </PageWrapper>
                              
                            </AnimatePresence>
                            
                        </div>
                       
                </div> 
 

{/* ANCHOR Right Page Component */}
                <div className='w-1/3 bg-transparent hidden md:grid grid-rows-12 p-2 gap-1'>
                    <div className='bg-gray-100 rounded-t-2xl row-span-1 flex justify-center items-center'>
                        <h1 className='text-2xl font-bold font-sans text-black'>MY ORDER</h1>
                    </div>
                    {orderedProduct.length > 0 && 
                    <div className='bg-white row-span-6 overflow-y-auto '> 
{/* ANCHOR LIST OF ORDER TABLE -  */}
                                <table className='w-full text-sm text-center border '>
                                    <thead className='border-b'>
                                        <tr>
                                            <th className="px-2 py-1"></th>
                                            <th className="px-4 py-2">Item Name</th>
                                            <th className="px-4 py-2">Price</th>
                                            <th className="px-4 py-2">Quantity</th>
                                            <th className="px-4 py-2">Total</th>
                                        </tr>
                                    </thead>
                                    {orderedProduct.map((item, index) => (
                                        <tr key={index} className="border-b">
                                            <td className="px-3 py-1">
                                                <TrashIcon
                                                    onClick={() => deleteItem(item)}
                                                    data-tooltip-id="remove-tooltip" 
                                                    data-tooltip-content={`Remove ${ item.name } from order.`} 
                                                    className=" h-5 w-5"/> 
                                                <Tooltip 
                                                    id="remove-tooltip"
                                                    place="top"
                                                    className="red-tooltip"
                                                />
                                            </td>
                                                                                
                                            <td className="px-4 py-2 font-semibold">{item.name}</td>                                           
                                            <td className="px-4 py-2">₱{item.price}</td>                                         
                                            <td className="px-4 py-2 col-span-2 flex">                                                
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
                                                <input disabled placeholder={item.quantity}  className='w-10 bg-amber-50 text-center font-bold'></input>                                
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
                                            </td>
                                            <td className="px-4 py-2 font-bold">₱{item.price * item.quantity}</td>
                                        </tr>
                                    ))}
                                </table>
                                
                    </div>}
                    <div className='bg-gray-100 row-span-4 flex flex-col justify-center items-center gap-5 rounded-b-3xl'>
                        <h1 className=''>{orderedProduct.length > 1 ? 'Total Items: ' : 'Total Item: '}
                            <span className='font-bold text-lg'>{orderedProduct.length}</span>
                        </h1>
                        <div className=' flex flex-col items-center'>
                            <h1 className='font-bold text-4xl '>{"₱ " +  totalPrice.toLocaleString()}</h1>
                            <h6 className=''>Amount to Pay</h6>

                        </div>
                       {orderedProduct.length > 0 && <button
                            onClick={() => setShowDialog(true)} 
                            className=' bg-green-500 px-15 py-3 rounded-2xl hover:bg-green-700 hover:shadow-xs hover:text-white '>
                                Confirm Order
                        </button>}
                        

                    </div>
                </div>
            </div>



{/* ANCHOR ORDER SUMMARY */}
            {showDialog && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[90%] max-w-xl">
                        <div className='flex justify-between mb-4'>   
                            <h2 className="text-xl font-bold  text-center">Order Summary</h2>
                            <button
                                onClick={() => setShowDialog(false)}
                                className="  text-red-600 rounded hover:shadow hover:bg-gray-100 hover:text-red-700"
                                >
                                Close
                                </button>    
                        </div>
                    
                    <table className="w-full text-sm text-center border">
                        <thead>
                        <tr className="bg-gray-100">
                            <th className="p-2 border">Item</th>
                            <th className="p-2 border">Price</th>
                            <th className="p-2 border">Qty</th>
                            <th className="p-2 border">Total</th>
                        </tr>
                        </thead>

                        <tbody>
                        {orderedProduct.map((item, i) => (
                            <tr key={i} className="border-b">
                            <td className="p-2 border">{item.name}</td>
                            <td className="p-2 border">₱{item.price}</td>
                            <td className="p-2 border">{item.quantity}</td>
                            <td className="p-2 border font-semibold ">
                                ₱{item.price * item.quantity}
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    
                        
                    </table>
                
                    <div className='flex justify-between w-full bg-transparent p-2 items-center '>
                        <div></div>
                        <div className='flex gap-5 text-green-600 '>
                            <span className=''>Total Amount to Pay :</span>
                            <span className='mr-5 font-bold underline underline-offset-4'>{"₱ " +  totalPrice.toLocaleString()}</span>
                        </div>
                        
                        </div>

                    <div className="text-right mt-1 flex  items-center justify-center">
                            <button
                            className="w-full bg-linear-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-bold py-3 rounded-2xl shadow-lg transition-all duration-300 tracking-wide flex items-center justify-center gap-2"
                            >
                            Proceed to Checkout
                            <ShoppingCartIcon className="h-6 w-6" />
                            </button>

                    </div>

                    </div>
                </div>
                )}


{/* ANCHOR BOTTOM BAR FOR SMALL SCREEN */}
        <div className="fixed bottom-0 left-0 h-15 w-full bg-white shadow-inner border-t flex justify-around items-center p-2 z-50 md:hidden">
      
            {/* Home Button */}
            <button className="flex flex-col items-center text-gray-700 hover:text-black">
                <HomeIcon
                onClick={() => navigate("/")}  
                className="h-6 w-6" />
                <span className="text-xs">Home</span>
            </button>

            {/* Cart Button */}
            <button className="flex flex-col items-center text-gray-700 hover:text-black">
                <ShoppingCartIcon
                 onClick={() => setShowDialog(true)}  
                className="h-6 w-6" />
                <span className="text-xs">Cart</span>
            </button>

            {/* Profile Button */}
            <button className="flex flex-col items-center text-gray-700 hover:text-black">
                <UserIcon className="h-6 w-6" />
                <span className="text-xs">Profile</span>
            </button>
            </div>
            
        </section>
    );
}

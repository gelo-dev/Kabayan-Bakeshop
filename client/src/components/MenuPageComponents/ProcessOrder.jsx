
import Icon from '@mdi/react';
import {mdiBreadSlice,mdiCookie,mdiCakeVariant, mdiViewList, mdiBreadSliceOutline, mdiCup,} from '@mdi/js';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { PlusIcon ,
        MinusIcon ,
        TrashIcon , 
        HomeIcon ,
        ShoppingCartIcon , 
        UserIcon, 
        ChevronDoubleUpIcon ,
        ChevronDoubleDownIcon ,
        ChevronLeftIcon,
        HeartIcon 
        } from '@heroicons/react/24/outline'
import ListOfProductsSection from "./ListOfProducts";
import menuData from '../../JavaScript/sampleMenuArray';
import { CartContext } from '../../pages/CartContext';
import { useContext, useEffect, useState ,useRef } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { useNavigate } from 'react-router-dom';
import { useSwipeable } from "react-swipeable";
import {
        SwipeableList,
        SwipeableListItem,
        TrailingActions,
        SwipeAction
        } from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import RatingsSections from './Ratings';
import SmallScreenBottomBarSection from '../bottomBarSmallScreen';





export default function ProcessOrderSection({}) {
    

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
const { showOrderSmallScreen, setShowOrderSmallScreen , orderedProduct ,increaseQty :addQuantity , decreaseQty : decQuantity , deleteItem}  = useContext(CartContext);
const [selectedIndex, setSelectedIndex] = useState(0);
const [totalPrice, setTotalPrice] = useState(0);
const [showDialog, setShowDialog] = useState(false);




useEffect(() => {
const container = containerRef.current;
const button = buttonRefs.current[selectedIndex];

    if (!container || !button) return;

    const containerWidth = container.offsetWidth;
    const buttonWidth = button.offsetWidth;

    const scrollLeft =
    button.offsetLeft - containerWidth / 2 + buttonWidth / 2;

    container.scrollTo({
    left: scrollLeft,
    behavior: "smooth",
});
}, [selectedIndex]);

const containerRef = useRef(null);
const buttonRefs = useRef([]);




const selectedCategory = MenuArray[selectedIndex].category;
const categoryData = menuData[selectedCategory];


const handlers = useSwipeable({
        onSwipedLeft: () => {
        setSelectedIndex((prev) =>
            prev < MenuArray.length - 1 ? prev + 1 : prev
        );
        },
        onSwipedRight: () => {
            setSelectedIndex((prev) => (prev > 0 ? prev - 1 : prev));
            },
            trackTouch: true,
            trackMouse: false,
});





useEffect(() => {
  const total = orderedProduct.reduce((acc, item) =>
    acc + Number(item.price) * item.quantity
  , 0);

  setTotalPrice(total);
}, [orderedProduct]);


    return (
        <section
         className="scroll-smooth bg-white md:bg-[url('/bakeryDim.jpg')] bg-cover bg-center ">
         
       
            <div className='flex gap-2 p-1 md:p-5 h-screen'>
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
                        onClick={() => navigate("/home")} 
                        className='outline-2 hover:bg-white text-white hover:text-black outline-white rounded-full h-15 w-15 flex justify-center items-center'>
                            <HomeIcon className="h-6 w-6  cursor-pointer" />
                        </button>
                            
                    </div>
                </div> 

{/* ANCHOR Center Page Component  */}
                <div className=' flex flex-col gap-3 md:gap-3 w-full md:w-1/2  bg-gray-100 md:bg-transparent p-2  md:p-5 h-full overflow-y-auto hide-scrollbar'>
                        <div className='hidden md:text-4xl text-white md:flex items-center justify-center'>{MenuArray[selectedIndex].name}</div>
                        
                        <div {...handlers} className='w-full bg-gray-100 md:bg-transparent'>
                            <AnimatePresence>
                                <PageWrapper >
                                        <ListOfProductsSection category={categoryData} categoryName = {selectedCategory} />
                                </PageWrapper>
                            
                            </AnimatePresence>
                            
                        </div>
                    
                </div> 


{/* ANCHOR Right Page Component */}
                <div className='w-1/3 bg-transparent hidden md:grid grid-rows-12 p-2 gap-1'>
                    <div className=' backdrop-blur-sm outline outline-white rounded-t-2xl  row-span-1 flex justify-center items-center'>
                        <h1 className='text-2xl font-bold font-sans text-white'>MY ORDER</h1>
                    </div>
                    {orderedProduct.length > 0 && 
                    <div className='hidden md:flex flex-col gap-3 p-2 backdrop-blur-sm outline outline-white row-span-6 overflow-y-auto hide-scrollbar '> 
{/* ANCHOR LIST OF ORDER TABLE -  */}
                        <ul>
                            {orderedProduct.map((item, index)=>(
                                <li className=' flex flex-col mb-3 hover:scale-102 rounded-2xl hover:outline-2' key={index}>
                                    <div className='flex gap-2 h-25 bg-gray-300 rounded-2xl p-2'>
                                        <div
                                        style={{ backgroundImage: `url(${item.image})` }} 
                                        className='bg-amber-200 w-1/4 rounded-2xl bg-cover bg-center drop-shadow-md'>
                                            
                                        </div>
                                        <div className=' flex flex-col gap-1 bg-transparent w-1/2 p-1 justify-end'>
                                            <div className='flex gap-3 items-center'>
                                                <span className="text-sm text-amber-700 font-bold">
                                                    {item.name} 
                                                </span>
                                                <TrashIcon
                                                        onClick={() => deleteItem(item)}
                                                        data-tooltip-id="remove-tooltip" 
                                                        data-tooltip-content={`Remove ${ item.name } from order.`} 
                                                        className=" h-4 w-4 text-red-700 "/> 
                                                <Tooltip 
                                                    id="remove-tooltip"
                                                    place="top"
                                                    className="red-tooltip"
                                                />
                                            </div>
                                            <div className='flex items-center  w-3/4 justify-between'>
                                                <div className='flex flex-col items-center justify-center'>
                                                    <span className='text-xl'>{ "₱"+ item.price}</span>  
                                                    <span className='text-xs'>Price</span>  
                                                </div>
                                                
                                                <div className='flex flex-col items-center justify-center'>
                                                    
                                                    <div className='flex items-center justify-center '>
                                                    
                                                        
                                                            <MinusIcon
                                                            data-tooltip-id="minus-tooltip"
                                                            data-tooltip-content="-1"
                                                                onClick={() => {
                                                            if (item.quantity <= 1) return; // disable click
                                                            decQuantity(item);
                                                            }}
                                                            className={`h-6 w-6 p-1 rounded 
                                                            ${item.quantity <= 1 ? "opacity-30 cursor-not-allowed pointer-events-none" : "cursor-pointer hover:bg-gray-200 text-red-500"}
                                                            `}
                                                            />
                                                            <Tooltip id="minus-tooltip" place="top" className="red-tooltip" />
                                                    
                                                        

                                                            <input
                                                            disabled
                                                            placeholder={item.quantity}
                                                            className="w-10  rounded-lg text-center font-bold bg-white "
                                                            />

                                                            <PlusIcon
                                                            data-tooltip-id="add-tooltip"
                                                            data-tooltip-content="+1"
                                                            onClick={() => addQuantity(item)}
                                                            className="h-6 w-6 cursor-pointer hover:bg-gray-200 p-1 rounded hover:text-green-600"
                                                            />
                                                            <Tooltip id="add-tooltip" place="top" className="green-tooltip" />
                                                    </div>
                                                    <div className='flex  items-center justify-center'>
                                                        <span className='text-xs'>Qty</span>
                                                    </div>
                                                    
                                                    
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div className='flex items-center justify-center   bg-gray-400 w-1/4 rounded-2xl'>
                                            <div className='flex flex-col items-center justify-center rounded-t-2xl'>
                                                <span className="font-bold text-green-700 text-2xl">
                                                    ₱{(item.price * item.quantity).toLocaleString()}
                                                </span>
                                                <span className='text-xs'>Total</span>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </li>
                            ))}
                        </ul>
                                
                    </div>}
                    <div className='backdrop-blur-sm outline outline-white row-span-4 flex flex-col justify-center items-center gap-5 rounded-b-3xl'>
                        <h1 className='text-white'>{orderedProduct.length > 1 ? 'Total Items: ' : 'Total Item: '}
                            <span className='font-bold text-lg'>{orderedProduct.length}</span>
                        </h1>
                        <div className=' flex flex-col items-center'>
                            <h1 className='font-bold text-4xl text-white '>{"₱ " +  totalPrice.toLocaleString()}</h1>
                            <h6 className='text-white'>Amount to Pay</h6>

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
                    <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50">
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
 

{/* ANCHOR ORDER SUMMARY FOR SMALL SCREEN */}
                    {showOrderSmallScreen &&(
                        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 md:hidden">
                            <div className="md:hidden flex flex-col gap-3 p-3 h-full bg-white w-full max-w-md text-black rounded-2xl overflow-hidden">

                            
                                <div className=" rounded-t-2xl ">
                                    <div className="h-14 flex items-center px-3 gap-2 bg-amber-700 rounded-t-2xl">
                                        <ChevronLeftIcon
                                        onClick={() => setShowOrderSmallScreen(false)}
                                        className="h-6 w-6 stroke-2 text-white cursor-pointer"
                                        />
                                        <span className="text-white font-medium">Back to Menu</span>
                                    </div>

                                    <div className="h-16 flex flex-col items-center justify-center gap-2  ">
                                        <div className='flex gap-2'>
                                            <ShoppingCartIcon className="h-7 w-7 text-amber-700" />
                                            <span className="text-2xl font-serif text-amber-700">Your Order</span>
                                        </div>
                                        {orderedProduct.length > 0 &&(<span className='text-xs text-amber-700'> Swipe left to remove order.</span>)}
                                    </div>
                                </div>

                            
                                <SwipeableList>
                                    {orderedProduct.map((item) => (
                                        <SwipeableListItem                                            
                                        key={`${item.id}-${item.category}`}
                                        className="mb-2"
                                        trailingActions={
                                            <TrailingActions>
                                            <SwipeAction
                                                destructive={true}
                                                onClick={() => deleteItem(item)}  // auto delete on swipe
                                            />
                                            </TrailingActions>
                                        }
                                        >
                                    
                                        <div className="flex bg-white border border-amber-700 h-20 p-2 shadow-md rounded-xl w-full ">

                                            
                                            <div className="flex items-center justify-center w-1/4 p-1">
                                            <div
                                                style={{ backgroundImage: `url(${item.image})` }}
                                                className="bg-gray-200 border border-gray-300 h-16 w-full rounded-xl bg-center bg-cover"
                                            />
                                            </div>

                                            
                                            <div className="flex flex-col w-1/2 justify-between px-2">
                                                <span className="font-semibold text-xs text-amber-700">{item.name}</span>

                                                <div className="flex items-center gap-3">

                                                    <div className="text-md flex flex-col items-center font-medium">
                                                        ₱{item.price}
                                                        <span className="text-xs text-gray-500">Price</span>
                                                    </div>

                                                    <div className="flex flex-col items-center">
                                                        <div className="flex items-center">
                                                            {item.quantity > 1 && (
                                                            <>
                                                                <MinusIcon
                                                                data-tooltip-id="minus-tooltip"
                                                                data-tooltip-content="-1"
                                                                onClick={() => decQuantity(item)}
                                                                className="h-6 w-6 cursor-pointer hover:bg-gray-200 p-1 rounded"
                                                                />
                                                                <Tooltip id="minus-tooltip" place="top" className="red-tooltip" />
                                                            </>
                                                            )}

                                                            <input
                                                            disabled
                                                            placeholder={item.quantity}
                                                            className="w-10 bg-white rounded-lg text-center font-bold border"
                                                            />

                                                            <PlusIcon
                                                            data-tooltip-id="add-tooltip"
                                                            data-tooltip-content="+1"
                                                            onClick={() => addQuantity(item)}
                                                            className="h-6 w-6 cursor-pointer hover:bg-gray-200 p-1 rounded"
                                                            />
                                                            <Tooltip id="add-tooltip" place="top" className="green-tooltip" />
                                                        </div>
                                                        <span className="text-xs text-gray-500">Qty</span>
                                                    </div>
                                                </div>
                                            </div>

                                            
                                            <div className="bg-gray-200 w-1/4 rounded-xl flex flex-col items-center justify-center">
                                                <span className="font-bold text-green-700 text-lg">
                                                    ₱{(item.price * item.quantity).toLocaleString()}
                                                </span>
                                                <span className="text-xs text-gray-600">Total</span>
                                            </div>
                                        </div>
                                        </SwipeableListItem>
                                    ))}
                                </SwipeableList>


                                <div className="bg-white rounded-b-2xl flex flex-col p-3 gap-4 shadow-inner">
                                    <div className="flex justify-center gap-10">
                                        <div className="flex flex-col items-center">
                                            <span className="font-bold text-3xl">{orderedProduct.length}</span>
                                            <h1 className="text-sm text-amber-700">
                                                {orderedProduct.length > 1 ? "Total Items" : "Total Item"}
                                            </h1>
                                        </div>

                                        <div className="flex flex-col items-center">
                                            <h1 className="font-bold text-4xl text-green-700">
                                                ₱ {totalPrice.toLocaleString()}
                                            </h1>
                                            <h6 className="text-sm text-amber-700">Amount to Pay</h6>
                                        </div>
                                    </div>

                                    {/* CHECKOUT BUTTON */}
                                    <div className="flex items-center justify-center">
                                        <button
                                        className="
                                            bg-green-600 
                                            hover:bg-green-700 
                                            active:bg-green-800
                                            text-white 
                                            font-semibold 
                                            px-6 
                                            py-3 
                                            rounded-xl
                                            shadow-md 
                                            hover:shadow-lg 
                                            active:shadow-sm
                                            flex 
                                            items-center 
                                            gap-2
                                            transition-all
                                            duration-200
                                            w-full
                                            justify-center
                                        "
                                        >
                                        <ShoppingCartIcon className="w-5 h-5" />
                                        Checkout
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    )}



{/* TOP BAR FOR SMALL SCREEN */}
                {!showOrderSmallScreen &&(<div className="md:hidden fixed top-0 left-0 w-full z-50 bg-white shadow-md flex flex-col gap-2 p-2">

                        <div className="relative w-full">
                            <MagnifyingGlassIcon className="h-5 w-5 text-amber-700 absolute left-3 top-1/2 -translate-y-1/2" />

                            <input
                            type="text"
                            placeholder="Search..."
                            className="w-full bg-gray-100 rounded-xl pl-10 pr-3 py-2 outline-none text-amber-700"
                            />
                        </div>
                    {/* Horizontal menu buttons */}
                    <div
                    ref={containerRef} 
                    className="flex gap-4 overflow-x-auto hide-horizontal-scrollbar h-12 p-1">
                        {MenuArray.map((item, index) => (
                            <button 
                                key={index}
                                ref={(el) => (buttonRefs.current[index] = el)}
                                onClick={() => setSelectedIndex(index)}
                                className={`flex h-10 items-center px-3 rounded-md whitespace-nowrap min-w-max
                                drop-shadow-sm outline
                                ${
                                selectedIndex === index
                                    ? " outline-amber-600"
                                    : "bg-gray-100 text-black outline-gray-200"
                                }
                            `}

                            >
                                <Icon path={item.icon} size={1} className="text-amber-700" />
                                <span className=''>{item.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Selected name */}
                    <div className="flex items-center justify-center text-xl font-serif  py-1">
                        <span className='text-amber-700 font-bold'>{MenuArray[selectedIndex].name}</span>
                    </div>

                </div>)}
    

{/* ANCHOR BOTTOM BAR FOR SMALL SCREEN */}
                <div className="hidden md:block">
                    <RatingsSections />
                </div>

                <SmallScreenBottomBarSection/>
            
        </section>
    );
}

import { useContext, useState } from "react";
import {InformationCircleIcon ,ShoppingCartIcon} from "@heroicons/react/24/outline";
import { CartContext } from "../../pages/CartContext";



export default function BreadMuneSection({category  }){
    if (!category) return null;
   
    const [flippedCards, setFlippedCards] = useState({});
    const { setOrderedProduct } = useContext(CartContext);
    const addItem = (item) => setOrderedProduct(prev => [...prev, item]);
    const [selectedItem, setSelectedItem] = useState(null);

    const handleConfirm = () => {
        addItem(selectedItem);      // actually add the item to cart
         setSelectedItem(null); // close modal
    };

   //Function For Flipping Menu     
    const toggleFlip = (id) => {
            setFlippedCards(prev => ({
                ...prev,
                [id]: !prev[id]
            }));
        };


    return(
        <section id="breads">

            <div className="grid grid-cols-3 gap-2">
            {category.map((item, index) => (
                <div key={index} className="relative w-full h-80 perspective">
                
                {/* FLIP WRAPPER */}
                <div
                    className={`relative w-full h-full duration-500 transform-style-preserve-3d ${
                    flippedCards[item.id] ? "rotate-y-180" : ""
                    }`}
                >
                    {/* FRONT SIDE */}
                    <div className="absolute w-full h-full backface-hidden">
                        <div className="bg-amber-200 w-full h-full rounded-2xl flex flex-col items-center">

                            {/* IMAGE + ICON + PRICE */}
                            <div
                            style={{ backgroundImage: `url(${item.image})` }}
                            className="bg-amber-400 w-full h-60 rounded-t-2xl bg-cover bg-center flex flex-col p-1"
                            >
                                <InformationCircleIcon
                                    className="stroke-blue-700 stroke-1 h-[15%]  cursor-pointer ml-45"
                                    onClick={(e) => {
                                    e.stopPropagation();
                                    toggleFlip(item.id);
                                    }}
                                />

                            </div>

                            {/* NAME + BUTTONS */}
                            <div className="bg-gray-100 w-full h-40 rounded-b-2xl flex flex-col items-center gap-2">
                                <h1 className="text-lg"> {"₱ " + item.price}</h1>
                                <span className="text-xl">{item.name}</span>

                                <button
                                onClick={() => setSelectedItem(item)}
                                className="bg-green-500 hover:bg-green-700 text-white font-bold px-5 py-1 rounded-full flex item-center gap-2 shadow-md transition">
                                    Order Now
                                    <ShoppingCartIcon className="w-5 h-5" />
                                </button>

                            </div>
                        </div>
                    </div>

                    {/*BACK SIDE */}
                    <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-white rounded-2xl p-4 flex flex-col items-center justify-center text-center">
                    
                        <h1 className="text-lg font-bold mb-2">{item.name}</h1>
                        <p className="text-sm mb-4">{item.description || "No description available."}</p>

                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-full"
                            onClick={() => toggleFlip(item.id)}
                        >
                            Back
                        </button>
                    </div>
                </div>
                </div>
            ))}

                {selectedItem && (
                        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
                            <div className="bg-white rounded-lg p-6 w-96">
                                <h2 className="text-xl font-bold mb-2">Add to Your Order?</h2>
                                <p className="mb-6">
                                Do you want to add <b>{selectedItem.name}</b> to your order list and continue exploring our menu?    
                                
                                </p>
                                <div className="flex justify-end gap-4">
                                <button
                                    onClick={() => setSelectedItem(null)}
                                    className="px-4 py-2 rounded border border-gray-300 hover:bg-gray-100"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleConfirm}
                                    className="px-4 py-2 rounded bg-green-500 text-white hover:bg-green-600"
                                >
                                    Confirm
                                </button>
                                </div>
                            </div>
                        </div>
                )}



            </div>

                        
        </section>
    )

}
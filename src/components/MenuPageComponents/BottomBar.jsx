import { HomeIcon, ShoppingCartIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

export default function BottomBar() {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white shadow-inner border-t flex justify-around items-center p-2 z-50 md:hidden">
      
      {/* Home Button */}
      <button className="flex flex-col items-center text-gray-700 hover:text-black">
        <HomeIcon className="h-6 w-6" />
        <span className="text-xs">Home</span>
      </button>

      {/* Cart Button */}
      <button className="flex flex-col items-center text-gray-700 hover:text-black">
        <ShoppingCartIcon className="h-6 w-6" />
        <span className="text-xs">Cart</span>
      </button>

      {/* Search / Text Input */}
      {/* <div className="flex items-center border rounded px-2 py-1 w-1/3">
        <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 mr-1" />
        <input
          type="text"
          placeholder="Search..."
          className="outline-none text-sm w-full"
        />
      </div> */}

      {/* Profile Button */}
      <button className="flex flex-col items-center text-gray-700 hover:text-black">
        <UserIcon className="h-6 w-6" />
        <span className="text-xs">Profile</span>
      </button>
    </div>
  );
}

import { useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, ShoppingBagIcon , CameraIcon  ,ChevronLeftIcon ,CakeIcon } from "@heroicons/react/24/outline";

export default function MobileNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    
    { name: "Events", path: "/event", icon: CakeIcon  },
    { name: "Store", path: "/store", icon: ShoppingBagIcon  },
    { name: "Moments", path: "/moments", icon: CameraIcon  },
  ];

;




  const currentItem = navItems.find(
    (item) => item.path === location.pathname
  );
  const Icon = currentItem?.icon;

  return (
    <>
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-t md:hidden z-50">
      <div className="bg-white h-15 flex items-center justify-center gap-23">
        <ChevronLeftIcon
        onClick={()=>navigate("/")} 
        className="h-6 w-6 text-amber-700" />
        <div className="flex items-center gap-2">
          {Icon && <Icon className="h-6 w-6 text-amber-700" />}
          <span className="text-3xl font-serif text-amber-700" >{(currentItem?.name) ? currentItem?.name : "Events"}</span>
        </div>
        
        <div/>
      </div>
    </nav>


    <nav className="fixed bottom-0 left-0 w-full bg-white shadow-md border-t md:hidden z-50">
      <ul className="flex justify-around items-center p-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          return (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.path)}
                className={`
                  flex flex-col items-center justify-center
                  text-gray-500
                  ${isActive ? "text-amber-700" : "hover:text-amber-600"}
                  transition-colors duration-200
                `}
              >
                <Icon className="w-6 h-6 mb-1 text-amber-800 font-bold" />
                <span className="text-xs font-medium">{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
    </>
    
  );
}

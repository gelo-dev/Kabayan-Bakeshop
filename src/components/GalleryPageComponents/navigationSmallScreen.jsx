import { useNavigate, useLocation } from "react-router-dom";
import { HomeIcon, ShoppingCartIcon, UserIcon } from "@heroicons/react/24/outline";

export default function MobileNavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "Orders", path: "/orders", icon: ShoppingCartIcon },
    { name: "Profile", path: "/profile", icon: UserIcon },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md border-t md:hidden z-50">
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
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs font-medium">{item.name}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

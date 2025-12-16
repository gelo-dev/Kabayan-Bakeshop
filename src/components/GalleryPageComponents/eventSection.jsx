

export default function EventSection(){
const eventsData = [
  {
    title: "Grand Opening Promo",
    description: "Celebrate our grand opening with freshly baked breads and exclusive in-store discounts.",
    date: "March 15, 2025",
    month: "March",
    day: "15",
    time: "8:00 AM – 6:00 PM",
    location: "Kabayans Bakeshop – Main Branch",
    image: "./imagesForGallery/Events/grand-opening.jpg",
  },
  {
    title: "Fresh Pandesal Morning",
    description: "Enjoy hot pandesal straight from the oven, perfect for your morning coffee.",
    date: "Every Saturday",
    month: "Every Month",
    day: "Sat",
    time: "6:00 AM – 9:00 AM",
    location: "All Kabayans Bakeshop Branches",
    image: "./imagesForGallery/Events/pandesal-morning.jpg",
  },
  {
    title: "Holiday Bread Specials",
    description: "Limited-edition breads and pastries made specially for the holiday season.",
    date: "December 1 – December 24, 2025",
    month: "December",
    day: "1–24",
    time: "All Day",
    location: "Selected Branches",
    image: "./imagesForGallery/Events/holiday-special.jpg",
  },
  {
    title: "Buy 2 Get 1 Free Friday",
    description: "Bring your family and enjoy our Buy 2 Get 1 Free promo on selected items.",
    date: "Every Friday",
    month: "Every Month",
    day: "Friday",
    time: "2:00 PM – 7:00 PM",
    location: "Main Branch Only",
    image: "./imagesForGallery/Events/buy2get1.jpg",
  },
  {
    title: "Chocolate Croissant Week",
    description: "Celebrate the week with our delicious chocolate croissants at a special price.",
    date: "April 7 – April 13, 2025",
    month: "April",
    day: "7–13",
    time: "All Day",
    location: "All Kabayans Bakeshop Branches",
    image: "./imagesForGallery/Events/choco-croissant.jpg",
  },
  {
    title: "Customer Appreciation Day",
    description: "We appreciate our customers! Free mini pastries for every purchase over ₱500.",
    date: "May 20, 2025",
    month: "May",
    day: "20",
    time: "10:00 AM – 5:00 PM",
    location: "Main Branch",
    image: "./imagesForGallery/Events/customer-appreciation.jpg",
  },
];




        return(
            <section id="event" className="h-screen ">
                <div className="grid grid-cols-2 h-screen p-4">
                    <div className=" h-screen  flex flex-col items-center justify-center">
                        <div className="">
                            <span className="text-9xl  text-white mr-90">Events</span>
                        </div>
                        
                        <ul className="mt-4 text-lg text-white list-disc list-inside space-y-2">
                            <li>Stay up to date with our latest promos, freshly baked specials, and exciting bakery events.</li>
                            <li>Discover what’s happening at Kabayans Bakeshop — from seasonal treats to special offers.</li>
                            <li>Join us for our latest events and enjoy freshly baked delights every day.</li>
                        </ul>
                    </div>

                    <div className="flex-col p-10 bg-transparent overflow-y-auto hide-scrollbar   ">
                        <ul className="flex flex-col gap-4">
                            {eventsData.map((item,index)=>(
                                <li
                                className="" 
                                key={index}>
                                        <div
                                        className="bg-white rounded-2xl h-56 flex p-4 gap-4">
                                            <div className="w-50 outline-2 outline-amber-900 rounded-2xl items-center justify-center flex flex-col gap-2">
                                                <span className="text-6xl font-serif text-amber-700">{item.day}</span>
                                                <span className="text-sm font-sans">{item.time}</span>
                                                <span className="text-md font-sans">{item.month}</span>
                                            </div>
                                            <div className=" w-90 flex flex-col items-start p-2 gap-3">
                                                <div className="h-1/4 text-2xl font-bold">
                                                {item.title}
                                                </div>
                                                <div>
                                                    <span>
                                                        {item.description}
                                                    </span>
                                                </div>
                                                <div>
                                                    <button className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-2 rounded-2xl transition duration-300">
                                                        View Details
                                                    </button>
                                                </div>
                                            </div>
                                        
                                        </div> 
                                </li>

                            ))}                        
                        </ul>
                     
                    </div>



                </div>
            </section>
        )
}
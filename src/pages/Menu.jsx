import { useRef } from "react";


export default function MenuSection (){

    const menu = [
        {
        image: "/handMade.jpg",
        text: `Fresh is our promise
                -tale of love, honest ingredients, and the joy of real baking.`
        },
        {
        image: "/stoneOven.jpg",
        text: "Taste the tradition — where every loaf tells a story."
        },
        {
        image: "/zoomBread.jpg",
        text: "Baked with heart — bringing warmth and sweetness to every home."
        },
         {
        image: "/PHFlag.jpg",
        text: "Our bread is made with the warmth and dedication of Filipino hands—rooted in tradition, perfected with heart."
        },
        {
        image: "/sliceOfCake.jpg",
        text: "Our bread is made with the warmth and dedication of Filipino hands—rooted in tradition, perfected with heart."
        },
        {
        image: "/Jeepney.jpg",
        text: "Our bread is made with the warmth and dedication of Filipino hands—rooted in tradition, perfected with heart."
        }
    ];

    const testButton = ()=>{
        alert('this is test')
    }

    const scrollRef = useRef();
  let isDown = false;
  let startX;
  let scrollLeft;

  // Mouse/touch drag handlers
  const handleMouseDown = (e) => {
    isDown = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = scrollRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDown) return;
    const x = e.pageX || e.touches[0].pageX;
    const walk = (startX - x); // how far mouse moved
    scrollRef.current.scrollLeft = scrollLeft + walk;
  };

  const handleMouseUp = () => {
    isDown = false;
  };

  const scrollLeftBtn = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRightBtn = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };


    return (
        <section
            id="menu"
            className="h-250 flex  justify-center relative "
            
            >
            <div className="relative w-full mx-auto p-8">
      {/* Left Button - hidden on small screens */}
      <button
        onClick={scrollLeftBtn}
        className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
      >
        ◀
      </button>

      {/* Scrollable Container */}
      <div
        ref={scrollRef}
        className="overflow-x-hidden scroll-smooth cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleMouseDown}
        onTouchMove={handleMouseMove}
        onTouchEnd={handleMouseUp}
      >
        <div className="flex space-x-3">
          {menu.concat(menu).map((element, i) => (
            <div
              key={i}
              className="shrink-0 w-100 h-100 bg-white bg-cover bg-center rounded-lg hover:scale-90"
              style={{ backgroundImage: `url(${element.image})` }}
            ></div>
          ))}
        </div>
      </div>

      {/* Right Button - hidden on small screens */}
      <button
        onClick={scrollRightBtn}
        className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full z-20"
      >
        ▶
      </button>
    </div>
            
             
            </section>

    );
}


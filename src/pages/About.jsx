export default function AboutSection() {
    return (
       <section  id="about" className="h-screen flex items-center justify-between  p-10">
  {/* Left content area */}
  <div className="bg-white rounded-r-[100px] flex flex-col justify-center px-16 py-10 w-1/2 h-[80%] shadow-lg">
    <h1 className="text-4xl font-bold text-gray-800 leading-snug">
      Have no time to prepare <span className="text-orange-500">food?</span>
    </h1>
    <p className="text-gray-600 mt-4">
      Choose one of our plans, enter delivery time, and enjoy delicious food
      without leaving your home!
    </p>
    <div className="mt-8 flex gap-4">
      <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600">
        Order food
      </button>
      <button className="text-gray-600 hover:underline">Read more</button>
    </div>
  </div>

  {/* Right image area */}
  <div className="w-1/2 h-[80%] bg-[url('/sliceOfCake.jpg')] bg-cover bg-center rounded-l-[100px] shadow-lg"></div>
</section>


    );
}


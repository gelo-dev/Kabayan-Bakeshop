export default function AboutSection() {
    return (
        <section id="about" className="h-screen items-center justify-center">


           

             <div className="grid grid-cols-3 grid-rows-3 gap-2 h-full w-full rounded-2xl">
    {/* Div 1 */}
    <div className="col-span-2 row-span-2 bg-[url('/stoneOven.jpg')] bg-cover bg-center rounded-2xl"></div>

    {/* Div 2 */}
    <div className="bg-[url('/handMade.jpg')] bg-cover bg-center rounded-2xl"></div>

    {/* Div 3 */}
    <div className="bg-[url('/BreadHome.jpg')] bg-cover bg-center rounded-2xl"></div>

    {/* Div 4 */}
    <div className="col-span-2 bg-[url('/zoomBread.jpg')] bg-cover bg-center rounded-2xl"></div>

    {/* Div 5 */}
    <div className="bg-[url('/handMade.jpg')] bg-cover bg-center rounded-2xl"></div>
  </div>
        </section>

    );
}


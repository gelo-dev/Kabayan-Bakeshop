import Wave from 'react-wavify';

export default function ListOfProductsHeaderSection(){
    return(
        <section className='h-screen hidden sm:block'>


       <div className="relative bg-green-900 text-white pb-40">
      {/* your section content here */}

      <Wave
        fill="#ffffff"
        className="absolute bottom-0 left-0 w-full"
        options={{
          height: 20,
          amplitude: 30,
          speed: 0.2,
          points: 3,
        }}
      />
    </div>
        </section>
    )
      
    
}
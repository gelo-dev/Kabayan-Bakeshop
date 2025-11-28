import menuSampleList from "./sampleMenuArray"

export default function BeveragesMenuSection(){
   
    const test= ()=>{
         console.log(menuSampleList);
    }
    test()
    return(
        <section id="beverages" className="h-screen">
            <h1>this is bread</h1> 
        </section>
    )
}
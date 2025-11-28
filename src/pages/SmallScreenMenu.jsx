import BreadMenuSection from "../components/MenuPageComponents/BreadMenu";
import CookiesMenuSection from "../components/MenuPageComponents/CookiesMenu";
import CakesMenuSection from "../components/MenuPageComponents/CakesMenu";
import PastriesMenuSection from "../components/MenuPageComponents/PastriesMenu";
import SandwichesMenuSection from "../components/MenuPageComponents/SandwichesMenu";
import BeveragesMenuSection from "../components/MenuPageComponents/BeveragesMenu";
import BottomBar from "../components/MenuPageComponents/BottomBar";


export default function (){
    return (
        <section>
            <BreadMenuSection/>
            <CookiesMenuSection/>
            <CakesMenuSection/>
            <PastriesMenuSection/>
            <SandwichesMenuSection/>
            <BeveragesMenuSection/>
            <BottomBar />
        </section>
        
    )
}
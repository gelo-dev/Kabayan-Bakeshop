import Layout from '../layoutBackground'
import ScrollFadeSection from '../ScrollFadeSection'
import BreadMenuSection from "./BreadMenu";
import CookiesMenuSection from "./CookiesMenu";
import CakesMenuSection from "./CakesMenu";
import PastriesMenuSection from "./PastriesMenu";
import SandwichesMenuSection from "./SandwichesMenu";
import BeveragesMenuSection from "./BeveragesMenu";
import BottomBar from "./BottomBar";

export default function ListOfMnenuSection() {
    return (
        <section className="scroll-smooth">
            {/* Top Nav - Only Desktop */}
            <div className={`md:flex justify-between px-2 py-2 md:px-6 md:py-4 text-black bg-white top-0 left-0 w-full z-50 hidden md:fixed`}>
                <nav className='flex gap-5 scale-75 md:scale-100'>
                    <a href="#breads">Breads</a>
                    <a href="#cookies">Cookies</a>
                    <a href="#cakes">Cakes</a>
                    <a href="#pastries">Pastries</a>
                    <a href="#sandwiches">Sandwiches</a>
                    <a href="#beverages">Beverages</a>
                </nav>
            </div>


            <Layout>
                <ScrollFadeSection>
                    <BreadMenuSection />
                </ScrollFadeSection>
                <ScrollFadeSection>
                    <CookiesMenuSection />
                </ScrollFadeSection>
                <ScrollFadeSection>
                    <CakesMenuSection />
                </ScrollFadeSection>
                <ScrollFadeSection>
                    <PastriesMenuSection />
                </ScrollFadeSection>
                <ScrollFadeSection>
                    <SandwichesMenuSection />
                </ScrollFadeSection>
                <ScrollFadeSection>
                    <BeveragesMenuSection />
                </ScrollFadeSection>
            </Layout>

            <BottomBar />
        </section>
    );
}

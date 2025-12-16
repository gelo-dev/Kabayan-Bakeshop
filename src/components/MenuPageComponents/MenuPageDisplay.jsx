import ScrollFadeSection from "../ScrollFadeSection";
import MenuPromoPageSection from "./MenuPromo";
import ProcessOrderSection from "./ProcessOrder";
import Layout from "../layoutBackground";


export default function MenuDisplayPagesSection() {
  return (
    <section className="scroll-smooth">
    
      <ScrollFadeSection>
        <MenuPromoPageSection />
      </ScrollFadeSection>
          
      <ScrollFadeSection>
        <ProcessOrderSection />
      </ScrollFadeSection>
       

    </section>
  );
}

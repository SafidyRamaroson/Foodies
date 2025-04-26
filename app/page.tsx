"use client";

import { 
    ContactTemplate,
    FooterTemplate,
    HeroTemplate,
    HowToWorkTemplate,
    MostPopularFoodsTemplate,
    OurServicesTemplate,
    SubcriberTemplate,
    TestimonialsTemplate
} from "@/components/templates";


export default function IndexPage() {
    return (
        <>
            <HeroTemplate />
            <ContactTemplate />
            <MostPopularFoodsTemplate />
            <OurServicesTemplate />
            <HowToWorkTemplate />
            <TestimonialsTemplate />
            <SubcriberTemplate />
            <FooterTemplate />
        </>
    )
}
"use client";

import { OurServices } from "../molecules";
import { SectionHeader } from "../atoms";
import { servicesItems } from "@/data";

export function OurServicesTemplate(){
    return (
        <div
        className="flex flex-col items-center w-5/6 mt-12">
            <SectionHeader 
                title="Services"
                subtitle="Why Choose Our Favorite Food"
            />
            <OurServices items={servicesItems} />
        </div>
    )
}
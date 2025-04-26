"use client";

import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ServiceCardItem } from "../atoms";

type Props = {
    items: {
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
        serviceName: string;
        serviceDescription: string;
    }[]
}

export function OurServices({
    items
}: Props) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-12">
            {items?.map((item) => (
                <ServiceCardItem {...item} key={item?.serviceDescription} />
            ))}
        </div>
    )
}
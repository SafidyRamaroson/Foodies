"use client";

import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ContactItem } from "../atoms";

type Props = {
    items: {
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
        label: string;
        content: string;
    }[],
}
export function ContactCard({ items }: Props) {
    return (
        <div className="md:w-full md:mx-4 lg:mx-0 lg:w-5/6 my-24 rounded-2xl p-12 grid grid-cols-1 space-y-8 md:space-y-0 md:grid-cols-2 lg:grid-cols-3 shadow-[0_5px_15px_0px_hsl(0,0%,0%,0.15)]">
            {items?.map((item) => (
                <ContactItem icon={item.icon} label={item.label} content={item.content} key={item.label}/>)
            )}
        </div>
    )
}
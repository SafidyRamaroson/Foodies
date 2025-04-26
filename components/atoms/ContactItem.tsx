"use client";

import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Props= {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    label: string;
    content: string;
}

export function ContactItem({
    icon: Icon,
    label,
    content
}: Props){
    return(
        <div className="flex flex-col items-center gap-1">
            <Icon className="bg-primary p-2 rounded-full size-10 text-white"/>
            <h1 className="font-bold text-lg">{content}</h1>
            <p>{label}</p>
        </div>
    )
}
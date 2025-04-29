"use client";

import { childVariants } from "@/utils/motion";
import { LucideProps } from "lucide-react";
import { motion } from "motion/react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
    icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
    serviceName: string;
    serviceDescription: string;
}

export function ServiceCardItem({
    icon: Icon,
    serviceName,
    serviceDescription
}: Props) {
    return (
        <motion.div
            variants={childVariants}
            layout 
            className="flex flex-col items-center gap-1 p-8 border-2 hover:shadow-[0_10px_25px_0px_hsl(0,0%,0%,0.15)] hover:transition-shadow hover:duration-300 hover:ease-out hover:border-[0px] rounded-3xl"
        >
            <Icon className="bg-secondary p-2 rounded-full size-20 text-primary my-8" />
            <h1 className="font-bold text-xl mb-8">{serviceName}</h1>
            <p className="text-center mb-4">{serviceDescription}</p>
        </motion.div>
    )
}
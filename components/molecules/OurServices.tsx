"use client";

import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";
import { ServiceCardItem } from "../atoms";
import { motion } from "motion/react";
import { containerVariants } from "@/utils/motion";

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
        <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{
                margin: '-100px'
            }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12 mb-12">
            {items?.map((item) => (
                <ServiceCardItem {...item} key={item?.serviceDescription} />
            ))}
        </motion.div>
    )
}
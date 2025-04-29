"use client";

import { fadeInLeftVariants, fadeInScaleVariants, slideOutVariants } from "@/utils/motion";
import { motion } from "motion/react";
slideOutVariants

type Props = {
    title: string;
    subtitle: string;
}

export function SectionHeader({
    title,
    subtitle
}: Props) {
    return (
        <div className="flex flex-col gap-2">
            <motion.h2
                variants={fadeInScaleVariants}
                initial="initial"
                whileInView="animate"
                className=" text-center text-primary"
            >
                { title }
            </motion.h2>
            <motion.h3
                initial="initial"
                whileInView="animate"
                variants={fadeInLeftVariants}
                className="text-5xl max-sm:text-xl font-bold mt-2 text-center"
            >
                    { subtitle }
            </motion.h3>
        </div>
    )
}
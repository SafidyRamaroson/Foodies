"use client";

import { slideInVariants } from "@/utils/motion";
import { motion } from "motion/react";


export function HeroSubTitle() {
    return (
        <motion.p
            initial="initial"
            whileInView="animate"
            variants={slideInVariants}
            exit="exit"
        >
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusantium molestias natus debitis inventore sapiente in, amet veritatis excepturi earum, facere tempore et.
        </motion.p>
    )
}
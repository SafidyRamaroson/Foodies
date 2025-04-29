"use client";

import { fadingVariants } from "@/utils/motion";
import { AnimatePresence, motion } from "motion/react";


export function HeroTitle() {
    return (
        <AnimatePresence>

            <motion.h1
                className="max-sm:text-4xl text-7xl w-full font-extrabold mb-10"
                variants={fadingVariants}
                initial="initial"
                whileInView="animate"
                exit="exit"
            >
                The Fastest <br className="max-sm:hidden" /> Delivery <br className="max-sm:hidden" /> In <span className="text-primary">Your City</span>
            </motion.h1>
        </AnimatePresence>
    )
}
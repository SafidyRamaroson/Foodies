"use client";

import Image from "next/image";
import { SubcriberForm } from "../organisms/SubcriberForm";
import BurgerImage from "@/public/assets/burger1.png";
import { motion } from "motion/react";
import { fadeInScaleVariants } from "@/utils/motion";

export function SubcriberTemplate() {
    return (
        <motion.div
            variants={fadeInScaleVariants}
            initial="initial"
            whileInView="animate"
            className="w-5/6 my-16 bg-black rounded-3xl grid grid-cols-1 md:grid-cols-[4fr_3fr] gap-8 max-sm:place-items-center"
        >
            <div className="grid place-items-center max-sm:mb-4">
                <Image
                    src={BurgerImage}
                    alt="Burger Image"
                    className="scale-x-[2.2] scale-y-[2.2] max-sm:scale-100 w-56 aspect-square object-cover"
                    quality={100}
                />
            </div>
            <SubcriberForm />
        </motion.div>
    )
}
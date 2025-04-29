"use client";



import HeroScreenShootImage from "@/public/assets/heroScreenShoot.png";
import ChickenImage from "@/public/assets/chicken.png";
import { StepCard } from "../molecules";
import { motion } from "motion/react";
import { containerVariants } from "@/utils/motion";

const steps = [
    {
        title: "CHOOSE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure cum perferendis, laudantium fugiat officia quidem enim culpa natus.",
        image: HeroScreenShootImage,
    },
    {
        title: "PREPARE FOOD",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure cum perferendis, laudantium fugiat officia quidem enim culpa natus.",
        image: ChickenImage,
        reverse: true,
    },
    {
        title: "DELIVER",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure cum perferendis, laudantium fugiat officia quidem enim culpa natus.",
        image: HeroScreenShootImage,
    },
];

export function StepsList() {
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{
                margin:"-100px"
            }}
            className="grid grid-cols-1 md:grid-cols-3 my-8 gap-12"
        >
            {steps.map((step, index) => (
                <StepCard key={index} {...step} />
            ))}
        </motion.div>
    );
}

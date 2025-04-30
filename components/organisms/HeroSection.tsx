"use client";

import { motion } from "motion/react";
import { HeroSubTitle, HeroTitle } from "../atoms";
import { BikeDelivery, FoodCardHero, HeroButtonsCTA } from "../molecules";
import { containerVariants } from "@/utils/motion";
import { foodsHero } from "@/data";


export function HeroSection() {
    return (
        <div className="w-5/6 grid grid-cols-1 md:grid-cols-2">
            <div>
                <BikeDelivery />
                <HeroTitle />
                <HeroSubTitle />
                <HeroButtonsCTA />
            </div>
            <motion.div
                variants={containerVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                viewport={{
                    margin: "-100px"
                }}
                className="flex justify-end mt-8">
                <motion.div
                    variants={containerVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    viewport={{
                        margin: "-100px"
                    }}
                    className="w-4/5 md:w-3/5 rounded-2xl bg-gradient-to-bl from-gray-100 to-white pb-8 -z-30">
                    {/* FoodiesHero */}
                    <motion.div
                        variants={containerVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        viewport={{
                            margin: "-100px"
                        }}
                        className="grid grid-cols-2 row gap-x-24 gap-y-16 pt-12 z-10">
                        {foodsHero.map((food, idx) => <FoodCardHero
                            alt={food.alt} image={food.image} price={food.price} productName={food.productName} key={idx} />)}
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    )
}
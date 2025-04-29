"use client";

import { motion } from "motion/react";
import { FoodProductCard } from "../molecules";
import { containerVariants } from "@/utils/motion";

type Props = {
    items: {
        image: string;
        alt: string;
        productName: string;
        starCount: number;
        price: number;
    }[],
    onAddToCartButton: (productName: string) => void;
}

export function MostPopularFoods({
    items,
    onAddToCartButton
}: Props) {
    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            whileInView="animate"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full my-12 gap-8">
            {items?.map((item, idx) => (
                <FoodProductCard {...item} onAddToCartButton={onAddToCartButton} key={item.productName + idx} />
            ))}
        </motion.div>
    )
}
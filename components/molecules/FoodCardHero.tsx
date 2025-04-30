"use client";

import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { childVariants } from "@/utils/motion";
import { motion } from "motion/react";


type Props = {
    image: string;
    alt: string;
    productName: string;
    price: number;
}

export function FoodCardHero({
    image,
    alt,
    productName,
    price
}:Props) {
    return (
        <motion.div
            variants={childVariants}
            layout
            className="h-fit w-48 max-sm:w-36 rounded-3xl flex flex-col justify-center items-center -ml-28 max-sm:-ml-16 p-4 shadow-[-10px_0px_20px_-10px_hsl(0,0%,0%,0.15)] bg-white -z-20"
        >
            <Image src={image} alt={alt} width={100} height={100} className="w-40 h-40 mx-auto -mt-20 object-center p-2 drop-shadow-xl relative -z-10 rounded-full" />
            <div className="flex flex-col items-center gap-1">
                <h2 className="font-bold">{productName}</h2>
                <p>Mushroom sauce</p>
                <p>$ {price}</p>
            </div>
            <div className="-mb-10 flex flex-row gap-8 p-2">
                <Button className="size-8 bg-black text-white rounded-full shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)]">
                    <ArrowRight />
                </Button>
                <Button className="size-8 bg-white rounded-full shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)]">
                    <ArrowLeft className="text-black" />
                </Button>
            </div>
        </motion.div>
    )
}
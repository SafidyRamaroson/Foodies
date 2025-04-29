"use client";

import Image from "next/image";
import { StarCount } from "@/components/atoms";
import { AddToCartButton } from "@/components/molecules";
import { useCart } from "@/contexts/CartContext";
import { Minus, Plus } from "lucide-react";
import { motion } from "motion/react";
import { childVariants, fadeInVariants } from "@/utils/motion";

type Props = {
    image: string;
    alt: string;
    productName: string;
    starCount: number;
    price: number;
    onAddToCartButton: (productName: string) => void;
}

export function FoodProductCard({
    image,
    alt,
    productName,
    starCount,
    price,
    onAddToCartButton
}: Props) {
    const { items: cartItems,increaseQuantity,descreaseQuantity } = useCart();
    const item = cartItems.find((cartItem) => cartItem.name === productName);
    return (
        <motion.div
            variants={childVariants}
            layout
            className="rounded-3xl shadow-[0_10px_25px_0px_hsl(0,0%,0%,0.15)] h-96">
            <Image alt={alt} src={image} width={100} height={100} quality={100} className="w-full h-2/3 bg-gray-200 rounded-ss-3xl rounded-tr-3xl object-cover" />

            <div className="p-4">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold text-2xl">{productName}</h3>
                    <StarCount count={starCount} />
                </div>
                <div className="flex flex-row items-center justify-between mt-4">
                    {
                        item && item.quantity > 0 ? (
                            <div className="flex flex-row gap-4 p-2 rounded-full bg-gradient-to-r from-orange-500 to-red-500">
                                <span className="border p-.5 rounded-full border-black"> 
                                    <Minus 
                                        onClick={() => descreaseQuantity(productName)}
                                        className="cursor-pointer"
                                    /> 
                                </span>
                                <span>{ item.quantity }</span>
                                <span className="border p-.5 rounded-full border-black"> <Plus className="cursor-pointer" onClick={() => increaseQuantity(productName)}/> </span> 
                            </div>
                        ):<AddToCartButton onClick={onAddToCartButton} productName={productName} />
                    }
                    <span>
                        ${price}
                    </span>
                </div>
            </div>
        </motion.div>
    )
}
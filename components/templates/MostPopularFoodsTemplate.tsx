"use client";

import { ArrowRight } from "lucide-react";
import { MostPopularFoods } from "../organisms";
import { Button } from "../ui/button";
import { SectionHeader } from "../atoms";
import { popularFoods } from "@/data";
import { useCart } from "@/contexts/CartContext";

export function MostPopularFoodsTemplate() {
    const { addToCart } = useCart();
    const handleAddToCart = (productName: string) => {
        const productToAdd = popularFoods?.find(food => food.productName === productName);

        if (productToAdd) {
            addToCart({
                name: productToAdd?.productName,
                price: productToAdd?.price,
                image: productToAdd?.image
            })
        }
    }

    return (
        <div className="flex flex-col items-center w-5/6">
            <SectionHeader
                title="Product"
                subtitle="Most Popular Items"
            />
            <MostPopularFoods items={popularFoods} onAddToCartButton={handleAddToCart} />
            <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-red-500 rounded-full p-8 max-sm:text-lg text-2xl text-white font-semibold my-8">
                See More Product
                <ArrowRight className="bg-white text-primary w-36" />
            </Button>
        </div>
    )
}
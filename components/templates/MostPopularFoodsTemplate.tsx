"use client";

import { ArrowRight } from "lucide-react";
import { MostPopularFoods } from "../organisms";
import { Button } from "../ui/button";
import { SectionHeader } from "../atoms";
import { popularFoods } from "@/data";

export function MostPopularFoodsTemplate() {
    const handleAddToCart = (productName: string) => {
        alert("Adding to cart" + productName);
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
                className="rounded-full p-8 max-sm:text-lg text-2xl text-white font-semibold my-8">
                See More Product
                <ArrowRight className="bg-white text-primary w-36" />
            </Button>
        </div>
    )
}
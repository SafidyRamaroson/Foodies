"use client";

import { FoodProductCard } from "../molecules";

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
}:Props){
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full my-12 gap-8">
            {items?.map((item,idx) => (
                <FoodProductCard {...item} onAddToCartButton={onAddToCartButton} key={item.productName + idx}/>
            ))}
        </div>
    )
}
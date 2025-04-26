"use client";

import { ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from "../ui/dropdown-menu";


type Props = {
    items: {
        food: string;
        image: string;
        price: number;
        quantity: number
    }[],
    onRemoveToCart: (food: string) => void;
}


export function FoodCart({
    items,
    onRemoveToCart
}:Props) {
    return (
        <div className="relative">
            <ShoppingCart className="size-8 max-sm:size-6 max-[240px]:bg-red-50" />
            <span 
                className="absolute -top-2 -right-2 bg-primary py-[2px] px-2 text-white text-base rounded-full shadow-[0_5px_10px_0_hsl(22,90%,46%)]">
                <DropdownMenu>
                    <DropdownMenuTrigger>{ items?.length || 0}</DropdownMenuTrigger>
                    <DropdownMenuContent>
                        {items && items?.map((item) => (
                            <DropdownMenuItem key={item.food}>
                                <DropdownMenuLabel>{ item.food }</DropdownMenuLabel>
                            </DropdownMenuItem>
                        ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </span>
        </div>
    )
}

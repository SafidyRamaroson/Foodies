"use client";

import { Search, ShoppingCart } from "lucide-react";
import { Input } from "../ui/input";

export function InputSearch() {
    return (
        <div className="shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)] p-2 rounded-md flex flex-row gap-4 items-center mx-4">
            <div className="flex flex-row items-center gap-4 relative w-full">
                <Search className="absolute top-2 left-2" />
                <Input
                    placeholder="Search"
                    className="pl-10 mt-0 border-0 text-black"
                />
            </div>
            <span>|</span>
            <div className="relative">
                <ShoppingCart className="size-8 max-sm:size-6 max-[240px]:bg-red-50" />
                <span className="absolute -top-2 -right-2 bg-primary py-[2px] px-2 text-white text-base rounded-full shadow-[0_5px_10px_0_hsl(22,90%,46%)]">2</span>
            </div>
        </div>
    )
}
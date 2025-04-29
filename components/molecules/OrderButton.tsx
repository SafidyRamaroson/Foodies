"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function OrderButton(){
    return(
        <Link href="#" className="max-sm:w-full">
            <Button size="lg" className="bg-gradient-to-r from-orange-500 to-red-500 text-white text-2xl max-sm:text-lg font-semibold p-8 rounded-md max-sm:w-full">
                Order Now
            </Button>
        </Link>
    )
}
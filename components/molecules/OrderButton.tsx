"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export function OrderButton(){
    return(
        <Link href="#">
            <Button size="lg" className="text-white text-2xl font-semibold p-8 rounded-md">
                Order Now
            </Button>
        </Link>
    )
}
"use client";

import Image from "next/image";
import BurgerImage from "@/public/assets/burger1.png";
import { Button } from "../ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

export function FoodCardHero(){
    return(
        <div className="h-fit w-48 max-sm:w-36 rounded-3xl flex flex-col justify-center items-center -ml-28 max-sm:-ml-16 p-4 shadow-[-10px_0px_20px_-10px_hsl(0,0%,0%,0.15)] bg-white">
            <Image src={BurgerImage} alt="Food Image" className="mx-auto -mt-20 object-cover p-2 drop-shadow-xl"/>
            <div className="flex flex-col items-center gap-1">
                <h2 className="font-bold">Food Name</h2>
                <p>Mushroom sauce</p>
                <p>$ Food Price</p>
            </div>
            <div className="-mb-10 flex flex-row gap-8 p-2">
                <Button className="size-8 bg-black text-white rounded-full shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)]">
                    <ArrowRight />
                </Button>
                <Button className="size-8 bg-white rounded-full shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)]">
                    <ArrowLeft className="text-black"/>
                </Button>
            </div>
        </div>
    )
}
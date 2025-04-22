"use client";

import { Play } from "lucide-react";


export function OrderProcessButton(){
    return(
        <div className="flex flex-row gap-8 items-center">
            <button className="rounded-full p-4 border shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)]">
                <Play className="fill-primary size-8 text-primary" /> 
            </button>
            <span className="text-2xl font-semibold">Order Process</span>
        </div>
    )
}
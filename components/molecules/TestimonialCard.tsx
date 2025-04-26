"use client";

import { ArrowRight, ArrowLeft } from "lucide-react";
import { Button } from "../ui/button";
import Image from "next/image";
import UserAvatar from "@/public/assets/userAvatar.jpg";


export function TestimonialCard() {
    return (
        <div className="p-12 flex flex-col items-center rounded-3xl my-8 shadow-[0_10px_25px_0px_hsl(0,0%,0%,0.15)] relative">
            <div className="flex flex-row items-center gap-4 mt-8">
                <Image
                    src={UserAvatar}
                    alt="User avatar testimonial"
                    className="w-10 h-10 rounded-full border"
                />
                <div>
                    <h2 className="font-bold">Willians Johns</h2>
                    <p>CEO & Co-Founder</p>
                </div>
            </div>
            <div className="flex flex-row my-4 bg-black">
                <Button className="size-8 bg-primary text-white rounded-full shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)] absolute -left-4 top-1/2">
                    <ArrowLeft className="text-white" />
                </Button>
                <Button className="size-8 bg-primary rounded-full shadow-[0_5px_20px_0_hsl(0,0%,0%,0.15)] absolute -right-4 top-1/2">
                    <ArrowRight className="text-white" />
                </Button>
            </div>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil nostrum magni itaque repellat quod amet vel mollitia asperiores cumque iure ipsam quaerat quis natus sunt atque eos, ipsa earum? Hic?</p>
        </div>
    )
}
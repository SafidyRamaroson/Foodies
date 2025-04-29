"use client";

import HeroScreenShootImage from "@/public/assets/heroScreenShoot.png";
import ChickenImage from "@/public/assets/chicken.png";
import Image from "next/image";
import { SectionHeader } from "../atoms";
import { StepsList } from "../organisms/StepsList";


export function HowToWorkTemplate() {
    return (
        <div className="flex flex-col gap-8 items-center my-12 w-full">
            <div className="w-5/6">
                <SectionHeader
                    title="How to Work"
                    subtitle="Food Us An Important Part Of A Balanced Diet"
                />
                <StepsList />
            </div>
        </div>
    )
}
"use client";

import { HeroSubTitle, HeroTitle } from "../atoms";
import { BikeDelivery, OrderButton, OrderProcessButton } from "../molecules";
import { FoodCardHero } from "../molecules/FoodCardHero";



export function HeroSection() {
    return (
        <div className="w-5/6 grid grid-cols-1 md:grid-cols-2">
            <div className="">
                <BikeDelivery />
                <HeroTitle />
                <HeroSubTitle />
                {/* HeroButtonCTA */}
                <div className="flex space-x-8 mt-16">
                    <OrderButton />
                    <OrderProcessButton />
                </div>
            </div>
            <div className="flex justify-end mt-8">
                <div className="w-4/5 md:w-3/5 rounded-2xl bg-gradient-to-bl from-gray-100 to-white pb-8">
                    {/* FoodiesHero */}
                    <div className="grid grid-cols-2 row gap-x-24 gap-y-16 pt-12">
                        <FoodCardHero />
                        <FoodCardHero />
                        <FoodCardHero />
                        <FoodCardHero />
                    </div>
                </div>
            </div>
        </div>
    )
}
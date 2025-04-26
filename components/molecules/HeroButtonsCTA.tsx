"use client";

import { OrderButton, OrderProcessButton } from "@/components/molecules";

export function HeroButtonsCTA() {
    return (
        <div className="flex space-x-8 items-center mt-16 max-sm:flex-col">
            <OrderButton />
            <OrderProcessButton />
        </div>
    )
}
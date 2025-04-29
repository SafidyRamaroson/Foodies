"use client";

import Image from "next/image";
import { TestimonialCard } from "../molecules";
import ChickenImage from "@/public/assets/chicken.png";
import { SectionHeader } from "../atoms";

export function TestimonialsTemplate() {
    return (
        <div className="flex flex-col items-center w-5/6 mt-12">
            <SectionHeader
                title="Testimonials"
                subtitle="Our Happy Client Says"
            />
            <div className="grid max-sm:grid-cols-1 grid-cols-[2fr_1fr] gap-16 w-full place-items-center">
                <TestimonialCard />
                <Image
                    src={ChickenImage}
                    alt="Burger Image"
                    className="w-full object-cover"
                />
            </div>
        </div>
    )
}
"use client";

import Image from "next/image";
import { SubcriberForm } from "../organisms/SubcriberForm";
import BurgerImage from "@/public/assets/burger1.png";

export function SubcriberTemplate() {
    return (
        <div className="w-5/6 my-16 bg-black rounded-3xl grid grid-cols-1 md:grid-cols-[3fr_2fr] gap-8 relative max-sm:place-items-center">
            <div>
                <Image
                    src={BurgerImage}
                    alt="Burger Image"
                    className="w-1/2 h-[180%] object-contain md:absolute -top-32"
                />
            </div>
            <SubcriberForm />
        </div>
    )
}
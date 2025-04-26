"use client";

import HeroScreenShootImage from "@/public/assets/heroScreenShoot.png";
import ChickenImage from "@/public/assets/chicken.png";
import Image from "next/image";
import { SectionHeader } from "../atoms";


export function HowToWorkTemplate() {
    return (
        <div className="flex flex-col gap-8 items-center my-12 w-full">
            <div className="w-5/6">
                <SectionHeader
                    title="How to Work"
                    subtitle="Food Us An Important Part Of A Balanced Diet"
                />
                <div className="grid grid-cols-1 md:grid-cols-3 my-8 gap-12">
                    <div className="p-8">
                        <Image
                            src={HeroScreenShootImage}
                            alt="Hero Screen Shoot Image"
                        />
                        <h4 className="text-3xl max-sm:text-xl font-bold pl-2 mt-8">
                            CHOOSE
                        </h4>
                        <p className="mt-4 pl-2 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure cum perferendis, laudantium fugiat officia quidem enim culpa natus</p>
                    </div>
                    <div className="p-8">
                        <h4 className="text-3xl max-sm:text-xl font-bold pl-2 mt-8">
                            PREPARE FOOD
                        </h4>
                        <p className="mt-4 pl-2 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure cum perferendis, laudantium fugiat officia quidem enim culpa natus</p>
                        <Image
                            src={ChickenImage}
                            alt="Hero Screen Shoot Image"
                            className="mt-8"
                        />
                    </div>
                    <div className="p-8">
                        <Image
                            src={HeroScreenShootImage}
                            alt="Hero Screen Shoot Image"
                        />
                        <h4 className="text-3xl max-sm:text-xl font-bold pl-2 mt-8">
                            DELIVER
                        </h4>
                        <p className="mt-4 pl-2 font-medium">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam exercitationem iure cum perferendis, laudantium fugiat officia quidem enim culpa natus</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
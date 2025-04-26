"use client";

import BikeDeliveryImg from "@/public/assets/BikeDelivery.jpeg";
import Image from "next/image";

export function BikeDelivery(){
    return(
        <div className="bg-secondary rounded-full inline-flex items-center space-x-8 p-1 my-10">
            <span className="ml-2 text-primary">Bike Delivery</span>
            <Image src={BikeDeliveryImg} alt="Bike Delivery" className="w-8 h-8 rounded-full"/>
        </div>
    )
}
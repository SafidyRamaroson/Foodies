"use client";

import { ShoppingCart } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "../ui/dropdown-menu";
import { useCart } from "@/contexts/CartContext";
import { Fragment } from "react";
import Image from "next/image";


export function FoodCart() {
    const { items, itemCount, cartTotal } = useCart()
    return (
        <div className="relative">
            <ShoppingCart className="size-8 max-sm:size-6 max-[240px]:bg-red-50" />
            <span
                className="absolute -top-2 -right-2 bg-primary py-[2px] px-2 text-white text-base rounded-full shadow-[0_5px_10px_0_hsl(22,90%,46%)]">
                <DropdownMenu>
                    <DropdownMenuTrigger>{itemCount}</DropdownMenuTrigger>

                    <DropdownMenuContent className="min-w-52 w-56 shadow-2xl">
                        {itemCount < 1 ? <p className="p-4">Your cart is empty</p> : (
                            <>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>{itemCount}{itemCount > 1 ? " élements" : " élement"}</DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {items && items?.map((item) => (
                                        <Fragment key={item.name}>
                                            <DropdownMenuItem
                                                className="flex flex-row justify-between items-center">
                                                <div className="flex flex-row items-center">
                                                    <Image src={item.image as string} alt={item.name} width={40} height={20} className="rounded-md size-10 object-cover border"/>
                                                    <div className="flex flex-col">
                                                        <DropdownMenuLabel>{item.name}</DropdownMenuLabel>
                                                        <p className="pl-2.5">${item?.price}</p>
                                                    </div>
                                                </div>
                                                <span className="flex flex-row items-center gap-2">
                                                    x {item.quantity}
                                                </span>
                                            </DropdownMenuItem>
                                            <DropdownMenuSeparator />
                                        </Fragment>
                                    ))}
                                </DropdownMenuGroup>
                                <DropdownMenuGroup>
                                    <DropdownMenuLabel>Total : {cartTotal} $ </DropdownMenuLabel>
                                </DropdownMenuGroup>
                            </>
                        )}
                    </DropdownMenuContent>
                </DropdownMenu>
            </span>
        </div>
    )
}

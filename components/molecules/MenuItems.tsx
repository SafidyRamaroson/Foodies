"use client";

import { menuItems as MenuItemsData } from "@/data";
import Link from "next/link";


export function MenuItems() {
    return (
        <ul className="flex flex-row gap-16">
            {MenuItemsData?.map((menuItem, idx) => {
                return (
                    <Link href={menuItem.url} key={menuItem.label + idx}>
                        <li className="font-semibold text-base">{menuItem.label}</li>
                    </Link>
                )
            })}
        </ul>
    )
}
"use client";

import { cn } from "@/utils/tailwind";
import Link from "next/link";

type Props = {
    items: {
        label: string;
        url: string
    }[],
    showSidebar?: boolean;
}

export function MenuItems({
    items,
    showSidebar = false
}: Props) {
    return (
        <ul className={cn("flex flex-row gap-16",{ "flex-col p-4 gap-4 mt-4": showSidebar })}>
            {items?.map((item, idx) => {
                return (
                    <Link href={item.url} key={item.label + idx}>
                        <li className="font-semibold text-base">{item.label}</li>
                    </Link>
                )
            })}
        </ul>
    )
}
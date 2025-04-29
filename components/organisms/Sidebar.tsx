"use client";

import { X } from "lucide-react";
import { InputSearch, MenuItems } from "../molecules";

type Props = {
    items: {
        label: string;
        url: string;
    }[],
    showSidebar: boolean;
    onToggle: (showSidebar: boolean) => void;
}

export function Sidebar({ items, showSidebar, onToggle }: Props) {
    return (
        <div className="w-screen h-screen absolute top-0 left-0">
            <div className="w-screen h-screen backdrop-blur-sm absolute z-20 cursor-pointer"></div>
            <div className="w-4/5 max-[240px]:w-full h-screen absolute top-0 left-0 bg-gray-50 z-[8000] shadow-md">
                <div className="flex justify-end p-4">
                    <X onClick={() => onToggle(showSidebar)} className="cursor-pointer size-8 drop-shadow-lg" />
                </div>
                <InputSearch />
                <MenuItems
                    items={items}
                    showSidebar
                />
            </div>
        </div>
    )
}
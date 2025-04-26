"use client";

import { MenuSquare } from "lucide-react";
import { Logo } from "../atoms";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { menuItems as MenuItemsData } from "@/data";


export function HeaderMobile() {
    const [showSidebar, setShowSidebar] = useState<boolean>(false);

    const onToggle = (showSidebar: boolean) => {
        setShowSidebar(!showSidebar);
    }

    return (
        <div className="bg-gray-50 sticky top-0 flex flex-row items-center justify-between py-4 w-full p-4 bg-transparent backdrop-blur-sm">
            <MenuSquare
                onClick={() => setShowSidebar(true)}
                className="size-12 text-gray-500 cursor-pointer"
            />
            <Logo />
            {showSidebar && <Sidebar
                items={MenuItemsData}
                showSidebar={showSidebar}
                onToggle={() => onToggle(showSidebar)}
            />}
        </div>
    )
}
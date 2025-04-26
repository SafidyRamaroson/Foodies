"use client";

import { useIsMobile } from "@/hooks/use-mobile";
import { Logo } from "../atoms";
import { InputSearch, MenuItems } from "../molecules";
import { HeaderMobile } from "./HeaderMobile";
import { menuItems as menuItemsData } from "@/data";

export function Header() {
    const isMobileScreen = useIsMobile();

    return isMobileScreen ? <HeaderMobile /> :
        (<div className="bg-slate-50 sticky top-0 flex flex-row items-center justify-between py-4 md:w-full md:px-4 lg:px-0 lg:w-5/6 bg-transparent backdrop-blur-sm">
            <Logo />
            <MenuItems 
                items={menuItemsData}
            />
            <InputSearch />
        </div>)
}
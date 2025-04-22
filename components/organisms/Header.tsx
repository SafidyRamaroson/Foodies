"use client";

import { Logo } from "../atoms";
import { InputSearch, MenuItems } from "../molecules";


export function Header(){
    return(
        <div className="flex flex-row items-center justify-between py-4 w-5/6">
            <Logo />
            <MenuItems />
            <InputSearch />
        </div>
    )
}
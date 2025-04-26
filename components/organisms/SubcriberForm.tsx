"use client";

import { SubcriberHeader } from "../molecules";
import { Button } from "../ui/button";
import { Input } from "../ui/input";


export function SubcriberForm() {
    return (
        <form className="text-white p-8 md:py-12 md:pr-12">
            <SubcriberHeader
                title="Subcribe To Our Newsletter"
                description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos aut illum provident, aspernatur quasi tempora esse quos nobis fugiat soluta"
            />
            <div className="rounded-xl p-2 bg-white">
                <div className="relative">
                    <Input
                        className="rounded-xl mt-0 border-0 ring-offset-white focus-visible:border-white"
                        placeholder="Type your email ..."
                    />
                    <Button className="absolute top-0 right-0 rounded-xl">SUBCRIBE</Button>
                </div>
            </div>
        </form>
    )
}
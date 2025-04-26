"use client";

import LogoImage from "@/public/assets/logo.png";
import Image from "next/image";
import { socialsLinks, userLinks } from "@/data";
import { ContactUsFooter, OpeningRestauranFooter, SocialLinksFooter } from "../molecules";
import { UserLinkFooter } from "../organisms";

export function FooterTemplate() {
    return (
        <div className="bg-slate-50 w-full p-8 flex flex-col items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr_1fr] gap-8 w-5/6 py-8">
                <div>
                    <Image
                        src={LogoImage}
                        alt="Logo"
                        className="rounded-lg w-40 h-12 object-cover"
                    />
                    <p className="text-slate-400 mt-4">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum culpa consequuntur obcaecati expedita possimus, architecto id nulla consequatur veritatis soluta.</p>
                    <SocialLinksFooter socialLinks={socialsLinks} />
                </div>
                <OpeningRestauranFooter />
                <UserLinkFooter
                    links={userLinks}
                />
                <ContactUsFooter />
            </div>
        </div>
    )
}
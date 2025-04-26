"use client";

import { LucideProps } from "lucide-react";
import Link from "next/link";
import { ForwardRefExoticComponent, RefAttributes } from "react";

type Props = {
    socialLinks: {
        icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>,
        url: string
    }[]
}

export function SocialLinksFooter({
    socialLinks
}: Props) {
    return (
        <div className="flex flex-row gap-3 mt-4">{socialLinks?.map(({ icon: Icon, url }, idx) => {
            return (
                <Link href={url} key={idx} className="border p-2 rounded-full bg-secondary">
                    <Icon className="bg-secondary fill-primary rounded-full  size-4 text-secondary"/>
                </Link>
            )
        })}</div>
    )
}
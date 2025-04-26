"use client";

import Link from "next/link";

type Props = {
    links: {
        label: string;
        url: string;
    }[]
}

export function UserLinkFooter({
    links
}: Props){
    return(
        <div>
            <h1 className="font-bold max-sm:text-lg text-2xl">User Link</h1>
            <ul className="space-y-3 mt-8 text-slate-400">
                {links?.map((link, idx) => {
                    return(
                        <Link href={link?.url} key={link.label}>
                            <li>{link?.label}</li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}
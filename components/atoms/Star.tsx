"use client";

import { Star } from "lucide-react";

type Props = {
    count: number;
}

export function StarCount({
    count
}: Props) {
    return (
        <span className="flex gap-2"> <Star className="fill-yellow-200 text-yellow-200"/>{count}</span>
    )
}
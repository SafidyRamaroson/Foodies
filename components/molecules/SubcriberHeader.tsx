"use client";

type Props = {
    title: string;
    description: string;
}

export function SubcriberHeader({
    title,
    description
}: Props) {
    return (
        <>
            <h2 className="text-2xl font-bold">{title}</h2>
            <p className="my-4">{description}</p>
        </>
    )
}
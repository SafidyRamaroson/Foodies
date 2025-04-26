"use client";

type Props = {
    title: string;
    subtitle: string;
}

export function SectionHeader({
    title,
    subtitle
}: Props) {
    return (
        <div className="flex flex-col gap-2">
            <h2 className=" text-center text-primary">{ title }</h2>
            <h3 className="text-5xl max-sm:text-xl font-bold mt-2 text-center">{ subtitle }</h3>
        </div>
    )
}
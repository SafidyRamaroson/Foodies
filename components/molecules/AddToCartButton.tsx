"use client";

import { Button } from "../ui/button";

type Props = {
    productName: string;
    onClick: (productName: string) => void;
}
export function AddToCartButton({
    productName,
    onClick
}: Props) {
    return (
        <Button
            onClick={() => onClick(productName)}
            className="rounded-full text-white bg-gradient-to-r from-orange-500 to-red-500"
        >
            Add To Cart
        </Button>
    )
}
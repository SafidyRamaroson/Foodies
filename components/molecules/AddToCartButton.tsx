"use client";

import { Button } from "../ui/button";

type Props = {
    productName: string;
    onClick: (productName: string) => void;
}
export function AddToCartButton({
    productName,
    onClick
}: Props){
    return(
        <Button onClick={() => onClick(productName)} className="rounded-full text-white">
            Add To Cart
        </Button>
    )
}
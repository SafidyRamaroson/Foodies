"se client";

import { childVariants } from "@/utils/motion";
import { motion } from "motion/react";
import Image, { StaticImageData } from "next/image";

type Props = {
    title: string;
    description: string;
    image: StaticImageData;
    reverse?: boolean;
}

export function StepCard({ title, description, image, reverse }: Props) {
    return (
        <motion.div
            variants={childVariants}
            layout
            className="p-8 flex flex-col items-start">
            {!reverse && (
                <Image src={image} alt={title} />
            )}
            <h4 className="text-3xl max-sm:text-xl font-bold pl-2 mt-8">
                {title}
            </h4>
            <p className="mt-4 pl-2 font-medium">{description}</p>
            {reverse && (
                <Image src={image} alt={title} className="mt-8" />
            )}
        </motion.div>
    );
}
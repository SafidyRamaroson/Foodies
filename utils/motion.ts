import { Variant, Variants } from "motion/react";


export const fadingVariants: Variants = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        y: -20,
    },
}

export const slideInVariants: Variants = {
    initial: {
        opacity: 0,
        x: -20,
    },
    animate: {
        opacity: 1,
        x: 0,
    },
    exit: {
        opacity: 0,
        x: -20,
    },
}

export const slideOutVariants: Variants = {
    initial: {
        opacity: 1,
        x: 0,
    },
    animate: {
        opacity: 0,
        x: -20,
    },
    exit: {
        opacity: 0,
        x: -20,
    },
}


export const containerVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            staggerChildren: 0.1,
            when: "beforeChildren",
        },
    },
    exit: {
        opacity: 0,
        y: 20,
    },
}

export const childVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            duration: 0.4
        }
    },
    exit: {
        opacity: 0,
        y: 20,
    },
}

export const fadeInVariants: Variants = {
    initial: {
        opacity: 0,
    },
    animate: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
    },
}

export const fadeInUpVariants: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: 20,
    },
}

export const fadeInDownVariants: Variants = {
    initial: {
        opacity: 0,
        y: -20,
    },
    animate: {
        opacity: 1,
        y: 0,
    },
    exit: {
        opacity: 0,
        y: -20,
    },
}

export const fadeInLeftVariants: Variants = {
    initial: {
        opacity: 0,
        x: -30,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        x: -30,
    },
}

export const fadeInRightVariants: Variants = {
    initial: {
        opacity: 0,
        x: 20,
    },
    animate: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.3,
            type: "spring"
        }
    },
    exit: {
        opacity: 0,
        x: 20,
    },
}

export const fadeInScaleVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            duration: 0.8
        }
    },
    exit: {
        opacity: 0,
        scale: 0.8,
    },
}

export const fadeInRotateVariants: Variants = {
    initial: {
        opacity: 0,
        rotate: -20,
    },
    animate: {
        opacity: 1,
        rotate: 0,
    },
    exit: {
        opacity: 0,
        rotate: -20,
    },
}


export const fadeInRotateScaleVariants: Variants = {
    initial: {
        opacity: 0,
        rotate: -20,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        rotate: 0,
        scale: 1,
    },
    exit: {
        opacity: 0,
        rotate: -20,
        scale: 0.8,
    },
}


export const scaleVariants: Variants = {
    initial: {
        opacity: 0,
        scale: 0.8,
    },
    animate: {
        opacity: 1,
        scale: 1,
    },
    exit: {
        opacity: 0,
        scale: 0.8,
    },
}
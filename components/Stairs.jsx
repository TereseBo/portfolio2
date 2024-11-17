import { motion } from "framer-motion"

const stairAnimation = {
    initial: {
        top: "0%"
    },
    animate: {
        top: "100%"
    },
    exit: {
        top: ["100%", "0%"]
    }
};

/* Delay calculation */
const stairDelay = (index) => {
    const totalStepsInStair = 6;
    return totalStepsInStair - index - 1;
}
export function Stairs() {
    return (
        /* Create divs corresponding to a step of the stairs, 
        each step has the same animation but is delayed according to its position in the stair */
        <>
            {[...Array(6)].map((_, index) => {
                return (
                    <motion.div
                        key={index}
                        variants={stairAnimation}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{
                            duration: 0.4,
                            ease: "easeInOut",
                            delay: stairDelay(index) * 0.1,
                        }}
                        className="h-full w-full bg-white relative"
                    />
                )
            })}
        </>
    )
}
import {AnimatePresence, motion} from "framer-motion";

function SuccessMessage({props}){
    const variant = {
        hidden: { y: "-20%", opacity: 0 },
        visible: {
            y: "0%",
            opacity: 1,
            transition: { duration: 1, ease: "easeInOut" },
        },
        exit: {
            y: "-20%",
            opacity: 0,
            transition: { duration: 1, ease: "easeInOut" },
        },
    };
    return(
        <AnimatePresence>
            <motion.div role="alert" className="alert alert-success fixed top-[10%] w-[30%] " variants={variant} initial="hidden" animate="visible" exit="exit">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6 shrink-0 stroke-current"
                    fill="none"
                    viewBox="0 0 24 24">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{props.message}</span>
            </motion.div>
        </AnimatePresence>

    )
}
export default SuccessMessage;
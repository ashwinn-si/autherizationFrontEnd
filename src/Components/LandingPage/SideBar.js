import {IoMdClose} from "react-icons/io";
import {AnimatePresence, motion} from "framer-motion";
import { Link } from "react-scroll";
import NavItems from "./NavItems";

function SideBar({navLinks, closeMenu}) {
    const layer1Variant={
        hidden: { x: "-100%"},
        visible: {
            x: 0,
            transition: { duration: 2, ease: "easeInOut"},
        },
        exit:{
            x: "-100%",
            transition: { duration: 2, ease: "easeInOut" },
        }
    }
    const layer2Variant={
        hidden: { x: "-100%"},
        visible: {
            x: 0,
            transition: { duration: 2, ease: "easeInOut" },
        },
        exit:{
            x: "-100%",
            transition: { duration: 1, ease: "easeOut" },
        }
    }
    return(
        <AnimatePresence>
            <div>
                <motion.div className="fixed w-full h-screen bg-base-200 bg-opacity-85 top-0 left-0 z-[998]" variants={layer1Variant} initial="hidden" animate="visible" exit="exit">
                    <motion.div className="fixed w-[50vw] h-screen bg-base-200  bg-opacity-95 top-0 left-0 z-[999] flex justify-center items-center border-primary border-r-[1px]" variants={layer2Variant} initial="hidden" animate="visible" exit="exit">
                        <IoMdClose className={"absolute right-5 h-6 w-6 top-5"} onClick={closeMenu}/>
                        <div className="flex flex-col items-center justify-center h-[50vh] justify-evenly items-center">
                            <NavItems/>
                        </div>
                    </motion.div>
                </motion.div>
            </div>

        </AnimatePresence>

    )
}
export default SideBar;
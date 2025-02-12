import Squares from "../../Components/LandingPage/BackGround";
import diagram1 from "./../../Assests/ArchDiagram/diagram1.jpeg"
import diagram2 from "./../../Assests/ArchDiagram/diagram2.jpeg"
import { GoArrowRight } from "react-icons/go";
import {motion} from "framer-motion";

function ArchDiagramPage(){
    const frontEndLibs=["React","Framer Motion","React Router","Axios","Skeleton Loader"]
    const backEndLibs=["Node","Express","Cookies","Bcrypt","JWT","CORS"]

    const itemVariants = {
        hidden: { y: 10, opacity: 0 },
        visible: {
            y: 0,
            opacity: 2,
            transition: { duration: 2, ease: "easeOut" },
        },
        exit: { y: -10, opacity: 0, transition: { duration: 0.2 } },
    };

    return(
        <div className="relative flex flex-col items-center justify-center h-[200vh] lg:h-[100vh]">
            <Squares
                speed={0.2}
                squareSize={100}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor="var(--neutral)"
                hoverFillColor='var(--secondary)'
            />
            <div className="absolute top-0 z-[11] w-full">

                <div className="grid grid-cols-1 lg:grid-cols-[67fr_30fr] gap-4 w-full p-4 h-[100vh] lg:h-[50vh]">
                    <motion.div className="w-full h-full bg-base-100 bg-opacity-50 rounded-lg p-4  border-[1px] border-primary flex flex-col lg:flex-row justify-evenly items-center" variants={itemVariants} whileInView="visible" initial="hidden"
                    exit="exit" >
                        <p className="text-2xl text-primary hover:tracking-widest hover:scale-[1.1] transition-all duration-300 cursor-pointer font-[600]">Role Based Actions</p>
                        <div className="w-full lg:w-[60%] overflow-hidden rounded">
                            <img
                                src={diagram1}
                                alt='diagram 1'
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
                            />
                        </div>
                    </motion.div>
                    <motion.div className="w-full h-full bg-base-100 bg-opacity-50 rounded-lg p-4 border-[1px] border-primary flex flex-col justify-center items-center" variants={itemVariants} whileInView="visible" initial="hidden"
                                exit="exit" >
                        <p className="text-2xl font-[700] hover:tracking-widest transtion-all duration-300 text-center">JavaScript Front End Libraries Used</p>
                        <div className="flex flex-col items-start gap-2 my-2">
                            {frontEndLibs.map((lib, index) => (
                                <div key={index} className="flex items-center gap-2 text-l ">
                                    <GoArrowRight className="text-primary min-w-[16px]" />
                                    <p className="hover:py-1 hover:scale-105 transition-all duration-300 cursor-pointer text-xl font-[425]">{lib}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[30fr_67fr] gap-4 w-full p-4 h-[100vh] lg:h-[50vh]">
                    <motion.div className="w-full h-full bg-base-100 bg-opacity-50 rounded-lg p-4 border-[1px] border-primary flex flex-col justify-center items-center overflow-hidden" variants={itemVariants} whileInView="visible" initial="hidden"
                                exit="exit">
                        <p className="text-xl font-[700] text-center hover:tracking-widest transtion-all duration-300">JavaScript Backend <br /> Libraries / Frameworks / Env Used</p>
                        <div className="flex flex-col items-start gap-2 my-2">
                            {backEndLibs.map((lib, index) => (
                                <div key={index} className="flex items-center gap-2 text-l ">
                                    <GoArrowRight className="text-primary min-w-[16px]" />
                                    <p className="hover:py-1 hover:scale-105 transition-all duration-300 cursor-pointer text-xl font-[425]">{lib}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                    <motion.div className="w-full h-full bg-base-100 bg-opacity-50 rounded-lg p-4 border-[1px] border-primary flex flex-col lg:flex-row justify-evenly items-center" variants={itemVariants} whileInView="visible" initial="hidden"
                                exit="exit" >
                        <div className="w-full lg:w-[60%] overflow-hidden">
                            <img
                                src={diagram2}
                                alt='diagram 1'
                                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105 rounded"
                            />
                        </div>
                        <p className="text-2xl text-primary hover:tracking-widest hover:scale-[1.1] transition-all duration-300 cursor-pointer font-[600]">
                            Hierarchy
                        </p>
                    </motion.div>
                </div>
            </div>


        </div>
    )
}
export default ArchDiagramPage;
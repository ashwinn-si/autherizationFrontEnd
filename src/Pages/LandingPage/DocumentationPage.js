import Squares from "../../Components/LandingPage/BackGround";
import {GoArrowRight} from "react-icons/go";
import Tooltip from "../../Components/LandingPage/Tooltip";
import{motion} from "framer-motion";

function DocumentationPage(){
    const authorizationPoints = [
        "Access Control - Ensures only authorized users can access specific resources.",
        "Data Protection - Prevents unauthorized access to sensitive information.",
        "Role-Based Access - Limits permissions based on user roles (Admin, User, Guest).",
        "Compliance & Security - Meets legal and industry security standards like GDPR, HIPAA.",
        "Prevents Unauthorized Actions - Stops unauthorized users from modifying or deleting data.",
        "Business Integrity - Protects company resources, intellectual property, and confidential information."
    ];

    const projectSteps = [
        "Clone the front-end repository from GitHub.",
        "Clone the back-end repository from GitHub.",
        "Run `npm install` in both the front-end and back-end folders to install dependencies.",
        "Create a `.env` file in the back-end folder and add `MONGO_URL`, `SALT_VALUE`, and `JWT_SECRET`.",
        "Set the Axios endpoint in the front-end to `http://localhost:3000`.",
        "Run `npm start` in both the front-end and back-end folders to start the servers."
    ];

    const userSteps = [
        "login As Admin",
        "Create Team ",
        "Performs Action Based on the Role"
    ]

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
        <div className="relative flex flex-col items-center justify-center h-[230vh] lg:h-[110vh]">
            <Squares
                speed={0.2}
                squareSize={100}
                direction='diagonal'
                borderColor="var(--neutral)"
                hoverFillColor='var(--secondary)'
            />
            <motion.div className="absolute grid grid-cols-1 lg:grid-cols-[57fr_38fr] grid-rows-[auto_auto] lg:grid-rows-none min-h-screen z-[11] w-full gap-4 p-2 md:p-4">
                <div className="w-full h-full bg-base-100 bg-opacity-50 rounded-lg p-2 md:p-4 border-[1px] border-primary flex flex-col justify-evenly items-center overflow-hidden" variants={itemVariants} whileInView="visible" initial="hidden"
                     exit="exit" >
                    <p className="text-xl md:text-2xl lg:text-3xl font-[550] text-primary mb-4">Documentation</p>

                    <motion.div className="w-full my-3 md:my-5">
                        <p className="text-lg md:text-xl lg:text-2xl font-[700] text-center hover:tracking-widest transition-all duration-300 mb-4" variants={itemVariants} whileInView="visible" initial="hidden"
                           exit="exit" >
                            Need For Authorization
                        </p>
                        <div className="flex flex-col items-start gap-2 md:gap-3">
                            {authorizationPoints.map((auth, index) => (
                                <motion.div key={index} className="flex items-center gap-2 w-full" variants={itemVariants} whileInView="visible" initial="hidden"
                                            exit="exit" >
                                    <GoArrowRight className="text-primary min-w-[16px] md:min-w-[20px]" />
                                    <p className="text-sm md:text-base lg:text-lg hover:py-1 hover:scale-105 transition-all duration-300 cursor-pointer w-full text-left">
                                        {auth}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="w-full my-3 md:my-5" variants={itemVariants} whileInView="visible" initial="hidden"
                                exit="exit" >
                        <p className="text-lg md:text-xl lg:text-2xl font-[700] text-center hover:tracking-widest transition-all duration-300 mb-4">
                            Project Initialization Steps
                        </p>
                        <div className="flex flex-col items-start gap-2 md:gap-3">
                            {projectSteps.map((step, index) => (
                                <motion.div key={index} className="flex items-center gap-2 w-full" variants={itemVariants} whileInView="visible" initial="hidden"
                                            exit="exit" >
                                    <GoArrowRight className="text-primary min-w-[16px] md:min-w-[20px]" />
                                    <p className="text-sm md:text-base lg:text-lg hover:py-1 hover:scale-105 transition-all duration-300 cursor-pointer w-full text-left">
                                        {step}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div className="w-full my-3 md:my-5" variants={itemVariants} whileInView="visible" initial="hidden"
                                 exit="exit" >
                        <p className="text-lg md:text-xl lg:text-2xl font-[700] text-center hover:tracking-widest transition-all duration-300 mb-4">
                            Repository Links
                        </p>
                        <div className="flex w-full justify-evenly items-center gap-2 my-3">
                            <button className="btn btn-outline btn-secondary text-sm md:text-base"><a href="https://github.com/ashwinn-si/autherizationFrontEnd" target="_blank">FrontEnd</a></button>
                            <button className="btn btn-outline btn-accent text-sm md:text-base"><a href="https://github.com/ashwinn-si/autherizationBackEnd" target="_blank">BackEnd</a></button>
                        </div>
                    </motion.div>
                </div>

                <motion.div className="grid grid-rows-2 gap-4" variants={itemVariants} whileInView="visible" initial="hidden"
                            exit="exit" >
                    <div className="w-full h-full bg-base-100 bg-opacity-50 rounded-lg p-2 md:p-4 border-[1px] border-primary flex flex-col justify-start items-center overflow-hidden">
                        <p className="text-xl md:text-2xl lg:text-3xl font-[550] text-primary mb-4">Password</p>
                        <motion.div className=" my-5 overflow-x-auto" variants={itemVariants} whileInView="visible" initial="hidden"
                                    exit="exit" >
                            <table className="table w-full lg:w-1/2 mx-auto">
                                <thead>
                                <tr>
                                    <th className="text-center text-base lg:text-lg">Email</th>
                                    <th className="text-center text-base lg:text-lg">Password</th>
                                    <th className="text-center text-base lg:text-lg">Role</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td className="text-center text-sm lg:text-base">admin</td>
                                    <td className="text-center text-sm lg:text-base">root</td>
                                    <td className="text-center text-sm lg:text-base">admin</td>
                                </tr>
                                </tbody>
                            </table>
                        </motion.div>
                        <div className="flex flex-col items-start gap-2 md:gap-3">
                            <p className="text-lg md:text-xl lg:text-2xl font-[700] text-center hover:tracking-widest transition-all duration-300 mb-4 w-full">
                                Steps
                            </p>
                            {
                                userSteps.map((step, index) => (
                                    <motion.div className="flex items-center gap-2 w-full" variants={itemVariants} whileInView="visible" initial="hidden"
                                                exit="exit"  key={index}>
                                        <GoArrowRight className="text-primary min-w-[16px] md:min-w-[20px]" />
                                        <p className="text-sm md:text-base lg:text-lg hover:py-1 hover:scale-105 transition-all duration-300 cursor-pointer w-full text-left">
                                            {step}
                                        </p>
                                    </motion.div>
                                ))
                            }

                        </div>
                    </div>
                    <motion.div
                        variants={itemVariants} whileInView="visible" initial="hidden"
                        exit="exit"
                        className="w-full h-full bg-base-100 bg-opacity-50 rounded-lg p-2 md:p-4 border-[1px] border-primary flex flex-col justify-evenly items-center overflow-hidden">
                        <p className="text-lg md:text-xl lg:text-2xl font-[700] text-center hover:tracking-widest transition-all duration-300 mb-4 cursor-pointer">
                            Developed By : <span className="text-primary">Ashwin SI</span>
                        </p>
                        <Tooltip />
                    </motion.div>
                </motion.div>
            </motion.div>
        </div>
    );
}

export default DocumentationPage;
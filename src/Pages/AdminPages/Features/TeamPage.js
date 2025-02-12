import {useEffect, useState} from "react";
import api from "../../../AxiosProvider"
import AddInternPage from "../../TeamLeaderPages/FeaturesPage/AddInternPage";
import DeleteInternPage from "../../TeamLeaderPages/FeaturesPage/DeleteInternPage";
import AddTaskPage from "../../TeamLeaderPages/FeaturesPage/AddTaskPage";
import SkeletonTeamPage from "../../SkeletonLoaderPage/SkeletonTeamPage";
import {Link, useParams} from "react-router-dom";
import DeleteTaskPage from "./DeleteTaskPage";
import { useNavigate } from "react-router-dom";

function TeamPage(props) {
    const [featureToBeOpened, setFeatureToBeOpened] = useState(null);
    const [teamInfo, setTeamInfo] = useState("");
    const [skeletonLoaderFlag, setSkeletonLoaderFlag] = useState(false);
    const { teamName } = useParams();
    const navigate = useNavigate();

    function getInfo(){
        setSkeletonLoaderFlag(true)
        api.post("/api/common/teamInfoGetter",{
            teamName : teamName
        }).then((response) => {
            const currentInfo = (response.data.teamInfo)
            setTeamInfo({
                teamLeaderEmail : currentInfo.leader.email,
                teamLeaderPassword : currentInfo.leader.password,
                interns : currentInfo.interns,
                tasks : currentInfo.tasks,
            })
        }).catch((error) => {
            if (error.response.status === 401 || error.response.status === 403) {
                navigate("/unauthozied")
            }
        })
            .finally(()=>{
            setSkeletonLoaderFlag(false);
        })
    }

    useEffect(() => {

        getInfo()
    }, [teamName]);


    const handleFeaturesClick = (event) => {
        setFeatureToBeOpened(event.target.innerHTML);
    };

    const closeFeature = () => {
        setFeatureToBeOpened(null);
        getInfo()
    };

    return (
        <>
            {
                skeletonLoaderFlag === true ? <SkeletonTeamPage />
                    :
                    <div className="flex justify-center items-center bg-base p-2 flex-col min-h-screen w-full">
                        <div className="absolute top-5 lg:top-6 left-[4%] z-[9996]  bg-base-200 rounded  shadow-primary shadow-[0_0_3px] px-3 py-2 broder-2 border-base-100 hover:shadow-[0_0_10px] hover:text-primary transition-all duration-300">
                            <Link to="/dashboard/admin">Back</Link>
                        </div>

                        <div className="bg-base-200 p-4 md:px-5 md:py-5 rounded flex justify-center items-center flex-col w-full max-w-3xl border-2 border-neutral shadow-primary shadow-[0_0_3px]">

                            {
                                featureToBeOpened && (
                                    {
                                        "Add Intern": <AddInternPage closeFeature={closeFeature} teamName = {teamName}  />,
                                        "Delete Intern": <DeleteInternPage closeFeature={closeFeature} teamName = {teamName} internList = {teamInfo.interns}/>,
                                        "Add Task": <AddTaskPage closeFeature={closeFeature}  teamName = {teamName} />,
                                        "Delete Task" : <DeleteTaskPage closeFeature={closeFeature}  teamName = {teamName} taskList = {teamInfo.tasks}/>,
                                    }[featureToBeOpened] || null
                                )
                            }

                            <p className="bg-base-300 px-3 py-2 mb-5 rounded font-black text-xl md:text-2xl text-center border-2 border-neutral">
                                {teamName}
                            </p>

                            <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-2 mb-4">
                                <p className="bg-base-300 px-3 py-2 rounded font-[700] w-full md:w-auto border-2 border-neutral">
                                    Team Leader
                                </p>
                                <p className="bg-base-300 px-3 py-2 rounded w-full md:w-auto text-center">
                                    {teamInfo.teamLeaderEmail}
                                </p>
                                <p className="bg-base-300 px-3 py-2 rounded w-full md:w-auto text-center">
                                    {teamInfo.teamLeaderPassword}
                                </p>
                            </div>

                            {/* Interns Section */}
                            <p className="bg-base-300 px-3 py-2 m-3 rounded font-[700] text-lg md:text-xl border-2 border-neutral">
                                Interns
                            </p>

                            <div className="flex justify-evenly items-center w-full gap-2">
                                <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded font-[600] w-[70%] text-center text-sm md:text-base">
                                    Email
                                </p>
                                <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded font-[600] w-[30%] text-center text-sm md:text-base">
                                    Password
                                </p>
                            </div>
                            {
                                teamInfo?.interns?.map((intern,index)=>(
                                    <div className="flex justify-evenly items-center w-full gap-2">
                                        <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[70%] text-sm md:text-base overflow-hidden text-center">
                                            {
                                                intern.email
                                            }
                                        </p>
                                        <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[30%] text-center text-sm md:text-base">
                                            {
                                                intern.password
                                            }
                                        </p>
                                    </div>
                                ))
                            }


                            {/* Tasks Section */}
                            <p className="bg-base-300 px-3 py-2 m-3 rounded font-[700] text-lg md:text-xl border-2 border-neutral">
                                Tasks
                            </p>
                            <div className="flex justify-evenly items-center w-full gap-2">
                                <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%]   font-[600] text-center text-sm md:text-base">
                                    Task ID
                                </p>
                                <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[60%]   font-[600] text-sm md:text-base">
                                    Task Description
                                </p>
                                <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%]  font-[600] text-sm md:text-base">
                                    Status
                                </p>
                            </div>

                            {
                                teamInfo?.tasks?.map((task,index)=>(
                                    <div className="flex justify-evenly items-center w-full gap-2">
                                        <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%] text-center text-sm md:text-base">
                                            {task.taskID}
                                        </p>
                                        <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[60%] text-sm md:text-base">
                                            {task.taskTitle}
                                        </p>
                                        <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%] text-sm md:text-base">
                                            {task.status}
                                        </p>
                                    </div>
                                ))
                            }


                            <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-2 m-3">
                                <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleFeaturesClick}>
                                    Add Intern
                                </button>
                                <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleFeaturesClick}>
                                    Delete Intern
                                </button>
                                <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleFeaturesClick}>
                                    Add Task
                                </button>
                                <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleFeaturesClick}>
                                    Delete Task
                                </button>
                            </div>
                        </div>
                    </div>
            }
        </>


    );
}

export default TeamPage;

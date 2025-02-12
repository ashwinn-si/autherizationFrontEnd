import LogOutButton from "../../Components/LogOutButton";
import {useEffect, useState} from "react";
import api from "../../AxiosProvider"
import {useParams} from "react-router-dom";
import UpadateTaskStatusPage from "../TeamLeaderPages/FeaturesPage/UpadateTaskStatusPage";
import AxiosProvider from "../../AxiosProvider";
import SkeletonLoaderInternPage from "../SkeletonLoaderPage/SkeletonLoaderInternPage";

function DashBoard(props) {
    const [featureToBeOpened, setFeatureToBeOpened] = useState(null);
    const {teamName} = useParams();
    const [skeletonLoaderFlag, setSkeletonLoaderFlag] = useState(false);
    const [taskList, setTaskList] = useState([]);

    function getInfo(){
        setSkeletonLoaderFlag(true);
        api.post("/api/intern/taskinfogetter",{
            teamName
        }).then((response)=>{
            setTaskList(response.data.tasks);
        }).finally(()=>{
            setSkeletonLoaderFlag(false);
        })
    }

    useEffect(() => {
        getInfo();
    },[teamName])

    function handleFeaturesClick(){
        setFeatureToBeOpened(true);
    }

    const closeFeature = () => {
        setFeatureToBeOpened(null);
        getInfo()
    };
    return(
        <div className="flex justify-center items-center bg-base p-2 flex-col min-h-screen w-full">
            <LogOutButton />
            {
                featureToBeOpened && <UpadateTaskStatusPage closeFeature={closeFeature}  teamName = {teamName} name="asdsdsa" taskList = {taskList}/>
            }
            {
                skeletonLoaderFlag ? <SkeletonLoaderInternPage />
                    :
                    <div className="bg-base-200 p-4 md:px-5 md:py-5 rounded flex justify-center items-center flex-col w-full max-w-3xl border-2 border-neutral">
                        <p className="bg-base-300 px-3 py-2 mb-5 rounded font-black text-xl md:text-2xl text-center border-2 border-neutral">
                            {teamName}
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
                            taskList.map((task, index) => (
                                <div className="flex justify-evenly items-center w-full gap-2" key={index}>
                                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%]   font-[600] text-center text-sm md:text-base">
                                        {task.taskID}
                                    </p>
                                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[60%]   font-[600] text-sm md:text-base">
                                        {task.taskTitle}
                                    </p>
                                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%]  font-[600] text-sm md:text-base">
                                        {task.status}
                                    </p>
                                </div>
                            ))
                        }
                        <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleFeaturesClick}>
                            Update Task Status
                        </button>
                    </div>
            }
        </div>
    )
}
export default DashBoard;
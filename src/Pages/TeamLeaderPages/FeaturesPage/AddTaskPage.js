import {useState} from "react";
import api from "../../../AxiosProvider"
import SuccessMessage from "../../../Components/InfoMessages/SuccessMessage";
import ErrorMessage from "../../../Components/InfoMessages/ErrorMessage";

function AddTaskPage({ closeFeature, teamName }){
    const [taskID, setTaskID] = useState(null)
    const [taskTitle, setTaskTitle] = useState(null)
    const [messageFlag, setMessageFlag] = useState(false); // 0 -> 200 , 1 -> 500

    function handleAddTask(){
        api.post("/api/common/addTask",{
            teamName,
            taskID,
            taskTitle
        }).then(response => {
            if(response.status === 200){
                setMessageFlag(0);
                setTimeout(() => closeFeature(), 1000);
            }
        })
            .catch(error => {
                    setMessageFlag(1)
                    setTimeout(()=> setMessageFlag(null),2000);
                }
            );
    }

    return(
        <div className="flex justify-center items-center bg-base-300 p-2 flex-col min-h-screen w-full absolute top-0 opacity-95">
            <div className="bg-base-200 p-4 md:px-5 md:py-5 rounded flex justify-center items-center flex-col w-full max-w-3xl border-2 border-neutral">
                {
                    messageFlag === 0 && <SuccessMessage props={{message : "Task Added"}}/>
                }
                {
                    messageFlag === 1 && <ErrorMessage props={{message : "Server Issue"}}/>
                }
                <p className="bg-base-300 px-3 py-2 mb-2 rounded font-[700] border-2 border-neutral text-l lg:text-2xl"> Add Task</p>
                <label className="input input-bordered flex items-center gap-2 text-info w-[50%] rounded-xl my-3">
                    Task ID
                    <input required type="text" className="grow text-base-content w-[70%]" placeholder="Enter"  onChange={(e) => setTaskID(e.target.value)} />
                </label>
                <div className="flex w-full justify-center items-start gap-2">
                    <p className="bg-base-300 px-3 py-2 mb-2 rounded text-l text-info"> Task Description</p>
                    <textarea className="textarea textarea-info" placeholder="Enter" onChange={(e) => setTaskTitle(e.target.value)} ></textarea>
                </div>
                <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-2 m-3">
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleAddTask}>Add Task</button>
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={closeFeature}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default AddTaskPage;
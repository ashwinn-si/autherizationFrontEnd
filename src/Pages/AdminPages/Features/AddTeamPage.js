import {useState} from "react";
import api from "../../../AxiosProvider"
import LoaderMessage from "../../../Components/InfoMessages/LoaderMessage";
import SuccessMessage from "../../../Components/InfoMessages/SuccessMessage";
import ErrorMessage from "../../../Components/InfoMessages/ErrorMessage";

function AddTeamPage({closeHandle}){
    const [teamName, setTeamName] = useState("");
    const [teamLeaderEmail, setTeamLeaderEmail] = useState("");
    const [teamLeaderPassword, setTeamLeaderPassword] = useState("");
    const [messageFlag, setMessageFlag] = useState(null);

    const messages = {
        0: { component: SuccessMessage, text: "Team Created" },
        1: { component: LoaderMessage, text: "Creating Team" },
        2: { component: ErrorMessage, text: "Server Issue" },
        4: { component: ErrorMessage, text: "Already Existing Team" },
        5: { component: ErrorMessage, text: "Existing Leader Credentials" },
    };

    const MessageComponent = messages[messageFlag]?.component;

    function handleCreateTeam(){
        setMessageFlag(1)
        api.post("/api/admin/createTeam",{
            teamName, teamLeaderEmail, teamLeaderPassword
        }).then(response => {
            setMessageFlag(0)
            setTimeout(()=>{
                closeHandle();
            },1000)
        }).catch(error => {
            if(error.response.status === 400){
                if(error.response.data.message === "team"){
                    setMessageFlag(4)
                }else{
                    setMessageFlag(5)
                }

            }else{
                setMessageFlag(2)
            }
        }).finally(()=>{
            setTimeout(()=>{setMessageFlag(null)},2000)
        })
    }

    return (
        <div className="flex justify-center items-center bg-base-300 p-2 flex-col min-h-screen w-full absolute top-0 opacity-95">
            {MessageComponent && <MessageComponent props={{ message: messages[messageFlag].text }} />}
            <div className="bg-base-200 p-4 md:px-5 md:py-5 rounded flex justify-center items-center flex-col w-full max-w-3xl border-2 border-neutral">
                <p className="bg-base-300 px-3 py-2 mb-2 rounded font-[700] border-2 border-neutral text-l lg:text-2xl"> Add Team</p>
                <label className="input input-bordered flex items-center gap-2 text-primary w-[50%] rounded-xl my-3">
                    Team Name
                    <input type="text" className="grow text-base-content w-[50%]" placeholder="Enter" required onChange={(e)=> {
                        setTeamName(e.target.value)
                    }} />
                </label>
                <p className="bg-base-300 px-2 py-1 mb-2 rounded  border-2 border-neutral text-l lg:text-xl">Team Leader</p>
                <label className="input input-bordered flex items-center gap-2 text-primary w-[50%] rounded-xl my-3">
                    Email
                    <input type="text" className="grow text-base-content w-[90%]" placeholder="Enter" required onChange = {
                        (e) => {
                            setTeamLeaderEmail(e.target.value)
                        }
                    }/>
                </label>
                <label className="input input-bordered flex items-center gap-2 text-primary w-[50%] rounded-xl my-3">
                    Password
                    <input type="text" className="grow text-base-content w-[90%]" required placeholder="Enter" onChange = {
                        (e) => {
                            setTeamLeaderPassword(e.target.value)
                        }
                    } />
                </label>
                <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-2 m-3">
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleCreateTeam}>Create Team</button>
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={() => closeHandle()}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default AddTeamPage;
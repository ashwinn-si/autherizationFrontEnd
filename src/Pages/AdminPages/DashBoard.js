import {useEffect, useState} from "react";
import api from "../../AxiosProvider"
import AddTeamPage from "./Features/AddTeamPage";
import LogOutButton from "../../Components/LogOutButton";
import SuccessMessage from "../../Components/InfoMessages/SuccessMessage";
import ErrorMessage from "../../Components/InfoMessages/ErrorMessage";
import LoaderMessage from "../../Components/InfoMessages/LoaderMessage";
import SkeletonAdminPage from "../SkeletonLoaderPage/SkeletonLoaderAdminDashBoard"
import { useNavigate } from "react-router-dom";

function DashBoard(props){
    const [teams,setTeams] = useState([])
    const [openFlag, setOpenFlag] = useState(false)
    const [messageFlag, setMessageFlag] = useState(null)
    const [skeletonLoaderFlag, setSkeletonLoaderFlag] = useState(false)
    const navigate = useNavigate();

    function getTeamInfo (){
        setSkeletonLoaderFlag(true)
        api.get("/api/admin/teamInfoGetter").then(response=>{
            const allTeams = response.data.teams;
            const currTeams = []
            allTeams.map(team => (
                currTeams.push({
                    teamName : team.teamName,
                    leaderEmail : team.leader.email,
                    leaderPassword : team.leader.password,
                    interns : team.interns,
                    tasks : team.tasks
                })
            ))
            setTeams(currTeams);
        }).catch(err=>{
            if(err.response.status === 401 || err.response.status === 403){
                navigate("/unauthozied");
            }
            setMessageFlag(2)
        }).finally(()=>{
            setTimeout(()=>{setMessageFlag(null)},2000)
            setSkeletonLoaderFlag(false)
        })
    }

    useEffect(()=>{
        getTeamInfo()
    },[])

    function closeHandle(){
        setOpenFlag(false)
        getTeamInfo()
    }

    function handleOpenTeam(index){
        const teamInfo = teams[index];
        window.location = `/admin/teampage/${teamInfo.teamName}`;
    }

    function handleDeleteTeam(index){
        setMessageFlag(1);
        api.post("/api/admin/deleteTeam",{
            teamName : teams[index].teamName
        }).then(response =>{
            setMessageFlag(0);

            getTeamInfo()
        }).catch(err=>{
            setMessageFlag(1);
        }).finally(()=>{
            setTimeout(()=>{setMessageFlag(null)}, 2000);
        })
    }

    return (
        <div className="flex justify-center items-center bg-base px-4 py-2 flex-col">
            <LogOutButton />
            <p className="text-center my-3 text-2xl lg:text-3xl font-bold">Welcome Admin</p>
            <p className="bg-base-300 px-3 py-2 mb-2 rounded font-[700]">All Teams</p>
            {
                openFlag && <AddTeamPage closeHandle={closeHandle}/>
            }
            {
                messageFlag === 0 && <SuccessMessage props={{message : "Team Deleted"}}/>
            }
            {
                messageFlag === 1 && <LoaderMessage props={{message : "Deleting Team"}}></LoaderMessage>
            }
            {
                messageFlag === 2 && <ErrorMessage props={{message : "Server Issue"}}/>
            }
            {
                skeletonLoaderFlag ? <SkeletonAdminPage />
                    :
                    <div className="flex w-screen flex-col justify-center items-center">
                        <div className="grid grid-cols-2 gap-6 lg:flex lg:flex-row lg:flex-wrap lg:justify-center bg-base-200 w-full rounded-xl py-4 ">
                            {
                                teams.map((team,i)=>(
                                    <div
                                        className="flex justify-evenly items-center bg-base-300 h-[250px]
                                     lg:w-[20vw] lg:h-[300px] p-2 border-2 border-neutral
                                     rounded-xl flex-col text-center shadow-primary shadow-[0_0_3px]"
                                        key={i}
                                    >
                                        <p className="font-[650] " >{team.teamName}</p>
                                        <div>
                                            <p className="font-[500]  ">Team Leader</p>
                                            <p className="text-sm">{team.leaderEmail}</p>
                                        </div>
                                        <p className="font-[500] ">No. Interns : <span className="font-normal">{team.interns.length}</span></p>
                                        <p className="font-[500] text-left  ">No. Tasks : <span className="font-normal">{team.tasks.length}</span></p>
                                        <div className="flex justify-evenly items-center flex-col w-full lg:flex-row gap-2">
                                            <button className="btn btn-outline btn-info p-[0.2rem]  lg:px-2 lg:py-1 text-sm" onClick={() => handleOpenTeam(i)}>More Info</button>
                                            <button className="btn btn-outline btn-secondary btn-error p-[0.2rem]  lg:px-2 lg:py-1 text-sm" onClick={() => handleDeleteTeam(i)}>Delete Team</button>
                                        </div>

                                    </div>
                                ))
                            }
                        </div>
                        <button className="btn btn-outline btn-primary my-3 w-[10%]" onClick={() => setOpenFlag(true)}>Create Team</button>
                    </div>
            }


        </div>
    )
}

export default DashBoard;
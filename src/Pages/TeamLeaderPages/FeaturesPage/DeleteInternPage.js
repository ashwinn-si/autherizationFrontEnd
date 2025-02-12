import {useEffect, useState} from "react";
import api from "../../../AxiosProvider"
import SuccessMessage from "../../../Components/InfoMessages/SuccessMessage";
import LoaderMessage from "../../../Components/InfoMessages/LoaderMessage";
import ErrorMessage from "../../../Components/InfoMessages/ErrorMessage";

function DeleteInternPage({ closeFeature, teamName, internList }){
    const [internSelected, setInternSelected] = useState(internList[0]?.email|| "");
    const [interns, setInterns] = useState([]);
    const [messageFlag, setMessageFlag] = useState(null);

    function handleDeleteIntern(){
        setMessageFlag(1);
        api.post("/api/common/deleteIntern",{
            teamName,
            internEmail: internSelected
        }).then((response) => {
            if(response.status === 200){
                setMessageFlag(0);
                setTimeout(()=> closeFeature(),1000)
            }
        }).catch((error) => {
            if(error.response.status === 401){
                window.location = "/unauthozied"
            }else{
                setMessageFlag(2);
            }
        }).finally(()=>{
            setTimeout(()=> setMessageFlag(null),2000);
        })

    }

    useEffect(() => {

        const currList =[]
        internList.map((intern) => {
            currList.push(intern.email);
        })
        setInterns(currList);
    },[internList])
    return(
        <div className="flex justify-center items-center bg-base-300 p-2 flex-col min-h-screen w-full absolute top-0 opacity-95">
            <div
                className="bg-base-200 p-4 md:px-5 md:py-5 rounded flex justify-center items-center flex-col w-full max-w-3xl border-2 border-neutral">
                {
                    messageFlag === 0 && <SuccessMessage props={{message : "Intern Deleted"}}/>
                }
                {
                    messageFlag === 1 && <LoaderMessage props={{message : "Deleting Intern"}}/>
                }
                {
                    messageFlag === 2 && <ErrorMessage props={{message : "Server Issue"}}/>
                }
                <p className="bg-base-300 px-3 py-2 mb-2 rounded font-[700] border-2 border-neutral text-l lg:text-2xl"> Delete
                    Intern</p>
                <div className="flex justify-evenly items-center w-full gap-2 mb-4">
                    <p className="text-l font-[500]">Intern To Be Deleted</p>
                    <div className="m-1">
                        <select
                            className="select w-full max-w-xs border-neutral"
                            value={internSelected} // Set the selected intern
                            onChange={(e) => setInternSelected(e.target.value)} // Update the selected intern
                        >
                            {interns?.map((intern, index) => (
                                <option key={index} value={intern}>
                                    {intern}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-2 m-3">
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleDeleteIntern}>Delete Intern</button>
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={closeFeature}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default DeleteInternPage;
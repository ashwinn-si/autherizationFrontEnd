import {useState} from "react";
import api from "../../../AxiosProvider"
import SuccessMessage from "../../../Components/InfoMessages/SuccessMessage";
import ErrorMessage from "../../../Components/InfoMessages/ErrorMessage";
import LoaderMessage from "../../../Components/InfoMessages/LoaderMessage";

function AddIntern({ closeFeature, teamName }){
    const [email,setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [messageFlag, setMessageFlag] = useState(false); // 0 -> 200 , 1 -> 500
    function handleAddIntern(){
        setMessageFlag(1)
        api.post("/api/common/addIntern",{
            teamName,
            internEmail: email,
            internPassword : password,
        }).then(response => {
            if(response.status === 200){
                setMessageFlag(0);
                setTimeout(() => closeFeature(), 1000);
            }
        }).catch(error => {
                if(error.response.status === 400){
                    setMessageFlag(4)
                }else{
                    setMessageFlag(2)
                }
            }
            ).finally(()=>{
                setTimeout(()=> setMessageFlag(null),2000);
            })
    }

    return(
        <div className="flex justify-center items-center bg-base-300 p-2 flex-col min-h-screen w-full absolute top-0 opacity-95">
            <div className="bg-base-200 p-4 md:px-5 md:py-5 rounded flex justify-center items-center flex-col w-full max-w-3xl border-2 border-neutral">
                {
                   messageFlag === 0 && <SuccessMessage props={{message : "Intern Added"}}/>
                }
                {
                    messageFlag === 1 && <LoaderMessage props={{message : "Adding Intern"}}/>
                }
                {
                    messageFlag === 2 && <ErrorMessage props={{message : "Server Issue"}}/>
                }
                {
                    messageFlag === 4 &&   <ErrorMessage props={{message : "Already Existing Credentials"}}/>
                }
                <p className="bg-base-300 px-3 py-2 mb-2 rounded font-[700] border-2 border-neutral text-l lg:text-2xl"> Add Intern</p>
                <label className="input input-bordered flex items-center gap-2 text-primary w-[50%] rounded-xl my-3">
                    Email
                    <input  type="text" className="grow text-base-content w-[90%]" placeholder="Enter"  required onChange={(e)=> setEmail(e.target.value)}/>
                </label>
                <label className="input input-bordered flex items-center gap-2 text-primary w-[50%] rounded-xl my-3">
                    Password
                    <input   type="text" className="grow text-base-content w-[90%]" placeholder="Enter"  required onChange={(e)=> setPassword(e.target.value)}/>
                </label>
                <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-2 m-3">
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={handleAddIntern}>Add Intern</button>
                    <button className="btn btn-outline btn-primary py-1 px-2 w-full sm:w-auto" onClick={closeFeature}>Close</button>
                </div>
            </div>
        </div>
    )
}
export default AddIntern;
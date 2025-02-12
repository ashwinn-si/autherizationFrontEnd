import {useEffect, useState} from "react";
import api from "../AxiosProvider";
import {Link} from "react-router-dom";
import SuccessMessage from "../Components/InfoMessages/SuccessMessage";
import ErrorMessage from "../Components/InfoMessages/ErrorMessage";

function SignUpPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successFlag, setSuccessFlag] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);
    const availableRole = ["admin","teamleader","intern"]
    const [role,setRole] = useState("admin");

    useEffect(() => {
        if(successFlag === true || errorFlag === true){
            setTimeout(()=>{
                setSuccessFlag(false);
                setErrorFlag(false);
            },3000)
        }
    },[successFlag,errorFlag]);

    function handleSubmit(e){
        api.post("/api/auth/signup",{
            email,password,role
        }).then((response) => {
            if(response.status === 200){
                setSuccessFlag(true);
            }else{
                setErrorFlag(true);
            }
        })
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center p-4">
            {
                successFlag && <SuccessMessage props={{message : "User Created Successfully"}}/>
            }
            {
                errorFlag && <ErrorMessage props={{message : "Something went wrong"}} />
            }
            <div className="w-[90%] max-w-[350px] md:max-w-[450px] lg:max-w-[500px]  h-auto md:h-[450px] bg-base-300 rounded-lg border-2 border-solid border-neutral shadow-base-300 shadow-2xl flex flex-col justify-center items-center p-6">


                <div className="h-[10%] w-full flex justify-center items-center mb-4">
                    <p className="text-center font-semibold text-primary text-2xl md:text-3xl">SignUp</p>
                </div>


                <form className="h-[60%] w-full flex flex-col justify-evenly items-center " autoComplete = "on">
                    <label className="input input-bordered flex items-center gap-2 text-primary w-full rounded-xl my-3">
                        Email
                        <input type="text" className="grow text-base-content w-[90%]" placeholder="Enter" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-primary w-full rounded-xl my-3">
                        Password
                        <input type="password" className="grow text-base-content w-[90%]" placeholder="Enter " onChange={e => setPassword(e.target.value)} />
                    </label>
                </form>
                <div className="dropdown my-3">
                    <div tabIndex={0} role="button" className="btn m-1">{role}</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        {
                            availableRole.map((item, index) => (
                                <li onClick={() => setRole(item)} className="my-1 cursor-pointer hover:tracking-widest transition-all duration-300">{item}</li>
                            ))
                        }
                    </ul>
                </div>
                <div className="flex justify-center items-center h-[10%] my-3 flex-col">
                    <button className="btn btn-outline btn-md btn-primary w-full" onClick={handleSubmit} >SignUp</button>
                    <Link className="text-base-content mt-1 text-sm hover:text-primary transition-all duration-300 cursor-pointer" to="/">Login</Link>
                </div>
            </div>
        </div>

    )
}
export default SignUpPage;
import {useEffect, useState} from "react";
import  api  from "../AxiosProvider";
import {Link} from "react-router-dom";
import SuccessMessage from "../Components/InfoMessages/SuccessMessage";
import ErrorMessage from "../Components/InfoMessages/ErrorMessage";
import LoaderMessage from "../Components/InfoMessages/LoaderMessage";


function LoginPage(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [successFlag, setSuccessFlag] = useState(false);
    const [errorFlag, setErrorFlag] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');
    const [infoFlag, setInfoFlag] = useState(false);

    useEffect(() => {
        if(successFlag === true || errorFlag === true){
            setTimeout(()=>{
                setSuccessFlag(false);
                setErrorFlag(false);
            },3000)
        }
    },[successFlag,errorFlag]);

    useEffect(()=>{
        if(errorMsg !== ""){
            setErrorFlag(true)
        }
    },[errorMsg])

    function handleSubmit(e){
        if(email.length === 0 || password.length == 0){
            setErrorFlag(true);
            setErrorMsg("Missing Crendials");
            setTimeout(()=>{
                setErrorFlag(false);
            },2000)
            return
        }
        setInfoFlag(true);
        api.post("/api/auth/login", {
            email,
            password
        })
            .then((response) => {
                setInfoFlag(false);
                if (response.status === 200) {
                    setSuccessFlag(true);
                }
                return response.data;
            })
            .then((data) => {
                switch (data.role){
                    case "admin":
                        window.location="/dashboard/admin";
                        break;
                    case "team leader":
                        window.location=`/teamleader/teampage/${data.teamName}`;
                        break;
                    default:
                        window.location=`/dashboard/intern/${data.teamName}`;
                }
            })
            .catch((error) => {
                setInfoFlag(false);
                if(error.status === 401 || error.status === 404){
                    setErrorMsg("Invalid Email or Password");
                }else{
                    setErrorMsg("Server Issue");
                }
                setErrorFlag(true);
            }).finally(()=>{
                setTimeout(()=>{
                    setInfoFlag(false);
                    setErrorFlag(false);
                    setSuccessFlag(false);
                },2000)
        })
    }

    return(
        <div className="w-screen h-screen flex justify-center items-center p-4">
            {
                infoFlag && <LoaderMessage props={{message : "Checking Credentails"}}/>
            }
            {
                successFlag && <SuccessMessage props={{message : "User Logged In"}}/>
            }
            {
                errorFlag && <ErrorMessage props={{message : errorMsg}} />
            }
            <div className="absolute top-5 lg:top-6 left-[4%] z-[9996]  bg-base-200 rounded  shadow-primary shadow-[0_0_3px] px-3 py-2 broder-2 border-base-100 hover:shadow-[0_0_10px] hover:text-primary transition-all duration-300">
                <Link to="/" className="font-[600]">Home</Link>
            </div>
            <div className="w-[90%] max-w-[350px] md:max-w-[450px] lg:max-w-[500px]  h-auto md:h-[450px] bg-base-300 rounded-lg border-2 border-solid border-neutral shadow-base-300 shadow-2xl flex flex-col justify-center items-center p-6">


                <div className="h-[20%] w-full flex justify-center items-center mb-4">
                    <p className="text-center font-semibold text-primary text-2xl md:text-3xl">Login</p>
                </div>


                <form className="h-[60%] w-full flex flex-col justify-evenly items-center " autoComplete = "on">
                    <label className="input input-bordered flex items-center gap-2 text-primary w-full rounded-xl my-3">
                        Email
                        <input type="text" required className="grow text-base-content w-[90%]" placeholder="Enter" onChange={(e) => setEmail(e.target.value)} />
                    </label>
                    <label className="input input-bordered flex items-center gap-2 text-primary w-full rounded-xl my-3">
                        Password
                        <input type="password" required className="grow text-base-content w-[90%]" placeholder="Enter " onChange={e => setPassword(e.target.value)} />
                    </label>
                </form>
                <div className="flex justify-center items-center h-[20%] my-3 flex-col">
                    <button className="btn btn-outline btn-md btn-primary px-3 py-1" onClick={handleSubmit} >Login</button>
                    {/*<Link className="text-base-content mt-1 text-sm hover:text-primary transition-all duration-300 cursor-pointer" to="/signup">SignUp</Link>*/}
                    <Link className="mt-2 cursor hover:text-pretty transition-all duration-300" to="/">View Documentation For Password</Link>
                </div>
            </div>
        </div>

    )
}
export default LoginPage;
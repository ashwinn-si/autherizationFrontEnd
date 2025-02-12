import {Link} from "react-router-dom";
import api from "./../AxiosProvider"
import { useNavigate } from "react-router-dom";

function LogOutButton(){
    const navigator = useNavigate();
    function handleLogOut(){
        api.post("/api/auth/signup").then((response) => {
            if(response.status === 200){
                navigator("/")
            }
        }).catch(err => {
            navigator("/unauthozied")
        })
    }
    return(
        <button className="absolute top-5 lg:top-6 left-[4%] z-[9996]  bg-base-200 rounded  shadow-primary shadow-[0_0_3px] px-3 py-2 broder-2 border-base-100 hover:shadow-[0_0_10px] hover:text-primary transition-all duration-300" onClick={handleLogOut}>
            logout
        </button>
    )
}
export default LogOutButton;
import unAuthorized from '../Assests/Unathorized.gif'
import {Link} from "react-router-dom";

function UnAuthorizedAccess(props){
    return(
        <div className="w-screen h-screen flex justify-center items-center p-4 flex-col">
            <p className="text-2xl my-3">Unathorized Access</p>
            <img src={unAuthorized} alt="Unathorized Access"/>
            <button className="btn btn-outline btn-md btn-primary my-4"  onClick={()=>{window.location = "/"}}>Home</button>
        </div>
    )
}
export default UnAuthorizedAccess
import {Link} from "react-router-dom";

function LogOutButton(){
    return(
        <div className="absolute top-5 lg:top-6 left-[4%] z-[9996]  bg-base-200 rounded  shadow-primary shadow-[0_0_3px] px-3 py-2 broder-2 border-base-100 hover:shadow-[0_0_10px] hover:text-primary transition-all duration-300">
            <Link to="/" className="text-primary">logout</Link>
        </div>
    )
}
export default LogOutButton;
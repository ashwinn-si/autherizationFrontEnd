import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const TeamCard = () => (

        <Skeleton width="300px" height="200px" />

)

function SkeletonLoaderAdminDashBoard() {
    return(
        <div className="flex w-screen flex-col justify-center items-center">
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-3 lg:flex lg:flex-wrap lg:justify-center bg-base-200 w-full rounded-xl py-4">
                <Skeleton width="300px" height="200px" />
                <Skeleton width="300px" height="200px" />
                <Skeleton width="300px" height="200px" />
            </div>

            <Skeleton width="100px" height="30px" />
        </div>
    )
}
export default SkeletonLoaderAdminDashBoard;

import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css';

const TeamLeaderSkeleton = () => (
    <div className="flex flex-col md:flex-row justify-evenly items-center w-full gap-2 mb-4">
        <p className="bg-base-300 px-3 py-2 rounded font-[700] w-full md:w-auto border-2 border-neutral">
            Team Leader
        </p>
        <div className=" px-3 py-2 rounded w-full lg:w-[200px] border-neutral"><Skeleton width="100%" height="3vh" /></div>
        <div className="w-full lg:w-[200px] "><Skeleton width="100%"  height="3vh" /></div>
    </div>
);

const InternSkeleton = () => (
    <div className="flex justify-evenly items-center w-full gap-2">
        <div className="px-2 md:px-3 py-2 mb-2 rounded w-[70%] text-sm md:text-base overflow-hidden text-center">
            <Skeleton width="100%"  height="3vh"  />
        </div>

        <div className="px-2 md:px-3 py-2 mb-2 rounded w-[30%] text-center text-sm md:text-base">
            <Skeleton width="100%"  height="3vh"  />
        </div>
    </div>
)

const TaskSkeleton =() =>(
    <div className="flex justify-evenly items-center w-full gap-2">
        <div className=" px-2 md:px-3 py-2 mb-2 rounded w-[20%]   font-[600] text-center text-sm md:text-base">
            <Skeleton width="100%"  height="3vh"  />
        </div>
        <div className="px-2 md:px-3 py-2 mb-2 rounded w-[60%]   font-[600] text-sm md:text-base">
            <Skeleton width="100%"  height="3vh"  />
        </div>
        <div className="px-2 md:px-3 py-2 mb-2 rounded w-[20%]  font-[600] text-sm md:text-base">
            <Skeleton width="100%"  height="3vh"  />
        </div>
    </div>
)

const ButtonSkeleton = () =>(
    <div className="flex flex-col sm:flex-row justify-evenly items-center w-full gap-2 m-3">
        <div className="w-[20%]">
            <Skeleton width="100%"  height="4vh"  />
        </div>
        <div className="w-[20%]">
            <Skeleton width="100%"  height="4vh"  />
        </div>
        <div className="w-[20%]">
            <Skeleton width="100%"  height="4vh"  />
        </div>
    </div>
)

function SkeletonTeamPage({teamName}) {
    return(
        <div className="flex justify-center items-center bg-base p-2 flex-col min-h-screen w-full">


            <div className="bg-base-200 p-4 md:px-5 md:py-5 rounded flex justify-center items-center flex-col w-full max-w-3xl border-2 border-neutral">


                <p className="bg-base-300 px-3 py-2 mb-5 rounded font-black text-xl md:text-2xl text-center border-2 border-neutral">
                    ashwin
                </p>

                <TeamLeaderSkeleton/>

                {/* Interns Section */}
                <p className="bg-base-300 px-3 py-2 m-3 rounded font-[700] text-lg md:text-xl border-2 border-neutral">
                    Interns
                </p>

                <div className="flex justify-evenly items-center w-full gap-2">
                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded font-[600] w-[70%] text-center text-sm md:text-base">
                        Email
                    </p>
                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded font-[600] w-[30%] text-center text-sm md:text-base">
                        Password
                    </p>
                </div>
                <InternSkeleton/>
                <InternSkeleton/>



                {/* Tasks Section */}
                <p className="bg-base-300 px-3 py-2 m-3 rounded font-[700] text-lg md:text-xl border-2 border-neutral">
                    Tasks
                </p>
                <div className="flex justify-evenly items-center w-full gap-2">
                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%]   font-[600] text-center text-sm md:text-base">
                        Task ID
                    </p>
                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[60%]   font-[600] text-sm md:text-base">
                        Task Description
                    </p>
                    <p className="bg-base-300 px-2 md:px-3 py-2 mb-2 rounded w-[20%]  font-[600] text-sm md:text-base">
                        Status
                    </p>
                </div>
                <TaskSkeleton/>
                <TaskSkeleton/>


                <ButtonSkeleton />

            </div>
        </div>
    )
}
export default SkeletonTeamPage;
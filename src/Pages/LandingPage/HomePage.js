import Squares from "../../Components/LandingPage/BackGround";
import ScrollIndicator from "../../Components/LandingPage/ScrollIndicator";

function HomePage(){
    return(
        <div className="relative flex flex-col items-center justify-center min-h-screen ">
            <Squares
                speed={0.2}
                squareSize={100}
                direction='diagonal' // up, down, left, right, diagonal
                borderColor="var(--neutral)"
                hoverFillColor='var(--secondary)'
            />

            <div className="z-[11]">
                <p
                    className="text-3xl lg:text-[5rem] font-bold hover:tracking-[0.2rem] hover:scale-[1] lg:hover:tracking-[0.2em] transition-all duration-300 cursor-pointer text-center"
                >
                    Office Dashboard Management
                </p>
                <ScrollIndicator />
            </div>
        </div>


    )
}
export default HomePage;
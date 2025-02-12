import { GiHamburgerMenu } from "react-icons/gi";
import {useEffect, useState} from "react";
import {motion} from "framer-motion";
import SideBar from "./SideBar";
import NavItems from "./NavItems";
import {Link} from "react-scroll";

function NavBar(){
    const [openMenuFlag, setOpenMenuFlag] = useState(false);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);



    useEffect(() => {
        // Function to update windowWidth state
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        // Add event listener for resize event
        window.addEventListener('resize', handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const navLinks = [
        { title: 'Arch Diagram', href: 'arch-diagram' },
        { title: 'GitHub', href: '#' },
        { title: 'Try it Out', href: '/login' }
    ];

    const closeMenu = ()=>{
        setOpenMenuFlag(false);
    }
    useEffect(() => {
        console.log(openMenuFlag);
    },[openMenuFlag]);
    return(
        <>
            {
                openMenuFlag && <SideBar navLinks={navLinks} closeMenu={closeMenu}/>
            }
            <div className="w-screen fixed top-7 flex justify-evenly items-center z-[20]">
                <div className="bg-base-100 px-2 py-2 lg:px-4 lg:py-2 bg-opacity-60 border-[0.5px] border-primary rounded-xl">
                    <Link className="hover:tracking-widest hover:scale-[1.1] transition-all duration-300 cursor-pointer text-[1rem] lg:text-[1.2rem] font-[800]"
                       to="home"
                       spy={true}
                       smooth={true}
                       offset={-70} // Adjusts for navbar height
                       duration={500}
                       activeClass="active">ASHWIN SI
                    </Link>
                </div>
                {
                    windowWidth > 789
                    &&
                    <div className="flex justify-evenly items-center gap-2 bg-base-100 px-4 py-2 bg-opacity-60 border-[0.5px] border-primary rounded-xl w-[40%]">
                        <NavItems />
                    </div>
                }
                {
                    windowWidth < 789 && !openMenuFlag &&
                    <div className="flex justify-evenly items-center gap-2 bg-base-100 px-4 py-2 bg-opacity-50 border-[0.5px] border-primary rounded-xl absolute top-1 left-2" onClick={()=> setOpenMenuFlag(true)}>
                        <GiHamburgerMenu />
                    </div>
                }

            </div>
        </>

    )
}
export default NavBar;
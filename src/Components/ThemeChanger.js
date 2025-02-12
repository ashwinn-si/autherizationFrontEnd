import {useEffect, useState} from "react";

const ThemeChanger = () => {
    const themes = [
        "halloween","synthwave", "retro", "valentine", "aqua", "lofi",
        "dracula", "night", "coffee", "winter", "dim", "nord", "sunset"
    ];
    const [selectedTheme, setSelectedTheme] = useState("halloween");

    function handleThemeChange(theme) {
        document.documentElement.setAttribute("data-theme", theme); // Change theme
        setSelectedTheme(theme); // Update the selected theme
    }


    return (
        <div className="fixed top-5 lg:top-6 right-[4%] z-[9996]">
            <details className="dropdown ">
                <summary className="btn m-1 border-primary border-[1px]">{selectedTheme}</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-[150px] p-2 shadow-lg  border-primary border-[1px]">
                    {themes.map((theme, index) => (
                        <li
                            key={index}
                            onClick={() => handleThemeChange(theme)}
                            className="cursor-pointer my-0.5 py-1 px-2 rounded-md transition-all duration-300 hover:bg-primary hover:text-white"
                        >
                            {theme}
                        </li>
                    ))}
                </ul>
            </details>
        </div>
    );
};

export default ThemeChanger;

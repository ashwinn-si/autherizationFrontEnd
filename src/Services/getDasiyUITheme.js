const getDaisyUITheme = () => {
    return document.documentElement.getAttribute("data-theme") || "dark"; // Default to light theme
};
export default getDaisyUITheme;
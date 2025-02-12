import ThemeChanger from "./Components/ThemeChanger";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginPage from "./Pages/LoginPage";
import SignUpPage from "./Pages/SignUpPage";
import AdminDashboardPage from "./Pages/AdminPages/DashBoard";
import InternDashboardPage from "./Pages/InternPages/DashBoard";
import UnAuthorizedAccess from "./Pages/UnAuthorizedAccess";
import TeamPage from "./Pages/TeamLeaderPages/TeamPage";
import TeamPageAdmin from "./Pages/AdminPages/Features/TeamPage"
import {Skeleton, SkeletonTheme} from "react-loading-skeleton";
import getDaisyUITheme from "./Services/getDasiyUITheme";
import themeColors from "./Services/dasiyUITheme";
import {useEffect, useState} from "react";
import SkeletonTeamPage from "./Pages/SkeletonLoaderPage/SkeletonTeamPage";
import LandingPage from "./Pages/LandingPage";
import FollowCursor from "./Components/Cursor";

function App() {
    const [theme, setTheme] = useState(getDaisyUITheme());

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setTheme(getDaisyUITheme()); // Update theme when `data-theme` changes
        });

        observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] });

        return () => observer.disconnect(); // Cleanup observer
    }, []);

    const { base, highlight } = themeColors[theme] || themeColors.light;

    return (
      <SkeletonTheme baseColor={base} highlightColor={highlight} >
          <div className="overflow-x-hidden">
              <FollowCursor />
              <ThemeChanger />
              <BrowserRouter>
                  <Routes >
                      <Route path="/" element={<LandingPage />} />
                      <Route path="/login" element={<LoginPage />} />
                      <Route path="/skeleton" element={<SkeletonTeamPage />} />
                      <Route path="/signup" element={<SignUpPage />} />
                      <Route path="/dashboard/admin" element={<AdminDashboardPage />}/>
                      <Route path="/dashboard/intern/:teamName" element={<InternDashboardPage />}></Route>
                      <Route path="/admin/teampage/:teamName" element={<TeamPageAdmin />}></Route>
                      <Route path="/teamleader/teampage/:teamName" element={<TeamPage />}></Route>
                      <Route path="/unauthozied" element={<UnAuthorizedAccess/>}></Route>
                  </Routes>
              </BrowserRouter>
          </div>
      </SkeletonTheme>
  );
}

export default App;

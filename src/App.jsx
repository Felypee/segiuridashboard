import { useState } from "react";
import { Routes, Route, Outlet, Navigate } from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import video from "./assets/segiuri-video.mp4";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar";
import { useContext } from "react";
import { AuthContext, login, useAuth } from "./context/auth_context";
import { Login } from "./scenes/login";
import { useEffect } from "preact/hooks";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  const {user, setUser} = useAuth()

  return (

   
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {user ?<Sidebar isSidebar={isSidebar} /> : undefined}

          <video style={{objectFit: "cover"}} src={video} autoPlay loop muted height="100%" width="100%"/>
          <main className="content">
          {user ? <Topbar setIsSidebar={setIsSidebar} /> : undefined}       
            <Routes>
              {console.log("User context ui", user)}
              {user == null ?? <Route path="/" element={<Login/>}/>} 
              {user ? <Route  path="/" element={<Dashboard />}/> : <Route path="/" element={<Login/>}/>}
              {user ? <Route path="/team" element={<Team />} /> : <Route path="/" element={<Login/>}/>}
              {user ? <Route path="/contacts" element={<Contacts />} /> : <Route path="/" element={<Login/>}/>}
              {user ? <Route path="/geography" element={<Geography />} />  : <Route path="/" element={<Login/>}/>}
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>


  );
}

export default App;




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
import { AuthContext, login } from "./context/auth_context";
import { Login } from "./scenes/login";

function App() {
  const [theme, colorMode] = useMode();
  const loginFunction = login();
  const [isSidebar, setIsSidebar] = useState(true);
  const isAuthenticated = useContext(AuthContext).user

  return (
    <AuthContext.Provider value={login}>
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {useContext(AuthContext).user ?<Sidebar isSidebar={isSidebar} /> : undefined}

          <video style={{objectFit: "cover"}} src={video} autoPlay loop muted height="100%" width="100%"/>
          <main className="content">
          {useContext(AuthContext).user ?<Topbar setIsSidebar={setIsSidebar} /> : undefined}       
              <Routes>
              {useContext(AuthContext).user == null ? <Route path="/" element={<Login/>}/>: undefined} 
              isAuthenticated.user  ? <Route  path="/" element={<Dashboard />}/> : <Route path="/" element={<Login/>}/>
              isAuthenticated.user  ?   <Route path="/team" element={<Team />} /> : <Route path="/" element={<Login/>}/>
              isAuthenticated.user  ?      <Route path="/contacts" element={<Contacts />} /> : <Route path="/" element={<Login/>}/>
               isAuthenticated.user  ?      <Route path="/geography" element={<Geography />} />  : <Route path="/" element={<Login/>}/>
             
                
               
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
    </AuthContext.Provider>
  );
}

export default App;


function PrivateRoute({ element, path }) {
  const isAuthenticated = useContext(AuthContext)
  return (
    isAuthenticated.user  ? <Route element path/> : <Route path="/" element={<Login/>}/>  
  );
}

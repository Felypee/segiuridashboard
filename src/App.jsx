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
import { authContext } from "./context/auth_context";
import { Login } from "./scenes/login";

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);
  const isAuthenticated = useContext(authContext).user

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className="app">
        {isAuthenticated ?<Sidebar isSidebar={isSidebar} /> : undefined}

          <video style={{objectFit: "cover"}} src={video} autoPlay loop muted height="100%" width="100%"/>
          <main className="content">
          {isAuthenticated ?<Topbar setIsSidebar={setIsSidebar} /> : undefined}       
              <Routes>
                <Route exact path='/' element={<PrivateRoute/>}>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/contacts" element={<Contacts />} />
                  <Route path="/invoices" element={<Invoices />} />
                  <Route path="/form" element={<Form />} />
                  <Route path="/bar" element={<Bar />} />
                  <Route path="/pie" element={<Pie />} />
                  <Route path="/line" element={<Line />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/calendar" element={<Calendar />} />
                  <Route path="/geography" element={<Geography />} />
                </Route>
                <Route path="/login" element={<Login/>}></Route>
               
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;


function PrivateRoute({ element: element, ...rest }) {
  const isAuthenticated = useContext(authContext)
  return (
    isAuthenticated.user? <Outlet /> : <Navigate to="/login" />
  );
}

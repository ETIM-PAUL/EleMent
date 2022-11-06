import React from "react";
import { SidebarNav } from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavHeading } from "./components/NavHeading";
import { DashboardView } from "./containers/Dashboard";
import { ClassManagement } from "./containers/Class";
import { Houses } from "./containers/Houses";
import { Subjects } from "./containers/Subjects";


function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative bg-main-bg dark:bg-main-dark-b ">
          <div className="w-72 fixed sidebar">
            <SidebarNav />
          </div>
          <div className={`bg-main-bg h-[100vh] w-full overflow-y-hidden pb-2 ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}>
            <div className='my-6 h-[94vh] bg-container-bg rounded-[20px] mr-8 overflow-auto'>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full "></div>
              <NavHeading />
              <Routes>
                <Route path="/home" element={<DashboardView />} />
                <Route path="class-management" element={<ClassManagement />} />
                <Route path="subjects" element={<Subjects />} />
                <Route path="houses" element={<Houses />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

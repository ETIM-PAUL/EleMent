import React from "react";
import { SidebarNav } from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";
import { NavHeading } from "./components/NavHeading";


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
                <Route path="/home" element={<Dashboard />} />
                <Route path="subjects" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

import React from "react";
import { SidebarNav } from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Dashboard } from "./components/Dashboard";


function App() {
  const activeMenu = true;
  return (
    <div>
      <BrowserRouter>
        <div className="flex relative bg-main-bg dark:bg-main-dark-b ">
          <div className="w-72 fixed sidebar">
            <SidebarNav />
          </div>
          <div className={`bg-container-bg h-[100vh] w-full overflow-y-scroll pb-2 ${activeMenu ? 'md:ml-72 ' : 'flex-2'}`}>
            <div className='mt-24 md:mt-0 '>
              <div className="fixed md:static bg-main-bg dark:bg-main-dark-bg navbar w-full"></div>
              <Routes>
                <Route path="/" element={<Dashboard />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

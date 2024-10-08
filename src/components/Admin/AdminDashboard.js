import React from 'react';
import { Routes, Route } from 'react-router-dom';
import UploadSchedule from '../Admin/UploadSchedule';
import AllSchedules from './AllSchedules';
import Sidebar from '../common/Sidebar';
import AllSwapRequests from './AllSwapRequests';
import AllPreferences from './AllPreferences';
const AdminDashboard = () => {
  return (
    <div className='dashboard'>
      <Sidebar />
      <div className='main-content'>
        <h1 align="center" className="main form-title">Admin Dashboard</h1>
        <Routes>
          <Route path="upload-schedule" element={<UploadSchedule />} />
          <Route path="swap-request" element={<AllSwapRequests />} />
          <Route path="all-schedules" element={<AllSchedules />} />
          <Route path="all-preferences" element={<AllPreferences />} />
        </Routes>
      </div>
    </div>
  );
};

export default AdminDashboard;
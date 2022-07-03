import React, { useState } from "react";
import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import { Header } from './components/templates/Header';
import { Footer } from './components/templates/Footer';
import { Homepage } from './components/pages/Homepage';
import { TeacherDashboard } from "./components/pages/more_pages/TeacherDashboard";
import { ProfilePage } from "./components/pages/more_pages/ProfilePage";
import { ProjectLibrary } from "./components/pages/more_pages/ProjectLibrary";

function App() {

  const [isDashboardOpen, setIsDashboardOpen] = useState(false);

  console.log(isDashboardOpen)

  return (
    <div className="App">
      <Header setIsDashboardOpen={setIsDashboardOpen} isDashboardOpen={isDashboardOpen} />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="teacher_dashboard" element={<TeacherDashboard setIsDashboardOpen={setIsDashboardOpen} />} />
          <Route path="teacher_dashboard/profile/:id" element={<ProfilePage />} />
          <Route path="/project_library" element={<ProjectLibrary />} />
        </Routes>
      </main>
      <Footer isDashboardOpen={isDashboardOpen} />
    </div>
  );
}

export default App;

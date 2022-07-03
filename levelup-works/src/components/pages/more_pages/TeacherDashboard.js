import React, { useEffect } from "react";
import "../../../styles/pages/homepage.css";
import { DashboardCard } from "../../templates/DashboardCard";
import { useTab } from "./useTab";
import { useStudentProfiles } from "./useStudentProfiles";
import { Link } from "react-router-dom";

export const TeacherDashboard = ({ setIsDashboardOpen }) => {

    const { tabSelected, toggleTab } = useTab();
    const { studentProfiles, errorMessage, fetchStudentProfiles } = useStudentProfiles();

    useEffect(() => {
        setIsDashboardOpen(true);
        return () => {
            setIsDashboardOpen(false);
        };
    });

    return <>
        <div className="dashboard-layout">
            <div className="sidebar">
                <div className="tabs">
                    <section className="teacher_pic">
                        <img src="./images/profile_pic/teacher_1.png" />
                    </section>
                    <div onClick={() => toggleTab(1)} className={tabSelected === 1 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/progress_tracker.png" />
                            <p data-testid="progress-tracker">PROGRESS TRACKER</p>
                        </div>
                    </div>
                    <div onClick={() => {
                        toggleTab(2)
                        fetchStudentProfiles()
                    }}
                        className={
                            tabSelected === 2 ?
                                "tab-selected"
                                :
                                null
                        }
                    >
                        <div>
                            <img src="images/pages/dashboard/student_profiles.png" />
                            <p>STUDENT PROFILES</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(3)} className={tabSelected === 3 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/help_requests.png" />
                            <p>HELP REQUESTS</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(4)} className={tabSelected === 4 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/project_submissions.png" />
                            <p>PROJECT SUBMISSIONS</p>
                        </div>
                    </div>
                    <div onClick={() => toggleTab(5)} className={tabSelected === 5 ? "tab-selected" : null}>
                        <div>
                            <img src="images/pages/dashboard/project_library.png" />
                            <Link
                                to="project_library"
                                style={{
                                    textDecoration: "none",
                                    color: "white"
                                }}
                            >
                                <p>PROJECT LIBRARY</p>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="links">
                    <div>
                        <p>Profile</p>
                    </div>
                    <div>
                        <p>Settings</p>
                    </div>
                    <div>
                        <p>Log out</p>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-buttons">
                    <button className="button-1">Take Screenshot</button>
                    <button className="button-2">Help Centre</button>
                    <button className="button-3">More Projects</button>
                </div>
                <DashboardCard
                    tabSelected={tabSelected}
                    studentProfiles={studentProfiles}
                />
            </div>
        </div>
    </>
}
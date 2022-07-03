import React from "react";
import "../../styles/template/template.css";
import { HelpRequests } from "../pages/more_pages/HelpRequests";
import { ProgressTracker } from "../pages/more_pages/ProgressTracker";
import { ProjectSubmissions } from "../pages/more_pages/ProjectSubmissions";
import { StudentProfiles } from "../pages/more_pages/StudentProfiles";

export const DashboardCard = ({
    tabSelected,
    studentProfiles
}) => {

    return <>
        <div className="inner-card">
            <ProgressTracker tabSelected={tabSelected} />
            <StudentProfiles tabSelected={tabSelected} studentProfiles={studentProfiles}/>
            <HelpRequests tabSelected={tabSelected} />
            <ProjectSubmissions tabSelected={tabSelected} />
        </div>
    </>
}
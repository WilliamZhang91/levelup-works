import React, { useState } from "react";
import Axios from "axios";

export const useStudentProfiles = () => {

    const [studentProfiles, setStudentProfiles] = useState({});
    const [errorMessage, setErrorMessage] = useState("")

    const fetchStudentProfiles = async () => {
        await Axios.get("http://localhost:8080/student/all_students")
            .then(res => {
                console.log(res);
                setStudentProfiles(res);
            })
            .catch(err => {
                console.log(err);
                setErrorMessage("Unable to retrieve student profiles");
            })
    };

    return { studentProfiles, errorMessage, fetchStudentProfiles }
}

export const useStudentProfile = () => {

    const [studentProfile, setStudentProfile] = useState({});

    const fetchStudentProfile = async (id) => {
        await Axios.get(`http://localhost:8080/student/${id}`)
            .then(res => {
                console.log(res);
                setStudentProfile(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return { studentProfile, fetchStudentProfile }

}
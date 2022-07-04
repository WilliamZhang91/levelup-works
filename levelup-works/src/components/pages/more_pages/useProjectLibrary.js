import React, { useState } from "react";
import Axios from "axios";

export const useProjectLibrary = () => {

    const [projectLibrary, setProjectLibrary] = useState({});

    const fetchProjectLibrary = async () => {
        await Axios.get("http://localhost:8080/project/all_projects")
            .then(res => {
                console.log(res);
                setProjectLibrary(res);
            })
            .catch(err => {
                console.log(err);
            });
    };

    return { projectLibrary, fetchProjectLibrary }
};
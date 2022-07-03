import React from "react";
import { Link } from "react-router-dom";

export const StudentProfiles = ({ tabSelected, studentProfiles }) => {

    console.log({ studentProfiles: studentProfiles.data })

    return <>
        <div style={{ display: tabSelected === 2 ? "block" : "none" }}>
            <div className='flex-container'>
                {studentProfiles.data && studentProfiles.data.map(user => (
                    <Link style={{textDecoration: "none"}} to={`profile/${user.studentID}`}>
                        <div className='flex-item'>
                            <img className='profilePic' src={user.picture} />
                            <p className='userName'>{user.name}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </>
}
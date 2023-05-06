import React from 'react';
import Cv from '../components/Cv';
import { Outlet } from 'react-router-dom';

const Profile = () => {
    return (
        <div>
            <Cv></Cv>
            <Outlet></Outlet>
        </div>
    );
};

export default Profile;
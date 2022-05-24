import React from 'react';
import OptionsArtists from '../users/OptionArtists';
import EditProfile from './EditProfile';
import EditArtwork from './EditArtwork'

const Users = () => {
    return (
        <>
            <OptionsArtists />
            {/* <EditProfile /> */}
            <EditArtwork />
        </>
    );
};

export default Users;

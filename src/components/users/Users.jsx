import React, { useState } from 'react';
import OptionsArtists from '../users/OptionArtists';
import EditProfile from './EditProfile';
import EditArtwork from './EditArtwork';
import AddArtwork from './AddNewArtwork';
import AddNewArtist from './AddNewArtistt';

const Users = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [url, setUrl] = useState(null);

    console.log(url);
    return (
        <>
            <OptionsArtists />
            {/* <EditProfile />
            <EditArtwork /> */}
            <AddArtwork i={imageUrl} setI={setImageUrl} setU={setUrl} u={url}/>
            <AddNewArtist i={imageUrl} setI={setImageUrl} setU={setUrl} u={url} />
        </>
    );
};

export default Users;

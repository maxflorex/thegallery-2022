import React, { useState } from 'react';
import OptionsArtists from '../users/OptionArtists';
import EditProfile from './EditProfile';
import EditArtwork from './EditArtwork';
import AddArtwork from './AddNewArtwork';
import AddNewArtist from './AddNewArtist';
import Options from './Options';
import OptionsAdmin from './OptionsAdmin';
import SliderShowArtists from '../slider/SliderShowArtists';
import Inventory from '../Inventory';

const Users = () => {
    const [imageUrl, setImageUrl] = useState(null);
    const [url, setUrl] = useState(null);
    const [createArtist, setCreateArtist] = useState(false);
    const [selected, setSelected] = useState(1);

    return (
        <div className="h-full">
            <OptionsAdmin selected={selected} setSelected={setSelected} />
            <div className="w-full ml-auto h-full">
                {selected === 3 && <Inventory />}
                {selected === 2 && <SliderShowArtists />}
                {selected === 1 && (
                    <AddArtwork
                        i={imageUrl}
                        setI={setImageUrl}
                        setU={setUrl}
                        u={url}
                        createArtist={createArtist}
                        setCreateArtist={setCreateArtist}
                    />
                )}
                {createArtist && (
                    <AddNewArtist
                        i={imageUrl}
                        setI={setImageUrl}
                        setU={setUrl}
                        u={url}
                    />
                )}
            </div>
        </div>
    );
};

export default Users;

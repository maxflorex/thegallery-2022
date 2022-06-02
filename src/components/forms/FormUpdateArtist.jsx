import { doc, updateDoc } from 'firebase/firestore';
import { useState } from 'react';
import { colRefArtist } from '../../firebase/config';
import { inputtw3 } from '../../style/styles';
import InputTags from '../forms/InputTags';
import CountrySearch from '../users/CountrySearch';

const FormUpdateArtist = ({ setShowEdit, data }) => {
    const [clicked, setClicked] = useState({
        nameClick: false,
        countryClick: false,
        bioClick: false,
        tagsClick: false,
    });
    const [tags, setTags] = useState([]);
    const [input, setInput] = useState('');
    const [nation, setNation] = useState({
        country: '',
        flag: '',
    });
    const [artist, setArtist] = useState({
        name: '',
    });

    const { name, bio } = artist;
    const { country, flag } = nation;
    const { nameClick, countryClick, bioClick, tagsClick } = clicked;

    // CLOSE MODAL
    const handleClick = (e) => {
        if (e.target.classList.contains('dismiss')) {
            setShowEdit(false);
            // SHOW SCROLLBAR
            document.body.style.overflow = 'auto';
            document.body.style.height = 'auto';
        }
    };

    // UPDATE DOCUMENTS
    const updateArtist = async (id) => {
        await updateDoc(doc(colRefArtist, id), {
            name: `${name ? name : data.name}`,
            bio: `${bio ? bio : data.bio}`,
            tag: tags,
            nationality: `${country ? country : data.nationality}`,
            flag: `${flag ? flag : data.flag}`,
        })
            .then(() => {
                alert('Updated!');
            })
            .catch((e) => {
                console.log(e);
            })
            .finally((e) => {
                handleClick(e);
            });
    };

    // RESET
    const reset = (e) => {
        e.preventDefault();
        setArtist({
            name: '',
            bio: '',
            tags: '',
        });
        setTags([]);
        setNation({});
    };

    return (
        <div
        className="fixed w-full h-full overflow-hidden bg-blue-100/90 z-50 dismiss top-0 left-0 scroll backdrop-blur-sm dismiss"
            onClick={(e) => handleClick(e)}
        >
            <div className="flex flex-col fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[40rem] bg-white p-16 rounded-lg drop-shadow-md max-h-[90vh] overflow-y-auto scroll">
                <h1 className="text-3xl font-medium pb-8 text-center">
                    Update Artist
                </h1>
                {/* NAME */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({ ...clicked, nameClick: !nameClick })
                        }
                    >
                        Artist
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.name.toLowerCase()}
                    </h1>
                </div>
                {nameClick && (
                    <input
                        type="text"
                        className={inputtw3}
                        value={name}
                        onChange={(e) =>
                            setArtist({ ...artist, name: e.target.value })
                        }
                        placeholder={data.name}
                    />
                )}
                {/* COUNTRY */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({
                                ...clicked,
                                countryClick: !countryClick,
                            })
                        }
                    >
                        Country
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.nationality ? data.nationality : 'Empty'}
                    </h1>
                </div>
                {countryClick && (
                    <CountrySearch nation={nation} setNation={setNation} />
                )}
                {/* BIO */}
                <label
                    className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer mr-auto"
                    onClick={() =>
                        setClicked({ ...clicked, bioClick: !bioClick })
                    }
                >
                    Bio
                </label>
                {bioClick && (
                    <textarea
                        rows="8"
                        className={inputtw3}
                        value={bio}
                        onChange={(e) =>
                            setArtist({ ...artist, bio: e.target.value })
                        }
                        placeholder={data.bio}
                    />
                )}
                {/* TAGS */}
                <div className="flex justify-between items-center w-full">
                    <label
                        className="p-2 bg-off-2/50 my-4 rounded-xl cursor-pointer"
                        onClick={() =>
                            setClicked({ ...clicked, tagsClick: !tagsClick })
                        }
                    >
                        Tags
                    </label>
                    <h1 className="flex items-center gap-2 capitalize">
                        <span className="text-xs italic">Current Values: </span>{' '}
                        {data.tag > 0 && (
                            <div className="flex flex-wrap gap-2">
                                {data.tag.map((tag, index) => (
                                    <p key={index}>{tag}</p>
                                ))}
                            </div>
                        )}
                    </h1>
                </div>
                {tagsClick && (
                    <InputTags
                        setArtist={setArtist}
                        artist={artist}
                        tags={tags}
                        setTags={setTags}
                        input={input}
                        setInput={setInput}
                    />
                )}
                <div className="flex flex-col gap-4 mt-8">
                    <button
                        className="w-full py-3 px-4 bg-navy-500 rounded-lg text-white active:scale-95 dismiss"
                        onClick={() => updateArtist(data.id)}
                    >
                        Update Artist
                    </button>
                    {/* )} */}
                    <button
                        className="w-full py-3 px-4 rounded-lg hover:bg-pink-500 bg-off-3/40 active:scale-95"
                        onClick={(e) => reset(e)}
                    >
                        Clear Form
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FormUpdateArtist;

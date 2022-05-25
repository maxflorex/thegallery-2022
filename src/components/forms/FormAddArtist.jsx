import { inputtw3 } from '../../style/styles';
import uploadIcon from '../../assets/upload.svg';
import InputTags from './InputTags';
import CountrySearch from '../users/CountrySearch';

const FormAddArtist = ({
    artist,
    setArtist,
    handleSubmit,
    reset,
    tags,
    setTags,
    input,
    setInput,
    nation,
    setNation,
    birth,
    setBirth,
}) => {
    const { name, bio, style } = artist;
    const { month, year } = birth;

    console.log(tags);

    return (
        <div className="flex-col flex justify-between gap-8 py-16">
            <input
                type="text"
                className={inputtw3}
                value={name}
                onChange={(e) => setArtist({ ...artist, name: e.target.value })}
                placeholder="Artist's Name..."
            />
            <div className="grid grid-cols-2 gap-4">
                <input
                    type="number"
                    min="1"
                    max="12"
                    value={birth.month}
                    className={inputtw3}
                    onChange={(e) =>
                        setBirth({ ...birth, month: e.target.value })
                    }
                    placeholder="Enter Month..."
                />
                <input
                    type="number"
                    min="0"
                    max="2022"
                    value={birth.year}
                    className={inputtw3}
                    onChange={(e) =>
                        setBirth({ ...birth, year: e.target.value })
                    }
                    placeholder="Enter Year..."
                />
            </div>
            <CountrySearch nation={nation} setNation={setNation} />
            <div className="grid gap-4">
                <textarea
                    rows="4"
                    className={inputtw3}
                    value={bio}
                    onChange={(e) =>
                        setArtist({ ...artist, bio: e.target.value })
                    }
                    placeholder="Enter Bio..."
                />
                <InputTags
                    setArtist={setArtist}
                    artist={artist}
                    tags={tags}
                    setTags={setTags}
                    input={input}
                    setInput={setInput}
                />
            </div>

            <div className="flex flex-col gap-2 items-center justify-between pb-4">
                <label htmlFor="files" className="">
                    <img
                        src={uploadIcon}
                        alt="Upload"
                        className="w-16 p-2 rounded-lg cursor-pointer object-cover hover:scale-105 opacity-50 hover:opacity-100 z-0"
                    />
                </label>
                <input
                    type="file"
                    id="files"
                    className="hidden"
                    placeholder="Update your name..."
                />
                <h2>Upload Extra Pictures</h2>
            </div>
            <div className="flex gap-4">
                {!tags[0] ? (
                    <button
                        className="w-full py-3 px-4 bg-off-5 rounded-lg text-white active:scale-95"
                        disabled
                    >
                        Fill out the form
                    </button>
                ) : (
                    <button
                        className="w-full py-3 px-4 bg-navy-500 rounded-lg text-white active:scale-95"
                        onClick={handleSubmit}
                    >
                        Add Artist
                    </button>
                )}
                <button
                    className="w-full rounded-lg hover:bg-pink-500 bg-off-3 active:scale-95"
                    onClick={(e) => reset(e)}
                >
                    Clear Form
                </button>
            </div>
        </div>
    );
};

export default FormAddArtist;

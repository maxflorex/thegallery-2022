import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import Slideshow from './Slideshow';

const Slider = () => {
    const { dataArtists } = useContext(AppContext);
    const [data, setData] = useState({});
    const [width, setWidth] = useState('');

    // GET CONTEXT VALUE
    const { w } = useContext(AppContext);

    useEffect(() => {
        dataArtists && setData(dataArtists);
    }, [dataArtists]);

    // CHANGE SLIDE WIDTH WITH SCREEN CHANGE
    useEffect(() => {
        if (w >= 1280) {
            setWidth(w / 5);
        } else if (w > 650) {
            setWidth(w / 3);
        } else if (w < 650) {
            setWidth(w / 1);
        }
    }, [w]);

    // PAGE STARTS HERE
    return (
        <div className="w-full rounded-xl container mx-auto">
            <Slideshow autoplay={false} navigation={true}>
                {data.length > 1 &&
                    data.map((data, index) => (
                        // SLIDE GOES HERE
                        <div key={index} className="w-full">
                            <div
                                className="p-8 xl:p-16 md:p-12 hover:bg-off-1 border-[1px] border-off-1/0 hover:border-[1px] hover:border-off-2 rounded-md"
                                style={{ width: `${width}px` }}
                            >
                                <img
                                    src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
                                    onError={(event) =>
                                        (event.target.src =
                                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                    }
                                    alt="Artwork"
                                    className="w-full h-80 md:h-64 object-cover rounded-md my-4 overflow-hidden opacity-90 hover:opacity-100"
                                />
                                <h1 className="font-semibold text-lg pb-1">
                                    {data.title}
                                </h1>
                                <div className="flex justify-between flex-wrap">
                                    <p>{data.artist_title}</p>
                                    <p className='italic'>{data.date_end}</p>
                                </div>
                            </div>
                        </div>
                        // SLIDE ENDS HERE
                    ))}
            </Slideshow>
        </div>
    );
};

export default Slider;

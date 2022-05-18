import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/appContext';
import Slideshow from './Slideshow';

const Slider = () => {
    const { dataArtists } = useContext(AppContext);
    const [data, setData] = useState({});

    useEffect(() => {
        dataArtists && setData(dataArtists);
    }, [dataArtists]);

    console.log('hey' + data);

    const slide = 'overflow-hidden relative w-full';

    return (
        <div className="bg-slate-200 md:pb-12 pb-0">
            <div className="container mx-auto rounded-xl">
                <Slideshow autoplay={true}>
                    {data.length > 1 && data.map((data, index) => (
                        // SLIDE GOES HERE
                        <div key={index} className={slide}>
                            <div className="w-screen">
                                <img
                                    src={`https://www.artic.edu/iiif/2/${data.image_id}/full/843,/0/default.jpg`}
                                    onError={(event) =>
                                        (event.target.src =
                                            'https://www.unfe.org/wp-content/uploads/2019/04/SM-placeholder.png')
                                    }
                                    alt="Artwork"
                                    className="w-full h-80 object-cover rounded-md my-4 overflow-hidden opacity-50 hover:opacity-100"
                                />
                            </div>
                        </div>
                        // SLIDE ENDS HERE
                    ))}
                    hi
                </Slideshow>
            </div>
        </div>
    );
};

export default Slider;

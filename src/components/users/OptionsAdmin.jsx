import paint from '../../assets/paint.svg';
import n from '../../assets/notes.svg';
import p from '../../assets/user.svg';

const OptionsAdmin = ({ selected, setSelected }) => {
    const handleClick = (n) => {
        setSelected(n);
    };

    return (
        <div className="xl:text-xl text-md font-semibold w-full xl:w-72 xl:h-screen p-4 flex items-center xl:fixed top-0 xl:bg-off-1/90 z-40 container mx-auto">
            <div className="xl:flex items-center xl:flex-wrap justify-center gap-4 w-full grid grid-cols-3">
                <div
                    className={`flex justify-between xl:w-80 w-auto items-center  p-4 rounded-lg active:scale-90 cursor-pointer ${
                        selected === 1 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => handleClick(1)}
                >
                    <h1>View Artwortks</h1>
                    <img src={paint} alt="Basket" className="xl:w-6 w-4" />
                </div>
                <div
                    className={`flex justify-between xl:w-80 w-auto items-center  p-4 rounded-lg active:scale-90 cursor-pointer ${
                        selected === 2 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => handleClick(2)}
                >
                    <h1>View Artists</h1>
                    <img src={p} alt="Artists" className="xl:w-6 w-4" />
                </div>
                <div
                    className={`flex justify-between xl:w-80 w-auto items-center  p-4 rounded-lg active:scale-90 cursor-pointer ${
                        selected === 3 ? 'bg-cream-500 ' : ' bg-off-1'
                    }`}
                    onClick={() => handleClick(3)}
                >
                    <h1>Inventory</h1>
                    <img src={n} alt="User" className="xl:w-6 w-4" />
                </div>
            </div>
        </div>
    );
};

export default OptionsAdmin;

import divider from '../assets/rough-line-01.svg'

export const DivFlex = ({ children, bgColor='bg-blue-500' }) => {

    return (
        <div className={`w-full min-h-96 ${bgColor} relative`}>
            <div className="container mx-auto flex flex-col justify-center items-center p-8 rounded-lg w-full">
                {children}
            </div>
        <img src={divider} alt="divider" className='absolute w-full -bottom-14'/>
        </div>
    );
};
import React from 'react'

const ArrowContainer = (props) => {
    return (
        <div className={`h-full flex items-center absolute top-0 ${props.direction === 'left' ? 'left-2' : 'right-2'} cursor-pointer z-40`}>
            <div className={`flex items-center bg-white/20 rounded-lg p-4 backdrop-blur-sm hover:bg-cream-500/30 shadow-lg`} onClick={props.click}>
                {props.children}
            </div>
        </div>
    )
}

export default ArrowContainer
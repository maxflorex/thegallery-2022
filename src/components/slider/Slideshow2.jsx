import React, { useRef, useEffect, useCallback, useContext } from 'react';
import { AppContext } from '../../context/appContext';

const Slideshow = ({
    children,
    navigation = true,
    autoplay = false,
    speed = '500',
    interval = '5000',
}) => {
    const slideshow = useRef(undefined);
    const slideshowIntervals = useRef(undefined);

    const { setW } = useContext(AppContext);

    const next = useCallback(() => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideshow.current?.children.length > 0) {
            // GET FIRST SLIDE OF SLIDER
            const firstSlide = slideshow.current.children[0];
            // SLIDESHOW TRANSITION - HANDLED BY PROPS
            slideshow.current.style.transition = `${speed}ms ease-out all`;
            // GET SLIDE UNIT SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;
            // SLIDE MOVEMENT
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;
            const transition = () => {
                // RESTART SLIDESHOW POSITION
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // SEND FIRST SLIDE AND SEND TO THE END
                slideshow.current.appendChild(firstSlide);
                slideshow.current.removeEventListener(
                    'transitionend',
                    transition
                );
            };
            // LISTERNER WHEN ANIMATION ENDS
            slideshow.current.addEventListener('transitionend', transition);
        }
    }, [speed]);

    const previous = () => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideshow.current.children.length > 0) {
            // GET LAST ELEMENT FROM SLIDESHOW
            const index = slideshow.current.children.length - 1;
            // GET LAST SLIDE
            const lastSlide = slideshow.current.children[index];
            slideshow.current.insertBefore(
                lastSlide,
                slideshow.current.firstChild
            );
            // GET SLIDE SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;

            // SLIDESHOW TRANSITION
            slideshow.current.style.transition = 'none';
            // SLIDE MOVEMENT
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `${speed}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    useEffect(() => {
        // AUTOPLAY
        if (autoplay) {
            slideshowIntervals.current = setInterval(() => {
                next();
            }, interval);

            // DELETE INTERVALS
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(slideshowIntervals.current);
            });

            // PUT BACK INTERVALS WHEN MOUSE LEAVE
            slideshow.current.addEventListener('mouseleave', () => {
                slideshowIntervals.current = setInterval(() => {
                    next();
                }, interval);
            });
        }
    }, [autoplay, interval, next]);

    // STYLES
    const arrows =
        'w-12 self-center z-30 fill-navy-500 hover:fill-blue-500 hover:scale-125 bg-off-1 p-4 rounded-full';
    const arrowsContainer =
        'h-full flex items-center justify-center gap-8 overflow-visible pointer-events-auto cursor-pointer';
    const sliderContainer = 'flex flex-nowrap w-full cursor-pointer';
    const mainContainer = 'relative overflow-hidden md:rounded-xl box w-full';

    // GET WINDOW SIZE
    useEffect(() => {
        let box = document.querySelector('.box');
        setW(box?.offsetWidth);
        const handleResize = () => {
            let box = document.querySelector('.box');
            let w = box?.offsetWidth;
            setW(w);
        };
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <div className="relative">
            <div className={mainContainer}>
                <div ref={slideshow} className={sliderContainer}>
                    {children}
                </div>
            </div>
            {navigation && (
                <div className="z-20 w-full h-full pointer-events-none flex my-auto box-border items-center justify-center gap-24">
                    <div className={arrowsContainer} onClick={previous}>
                        <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={arrows}
                        >
                            <path d="M20 .755l-14.374 11.245 14.374 11.219-.619.781-15.381-12 15.391-12 .609.755z" />
                        </svg>
                    </div>
                    <div className={arrowsContainer} onClick={next}>
                        <svg
                            clipRule="evenodd"
                            fillRule="evenodd"
                            strokeLinejoin="round"
                            strokeMiterlimit="2"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            className={arrows}
                        >
                            <path d="M4 .755l14.374 11.245-14.374 11.219.619.781 15.381-12-15.391-12-.609.755z" />
                        </svg>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Slideshow;

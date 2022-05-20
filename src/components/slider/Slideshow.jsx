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
        'absolute w-16 self-center z-30 text-navy-500 top-0 left-0 h-full fill-cream-500';
    const arrowsL =
        'absolute w-16 self-center z-30 text-navy-500 top-0 right-0 h-full fill-cream-500';
    const arrowsContainer =
        'h-full flex items-center justify-center gap-8 overflow-visible';
    const sliderContainer = 'flex flex-nowrap w-full cursor-pointer';
    const mainContainer = 'relative overflow-hidden md:rounded-xl box';

    // GET WINDOW SIZE
    useEffect(() => {
        let box = document.querySelector('.box');
        setW(box?.offsetWidth);
        const handleResize = () => {
            let box = document.querySelector('.box');
            let w = box.offsetWidth;
            setW(w);
        };
        window.addEventListener('resize', handleResize);
    }, []);

    return (
        <div className="bg-slate-200 pb-12 relative">
            <div className={mainContainer}>
                <div ref={slideshow} className={sliderContainer}>
                    {children}
                </div>
                {navigation && (
                    <div className="z-20 w-full h-full pointer-events-none flex my-auto box-border">
                        <div
                            onClick={previous}
                            className="pointer-events-auto cursor-pointer w-8 h-full text-center transition-all hover:bg-slate-900 hover:bg-opacity-40 over"
                        >
                            <div className={arrowsContainer}>
                                <svg
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={arrows}
                                >
                                    <path
                                        d="m9.474 5.209s-4.501 4.505-6.254 6.259c-.147.146-.22.338-.22.53s.073.384.22.53c1.752 1.754 6.252 6.257 6.252 6.257.145.145.336.217.527.217.191-.001.383-.074.53-.221.293-.293.294-.766.004-1.057l-4.976-4.976h14.692c.414 0 .75-.336.75-.75s-.336-.75-.75-.75h-14.692l4.978-4.979c.289-.289.287-.761-.006-1.054-.147-.147-.339-.221-.53-.221-.191-.001-.38.071-.525.215z"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </div>
                        </div>
                        <div
                            onClick={next}
                            className="pointer-events-auto cursor-pointer w-8 h-full text-center transition-all hover:bg-slate-900 hover:bg-opacity-40 right-0"
                        >
                            <div className={arrowsContainer}>
                                <svg
                                    clipRule="evenodd"
                                    fillRule="evenodd"
                                    strokeLinejoin="round"
                                    strokeMiterlimit="2"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={arrowsL}
                                >
                                    <path
                                        d="m14.523 18.787s4.501-4.505 6.255-6.26c.146-.146.219-.338.219-.53s-.073-.383-.219-.53c-1.753-1.754-6.255-6.258-6.255-6.258-.144-.145-.334-.217-.524-.217-.193 0-.385.074-.532.221-.293.292-.295.766-.004 1.056l4.978 4.978h-14.692c-.414 0-.75.336-.75.75s.336.75.75.75h14.692l-4.979 4.979c-.289.289-.286.762.006 1.054.148.148.341.222.533.222.19 0 .378-.072.522-.215z"
                                        fillRule="nonzero"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Slideshow;

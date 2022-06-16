import React, { useRef, useEffect, useCallback, useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import ArrowContainer from '../../style/ArrowContainer';

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
    const sliderContainer = 'flex flex-nowrap w-full cursor-pointer';

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
            <div className="relative">
                <div className='relative overflow-visiblei md:rounded-xl box'>
                    <div ref={slideshow} className={sliderContainer}>
                        {children}
                    </div>
                </div>
            </div>
            {navigation && (
                <div className="z-20 w-full h-full flex my-auto box-border items-center">
                    <ArrowContainer direction="left" click={previous}>
                        <FiArrowLeft className="text-navy-500" />
                    </ArrowContainer>
                    <ArrowContainer click={next}>
                        <FiArrowRight />
                    </ArrowContainer>
                </div>
            )}
        </div>
    );
};

export default Slideshow;

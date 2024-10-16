// Slideshow.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import {SlideshowRespStyle} from '../css/SlideshowRespStyle';

const images = [
    '../src/assets/pistaresp.png',
    '../src/assets/logoresp (2).png',
    '../src/assets/pessoaresp.png',
    '../src/assets/carrinhoresp.png'

];

const SlideshowResp = () => {
    const [index, setIndex] = useState(0);
    const [nextIndex, setNextIndex] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
            setIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 10000);
        return () => clearInterval(interval);
    }, []);

    const props = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    const nextProps = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        reset: true,
    });

    return (
        <SlideshowRespStyle>
            <div className="slideshow" style={{ position: 'relative', overflow: 'hidden' }}>
                <animated.div style={{ ...props, position: 'absolute', top: 0, left: 0 }}>
                    <img src={images[index]} alt={`Slide ${index + 1}`} style={{ width: '160%', height: '100vh' }} />
                </animated.div>
                <animated.div style={{ ...nextProps, position: 'absolute', top: 0, left: 0 }}>
                    <img src={images[nextIndex]} alt={`Slide ${nextIndex + 1}`} style={{ width: '160%', height: '100vh' }} />
                </animated.div>
            </div>
        </SlideshowRespStyle>
    );
};

export default SlideshowResp;
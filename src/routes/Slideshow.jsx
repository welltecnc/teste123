// Slideshow.jsx
import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import  {SlideshowStyle}  from '../css/SlideshowStyle';

const images = [
    '../src/assets/pista.png',
    '../src/assets/logofundo (2).png',
    '../src/assets/pessoa.png',
    '../src/assets/carrinho.png'
    
];

const Slideshow = () => {
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
        <SlideshowStyle>
            <div className="slideshow" style={{ position: 'relative', overflow: 'hidden' }}>
                <animated.div style={{ ...props, position: 'absolute', top: 0, left: 0 }}>
                    <img src={images[index]} alt={`Slide ${index + 1}`} style={{ width: '114%', height: '110vh' }} />
                </animated.div>
                <animated.div style={{ ...nextProps, position: 'absolute', top: 0, left: 0 }}>
                    <img src={images[nextIndex]} alt={`Slide ${nextIndex + 1}`} style={{ width: '114%', height: '110vh' }} />
                </animated.div>
            </div>
        </SlideshowStyle>
    );
};

export default Slideshow;
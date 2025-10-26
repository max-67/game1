import { useEffect, useRef } from 'react';
import './style.css';

export const PlayerPlatform = () => {
    const platformRef = useRef(null);

    useEffect(() => {
        if (platformRef.current) {
            // platformRef.current.addEventListener('click', () => console.log(123))
            window.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case 'ArrowRight': {
                        console.log('нажата')
                        break;
                    }
                    case 'ArrowLeft': {
                        break;
                    }
                }
            });

            window.addEventListener('keyup', (e) => {
                switch (e.key) {
                    case 'ArrowRight': {
                        console.log('отжата')
                        break;
                    }
                    case 'ArrowLeft': {
                        break;
                    }
                }
            });
        }
        
    }, []);

    return (
        <div className='playerplatfrom-container' ref={platformRef}>
        </div>
    )
}
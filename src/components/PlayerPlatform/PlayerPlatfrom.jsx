import { useCallback, useEffect, useRef } from 'react';
import './style.css';

export const PlayerPlatform = ({ containerRef }) => {
    const platformRef = useRef(null);
    const positionXRef = useRef(150); // храним текущее смещение по X
    const positionY = 500;

    const movePlatform = useCallback((velocity) => {
      const containerRect = containerRef.current.getBoundingClientRect();
      const platformRect = platformRef.current.getBoundingClientRect();

      const newX = positionXRef.current + velocity;

      // Проверяем границы контейнера
      if (newX + platformRect.width > containerRect.right || newX < containerRect.left) return; // если за границы, не двигаем

      // Обновляем смещение
      positionXRef.current = newX;

      // Применяем трансформ
      platformRef.current.style.transform = `translate(${newX}px, ${positionY}px)`;
    }, [containerRef]);

    useEffect(() => {
        if (platformRef.current) {
          window.addEventListener('keydown', (e) => {
            switch (e.key) {
              case 'ArrowRight': {
                  movePlatform(15);
                  break;
              }
              case 'ArrowLeft': {
                  movePlatform(-15);
                  break;
              }
              default: { break }
            }
            });

            // window.addEventListener('keyup', (e) => {
            //     switch (e.key) {
            //         case 'ArrowRight': {
            //             console.log('отжата')
            //             break;
            //         }
            //         case 'ArrowLeft': {
            //             break;
            //         }
            //     }
            // });
        }
        
    }, []);

    return (
        <div className='playerplatfrom-container' ref={platformRef}>
        </div>
    )
}
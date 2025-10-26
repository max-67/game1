import { useEffect, useRef } from 'react';
import './style.css';

export const Ball = ({ containerRef }) => {
    const ballRef = useRef(null);
    const requestRef = useRef();

    // стартовые параметры
    const position = useRef({ x: 10, y: 10 }); // начальная позиция
    const velocity = useRef({ x: 100, y: 100 }); // скорость по осям (пикс в сек)
    const timerRef = useRef();

    const updateInterval = 60;

    // Функция движения
    const ballMove = () => {
        const now = Date.now();
        const delta = updateInterval / 1000; // время в секундах


        // Ищем контейнер, в котором шар должен находиться и определяем координаты границ. 
        const container = containerRef.current;
        const ballContainer = ballRef.current;
        const ballRects = ballContainer.getClientRects()[0];

        // размеры мячика
        const ballWidth = ballRects.width;
        const ballHeight = ballRects.height;

        // размеры контейнера
        const containerWidth = container.clientWidth;
        const containerHeight = container.clientHeight;

        // Обновляем позицию
        position.current.x += velocity.current.x * delta;
        position.current.y += velocity.current.y * delta;

        // Проверка столкновений
        if (position.current.x + ballWidth > containerWidth || position.current.x < 0) {
            velocity.current.x = -velocity.current.x;
            // корректируем позицию чтобы не застрять
            position.current.x = Math.max(0, Math.min(position.current.x, containerWidth - ballWidth));
        }

        if (position.current.y + ballHeight > containerHeight || position.current.y < 0) {
            velocity.current.y = -velocity.current.y;
            // корректируем позицию чтобы не застрять
            position.current.y = Math.max(0, Math.min(position.current.y, containerHeight - ballHeight));
        }

        // Обновляем стили
        ballContainer.style.transform = `translate3d(${position.current.x}px, ${position.current.y}px, 0)`;

        timerRef.current = setTimeout(ballMove, updateInterval);
    }

    useEffect(() => {
        requestRef.current = setTimeout(() => {
            ballMove(); 
        }, updateInterval);
        return () => clearTimeout(requestRef.current);
    }, []);

    return (
        <div className='ball-container' ref={ballRef}>
        </div>
    )
}
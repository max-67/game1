import { Ball } from "../Ball/Ball.jsx";
import { useRef } from "react";
import "./style.css";
import { PlayerPlatform } from "../PlayerPlatform/PlayerPlatfrom.jsx";

export const LvlGame = () => {
    const containerRef = useRef(null);
    return (
        <div className="game-container" ref={containerRef}>
            <Ball containerRef={containerRef}/>
            <PlayerPlatform containerRef={containerRef}/>
        </div>
    )
}
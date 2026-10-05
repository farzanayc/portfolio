import React, { useState, useRef } from "react";
import "./VideoCarousel.css";

export default function VideoCarousel({ items }) {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);

    const goTo = (index) => {
        setIsPlaying(false);
        setCurrent(index);
    };

    const handlePrev = () => goTo(current === 0 ? items.length - 1 : current - 1);
    const handleNext = () => goTo(current === items.length - 1 ? 0 : current + 1);

    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    const item = items[current];

    return (
        <div className="video-carousel">
            <h3 className="video-carousel-heading">{item.heading}</h3>

            <div className="video-carousel-stage">
                <button
                    className="video-carousel-nav video-carousel-prev"
                    onClick={handlePrev}
                    aria-label="Previous video"
                >
                    ‹
                </button>

                <div className="media-video-wrapper">
                    <video
                        key={item.src}
                        ref={videoRef}
                        className="media-block-content"
                        src={item.src}
                        controls={isPlaying}
                        playsInline
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                    />
                    {!isPlaying && (
                        <button
                            type="button"
                            className="media-play-overlay"
                            onClick={handlePlayClick}
                            aria-label={`Play ${item.heading}`}
                        >
                            <span className="media-play-icon">▶</span>
                        </button>
                    )}
                </div>

                <button
                    className="video-carousel-nav video-carousel-next"
                    onClick={handleNext}
                    aria-label="Next video"
                >
                    ›
                </button>
            </div>

            {item.caption && <p className="video-carousel-caption">{item.caption}</p>}

            <div className="video-carousel-progress">
                {items.map((_, i) => (
                    <button
                        key={i}
                        className={`video-carousel-dot ${i === current ? "active" : ""}`}
                        onClick={() => goTo(i)}
                        aria-label={`Go to video ${i + 1} of ${items.length}`}
                    />
                ))}
            </div>

            <p className="video-carousel-counter">
                {current + 1} / {items.length}
            </p>
        </div>
    );
}
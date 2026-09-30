import React, { useRef, useState } from "react";
import Lightbox from "./Lightbox";
import "./MediaBlock.css";

export default function MediaBlock({ type, src, caption, alt, className, clickToPlay }) {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [lightboxOpen, setLightboxOpen] = useState(false);

    const handleOverlayClick = () => {
        if (videoRef.current) {
            videoRef.current.play();
        }
    };

    return (
        <figure className={`media-block ${className || ""}`}>
            {type === "video" ? (
                clickToPlay ? (
                    <div className="media-video-wrapper">
                        <video
                            ref={videoRef}
                            className="media-block-content"
                            src={src}
                            controls={isPlaying}
                            playsInline
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                        />
                        {!isPlaying && (
                            <button
                                type="button"
                                className="media-play-overlay"
                                onClick={handleOverlayClick}
                                aria-label={`Play ${caption || "video"}`}
                            >
                                <span className="media-play-icon">▶</span>
                            </button>
                        )}
                    </div>
                ) : (
                    <video
                        className="media-block-content"
                        src={src}
                        autoPlay
                        loop
                        muted
                        playsInline
                    />
                )
            ) : (
                <img
                    src={src}
                    alt={alt || caption || ""}
                    className="media-block-content media-block-zoomable"
                    loading="lazy"
                    onClick={() => setLightboxOpen(true)}
                />
            )}
            {caption && <figcaption className="media-block-caption">{caption}</figcaption>}
            {lightboxOpen && (
                <Lightbox
                    src={src}
                    alt={alt || caption || ""}
                    onClose={() => setLightboxOpen(false)}
                />
            )}
        </figure>
    );
}
import React from "react";
import "./MediaBlock.css";

export default function MediaBlock({ type, src, caption, alt }) {
    return (
        <figure className="media-block">
            {type === "video" ? (
                <video
                    className="media-block-content"
                    src={src}
                    autoPlay
                    loop
                    muted
                    playsInline
                />
            ) : (
                <img
                    className="media-block-content"
                    src={src}
                    alt={alt || caption || ""}
                    loading="lazy"
                />
            )}
            {caption && <figcaption className="media-block-caption">{caption}</figcaption>}
        </figure>
    );
}
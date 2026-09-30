import React, { useEffect } from "react";
import "./Lightbox.css";

export default function Lightbox({ src, alt, onClose }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, [onClose]);

    return (
        <div className="lightbox-overlay" onClick={onClose}>
            <button className="lightbox-close" onClick={onClose} aria-label="Close">
                ×
            </button>
            <img
                src={src}
                alt={alt}
                className="lightbox-image"
                onClick={(e) => e.stopPropagation()}
            />
        </div>
    );
}
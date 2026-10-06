import React from "react";

export default function FormattedText({ text }) {
    if (!text) return null;

    const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*|\[.*?\]\(.*?\))/g);
    return (
        <>
            {parts.map((part, i) => {
                const linkMatch = part.match(/^\[(.*?)\]\((.*?)\)$/);
                if (linkMatch) {
                    return (
                        <a key={i} href={linkMatch[2]} target="_blank" rel="noreferrer">
                            {linkMatch[1]}
                        </a>
                    );
                }
                if (part.startsWith("***") && part.endsWith("***")) {
                    return (
                        <strong key={i}>
                            <em>{part.slice(3, -3)}</em>
                        </strong>
                    );
                }
                if (part.startsWith("**") && part.endsWith("**")) {
                    return <strong key={i}>{part.slice(2, -2)}</strong>;
                }
                if (part.startsWith("*") && part.endsWith("*")) {
                    return <em key={i}>{part.slice(1, -1)}</em>;
                }
                return part;
            })}
        </>
    );
}
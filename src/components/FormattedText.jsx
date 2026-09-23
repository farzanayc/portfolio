import React from "react";

// Supports **bold**, *italic*, and ***bold italic*** inside a string.
// Usage: <FormattedText text="This is **bold**, this is *italic*, and this is ***both***." />
export default function FormattedText({ text }) {
    const parts = text.split(/(\*\*\*.*?\*\*\*|\*\*.*?\*\*|\*.*?\*)/g);
    return (
        <>
            {parts.map((part, i) => {
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
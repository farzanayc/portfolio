import React, { useState } from "react";
import "./PasswordGate.css";

export default function PasswordGate({ password, hint, onUnlock }) {
    const [input, setInput] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (input === password) {
            setError(false);
            onUnlock();
        } else {
            setError(true);
        }
    };

    return (
        <div className="password-gate">
            <span className="eyebrow">Protected case study</span>
            <h2>This one needs a password</h2>
            {hint && <p className="password-gate-hint">Hint: {hint}</p>}
            <form onSubmit={handleSubmit} className="password-gate-form">
                <input
                    type="password"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter password"
                    autoFocus
                />
                <button type="submit" className="btn btn-primary">
                    Unlock
                </button>
            </form>
            {error && <p className="password-gate-error">That's not it — try again.</p>}
        </div>
    );
}
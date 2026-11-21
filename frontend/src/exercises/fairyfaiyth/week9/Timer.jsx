import { useState, useEffect } from "react";

function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [running, setRunning] = useState(false);

    useEffect(() => {
        if (!running) {
            return undefined;
        }
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, [running]);

    const reset = () => {
        setRunning(false);
        setSeconds(0);
    };

    return (
        <div>
            <p>Elapsed: {seconds}s</p>
            <button onClick={() => setRunning(true)} disabled={running}>Start</button>
            <button onClick={() => setRunning(false)} disabled={!running}>Stop</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}

export default Timer;

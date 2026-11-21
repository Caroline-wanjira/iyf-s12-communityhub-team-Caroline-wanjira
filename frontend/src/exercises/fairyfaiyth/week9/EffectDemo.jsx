import { useState, useEffect } from "react";

function EffectDemo() {
    const [count, setCount] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);

    useEffect(() => {
        const interval = setInterval(() => setSeconds((s) => s + 1), 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <p>Count: {count} | Seconds on page: {seconds}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default EffectDemo;

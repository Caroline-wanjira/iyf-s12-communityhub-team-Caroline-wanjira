import { useState, useEffect } from 'react';
import usePageTitle from '../../hooks/usePageTitle';
import { Button } from '../../components/shared';
import styles from '../Pages.module.css';

// Turns 75 seconds into "01:15"
function formatTime(totalSeconds) {
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0');
  const seconds = String(totalSeconds % 60).padStart(2, '0');
  return `${minutes}:${seconds}`;
}

function TimerChallenge() {
  usePageTitle('Timer');
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);

  // This effect runs every time `running` changes.
  useEffect(() => {
    if (!running) return; // nothing to do while stopped

    const interval = setInterval(() => {
      // Use the function form so we always add to the latest value.
      setSeconds((s) => s + 1);
    }, 1000);

    // Cleanup: stop the interval when we pause or leave the page.
    return () => clearInterval(interval);
  }, [running]);

  const reset = () => {
    setRunning(false);
    setSeconds(0);
  };

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>Timer</h1>
        <p className={styles.lead}>Counts the seconds that have passed.</p>
      </div>

      <p className={styles.timerDisplay} role="timer" aria-label="Elapsed time">
        {formatTime(seconds)}
      </p>

      <div className={styles.buttonRow}>
        <Button onClick={() => setRunning(true)} disabled={running}>Start</Button>
        <Button variant="secondary" onClick={() => setRunning(false)} disabled={!running}>Stop</Button>
        <Button variant="outline" onClick={reset}>Reset</Button>
      </div>
    </>
  );
}

export default TimerChallenge;

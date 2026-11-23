import { useState, useEffect } from 'react';

// Works like useState, but the value is also saved in the browser's
// localStorage, so it is still there after a page refresh.
function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    try {
      const saved = localStorage.getItem(key);
      return saved !== null ? JSON.parse(saved) : initialValue;
    } catch {
      // Bad JSON or storage blocked: fall back to the initial value.
      return initialValue;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch {
      // Ignore storage errors (e.g. private mode or full storage).
    }
  }, [key, value]);

  return [value, setValue];
}

export default useLocalStorage;

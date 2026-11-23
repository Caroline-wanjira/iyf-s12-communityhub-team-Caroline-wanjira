import { useState, useEffect } from 'react';

// Returns `value`, but only after it has stopped changing for `delay` ms.
// Used by the search challenge so we don't filter on every single keystroke.
function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    // Cleanup: if the value changes again, cancel the old timer.
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

export default useDebounce;

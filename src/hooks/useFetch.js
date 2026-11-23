import { useState, useEffect, useCallback } from 'react';

// Custom hook: fetch JSON from a URL and track loading + error states.
// Pass `null` as the url to skip fetching.
// Returns { data, loading, error, refetch }.
function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(Boolean(url));
  const [error, setError] = useState(null);
  // Changing this number re-runs the effect, which is how "Try again" works.
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    if (!url) {
      setData(null);
      setLoading(false);
      return;
    }

    // If the component unmounts (or the url changes) before the response
    // arrives, we ignore the old response so it can't overwrite newer data.
    let ignore = false;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Request failed (status ${response.status})`);
        }
        const json = await response.json();
        if (!ignore) setData(json);
      } catch (err) {
        if (!ignore) setError(err.message);
      } finally {
        if (!ignore) setLoading(false);
      }
    }

    fetchData();

    // Cleanup function
    return () => {
      ignore = true;
    };
  }, [url, attempt]);

  const refetch = useCallback(() => setAttempt((n) => n + 1), []);

  return { data, loading, error, refetch };
}

export default useFetch;

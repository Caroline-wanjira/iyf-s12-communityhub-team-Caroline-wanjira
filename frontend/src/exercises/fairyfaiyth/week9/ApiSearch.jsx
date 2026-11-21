import { useState } from "react";
import useFetch from "../../hooks/useFetch.js";
import useDebounce from "../../hooks/useDebounce.js";

const USERS_URL = "https://jsonplaceholder.typicode.com/users";

function ApiSearch() {
    const [query, setQuery] = useState("");
    const debouncedQuery = useDebounce(query);
    const { data: users, loading, error } = useFetch(USERS_URL);

    const term = debouncedQuery.trim().toLowerCase();
    const results = (users || []).filter((user) => user.name.toLowerCase().includes(term));

    return (
        <div>
            <label htmlFor="user-search">Search users</label>
            <input id="user-search" value={query} onChange={(e) => setQuery(e.target.value)} />
            {loading && <p>Loading users...</p>}
            {error && <p role="alert">Error: {error}</p>}
            {!loading && !error && results.length === 0 && <p>No users found.</p>}
            <ul>
                {results.map((user) => (
                    <li key={user.id}>{user.name} ({user.email})</li>
                ))}
            </ul>
        </div>
    );
}

export default ApiSearch;

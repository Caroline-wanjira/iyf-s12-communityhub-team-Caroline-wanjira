import { useState } from 'react';
import useFetch from '../../hooks/useFetch';
import useDebounce from '../../hooks/useDebounce';
import usePageTitle from '../../hooks/usePageTitle';
import { API_URL } from '../../context/PostsContext';
import { Input, Avatar, LoadingSpinner, ErrorMessage } from '../../components/shared';
import styles from '../Pages.module.css';

function ApiSearch() {
  usePageTitle('User search');
  const { data: users, loading, error, refetch } = useFetch(`${API_URL}/users`);
  const [query, setQuery] = useState('');

  // `debouncedQuery` only updates 400ms after the person stops typing.
  const debouncedQuery = useDebounce(query, 400);
  const isWaiting = query !== debouncedQuery; // still waiting for them to finish typing

  const search = debouncedQuery.trim().toLowerCase();
  const results = (users || []).filter(
    (user) =>
      user.name.toLowerCase().includes(search) ||
      user.email.toLowerCase().includes(search) ||
      user.username.toLowerCase().includes(search)
  );

  return (
    <>
      <div className={styles.pageHeader}>
        <h1>User search</h1>
        <p className={styles.lead}>Type a name, username or email. Results update when you pause typing.</p>
      </div>

      <div className={styles.searchRow}>
        <Input label="Search users" name="user-search" type="search" value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>

      {loading && <LoadingSpinner text="Loading users..." />}
      {error && <ErrorMessage message={`Could not load users. ${error}`} onRetry={refetch} />}

      {users && (
        <>
          <p className={styles.resultCount} role="status">
            {isWaiting ? 'Searching...' : `${results.length} user${results.length === 1 ? '' : 's'} found`}
          </p>
          <ul className={styles.userList}>
            {results.map((user) => (
              <li key={user.id} className={styles.userItem}>
                <Avatar name={user.name} />
                <div>
                  <strong>{user.name}</strong>
                  <p>{user.email}</p>
                </div>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
}

export default ApiSearch;

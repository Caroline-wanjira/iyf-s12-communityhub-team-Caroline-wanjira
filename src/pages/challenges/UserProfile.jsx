import { useParams, useNavigate } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import usePageTitle from '../../hooks/usePageTitle';
import { API_URL } from '../../context/PostsContext';
import { Avatar, Tabs, LoadingSpinner, ErrorMessage } from '../../components/shared';
import styles from '../Pages.module.css';

// A small helper: shows loading / error / content for one request.
function Section({ request, label, children }) {
  if (request.loading) return <LoadingSpinner size="small" text={`Loading ${label}...`} />;
  if (request.error) return <ErrorMessage message={`Could not load ${label}. ${request.error}`} onRetry={request.refetch} />;
  if (!request.data) return null;
  return children(request.data);
}

function UserProfile() {
  const { userId } = useParams();
  const navigate = useNavigate();

  // Three separate requests: the user, their posts and their todos.
  const userRequest = useFetch(`${API_URL}/users/${userId}`);
  const postsRequest = useFetch(`${API_URL}/users/${userId}/posts`);
  const todosRequest = useFetch(`${API_URL}/users/${userId}/todos`);

  usePageTitle(userRequest.data ? userRequest.data.name : 'User profile');

  if (userRequest.loading) return <LoadingSpinner text="Loading profile..." />;
  if (userRequest.error) return <ErrorMessage message={`Could not load this profile. ${userRequest.error}`} onRetry={userRequest.refetch} />;

  const user = userRequest.data;

  const tabs = [
    {
      id: 'info',
      label: 'Info',
      content: (
        <dl className={styles.infoList}>
          <dt>Email</dt><dd>{user.email}</dd>
          <dt>Phone</dt><dd>{user.phone}</dd>
          <dt>Website</dt><dd>{user.website}</dd>
          <dt>Company</dt><dd>{user.company.name}</dd>
          <dt>City</dt><dd>{user.address.city}</dd>
        </dl>
      ),
    },
    {
      id: 'posts',
      label: 'Posts',
      content: (
        <Section request={postsRequest} label="posts">
          {(posts) => (
            <ul>
              {posts.map((post) => (
                <li key={post.id}>{post.title}</li>
              ))}
            </ul>
          )}
        </Section>
      ),
    },
    {
      id: 'todos',
      label: 'Todos',
      content: (
        <Section request={todosRequest} label="todos">
          {(todos) => (
            <ul className={styles.todoList}>
              {todos.map((todo) => (
                <li key={todo.id} className={todo.completed ? styles.done : ''}>
                  <span aria-hidden="true">{todo.completed ? '✓' : '○'}</span>{' '}
                  {todo.title}
                  <span className="visually-hidden">{todo.completed ? ' (done)' : ' (not done)'}</span>
                </li>
              ))}
            </ul>
          )}
        </Section>
      ),
    },
  ];

  return (
    <>
      <div className={styles.userPicker}>
        <label htmlFor="user-picker" style={{ fontWeight: 600, display: 'block', marginBottom: '0.25rem' }}>
          View another user
        </label>
        <select
          id="user-picker"
          value={userId}
          onChange={(e) => navigate(`/challenges/profile/${e.target.value}`)}
          style={{ font: 'inherit', padding: '0.5rem', width: '100%', border: '2px solid #8a9b97', borderRadius: '6px' }}
        >
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((id) => (
            <option key={id} value={id}>User {id}</option>
          ))}
        </select>
      </div>

      <div className={styles.profileHead}>
        <Avatar name={user.name} size="large" />
        <div>
          <h1>{user.name}</h1>
          <p>@{user.username}</p>
        </div>
      </div>

      <Tabs tabs={tabs} />
    </>
  );
}

export default UserProfile;

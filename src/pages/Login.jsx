import { useNavigate, useLocation } from 'react-router-dom';
import useForm from '../hooks/useForm';
import usePageTitle from '../hooks/usePageTitle';
import { useAuth } from '../context/AuthContext';
import { Button, Input } from '../components/shared';
import styles from './Pages.module.css';

function validate(values) {
  const errors = {};
  if (values.username.trim().length < 2) errors.username = 'Enter a username (at least 2 characters).';
  return errors;
}

// Fake login: any username works. We just remember it.
function Login() {
  usePageTitle('Log in');
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // If we were redirected here by ProtectedRoute, go back to that page afterwards.
  const from = location.state?.from?.pathname || '/';

  const { values, errors, touched, handleChange, handleBlur, validateAll } = useForm({ username: '' }, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateAll()) return;
    login(values.username.trim());
    navigate(from, { replace: true });
  };

  return (
    <div className={styles.narrow}>
      <div className={styles.pageHeader}>
        <h1>Log in</h1>
        <p className={styles.lead}>This is a practice login. Any username works and no password is needed.</p>
      </div>
      <form onSubmit={handleSubmit} noValidate>
        <Input
          label="Username"
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.username ? errors.username : undefined}
          autoComplete="username"
          required
        />
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
}

export default Login;

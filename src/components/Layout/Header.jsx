import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import useToggle from '../../hooks/useToggle';
import { Button } from '../shared';
import styles from './Layout.module.css';

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/posts', label: 'Posts', end: true },
  { to: '/create-post', label: 'New post' },
  { to: '/about', label: 'About' },
  { to: '/challenges', label: 'Challenges' },
];

function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  // useToggle controls the mobile menu (open / closed).
  const [menuOpen, { toggle: toggleMenu, setFalse: closeMenu }] = useToggle(false);

  const handleLogout = () => {
    logout();
    navigate('/'); // send the person back home
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerInner}>
        <Link to="/" className={styles.logo}>CommunityHub</Link>

        <button
          type="button"
          className={styles.menuButton}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="main-nav"
        >
          {menuOpen ? 'Close menu' : 'Menu'}
        </button>

        <nav id="main-nav" aria-label="Main" className={`${styles.nav} ${menuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            {links.map((link) => (
              <li key={link.to}>
                {/* NavLink adds the "active" class for the current page */}
                <NavLink
                  to={link.to}
                  end={link.end}
                  onClick={closeMenu}
                  className={({ isActive }) => `${styles.navLink} ${isActive ? styles.active : ''}`}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className={styles.userArea}>
          {user ? (
            <>
              <span>Signed in as <strong>{user.name}</strong></span>
              <Button variant="secondary" size="small" onClick={handleLogout}>Log out</Button>
            </>
          ) : (
            <Button to="/login" variant="secondary" size="small">Log in</Button>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;

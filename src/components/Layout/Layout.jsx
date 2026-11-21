import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';
import styles from './Layout.module.css';

function Layout() {
  const { pathname } = useLocation();

  // Scroll to the top whenever the page (route) changes.
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className={styles.shell}>
      <a href="#main" className="skip-link">Skip to main content</a>
      <Header />
      <div className={styles.body}>
        {/* Child routes render here */}
        <main id="main" className={styles.main}>
          <Outlet />
        </main>
        <Sidebar />
      </div>
      <Footer />
    </div>
  );
}

export default Layout;

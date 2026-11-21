import { Outlet, NavLink } from "react-router-dom";

function Layout() {
    return (
        <div>
            <header>
                <nav style={{ display: "flex", gap: 12 }}>
                    <NavLink to="/">Home</NavLink>
                    <NavLink to="/posts">Posts</NavLink>
                    <NavLink to="/about">About</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
            <footer>
                <p>&copy; 2026 CommunityHub</p>
            </footer>
        </div>
    );
}

export default Layout;

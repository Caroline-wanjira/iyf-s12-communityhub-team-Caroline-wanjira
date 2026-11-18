export default function PageLayout({ children, sidebar }) {
    return (
        <div className="page-layout" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {/* Header Component */}
            <header style={{ padding: "1rem", background: "#333", color: "#fff" }}>
                <h1>My App Header</h1>
            </header>

            {/* Main Content Area with Optional Sidebar */}
            <div style={{ display: "flex", flex: 1 }}>
                {sidebar && (
                    <aside style={{ width: "250px", padding: "1rem", background: "#f4f4f4" }}>
                        {sidebar}
                    </aside>
                )}
                <main style={{ flex: 1, padding: "1rem" }}>
                    {children}
                </main>
            </div>

            {/* Footer Component */}
            <footer style={{ padding: "1rem", background: "#333", color: "#fff", textAlign: "center" }}>
                <p>&copy; 2026 CommunityHub. All rights reserved.</p>
            </footer>
        </div>
    );
}
import Header from "../../components/Header.jsx";
import Footer from "../../components/Footer.jsx";

function PageLayout({ children, sidebar }) {
    return (
        <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            <Header />
            <div style={{ display: "flex", flexWrap: "wrap", flex: 1 }}>
                <main style={{ flex: "3 1 300px", padding: 12 }}>{children}</main>
                {sidebar && <aside style={{ flex: "1 1 200px", padding: 12 }}>{sidebar}</aside>}
            </div>
            <Footer />
        </div>
    );
}

export default PageLayout;

export default function Card({ title, children, variant = "primary" }) {
    // Dynamic styling based on variant prop
    const getVariantStyles = () => {
        switch (variant) {
            case "secondary":
                return { backgroundColor: "#f0f0f0", color: "#333", border: "none" };
            case "outlined":
                return { backgroundColor: "transparent", border: "2px solid #007bff", color: "#007bff" };
            case "primary":
            default:
                return { backgroundColor: "#007bff", color: "#fff", border: "none" };
        }
    };

    return (
        <div style={{ padding: "16px", borderRadius: "8px", margin: "10px 0", ...getVariantStyles() }}>
            {title && <h3>{title}</h3>}
            <div className="card-content">
                {children}
            </div>
        </div>
    );
}
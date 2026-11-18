const VARIANT_STYLES = {
    primary: { background: "#4f6bff", color: "white" },
    secondary: { background: "#e5e7eb", color: "#111" },
    outlined: { background: "transparent", border: "2px solid #4f6bff" },
};

function VariantCard({ title, children, variant = "primary" }) {
    return (
        <div style={{ padding: 12, margin: 8, borderRadius: 8, ...VARIANT_STYLES[variant] }}>
            <h3>{title}</h3>
            {children}
        </div>
    );
}

export default VariantCard;

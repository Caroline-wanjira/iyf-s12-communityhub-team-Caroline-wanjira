export default function Button({ 
    text = "Button", 
    onClick, 
    variant = "primary", 
    disabled = false, 
    size = "medium", 
    loading = false 
}) {
    // Size padding mapping
    const sizeStyles = {
        small: "6px 12px",
        medium: "10px 16px",
        large: "14px 24px"
    };

    // Variant colors mapping
    const variantStyles = {
        primary: { background: "#007bff", color: "#fff" },
        secondary: { background: "#6c757d", color: "#fff" },
        danger: { background: "#dc3545", color: "#fff" }
    };

    return (
        <button 
            onClick={onClick} 
            disabled={disabled || loading}
            style={{
                padding: sizeStyles[size] || sizeStyles.medium,
                backgroundColor: variantStyles[variant]?.background || variantStyles.primary.background,
                color: variantStyles[variant]?.color || "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: disabled || loading ? "not-allowed" : "pointer",
                opacity: disabled || loading ? 0.6 : 1
            }}
        >
            {loading ? "Loading..." : text}
        </button>
    );
}
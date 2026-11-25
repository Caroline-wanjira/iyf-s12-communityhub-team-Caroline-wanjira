import styles from "./CssModuleButton.module.css";

function CssModuleButton({ variant = "primary", children, ...props }) {
  return (
    <button className={`${styles.button} ${styles[variant]}`} {...props}>
      {children}
    </button>
  );
}

export default CssModuleButton;
import styles from './Input.module.css';

// Text input (or textarea when `multiline` is true) with a label and error text.
// The label is connected to the field using htmlFor/id, which screen readers need.
function Input({
  label,
  error,
  type = 'text',
  multiline = false,
  rows = 5,
  name,
  value,
  onChange,
  onBlur,
  placeholder,
  required = false,
  ...rest
}) {
  const errorId = `${name}-error`;

  const fieldProps = {
    id: name,
    name,
    value,
    onChange,
    onBlur,
    placeholder,
    required,
    // Tells screen readers the field is invalid and where the message is.
    'aria-invalid': error ? 'true' : 'false',
    'aria-describedby': error ? errorId : undefined,
    className: `${styles.field} ${error ? styles.fieldError : ''}`,
    ...rest,
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <label htmlFor={name} className={styles.label}>
          {label}
          {required && <span className={styles.required} aria-hidden="true"> *</span>}
        </label>
      )}
      {multiline ? <textarea rows={rows} {...fieldProps} /> : <input type={type} {...fieldProps} />}
      {error && (
        <p id={errorId} className={styles.error} role="alert">
          {error}
        </p>
      )}
    </div>
  );
}

export default Input;

import useForm from "../../hooks/useForm";
import styles from "./ContactForm.module.css";

const EMPTY_FORM = {
  name: "",
  email: "",
  message: "",
};

function ContactForm() {
  const submitForm = (values) => {
    console.log("Form data:", values);
  };

  const {
    values,
    handleChange,
    handleSubmit,
    resetForm,
  } = useForm(EMPTY_FORM, submitForm);

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <input
        className={styles.input}
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Your name"
      />

      <input
        className={styles.input}
        name="email"
        type="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Your email"
      />

      <textarea
        className={styles.textarea}
        name="message"
        value={values.message}
        onChange={handleChange}
        placeholder="Your message"
      />

      <button className={styles.button} type="submit">
        Send
      </button>

      <button className={styles.button} type="button" onClick={resetForm}>
        Reset
      </button>
    </form>
  );
}

export default ContactForm;

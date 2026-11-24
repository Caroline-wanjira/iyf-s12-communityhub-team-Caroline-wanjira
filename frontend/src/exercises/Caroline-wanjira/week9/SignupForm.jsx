import useForm from "./hooks/useForm";

function validate(values) {
  const errors = {};
  if (!values.name) errors.name = "Name is required";
  if (!values.email.includes("@")) errors.email = "Enter a valid email";
  return errors;
}

function SignupForm() {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, reset } =
    useForm({ name: "", email: "" }, validate);

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        name="name"
        value={values.name}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Name"
      />
      {touched.name && errors.name && <p>{errors.name}</p>}

      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder="Email"
      />
      {touched.email && errors.email && <p>{errors.email}</p>}

      <button type="submit">Sign up</button>
    </form>
  );
}

export default SignupForm;
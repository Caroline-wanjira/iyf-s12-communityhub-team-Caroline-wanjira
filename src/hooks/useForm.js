import { useState } from 'react';

// Handles form values, validation errors and "touched" fields.
// `validate(values)` must return an object like { email: 'Invalid email' }.
function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    const next = { ...values, [name]: value };
    setValues(next);
    // Once a field was visited, re-check as the person fixes it.
    if (validate && touched[name]) setErrors(validate(next));
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
    if (validate) setErrors(validate(values));
  };

  // Call this on submit. Returns true when everything is valid.
  const validateAll = () => {
    const found = validate ? validate(values) : {};
    setErrors(found);
    const allTouched = {};
    Object.keys(values).forEach((key) => (allTouched[key] = true));
    setTouched(allTouched);
    return Object.keys(found).length === 0;
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
  };

  return { values, errors, touched, handleChange, handleBlur, validateAll, reset, setValues };
}

export default useForm;

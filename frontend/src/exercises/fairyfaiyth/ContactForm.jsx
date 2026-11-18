import { useState } from "react";

const EMPTY_FORM = { name: "", email: "", message: "" };

function ContactForm() {
    const [formData, setFormData] = useState(EMPTY_FORM);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Form data:", formData);
        setFormData(EMPTY_FORM);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="name" value={formData.name} onChange={handleChange} placeholder="Your name" />
            <input name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your message" />
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;

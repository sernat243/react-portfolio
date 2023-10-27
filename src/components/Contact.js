import { useState } from "react";

const Contact = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [messageError, setMessageError] =useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);

        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    const handleBlur = () => {
        if (formData.message.trim() === '') {
          setMessageError('Message is required');
        } else {
          setMessageError('');
        }
      };
    

    return (
      <section id="contact">
        <h2>Contact Me</h2>
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>
            <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    onBlur={handleBlur}
                    required
                />
                {messageError && <p className="error-message">{messageError}</p>}
            </div>
            <button type="submit">Submit</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
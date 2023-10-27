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
        <section id="contact" className="py-5">
            <div className="container">
            <h2 className="mb-4">Contact Me</h2>
                <div className="row">
                <div className="col-md-6">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email Address</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="form-control"
                        required
                    />
                    </div>
                    <div className="mb-3">
                    <label htmlFor="message" className="form-label">Message</label>
                    <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        className="form-control"
                        required
                    />
                    {messageError && <p className="error-message">{messageError}</p>}
                    </div>
                    <button type="submit" className="btn custom-button">Submit</button>
                </form>
                </div>
            </div>
        </div>
    </section>
    );
};
  
  export default Contact;
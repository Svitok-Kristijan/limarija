import React, {useState} from "react";
import "./contact.scss";

function Contact() {
  const [formData, setFormData] = useState({
    imePrezime: "",
    email: "",
    poruka: "",
  });

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevData) => ({...prevData, [name]: value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace 'YOUR_SERVER_ENDPOINT' with the actual URL of your server-side script to handle the form submission and send the email.
    fetch("YOUR_SERVER_ENDPOINT", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Email sent successfully!");
          setFormData({
            imePrezime: "",
            email: "",
            poruka: "",
          });
        } else {
          alert("Failed to send the email. Please try again later.");
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("An error occurred while sending the email.");
      });
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="imePrezime">Ime Prezime:</label>
        <input
          type="text"
          id="imePrezime"
          name="imePrezime"
          placeholder="Ime Prezime"
          value={formData.imePrezime}
          onChange={handleChange}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label htmlFor="poruka">Vaša poruka:</label>
        <textarea
          id="poruka"
          name="poruka"
          placeholder="Vaša poruka"
          rows="5"
          value={formData.poruka}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Pošalji</button>
      </form>
    </div>
  );
}

export default Contact;

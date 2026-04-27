import { useState } from "react";
import "../styles/Contact.css";

const endPoint = "https://formspree.io/f/xeevwypo";

export default function Contact() {
  const [showModal, setShowModal] = useState(false);
  const [modalMsg, setModalMsg] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const response = await fetch(endPoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      setModalMsg(
        "✅ Message Sent! Thanks for reaching out. I’ll get back to you soon.",
      );
      setShowModal(true);
      form.reset();
    } else {
      setModalMsg("❌ Oops! Something went wrong. Please try again later.");
      setShowModal(true);
      form.reset();
    }
  };

  return (
    <section id="Contact">
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" required />
        <input name="email" type="email" placeholder="Email" required />
        <textarea name="message" placeholder="Message" required />

        <button type="submit">Send</button>
      </form>

      {/* MODAL */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            <h2>{modalMsg.includes("✅") ? "✅ Message Sent!" : "❌ Oops!"}</h2>
            <p>{modalMsg}</p>

            <button onClick={() => setShowModal(false)}>Close</button>
          </div>
        </div>
      )}
      <span className="brief">@Olaniyan Ridwanlah 2026</span>
    </section>
  );
}

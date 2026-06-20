import "../styles/Contact.css";

export default function Contact() {
  const endPoint = "https://formspree.io/f/xeevwypo";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const data = {
      name: form.Name.value,
      email: form.Email.value,
      message: form.Message.value,
    };

    console.log(data);
  };

  return (
    <section id="Contact">
      <form action={endPoint} method="POST" onSubmit={handleSubmit}>
        <input type="text" name="Name" placeholder="Name" required />
        <input type="email" name="Email" placeholder="Email" required />
        <input type="text" name="Message" placeholder="Message" required />
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

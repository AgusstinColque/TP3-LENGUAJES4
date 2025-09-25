import { useRef, useState } from "react";
import emailjs from "emailjs-com";

export default function Contacto() {
  const form = useRef();
  const [mensaje, setMensaje] = useState("");

  const enviarCorreo = (e) => {
    e.preventDefault();
    setMensaje("");

    emailjs
      .sendForm(
        "service_yto9rcb",     // 👈 tu Service ID
        "template_9hhfw76",     // 👈 tu Template ID de EmailJS
        form.current,
        "n6l2cUd_6kOFNvOED"      // 👈 tu Public Key de EmailJS
      )
      .then(
        () => {
          setMensaje("✅ Correo enviado con éxito");
          form.current.reset();
        },
        (error) => {
          setMensaje("❌ Error al enviar: " + error.text);
        }
      );
  };

  return (
    <section style={{ textAlign: "center" }}>
      <h2>Contacto</h2>
      <form ref={form} onSubmit={enviarCorreo} style={{ display: "flex", flexDirection: "column", gap: "10px", maxWidth: "400px", margin: "auto" }}>
        <input type="text" name="user_name" placeholder="Tu nombre" required />
        <input type="email" name="user_email" placeholder="Tu correo" required />
        <textarea name="message" placeholder="Escribe tu mensaje" rows="5" required></textarea>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && <p>{mensaje}</p>}
    </section>
  );
}

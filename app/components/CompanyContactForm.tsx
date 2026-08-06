"use client";

import { FormEvent, useState } from "react";

type CompanyContactFormProps = {
  variant: "compact" | "full";
};

type SubmitState = "idle" | "sending" | "success" | "error" | "preview";

const serviceOptions = [
  ["outsourcing", "Tercerización de personal"],
  ["recruitment", "Reclutamiento y selección"],
  ["temporary", "Personal temporal"],
  ["dedicated", "Equipos dedicados"],
  ["advice", "Necesito asesoramiento"],
];

function isLocalPreview() {
  return !["staff.com.py", "www.staff.com.py"].includes(
    window.location.hostname,
  );
}

export function CompanyContactForm({ variant }: CompanyContactFormProps) {
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    setMessage("");

    if (isLocalPreview()) {
      setSubmitState("preview");
      setMessage(
        "El formulario está listo. El envío por correo se activará al publicarlo en cPanel.",
      );
      return;
    }

    setSubmitState("sending");

    try {
      const response = await fetch("/api/contact.php", {
        method: "POST",
        body: new FormData(form),
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) throw new Error(result.message || "No pudimos enviar la consulta.");

      form.reset();
      setSubmitState("success");
      setMessage("¡Gracias! Recibimos tu consulta y te contactaremos pronto.");
    } catch (error) {
      setSubmitState("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "No pudimos enviar la consulta. Intentá nuevamente.",
      );
    }
  };

  const isSending = submitState === "sending";

  if (variant === "compact") {
    return (
      <form className="lead-form" onSubmit={handleSubmit}>
        <input className="form-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
        <input type="hidden" name="formVariant" value="compact" />
        <div className="form-row">
          <label>
            <span>Nombre y apellido</span>
            <input type="text" name="name" autoComplete="name" placeholder="Tu nombre" required />
          </label>
          <label>
            <span>Empresa</span>
            <input type="text" name="company" autoComplete="organization" placeholder="Nombre de la empresa" required />
          </label>
        </div>
        <label>
          <span>Email o teléfono</span>
          <input type="text" name="contact" placeholder="Cómo podemos contactarte" required />
        </label>
        <label>
          <span>¿Qué tipo de personal necesitás?</span>
          <select name="service" defaultValue="" required>
            <option value="" disabled>Seleccioná una opción</option>
            <option value="temporary">Personal temporal</option>
            <option value="recruitment">Personal permanente</option>
            <option value="outsourcing">Personal tercerizado</option>
            <option value="advice">Otra necesidad</option>
          </select>
        </label>
        <button className="form-submit" type="submit" disabled={isSending}>
          {isSending ? "Enviando…" : "Recibir asesoramiento"}
          <span aria-hidden="true">→</span>
        </button>
        {message ? (
          <p className={`form-feedback is-${submitState}`} role="status">{message}</p>
        ) : (
          <p className="form-note">Te contactamos para entender tu necesidad. Sin compromiso.</p>
        )}
      </form>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input className="form-honeypot" type="text" name="website" tabIndex={-1} autoComplete="off" />
      <input type="hidden" name="formVariant" value="full" />
      <div className="contact-form-row">
        <label>
          <span>Nombre y apellido</span>
          <input type="text" name="name" autoComplete="name" placeholder="Tu nombre" required />
        </label>
        <label>
          <span>Empresa</span>
          <input type="text" name="company" autoComplete="organization" placeholder="Nombre de la empresa" required />
        </label>
      </div>
      <div className="contact-form-row">
        <label>
          <span>Email</span>
          <input type="email" name="email" autoComplete="email" placeholder="nombre@empresa.com" required />
        </label>
        <label>
          <span>Teléfono</span>
          <input type="tel" name="phone" autoComplete="tel" placeholder="Tu número de contacto" />
        </label>
      </div>
      <label>
        <span>¿Qué solución necesitás?</span>
        <select name="service" defaultValue="" required>
          <option value="" disabled>Seleccioná una opción</option>
          {serviceOptions.map(([value, label]) => <option key={value} value={value}>{label}</option>)}
        </select>
      </label>
      <label>
        <span>Contanos brevemente tu necesidad</span>
        <textarea name="message" rows={4} maxLength={2000} placeholder="Tipo de perfil, cantidad de personas, horarios o cualquier información que consideres importante." />
      </label>
      <button className="contact-submit" type="submit" disabled={isSending}>
        {isSending ? "Enviando consulta…" : "Enviar consulta"}
        <span aria-hidden="true">→</span>
      </button>
      {message ? (
        <p className={`form-feedback is-${submitState}`} role="status">{message}</p>
      ) : (
        <p className="contact-note">Utilizaremos tus datos únicamente para responder esta consulta.</p>
      )}
    </form>
  );
}

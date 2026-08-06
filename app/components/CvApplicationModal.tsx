"use client";

import {
  ChangeEvent,
  FormEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";

const MAX_WORDS = 250;
const MAX_FILE_SIZE = 5 * 1024 * 1024;
type SubmitState = "idle" | "sending" | "success" | "error" | "preview";

function countWords(value: string) {
  return value.trim() ? value.trim().split(/\s+/).length : 0;
}

export function CvApplicationModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [motivation, setMotivation] = useState("");
  const [cvFile, setCvFile] = useState<File | null>(null);
  const [fileError, setFileError] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const dialogRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const wordCount = countWords(motivation);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [isOpen]);

  const handleMotivationChange = (
    event: ChangeEvent<HTMLTextAreaElement>,
  ) => {
    const nextValue = event.target.value;

    if (countWords(nextValue) <= MAX_WORDS) {
      setMotivation(nextValue);
      setFormMessage("");
    }
  };

  const handleFile = (file?: File) => {
    setFileError("");
    setFormMessage("");

    if (!file) return;

    if (file.type !== "application/pdf") {
      setCvFile(null);
      setFileError("El archivo debe estar en formato PDF.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      setCvFile(null);
      setFileError("El archivo no puede superar los 5 MB.");
      return;
    }

    setCvFile(file);
  };

  const removeFile = () => {
    setCvFile(null);
    setFileError("");
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!cvFile) {
      setFileError("Adjuntá tu CV en formato PDF para continuar.");
      return;
    }

    if (!["staff.com.py", "www.staff.com.py"].includes(window.location.hostname)) {
      setSubmitState("preview");
      setFormMessage(
        "La postulación está lista. El envío por correo se activará al publicar el sitio en cPanel.",
      );
      return;
    }

    setSubmitState("sending");
    setFormMessage("");

    try {
      const formData = new FormData(form);
      formData.set("cv", cvFile, cvFile.name);
      const response = await fetch("/api/application.php", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      const result = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(result.message || "No pudimos enviar tu postulación.");
      }

      form.reset();
      setMotivation("");
      setCvFile(null);
      setSubmitState("success");
      setFormMessage("¡Postulación enviada! Recibimos tus datos y tu CV correctamente.");
    } catch (error) {
      setSubmitState("error");
      setFormMessage(
        error instanceof Error
          ? error.message
          : "No pudimos enviar tu postulación. Intentá nuevamente.",
      );
    }
  };

  return (
    <>
      <button
        className="cv-button"
        type="button"
        onClick={() => setIsOpen(true)}
      >
        Enviar mi CV
        <span aria-hidden="true">→</span>
      </button>
      <small>Completá tus datos y adjuntá tu CV en formato PDF.</small>

      {isOpen &&
        createPortal(
          <div
            className="cv-modal-backdrop"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) setIsOpen(false);
            }}
          >
            <div
              ref={dialogRef}
              className="cv-modal"
              role="dialog"
              aria-modal="true"
              aria-labelledby={titleId}
              aria-describedby={descriptionId}
              tabIndex={-1}
            >
              <div className="cv-modal-header">
                <div>
                  <span>Postulaciones y CV</span>
                  <h2 id={titleId}>Contanos sobre vos</h2>
                  <p id={descriptionId}>
                    Completá tus datos y adjuntá tu CV en formato PDF. Tu
                    postulación será dirigida al equipo de selección de Staff
                    Point.
                  </p>
                </div>
                <button
                  className="cv-modal-close"
                  type="button"
                  aria-label="Cerrar formulario de postulación"
                  onClick={() => setIsOpen(false)}
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>

            <form className="cv-form" onSubmit={handleSubmit}>
                <input
                  className="form-honeypot"
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="cv-form-row">
                  <label>
                    <span>Nombre completo</span>
                    <input
                      type="text"
                      name="applicantName"
                      autoComplete="name"
                      placeholder="Tu nombre y apellido"
                      required
                    />
                  </label>

                  <label>
                    <span>Número de teléfono</span>
                    <input
                      type="tel"
                      name="applicantPhone"
                      autoComplete="tel"
                      placeholder="Tu número de contacto"
                      required
                    />
                  </label>
                </div>

                <label>
                  <span>Correo electrónico</span>
                  <input
                    type="email"
                    name="applicantEmail"
                    autoComplete="email"
                    placeholder="nombre@correo.com"
                    required
                  />
                </label>

                <label>
                  <span>Contanos brevemente sobre vos</span>
                  <textarea
                    name="applicantMotivation"
                    rows={5}
                    value={motivation}
                    onChange={handleMotivationChange}
                    placeholder="Tu experiencia, intereses y qué tipo de oportunidad estás buscando."
                    required
                  />
                  <small className="cv-word-count" aria-live="polite">
                    {wordCount} / {MAX_WORDS} palabras
                  </small>
                </label>

                <div className="cv-upload-group">
                  <span className="cv-field-label">Currículum</span>
                  {!cvFile ? (
                    <label
                      className={
                        fileError ? "cv-dropzone has-error" : "cv-dropzone"
                      }
                      onDragOver={(event) => event.preventDefault()}
                      onDrop={(event) => {
                        event.preventDefault();
                        handleFile(event.dataTransfer.files[0]);
                      }}
                    >
                      <input
                        ref={fileInputRef}
                        type="file"
                        name="applicantCv"
                        accept="application/pdf,.pdf"
                        onChange={(event) =>
                          handleFile(event.target.files?.[0])
                        }
                      />
                      <span className="cv-upload-icon" aria-hidden="true">
                        PDF
                      </span>
                      <strong>Arrastrá tu CV o seleccioná un archivo</strong>
                      <small>Únicamente PDF · Tamaño máximo 5 MB</small>
                    </label>
                  ) : (
                    <div className="cv-file">
                      <span className="cv-file-icon" aria-hidden="true">
                        PDF
                      </span>
                      <div>
                        <strong>{cvFile.name}</strong>
                        <small>
                          {(cvFile.size / 1024 / 1024).toFixed(2)} MB
                        </small>
                      </div>
                      <button type="button" onClick={removeFile}>
                        Quitar
                      </button>
                    </div>
                  )}
                  {fileError && (
                    <small className="cv-field-error" role="alert">
                      {fileError}
                    </small>
                  )}
                </div>

                <label className="cv-consent">
                  <input type="checkbox" name="applicantConsent" required />
                  <span>
                    Autorizo a Staff Point a utilizar mis datos y mi CV para
                    procesos de selección actuales o futuros.
                  </span>
                </label>

                <button
                  className="cv-submit"
                  type="submit"
                  disabled={submitState === "sending"}
                >
                  {submitState === "sending" ? "Enviando postulación…" : "Enviar postulación"}
                  <span aria-hidden="true">→</span>
                </button>

                {formMessage ? (
                  <p className={`cv-form-message is-${submitState}`} role="status">
                    {formMessage}
                  </p>
                ) : (
                  <p className="cv-form-note">
                    Tus datos serán utilizados únicamente para procesos de selección.
                  </p>
                )}
              </form>
            </div>
          </div>,
          document.body,
        )}
    </>
  );
}

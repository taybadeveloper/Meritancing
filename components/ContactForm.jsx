"use client";

import { useEffect, useRef, useState } from "react";
import intlTelInput from "intl-tel-input/intlTelInputWithUtils";
import "intl-tel-input/dist/css/intlTelInput.css";

export default function ContactForm() {
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);
  const phoneRef = useRef(null);
  const itiRef = useRef(null);

  useEffect(() => {
    if (!phoneRef.current || itiRef.current) return;

    itiRef.current = intlTelInput(phoneRef.current, {
      initialCountry: "pk",
      separateDialCode: true,
      placeholderNumberPolicy: "AGGRESSIVE",
    });

    return () => {
      if (itiRef.current) {
        itiRef.current.destroy();
        itiRef.current = null;
      }
    };
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    const fd = new FormData(form);
    const phone = itiRef.current?.getNumber() || "";

    if (!phone) {
      setStatus({
        type: "error",
        message: "Please enter a valid phone number.",
      });
      return;
    }

    setLoading(true);
    setStatus({ type: null, message: "" });

    const data = {
      firstName: fd.get("firstName"),
      lastName: fd.get("lastName"),
      email: fd.get("email"),
      phone,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await res.json();

      if (res.ok && result.status === "success") {
        setStatus({
          type: "success",
          message:
            "Thank you! Your message has been sent. Our team will contact you soon.",
        });
        form.reset();
      } else {
        setStatus({
          type: "error",
          message:
            result.message || "Something went wrong. Please try again.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Network error. Please try again.",
      });
    }

    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-field">
        <label className="form-label" htmlFor="firstName">
          First Name
        </label>
        <input
          className="form-input"
          type="text"
          id="firstName"
          name="firstName"
          placeholder="John"
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="lastName">
          Last Name
        </label>
        <input
          className="form-input"
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Doe"
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="email">
          Email Address
        </label>
        <input
          className="form-input"
          type="email"
          id="email"
          name="email"
          placeholder="jane@example.com"
          required
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="phone">
          Phone Number
        </label>
        <input
          className="form-input"
          type="tel"
          id="phone"
          required
          ref={phoneRef}
        />
      </div>
      <button type="submit" className="btn btn-primary" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
      </button>
      {status.message && (
        <p className={`form-status ${status.type}`}>{status.message}</p>
      )}
    </form>
  );
}

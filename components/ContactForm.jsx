"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState({ type: null, message: "" });
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    setStatus({ type: null, message: "" });

    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

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
        event.currentTarget.reset();
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
          name="phone"
          placeholder="+65 6000 0000"
          required
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

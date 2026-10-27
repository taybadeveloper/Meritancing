"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <div className="form-field">
        <label className="form-label" htmlFor="name">
          Full Name
        </label>
        <input
          className="form-input"
          type="text"
          id="name"
          name="name"
          placeholder="Jane Doe"
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
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="subject">
          Subject
        </label>
        <input
          className="form-input"
          type="text"
          id="subject"
          name="subject"
          placeholder="How can we help?"
        />
      </div>
      <div className="form-field">
        <label className="form-label" htmlFor="message">
          Message
        </label>
        <textarea
          className="form-input"
          id="message"
          name="message"
          rows="5"
          placeholder="Write your message here..."
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">
        Send Message
      </button>
    </form>
  );
}

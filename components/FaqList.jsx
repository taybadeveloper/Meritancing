"use client";

import { useState } from "react";

export default function FaqList({ faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="faq-list">
      {faqs.map((faq, index) => (
        <details
          key={faq.question}
          open={index === openIndex}
          onToggle={(event) => {
            if (event.currentTarget.open) {
              setOpenIndex(index);
            } else if (openIndex === index) {
              setOpenIndex(-1);
            }
          }}
        >
          <summary>{faq.question}</summary>
          <p>{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

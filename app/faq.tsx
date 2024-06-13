import React from "react";
import { faq } from "./faqSection";

const FAQ = ({
  faq,
  index,
  toggleFAQ,
}: {
  faq: faq;
  index: number;
  toggleFAQ: (index: number) => void;
}) => {
  return (
    <div
      className={"faq " + (faq.open ? "open" : "") + " cursor-pointer "}
      key={index}
      onClick={() => toggleFAQ(index)}
    >
      <div className="faq-question">{faq.question}</div>
      <div className="faq-answer">{faq.answer}</div>
    </div>
  );
};

export default FAQ;

"use client";
import { useState } from "react";
import FaqQuestion from "./faq";

export interface faq {
  question: string;
  answer: string;
  open: boolean;
}

export default function FAQ() {
  const [faqs, setFaqs] = useState([
    {
      question: "What is Files2Sheet?",
      answer:
        "Files2Sheet is a Google Sheet add-on that allows you to import multiple CSV files at once into your spreadsheet.",
      open: false,
    },
    {
      question: "Who is Files2Sheet for?",
      answer:
        "Files2Sheet is designed for anyone who needs to import multiple CSV files into Google Sheet on daily basis. This includes accountants, salespeople, marketing specialists virtual assistants, and anyone else who works with data.",
      open: false,
    },
    {
      question: "How do I install Files2Sheet?",
      answer:
        "To install Files2Sheet, just click the big green button on this page or go to the Google Workspace Marketplace and search for Files2Sheet. Click on the install button and follow the instructions.",
      open: false,
    },
    {
      question: "How many CSV files can I import into Google Sheet at once?",
      answer:
        "There is no limit on how many CSV files you can import into Google Sheet at once. You can import as many files as you want.",
      open: false,
    },
    {
      question: "How much does Files2Sheet cost?",
      answer:
        "Files2Sheet is free to use for 7 days. After that, you'll be opted to choose either montly ($3,99) or yearly ($27,99) subscription.",
      open: false,
    },
    {
      question: "Can I import other file types than CSV files?",
      answer:
        "Currently, Files2Sheet only supports importing CSV files. We are working on adding support for other file types (e.g. .xlsx) in the future.",
      open: false,
    },
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(
      faqs.map((faq: faq, i: number) => {
        if (i === index) {
          faq.open = !faq.open;
        } else {
          faq.open = false;
        }

        return faq;
      })
    );
  };

  return (
    <div className="faqs ">
      {faqs.map((faq: faq, index: number) => (
        <FaqQuestion
          faq={faq}
          index={index}
          key={index}
          toggleFAQ={toggleFAQ}
        />
      ))}
    </div>
  );
}

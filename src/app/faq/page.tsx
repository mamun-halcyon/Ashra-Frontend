"use client";
import QuestionAndAnswer from "@/components/question-ans";
import { API_URL } from "@/constant";
import { IFaq } from "@/types/faq";
import axios from "axios";
import { useEffect, useState } from "react";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";
import "./page.scss";

const Faq = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);
  const [page, setPage] = useState<number>(1);

  const increment = () => {
    if (page >= 1) {
      setPage(page + 1);
    }
  };
  const decrement = () => {
    if (page < 1) {
      setPage(page - 1);
    }
  };
  const handleQuestionToggle = (clickedIndex: number) => {
    const updatedSideLinks = faqs.map((linkItem, index) => ({
      ...linkItem,
      isOpen: index === clickedIndex ? !linkItem.isOpen : false,
    }));

    setFaqs(updatedSideLinks);
  };

  useEffect(() => {
    async function getEmis() {
      try {
        const res = await axios.get(`${API_URL}/faqs?page=${page}`);
        setFaqs(res.data.data.rows);
      } catch (error) {
        setFaqs([]);
      }
    }

    getEmis();
  }, [page]);

  return (
    <section className="faq">
      <div className="container">
        <h2 className=" font-gotham font-medium text-base text-black">
          Questions
        </h2>
        {faqs.length <= 0 && (
          <p className=" font-gotham text-sm mt-2">Faq is Empty</p>
        )}

        <div className="grid grid-cols-1 gap-4 mt-9">
          {faqs.map((faq, index) => (
            <QuestionAndAnswer
              key={index}
              faq={faq}
              onToggle={() => handleQuestionToggle(index)}
            />
          ))}
        </div>
        <div className="flex justify-between">
          <button onClick={decrement}>
            <FaLongArrowAltLeft />
          </button>
          <button onClick={increment}>
            <FaLongArrowAltRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Faq;

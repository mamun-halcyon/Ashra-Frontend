'use client';
import { useEffect, useState } from 'react';
import QuestionAndAnswer from '@/components/question-ans';
import { IFaq } from '@/types/faq';
import './page.scss';
import { API_URL } from '@/constant';
import axios from 'axios';

const Faq = () => {
  const [faqs, setFaqs] = useState<IFaq[]>([]);

  const handleQuestionToggle = (clickedIndex: number) => {
    const updatedSideLinks = faqs.map((linkItem, index) => ({
      ...linkItem,
      isOpen: index === clickedIndex ? !linkItem.isOpen : false,
    }));

    setFaqs(updatedSideLinks);
  };

  useEffect(() => {
    async function getEmis() {
      const res = await axios.get(`${API_URL}/faqs`);
      setFaqs(res.data.data.rows);
    }

    getEmis();
  }, []);

  return (
    <section className="faq">
      <div className="container">
        <h2 className=" font-gotham font-medium text-base text-black">
          Questions
        </h2>

        <div className="grid grid-cols-1 gap-4 mt-9">
          {faqs.map((faq, index) => (
            <QuestionAndAnswer
              key={index}
              faq={faq}
              onToggle={() => handleQuestionToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;

import { IFaq } from '@/types/faq';
import { IoIosArrowDown } from 'react-icons/io';
import { FC } from 'react';
import './index.scss';

interface IProps {
  faq: IFaq;
  onToggle: () => void;
}

const QuestionAndAnswer: FC<IProps> = ({ faq, onToggle }) => {
  return (
    <div className="question mb-2">
      <div
        onClick={onToggle}
        className={`flex items-center justify-between cursor-pointer title px-3 py-3 ${
          faq.isOpen && 'open'
        }`}
      >
        <h3 className={` font-gotham font-normal text-black`}>
          {faq.question}
        </h3>
        <IoIosArrowDown className="icon text-black" />
      </div>
      {faq.isOpen && (
        <p className={`answer px-3 py-5 font-gotham text-sm`}>{faq.answer}</p>
      )}
    </div>
  );
};

export default QuestionAndAnswer;

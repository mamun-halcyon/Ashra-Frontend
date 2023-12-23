import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import './index.scss';
import Link from 'next/link';

type IProps = {
  handleShare: () => void;
};

const SharePopUp: React.FC<IProps> = ({ handleShare }) => {
  return (
    <div className="share-popup shadow">
      <div className="w-full">
        <div
          className="flex justify-end mr-4 mb-2 cursor-pointer"
          onClick={handleShare}
        >
          <RxCross2 />
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="media">
          <Link href={'/'}>
            <FaFacebookF />
          </Link>
        </div>
        <div className="media">
          <Link href={'/'}>
            <FaWhatsapp />
          </Link>
        </div>
        <div className="media">
          <Link href={'/'}>
            <FaInstagram />
          </Link>
        </div>
        <div className="media">
          <Link href={'/'}>
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SharePopUp;

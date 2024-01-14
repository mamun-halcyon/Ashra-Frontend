import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import { RxCross2 } from 'react-icons/rx';
import './index.scss';
import Link from 'next/link';

const SharePopUp: React.FC = () => {
  return (
    <div className="share-popup shadow">
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

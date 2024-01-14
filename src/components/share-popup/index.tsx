import React from 'react';
import { FaFacebookF } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaInstagram, FaTwitter } from 'react-icons/fa6';
import { FaLinkedinIn } from 'react-icons/fa6';
import './index.scss';
import Link from 'next/link';

type IProps = {
  slug: string;
};
const SharePopUp: React.FC<IProps> = ({ slug }) => {
  return (
    <div className="share-popup shadow">
      <div className="flex justify-center items-center">
        <div className="media">
          <Link
            href={`https://web.facebook.com/sharer/sharer.php?u=${`${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`}`}
            target="_blank"
          >
            <FaFacebookF />
          </Link>
        </div>
        <div className="media">
          <Link
            href={`whatsapp://send/?text=${encodeURIComponent(
              `${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`
            )}`}
          >
            <FaWhatsapp />
          </Link>
        </div>
        <div className="media">
          <Link
            href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
              `${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`
            )}`}
            target="_blank"
          >
            <FaTwitter />
          </Link>
        </div>
        <div className="media">
          <Link
            href={`https://linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
              `${process.env.NEXT_PUBLIC_DOMAIN}/${slug}`
            )}`}
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SharePopUp;

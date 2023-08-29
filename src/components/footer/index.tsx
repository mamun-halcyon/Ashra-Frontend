import Image from 'next/image';
import './index.scss';
import Link from 'next/link';
import { applianceData, customerServiceData } from '@/static/footerData';
import { GrLocation } from 'react-icons/gr';
import { PiEnvelopeThin } from 'react-icons/pi';
import { BsHeadphones } from 'react-icons/bs';

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="grid grid-cols-3 gap-12">
          <div className="basic-info">
            <Image
              className=" mb-5"
              src={'/assets/images/logo/Logo.png'}
              width={154}
              height={80}
              alt="gazi group logo"
            />
            <div className="flex items-start mb-3">
              <span className="mr-4">
                <GrLocation className=" w-5 h-5 text-black mt-1" />
              </span>
              <p className=" font-gotham font-normal text-base text-black ">
                37/2, Pritom Zaman Tower, Bir Protik Gazi Dastagir Road, Dhaka
                1000
              </p>
            </div>
            <div className="flex mb-3">
              <span className="mr-4">
                <BsHeadphones className=" w-5 h-5 text-black mt-1" />
              </span>
              <p className=" font-gotham font-normal text-base text-black">
                +880 1766 688820
              </p>
            </div>
            <div className="flex">
              <span className="mr-4">
                <PiEnvelopeThin className=" w-5 h-5 text-black mt-1" />
              </span>
              <p className=" font-gotham font-normal text-base text-black">
                info@gazihomeappliance.com
              </p>
            </div>
          </div>
          <div>
            <div className="w-[60%] mx-auto">
              <h3 className="font-gotham font-bold text-base text-black mb-4">
                {customerServiceData.title}
              </h3>
              <ul className=" mx-auto">
                {customerServiceData.items.map((item, index) => (
                  <li
                    className="font-gotham font-normal text-base text-black mb-1"
                    key={index}
                  >
                    <Link href={item.href}> {item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="w-[60%] mx-auto">
              <h3 className="font-gotham font-bold text-base text-black mb-4">
                {applianceData.title}
              </h3>
              <ul className="mx-auto">
                {customerServiceData.items.map((item, index) => (
                  <li
                    className="font-gotham font-normal text-base text-black mb-1"
                    key={index}
                  >
                    <Link href={item.href}> {item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-7">
          <div>
            <p className=" font-gotham font-normal text-base text-black mb-2 ">
              Download our Mobile Apps
            </p>
            <div className="flex">
              <Image
                className="mr-2 download-apps"
                src="/assets/images/service/playstore.png"
                alt="app-store"
                width={500}
                height={45}
              />
              <Image
                className="download-apps"
                src="/assets/images/service/appstore.png"
                alt="app-store"
                width={500}
                height={45}
              />
            </div>
          </div>
          <div>
            <p className=" font-gotham font-normal text-base text-black mb-2">
              Follow Us
            </p>
            <div className="flex">
              <Link href={'https://www.facebook.com'} target="_blank">
                <Image
                  className=" rounded w-8 h-8 mx-1"
                  src="/assets/images/icon/facebook.png"
                  width={20}
                  height={20}
                  alt="social-icon"
                />
              </Link>
              <Link href={'/'} target="_blank">
                <Image
                  className=" rounded w-8 h-8 mx-1"
                  src="/assets/images/icon/instagram.png"
                  width={20}
                  height={20}
                  alt="social-icon"
                />
              </Link>
              <Link href={'/'} target="_blank">
                <Image
                  className=" rounded w-8 h-8 mx-1"
                  src="/assets/images/icon/linkedin.png"
                  width={20}
                  height={20}
                  alt="social-icon"
                />
              </Link>
              <Link href={'/'} target="_blank">
                <Image
                  className=" rounded w-8 h-8 mx-1"
                  src="/assets/images/icon/youtube.png"
                  width={20}
                  height={20}
                  alt="social-icon"
                />
              </Link>
            </div>
          </div>
          <div className="flex items-end">
            <form className="relative inline-block subscribe-form">
              <input
                type="email"
                className="px-3 py-2 border-b-2  focus:ring-0 focus:border-blue-500 outline-none placeholder:font-gotham  placeholder:font-light placeholder:text-base"
                placeholder="Enter your email..."
              />
              <span className=" absolute top-[50%] translate-y-[-50%] right-0">
                <PiEnvelopeThin className="subscribe-icon w-5 h-5" />
              </span>
            </form>
          </div>
        </div>
      </div>
      <div className=" mt-12 py-2 bg-primary">
        <div className="container">
          <div className="flex justify-between items-center">
            <div>
              <h4 className=" font-gotham font-normal text-sm text-white">
                © 2022-2023 | Gazi Home Appliance - A Concern of Gazi Group
              </h4>
            </div>
            <div>
              <Image
                className=" h-6 bottom-image"
                src={'/assets/images/footer/payment.png'}
                width={400}
                height={50}
                alt="payment"
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Image from 'next/image';
import './index.scss';
import Link from 'next/link';
import { applianceData } from '@/static/footerData';
import { FaLocationDot } from 'react-icons/fa6';
import { PiEnvelopeThin } from 'react-icons/pi';
import { BsHeadphones, BsEnvelopeFill } from 'react-icons/bs';
import { HomeApiResponse } from '@/types/home';
import { API_ROOT, API_URL } from '@/constant';
import axios from 'axios';
import { IMenu } from '@/types/menu';

type IProps = {
  globalData: HomeApiResponse;
};

const getMenus = async (slug: string) => {
  const res = await axios.get(`${API_URL}/menus/${slug}`);
  return res.data?.data;
};

const Footer = async ({ globalData }: IProps) => {
  const footerOneData: IMenu[] = await getMenus('footer_one');
  const footerTwoData: IMenu[] = await getMenus('footer_two');

  return (
    <footer>
      <div className="container px-2 md:px-0">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-12">
          <div className="basic-info">
            <Image
              className=" mb-5"
              src={`${API_ROOT}/images/setting/${globalData?.setting?.logo}`}
              width={154}
              height={80}
              alt="gazi group logo"
            />
            <div className="flex items-start mb-3">
              <span className="mr-4">
                <FaLocationDot className=" w-5 h-5 text-black mt-1" />
              </span>
              <p className=" font-gotham font-normal text-sm text-black ">
                {globalData?.setting?.address}
              </p>
            </div>
            <div className="flex mb-3">
              <span className="mr-4">
                <BsHeadphones className=" w-5 h-5 text-black mt-1" />
              </span>
              <p className=" font-gotham font-normal text-sm text-black">
                {globalData?.setting?.contact_number}
              </p>
            </div>
            <div className="flex">
              <span className="mr-4">
                <BsEnvelopeFill className=" w-5 h-5 text-black mt-1" />
              </span>
              <p className=" font-gotham font-normal text-sm text-black">
                {globalData?.setting?.contact_email}
              </p>
            </div>
          </div>
          <div>
            <div className="w-[60%] md:mx-auto">
              <h3 className="font-gotham font-bold text-base text-black mb-4">
                Customer Service
              </h3>
              <ul className=" mx-auto">
                {footerOneData.map((item, index) => (
                  <li
                    className="font-gotham font-normal text-sm text-black mb-1"
                    key={index}
                  >
                    <Link className="link-item" href={item.slug}>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <div className="w-[60%] md:mx-auto">
              <h3 className="font-gotham font-bold text-base text-black mb-4">
                Gazi Home Appliancee
              </h3>
              <ul className="mx-auto">
                {footerTwoData.map((item, index) => (
                  <li
                    className="font-gotham font-normal text-sm text-black mb-1"
                    key={index}
                  >
                    <Link className="link-item" href={item.slug}>
                      {' '}
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-5">
          <div>
            <p className=" font-gotham font-normal text-sm text-black mb-2 ">
              Download our Mobile Apps
            </p>
            <div className="flex">
              <Link href={globalData?.setting?.play_store_url as string}>
                <Image
                  className="mr-2 download-apps"
                  src="/assets/images/service/playstore.png"
                  alt="app-store"
                  width={500}
                  height={45}
                />
              </Link>
              <Link href={globalData?.setting?.app_store_url as string}>
                <Image
                  className="download-apps"
                  src="/assets/images/service/appstore.png"
                  alt="app-store"
                  width={500}
                  height={45}
                />
              </Link>
            </div>
          </div>
          <div>
            <p className=" font-gotham font-normal text-sm text-black mb-2">
              Follow Us
            </p>
            <div className="flex">
              {globalData?.setting?.facebook_url && (
                <Link href={globalData.setting.facebook_url} target="_blank">
                  <Image
                    className=" rounded w-6 h-6 mx-1"
                    src="/assets/images/icon/facebook.png"
                    width={20}
                    height={20}
                    alt="social-icon"
                  />
                </Link>
              )}
              {globalData?.setting?.instagram_url && (
                <Link href={globalData.setting.instagram_url} target="_blank">
                  <Image
                    className=" rounded w-6 h-6 mx-1"
                    src="/assets/images/icon/instagram.png"
                    width={20}
                    height={20}
                    alt="social-icon"
                  />
                </Link>
              )}
              {globalData?.setting?.linkedIn_url && (
                <Link href={globalData.setting.linkedIn_url} target="_blank">
                  <Image
                    className=" rounded w-6 h-6 mx-1"
                    src="/assets/images/icon/linkedin.png"
                    width={20}
                    height={20}
                    alt="social-icon"
                  />
                </Link>
              )}
              {globalData?.setting?.youtube_url && (
                <Link href={"/"} target="_blank">
                  <Image
                    className=" rounded w-6 h-6 mx-1"
                    src="/assets/images/icon/youtube.png"
                    width={20}
                    height={20}
                    alt="social-icon"
                  />
                </Link>
              )}
            </div>
          </div>
          <div className="flex items-end">
            <form className="relative inline-block subscribe-form">
              <input
                type="email"
                className="px-3 py-2 border-b-2  focus:ring-0 focus:border-blue-500 outline-none placeholder:font-gotham  placeholder:font-light placeholder:text-sm"
                placeholder="Enter your email..."
              />
              <span className=" absolute top-[50%] translate-y-[-50%] right-0">
                <PiEnvelopeThin className="subscribe-icon w-5 h-5" />
              </span>
            </form>
          </div>
        </div> */}
      </div>
      <div className=" mt-10 py-2 bg-primary">
        <div className="container px-2 md:px-0">
          <div className="flex justify-between items-center gap-2">
            <div>
              <h4 className=" font-gotham font-light text-[10px] md:text-xs text-white">
                © 2022-2023 | Gazi Home Appliance - A Concern of Gazi Group
              </h4>
            </div>
            <div className="w-[60%] md:w-auto">
              <Image
                className=" md:h-6 bottom-image "
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

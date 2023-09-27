import React from 'react';
import './page.scss';
import Image from 'next/image';
import Link from 'next/link';

const Profile = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className=" col-span-3 shadow pb-6">
            <div className="relative profile-top">
              <div className="bg-primary h-28">
                <div className=" absolute bottom-0 left-[50%] rounded-full p-4 w-24 h-24 bg-white flex justify-center items-center translate-y-[50%] translate-x-[-50%]">
                  <Image
                    className="w-full"
                    src={'/assets/images/icon/profile.png'}
                    width={200}
                    height={200}
                    alt="profile"
                  />
                </div>
              </div>
            </div>
            <div className="mt-16 text-center px-10">
              <h3 className=" font-gotham font-medium text-sm text-black">
                Profile Name
              </h3>
              <p className=" font-gotham font-normal text-sm text-black bg-secondary mt-1">
                email@gmail.com
              </p>

              <ul className="mt-12">
                <li>
                  <Link
                    className="font-gotham font-normal text-sm text-black mt-1"
                    href={'/'}
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-gotham font-normal text-sm text-black mt-1"
                    href={'/'}
                  >
                    Purchase History
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-gotham font-normal text-sm text-black mt-1"
                    href={'/'}
                  >
                    Downloads
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-gotham font-normal text-sm text-black mt-1"
                    href={'/'}
                  >
                    Refund Requested
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-gotham font-normal text-sm text-black mt-1"
                    href={'/'}
                  >
                    Support Ticket
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-gotham font-normal text-sm text-black mt-1"
                    href={'/'}
                  >
                    Manage Profile
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className=" col-span-9">2</div>
        </div>
      </div>
    </section>
  );
};

export default Profile;

'use client';
import ProfileSidebar from '@/components/profile-sidebar';
import '../page.scss';
import './page.scss';
import React, { useEffect, useState } from 'react';
import FormGroup from '@/components/fromgroup';
import Button from '@/components/button';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/redux/hooks';
import axios from 'axios';
import { API_URL } from '@/constant';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
  const route = useRouter();
  const { login } = useAppSelector((state) => state.login);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [mobile, setMobile] = useState<string>('');
  const [city, setCity] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [address, setAddress] = useState<string>('');
  const [image, setImage] = useState<File | null>(null);

  useEffect(() => {
    if (login?.accessToken) {
      setIsLoggedIn(true);
    } else {
      route.push('/login');
    }
  }, [login]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      name.trim() !== '' &&
      mobile.trim() !== '' &&
      city.trim() !== '' &&
      password !== '' &&
      confirmPassword !== '' &&
      address.trim() !== '' &&
      image
    ) {
      if (password === confirmPassword) {
        try {
          const formData = new FormData();

          formData.append('name', name);
          formData.append('mobile', mobile);
          formData.append('city', city);
          formData.append('password', password);
          formData.append('address', address);
          formData.append('image', image);
          formData.append('upload_preset', 'w8omhp4w');

          const response = await axios.patch(
            `${API_URL}/users/${login?.user?.id}`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${login?.accessToken}`,
              },
            }
          );
          if (response?.status === 200) {
            toast.success('Profile Updated Successful!');
          }
          console.log('response : ', response);
        } catch (error) {
          console.log(error);
          toast.error('Profile Update Error!');
        }
      }
    }
  };

  return (
    <>
      {isLoggedIn ? (
        <section className="profile">
          <div className="container">
            <div className="grid grid-cols-12 gap-6">
              <ProfileSidebar />
              <div className=" col-span-9">
                <div className="main-area p-4">
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-4">
                      <FormGroup
                        title="Your Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                      <FormGroup
                        title="Mobile Number"
                        value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                      />
                      <FormGroup
                        title="Photo"
                        type="file"
                        onChange={(e: any) => setImage(e.target.files[0])}
                      />
                      <FormGroup
                        title="City"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                      />
                      <FormGroup
                        title="Your Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <FormGroup
                        title="Confirm Password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                      />
                    </div>
                    <FormGroup
                      title="Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                    <Button
                      type="submit"
                      className="px-2 py-1 font-gotham text-sm font-normal mt-4"
                    >
                      Update Profile →
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default UpdateProfile;

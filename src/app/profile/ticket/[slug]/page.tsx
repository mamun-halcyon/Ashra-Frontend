import Button from '@/components/button';
import FormGroup from '@/components/fromgroup';
import ProfileSidebar from '@/components/profile-sidebar';
import React from 'react';

const ViewTicket = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <ProfileSidebar />
          <div className=" col-span-9">
            <form className="w-[450px] mx-auto">
              <FormGroup
                className="mt-2 "
                type="email"
                title="Subject*"
                placeholder="subject"
                required
              />

              <textarea
                className="border border-secondary mt-3 w-full p-2 font-gotham text-xs outline-none min-h-[100px]"
                placeholder="Your replay"
              ></textarea>

              <FormGroup
                className="mt-2 "
                type="file"
                title="photo"
                placeholder="Photo"
                required
              />
              <Button className="mt-2 px-3 py-1 font-gotham text-xs">
                Replay
              </Button>
            </form>
            <div>Message Here</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ViewTicket;

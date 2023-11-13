import ProfileSidebar from '@/components/profile-sidebar';
import '../page.scss';
import { LiaDownloadSolid, LiaEye } from 'react-icons/lia';
import './page.scss';

const OrderHistory = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <ProfileSidebar />
          <div className="overflow-x-scroll md:overflow-x-visible md:col-span-9 col-span-12">
            <div className="order-table">
              <table className="w-full text-sm text-left ">
                <thead>
                  <tr className="table-heading">
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-medium"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-medium"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-medium"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-medium"
                    >
                      Delivery Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-medium"
                    >
                      Payment Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-medium"
                    >
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {[...Array(7)].map((item, index) => (
                    <tr
                      key={index}
                      className=" font-normal font-gotham text-sm table-border"
                    >
                      <td scope="row" className="px-6 py-4  ">
                        20230927-12584942
                      </td>
                      <td className="px-6 py-4">27-09-2023</td>
                      <td className="px-6 py-4"> ৳17,280.00</td>
                      <td className="px-6 py-4">Delivered</td>
                      <td className="px-6 py-4">Paid</td>
                      <td className="px-6 py-2">
                        <div className="flex justify-center info-icons">
                          <LiaEye className="mr-1 cursor-pointer" />
                          <LiaDownloadSolid className="cursor-pointer" />
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderHistory;

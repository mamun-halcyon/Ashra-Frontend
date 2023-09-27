import ProfileSidebar from '@/components/profile-sidebar';
import '../page.scss';

const OrderHistory = () => {
  return (
    <section className="profile">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <ProfileSidebar />
          <div className=" col-span-9">
            <div className="shadow">
              <table className="w-full text-sm text-left ">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-normal"
                    >
                      Code
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-normal"
                    >
                      Date
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-normal"
                    >
                      Amount
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-normal"
                    >
                      Delivery Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-normal"
                    >
                      Payment Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 font-gotham font-normal"
                    >
                      Options
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                    >
                      Code
                    </th>
                    <td className="px-6 py-4">Date</td>
                    <td className="px-6 py-4">Amount</td>
                    <td className="px-6 py-4">Delivery Status</td>
                    <td className="px-6 py-4">Payment Status</td>
                  </tr>
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

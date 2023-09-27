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
              <table className="table-fixed">
                <tbody>
                  <tr>
                    <th>Code</th>
                    <th>Date</th>
                    <th>Amount</th>
                    <th>Delivery Status</th>
                    <th>Payment Status</th>
                    <th>Payment Status</th>
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

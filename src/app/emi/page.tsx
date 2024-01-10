import { API_URL } from '@/constant';
import './page.scss';

async function getEmis() {
  const res = await fetch(`${API_URL}/emis`, {
     cache: 'no-store',
  });

 /*  if (!res.ok) {
    throw new Error('Failed to fetch data');
  } */

  return res.json();
}

async function Emi() {
  const emisData: IEmiResponse = await getEmis();
  return (
    <section className="emi">
      <div className="container md:overflow-x-auto overflow-x-scroll">
        <table className="w-full text-sm text-left">
          <thead>
            <tr className="table-heading">
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                Bank Name
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                3 Month
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                6 Month
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                9 Month
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                12 Month
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                18 Month
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                24 Month
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                30 Month
              </th>
              <th scope="col" className="px-6 py-3 font-gotham font-medium">
                36 Month
              </th>
            </tr>
          </thead>
          <tbody>
            {emisData?.data.rows.map((emi, index) => (
              <tr className="table-border" key={index}>
                <td scope="row " className="px-6 py-3 font-gotham font-light">
                  {emi.bank_name}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.three_months ? 'Yes' : 'No'}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.six_months ? 'Yes' : 'No'}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.nine_months ? 'Yes' : 'No'}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.twelve_months ? 'Yes' : 'No'}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.eighteen_months ? 'Yes' : 'No'}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.twenty_four_months ? 'Yes' : 'No'}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.thirty_months ? 'Yes' : 'No'}
                </td>
                <td scope="row" className="px-6 py-3 font-gotham font-light">
                  {emi.thirty_six_months ? 'Yes' : 'No'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

export default Emi;

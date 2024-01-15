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
        <table className="w-full text-sm text-left emi-table shadow">
          <thead>
            <tr className="table-heading">
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                Bank Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                3 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                6 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                9 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                12 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                18 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                24 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                30 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border border-color"
              >
                36 Month
              </th>
            </tr>
          </thead>
          <tbody>
            {emisData?.data.rows.map((emi, index) => (
              <tr className="table-border" key={index}>
                <td
                  scope="row "
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.bank_name}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.three_months ? 'Yes' : 'No'}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.six_months ? 'Yes' : 'No'}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.nine_months ? 'Yes' : 'No'}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.twelve_months ? 'Yes' : 'No'}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.eighteen_months ? 'Yes' : 'No'}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.twenty_four_months ? 'Yes' : 'No'}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
                  {emi.thirty_months ? 'Yes' : 'No'}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border border-color"
                >
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

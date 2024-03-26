import { API_URL } from "@/constant";
import "./page.scss";
import ServerPagination from "@/components/pagination/pagination";

async function getEmis(page: number, limit: number) {
  const res = await fetch(`${API_URL}/emis?page=${page}&limit=${limit}`, {
    next: {
      revalidate: 3600,
    },
  });

  /*  if (!res.ok) {
    throw new Error('Failed to fetch data');
  } */

  return res.json();
}

async function Emi({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams.page === "string" ? Number(searchParams.page) : 1;
  const limit =
    typeof searchParams.limit === "string" ? Number(searchParams.limit) : 12;

  const emisData: IEmiResponse = await getEmis(page, limit);

  return (
    <section className="emi">
      <div className="container md:overflow-x-auto overflow-x-scroll emi-table">
        <table className="w-full text-sm text-left emi-table shadow">
          <thead>
            <tr className="table-heading">
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                Bank Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                3 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                6 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                9 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                12 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                18 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                24 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
              >
                30 Month
              </th>
              <th
                scope="col"
                className="px-6 py-3 font-gotham font-medium border-color"
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
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.bank_name}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.three_months ? "Yes" : "No"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.six_months ? "Yes" : "No"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.nine_months ? "Yes" : "No"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.twelve_months ? "Yes" : "No"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.eighteen_months ? "Yes" : "No"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.twenty_four_months ? "Yes" : "No"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.thirty_months ? "Yes" : "No"}
                </td>
                <td
                  scope="row"
                  className="px-6 py-3 font-gotham font-light border-color"
                >
                  {emi.thirty_six_months ? "Yes" : "No"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="container">
        <ServerPagination
          showTitle={`Show ${limit}`}
          page={page}
          totalPage={Math.ceil((emisData.data?.count || 1) / limit)}
        />
      </div>
    </section>
  );
}

export default Emi;

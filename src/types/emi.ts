interface IEmi {
  id: number;
  bank_name: string;
  three_months: number;
  six_months: number;
  nine_months: number;
  twelve_months: number;
  eighteen_months: number;
  twenty_four_months: number;
  thirty_months: number;
  thirty_six_months: number;
  created_at: string;
  updated_at: string;
}

interface BankData {
  count: number;
  rows: IEmi[];
}

interface IEmiResponse {
  data: BankData;
}

export interface ExpenseByCategory {
  salaries: number;
  services: number;
  supplies: number;
}

export interface Month {
  id: string;
  expenses: number;
  month: string;
  operationalExpenses: number;
  nonOperationalExpenses: number;
  revenue: number;
  _id: string;
}

export interface Day {
  id: string;
  expenses: number;
  date: string;
  revenue: number;
  _id: string;
}

export interface GetKpisResponse {
  id: string;
  _id: string;
  __v: number;
  totalExpenses: number;
  totalRevenue: number;
  totalProfit: number;
  expenseByCategory: ExpenseByCategory;
  monthlyData: Array<Month>;
  dailyData: Array<Day>;
}

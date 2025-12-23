export interface Transaction {
  date: string;
  description: string;
  category: string;
  amount: number;
}

export interface SummaryItem {
  month: string;
  amount: number;
}

export interface TransactionsTableProps {
  transactions: Transaction[];
  summary: SummaryItem[];
  onDelete?: (index: number) => void;
}
